
'use client';

import React, { useState, useEffect } from 'react';
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { format, isValid } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { 
  Loader2, 
  Inbox, 
  Phone, 
  Clock, 
  ShieldCheck,
  Copy,
  ExternalLink
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";

export default function AdminPage() {
  const [mounted, setMounted] = useState(false);
  const [orcamentos, setOrcamentos] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<any>(null);
  const [userUid, setUserUid] = useState<string | null>(null);

  // 1. Garantir que o componente montou no cliente
  useEffect(() => {
    setMounted(true);
  }, []);

  // 2. Buscar dados do Firestore via Dynamic Import
  useEffect(() => {
    if (!mounted) return;

    const loadData = async () => {
      try {
        setIsLoading(true);
        // Imports dinâmicos para evitar SSR conflict
        const { initializeFirebase } = await import('@/firebase');
        const { collection, getDocs, orderBy, query } = await import('firebase/firestore');
        const { onAuthStateChanged } = await import('firebase/auth');

        const { firestore, auth } = initializeFirebase();

        // Verificar UID para instruções de permissão
        onAuthStateChanged(auth, (user) => {
          if (user) setUserUid(user.uid);
        });

        const q = query(
          collection(firestore, 'quoteRequests'), 
          orderBy('requestDate', 'desc')
        );

        const snap = await getDocs(q);
        setOrcamentos(snap.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })));
        setError(null);
      } catch (err: any) {
        console.error("Erro ao carregar orçamentos:", err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, [mounted]);

  const copyUid = () => {
    if (userUid) {
      navigator.clipboard.writeText(userUid);
      toast({ title: "ID copiado!", description: "Cole no seu Console Firebase." });
    }
  };

  const formatDateSafely = (dateStr: any) => {
    if (!dateStr) return 'N/A';
    try {
      const date = new Date(dateStr);
      return isValid(date) ? format(date, "dd/MM HH:mm", { locale: ptBR }) : 'Data Inválida';
    } catch (e) {
      return 'Erro data';
    }
  };

  // Se não estiver montado, não renderiza nada (evita erro de hidratação)
  if (!mounted) return null;

  return (
    <div className="flex min-h-[100dvh] flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12 max-w-7xl">
        <div className="mb-12">
          <h1 className="text-4xl font-black uppercase tracking-tighter">
            Solicitações de <span className="text-primary">Orçamento</span>
          </h1>
          <p className="text-muted-foreground font-bold mt-2 italic">Gestão de leads em tempo real.</p>
        </div>

        {error ? (
          <div className="bg-white/5 border border-primary/20 rounded-[2rem] p-8 text-center space-y-6">
            <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <ShieldCheck className="h-8 w-8 text-primary" />
            </div>
            <div className="max-w-2xl mx-auto space-y-4">
              <h2 className="text-2xl font-black uppercase">Acesso Restrito</h2>
              <p className="text-muted-foreground">
                O sistema de banco de dados está ativo, mas seu usuário precisa de permissão administrativa.
              </p>
              
              <div className="bg-background border border-white/10 p-4 rounded-xl flex items-center justify-between gap-4 max-w-md mx-auto">
                <code className="text-xs font-mono text-primary truncate">{userUid || 'Identificando...'}</code>
                <Button variant="ghost" size="sm" onClick={copyUid} className="shrink-0">
                  <Copy className="h-4 w-4 mr-2" /> Copiar ID
                </Button>
              </div>

              <div className="text-left bg-black/40 p-6 rounded-2xl space-y-3">
                <p className="font-bold text-sm uppercase text-primary">Como liberar seu acesso:</p>
                <ol className="text-xs text-muted-foreground space-y-2 list-decimal pl-4">
                  <li>Abra o <b>Firebase Console</b> do seu projeto.</li>
                  <li>Crie a coleção <code>roles_admin</code> no Firestore.</li>
                  <li>Use o seu <b>ID copiado acima</b> como ID do documento.</li>
                  <li>Adicione o campo <code>isAdmin</code> (boolean) como <code>true</code>.</li>
                </ol>
              </div>
            </div>
          </div>
        ) : isLoading ? (
          <div className="flex flex-col items-center justify-center py-32 gap-4">
            <Loader2 className="h-12 w-12 animate-spin text-primary" />
            <p className="text-xs font-black uppercase tracking-widest text-muted-foreground">Sincronizando Banco de Dados...</p>
          </div>
        ) : orcamentos.length === 0 ? (
          <div className="border-2 border-dashed border-white/10 rounded-[3rem] py-32 text-center">
             <Inbox className="h-16 w-16 text-white/10 mx-auto mb-6" />
             <h3 className="text-xl font-black uppercase">Nenhum pedido ainda</h3>
             <p className="text-muted-foreground">As solicitações feitas no site aparecerão aqui.</p>
          </div>
        ) : (
          <div className="grid gap-6">
            {orcamentos.map((req) => (
              <div key={req.id} className="bg-white/5 border border-white/5 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start justify-between">
                <div className="space-y-4 flex-1">
                  <div className="flex items-center gap-3">
                    <Badge className="bg-primary">NOVO</Badge>
                    <span className="text-[10px] font-bold text-muted-foreground uppercase flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {formatDateSafely(req.requestDate)}
                    </span>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-black uppercase tracking-tight">{req.name || req.nome}</h3>
                    <p className="text-primary font-bold text-sm">{req.company || req.empresa}</p>
                  </div>

                  <div className="flex flex-wrap gap-4 text-xs font-medium text-muted-foreground">
                    <span className="flex items-center gap-1.5"><Phone className="h-3 w-3" /> {req.phone || req.telefone}</span>
                    <span className="px-2 py-0.5 bg-white/5 rounded-md">📦 {req.tipoEmbalagem}</span>
                    <span className="px-2 py-0.5 bg-white/5 rounded-md">🔢 {req.quantidade}</span>
                  </div>

                  <p className="text-sm leading-relaxed text-muted-foreground bg-black/20 p-4 rounded-2xl italic">
                    "{req.message || req.mensagem}"
                  </p>
                </div>

                <Button asChild variant="secondary" className="rounded-xl font-bold w-full md:w-auto">
                  <a href={req.phone || req.telefone ? `https://wa.me/55${(req.phone || req.telefone).replace(/\D/g, '')}` : '#'} target="_blank" rel="noopener noreferrer">
                    Responder WhatsApp <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
