'use client';

import React, { useState, useEffect } from 'react';
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { useCollection, useMemoFirebase, useUser } from '@/firebase';
import { collection, query, orderBy, doc } from 'firebase/firestore';
import { useFirestore, useAuth } from '@/firebase';
import { 
  updateDocumentNonBlocking, 
  deleteDocumentNonBlocking 
} from '@/firebase/non-blocking-updates';
import { initiateAnonymousSignIn } from '@/firebase/non-blocking-login';
import { format, isValid } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { 
  Loader2, 
  Inbox, 
  Phone, 
  Clock, 
  MoreVertical,
  Trash2,
  AlertCircle,
  ShieldCheck,
  Copy
} from 'lucide-react';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";

export default function AdminPage() {
  const db = useFirestore();
  const auth = useAuth();
  const { user, isUserLoading } = useUser();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    if (!isUserLoading && !user && auth) {
      initiateAnonymousSignIn(auth);
    }
  }, [user, isUserLoading, auth]);

  const quoteRequestsQuery = useMemoFirebase(() => {
    if (!db) return null;
    return query(collection(db, 'quoteRequests'), orderBy('requestDate', 'desc'));
  }, [db]);

  const { data: requests, isLoading, error } = useCollection(quoteRequestsQuery);

  const handleUpdateStatus = (id: string, newStatus: string) => {
    if (!db) return;
    const docRef = doc(db, 'quoteRequests', id);
    updateDocumentNonBlocking(docRef, { status: newStatus });
    toast({ title: "Status atualizado", description: `Lead marcado como ${newStatus}` });
  };

  const handleDelete = (id: string) => {
    if (!db) return;
    if (confirm('Remover este lead permanentemente?')) {
      const docRef = doc(db, 'quoteRequests', id);
      deleteDocumentNonBlocking(docRef);
      toast({ title: "Lead removido", variant: "destructive" });
    }
  };

  const copyUid = () => {
    if (user?.uid) {
      navigator.clipboard.writeText(user.uid);
      toast({ title: "ID copiado!", description: "Agora cole no seu console Firebase." });
    }
  };

  const formatDateSafely = (dateStr: string | undefined) => {
    if (!dateStr) return 'N/A';
    try {
      const date = new Date(dateStr);
      return isValid(date) ? format(date, "dd/MM HH:mm", { locale: ptBR }) : 'Data Inválida';
    } catch (e) {
      return 'Erro data';
    }
  };

  if (!isMounted) return null;

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12 max-w-7xl">
        <div className="mb-12">
          <h1 className="text-4xl font-black uppercase tracking-tighter">
            Painel de <span className="text-primary">Gestão</span>
          </h1>
          <p className="text-muted-foreground font-bold mt-2 italic">Acompanhamento de leads em tempo real.</p>
        </div>

        {error ? (
          <div className="bg-white/5 border border-primary/20 rounded-[2rem] p-8 md:p-12 text-center space-y-8">
            <div className="h-20 w-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <ShieldCheck className="h-10 w-10 text-primary" />
            </div>
            <div className="max-w-2xl mx-auto space-y-4">
              <h2 className="text-2xl font-black uppercase">Acesso Restrito ao Banco de Dados</h2>
              <p className="text-muted-foreground leading-relaxed">
                Para visualizar os orçamentos, seu ID de usuário precisa estar na lista de administradores no Firebase Console.
              </p>
              
              <div className="bg-background border border-white/10 p-4 rounded-xl flex items-center justify-between gap-4 max-w-md mx-auto">
                <code className="text-xs font-mono text-primary truncate">{user?.uid || 'Carregando ID...'}</code>
                <Button variant="ghost" size="sm" onClick={copyUid} className="shrink-0">
                  <Copy className="h-4 w-4 mr-2" /> Copiar ID
                </Button>
              </div>

              <div className="text-left bg-white/5 p-6 rounded-2xl space-y-3 mt-8">
                <p className="font-bold text-sm uppercase text-primary">Como liberar seu acesso:</p>
                <ol className="text-xs text-muted-foreground space-y-2 list-decimal pl-4 leading-relaxed">
                  <li>Acesse o <b>Firebase Console</b> do seu projeto.</li>
                  <li>Vá em <b>Firestore Database</b>.</li>
                  <li>Crie uma coleção chamada <code>roles_admin</code>.</li>
                  <li>Crie um documento com o ID igual ao seu <b>ID copiado acima</b>.</li>
                  <li>Pronto! Recarregue esta página.</li>
                </ol>
              </div>
            </div>
          </div>
        ) : isLoading ? (
          <div className="flex flex-col items-center justify-center py-32 gap-4">
            <Loader2 className="h-12 w-12 animate-spin text-primary" />
            <p className="text-xs font-black uppercase tracking-widest text-muted-foreground">Sincronizando Leads...</p>
          </div>
        ) : !requests || requests.length === 0 ? (
          <div className="border-2 border-dashed border-white/10 rounded-[3rem] py-32 text-center">
             <Inbox className="h-16 w-16 text-white/10 mx-auto mb-6" />
             <h3 className="text-xl font-black uppercase">Nenhum orçamento recebido</h3>
             <p className="text-muted-foreground">As solicitações feitas no formulário aparecerão aqui.</p>
          </div>
        ) : (
          <div className="grid gap-6">
            {requests.map((req) => (
              <div key={req.id} className="bg-white/5 border border-white/5 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start justify-between hover:border-primary/20 transition-all">
                <div className="space-y-4 flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <Badge className={req.status === 'New' ? 'bg-primary' : 'bg-secondary'}>
                      {req.status === 'New' ? 'NOVO' : req.status}
                    </Badge>
                    <span className="text-[10px] font-bold text-muted-foreground uppercase flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {formatDateSafely(req.requestDate)}
                    </span>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-black uppercase tracking-tight">{req.name || 'Cliente Sem Nome'}</h3>
                    <p className="text-primary font-bold text-sm">{req.company || 'Empresa não informada'}</p>
                  </div>

                  <div className="flex flex-wrap gap-4 text-xs font-medium text-muted-foreground">
                    <span className="flex items-center gap-1.5"><Phone className="h-3 w-3" /> {req.phone || 'N/A'}</span>
                    <span className="px-2 py-0.5 bg-white/5 rounded-md">📦 {req.tipoEmbalagem || 'Padrão'}</span>
                    <span className="px-2 py-0.5 bg-white/5 rounded-md">🔢 {req.quantidade || 'N/A'}</span>
                  </div>

                  <p className="text-sm leading-relaxed text-muted-foreground bg-black/20 p-4 rounded-2xl italic">
                    "{req.message}"
                  </p>
                </div>

                <div className="flex md:flex-col gap-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" className="rounded-xl font-bold">Ações</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="bg-popover border-white/10 rounded-xl">
                      <DropdownMenuItem onClick={() => handleUpdateStatus(req.id, 'Pending')} className="text-xs cursor-pointer">Marcar Pendente</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleUpdateStatus(req.id, 'Processed')} className="text-xs cursor-pointer">Marcar Respondido</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleUpdateStatus(req.id, 'Archived')} className="text-xs cursor-pointer">Arquivar</DropdownMenuItem>
                      <div className="h-px bg-white/5 my-1" />
                      <DropdownMenuItem onClick={() => handleDelete(req.id)} className="text-xs text-destructive cursor-pointer font-bold">
                        <Trash2 className="h-3 w-3 mr-2" /> Remover
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  
                  <Button asChild variant="secondary" className="rounded-xl font-bold">
                    <a href={`https://wa.me/55${req.phone?.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer">
                      WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
