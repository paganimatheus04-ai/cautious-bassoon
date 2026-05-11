
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { format, isValid } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { 
  Loader2, 
  Inbox, 
  Phone, 
  Mail,
  Building,
  MapPin,
  Box,
  Hash,
  Calendar,
  Lock,
  ExternalLink,
  LogOut,
  Trash2,
  CheckCircle2,
  Clock
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";

const ADMIN_PASSWORD = "Pagani@2026";

export default function AdminPage() {
  const [mounted, setMounted] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [orcamentos, setOrcamentos] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
    const authStatus = localStorage.getItem('pagani_admin_auth');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const loadData = async () => {
    try {
      setIsLoading(true);
      const { initializeFirebase } = await import('@/firebase');
      const { collection, getDocs, orderBy, query, onSnapshot } = await import('firebase/firestore');
      const { firestore } = initializeFirebase();

      const q = query(
        collection(firestore, 'quoteRequests'), 
        orderBy('requestDate', 'desc')
      );

      // Usando onSnapshot para atualizações em tempo real sem refresh
      const unsubscribe = onSnapshot(q, (snap) => {
        setOrcamentos(snap.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })));
        setIsLoading(false);
        setError(null);
      }, (err) => {
        console.error("Erro no snapshot:", err);
        setError("Erro ao carregar dados em tempo real.");
        setIsLoading(false);
      });

      return unsubscribe;
    } catch (err: any) {
      console.error("Erro ao carregar orçamentos:", err);
      setError("Erro ao conectar com o banco de dados.");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!mounted || !isAuthenticated) return;
    let unsubscribe: any;
    
    const setup = async () => {
      unsubscribe = await loadData();
    };
    
    setup();
    return () => unsubscribe && unsubscribe();
  }, [mounted, isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      localStorage.setItem('pagani_admin_auth', 'true');
    } else {
      toast({
        variant: "destructive",
        title: "Senha incorreta",
        description: "Verifique a senha mestra e tente novamente.",
      });
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('pagani_admin_auth');
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Tem certeza que deseja excluir este orçamento?")) return;
    
    try {
      const { initializeFirebase } = await import('@/firebase');
      const { doc, deleteDoc } = await import('firebase/firestore');
      const { firestore } = initializeFirebase();
      
      await deleteDoc(doc(firestore, 'quoteRequests', id));
      toast({
        title: "Excluído",
        description: "O orçamento foi removido com sucesso.",
      });
    } catch (err) {
      toast({
        variant: "destructive",
        title: "Erro ao excluir",
        description: "Não foi possível remover o registro.",
      });
    }
  };

  const handleToggleStatus = async (id: string, currentStatus: string) => {
    try {
      const { initializeFirebase } = await import('@/firebase');
      const { doc, updateDoc } = await import('firebase/firestore');
      const { firestore } = initializeFirebase();
      
      const newStatus = currentStatus === 'Respondido' ? 'New' : 'Respondido';
      await updateDoc(doc(firestore, 'quoteRequests', id), { status: newStatus });
      
      toast({
        title: "Status Atualizado",
        description: `Orçamento marcado como ${newStatus}.`,
      });
    } catch (err) {
      toast({
        variant: "destructive",
        title: "Erro ao atualizar",
        description: "Não foi possível mudar o status.",
      });
    }
  };

  const formatDateSafely = (dateStr: any) => {
    if (!dateStr) return 'N/A';
    try {
      const date = new Date(dateStr);
      return isValid(date) ? format(date, "dd/MM/yyyy HH:mm", { locale: ptBR }) : 'Data Inválida';
    } catch (e) {
      return 'Erro data';
    }
  };

  if (!mounted) return null;

  if (!isAuthenticated) {
    return (
      <div className="flex min-h-screen flex-col bg-background text-foreground items-center justify-center p-4">
        <div className="w-full max-w-md bg-white/5 border border-primary/20 p-8 rounded-[2rem] space-y-8 shadow-2xl backdrop-blur-xl">
          <div className="text-center space-y-2">
            <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-3xl font-black uppercase tracking-tighter">Painel <span className="text-primary">Admin</span></h1>
            <p className="text-muted-foreground font-medium italic">Acesso Restrito Pagani</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <Input
                type="password"
                placeholder="Senha mestra"
                className="bg-black/20 border-white/10 h-12 rounded-xl text-center"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                autoFocus
              />
            </div>
            <Button type="submit" className="w-full h-12 font-black uppercase tracking-widest rounded-xl">
              Entrar
            </Button>
          </form>
        </div>
      </div>
    );
  }

  const whatsappMessage = encodeURIComponent("Olá! Recebemos sua Solicitações de Orçamento na Pagani Embalagens! Para continuarmos, poderia confirmar seu nome?");

  return (
    <div className="flex min-h-[100dvh] flex-col bg-background text-foreground">
      {/* Header Simplificado para o Admin */}
      <header className="border-b border-white/5 bg-background/50 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Image 
            src="https://i.imgur.com/RkFJAQX.png" 
            alt="Pagani Logo" 
            width={120} 
            height={27} 
            className="h-auto"
          />
          <Button variant="ghost" onClick={handleLogout} className="text-xs font-bold uppercase tracking-widest hover:text-primary">
            <LogOut className="h-4 w-4 mr-2" /> Sair
          </Button>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-12 max-w-6xl">
        <div className="mb-12">
          <h1 className="text-4xl font-black uppercase tracking-tighter">
            Orçamentos <span className="text-primary">Recebidos</span>
          </h1>
          <p className="text-muted-foreground font-bold italic">Gerencie seus leads em tempo real.</p>
        </div>

        {error ? (
          <div className="bg-destructive/10 border border-destructive/20 rounded-[2rem] p-12 text-center text-destructive">
            <p className="font-bold">{error}</p>
          </div>
        ) : isLoading ? (
          <div className="flex flex-col items-center justify-center py-32 gap-4">
            <Loader2 className="h-12 w-12 animate-spin text-primary" />
            <p className="text-xs font-black uppercase tracking-widest text-muted-foreground">Sincronizando...</p>
          </div>
        ) : orcamentos.length === 0 ? (
          <div className="border-2 border-dashed border-white/10 rounded-[3rem] py-32 text-center">
             <Inbox className="h-16 w-16 text-white/10 mx-auto mb-6" />
             <h3 className="text-xl font-black uppercase">Sem orçamentos</h3>
          </div>
        ) : (
          <div className="grid gap-6">
            {orcamentos.map((req) => {
              const isRespondido = req.status === 'Respondido';
              const customerPhone = (req.phone || req.telefone || "").replace(/\D/g, '');
              
              return (
                <div 
                  key={req.id} 
                  className={`bg-white/5 border border-white/5 rounded-[2.5rem] p-6 md:p-8 flex flex-col gap-6 transition-all group ${isRespondido ? 'opacity-60 grayscale-[0.5]' : 'hover:border-primary/20 shadow-xl'}`}
                >
                  <div className="flex flex-col md:flex-row justify-between gap-6">
                    <div className="space-y-4 flex-1">
                      <div className="flex items-center gap-4">
                        {isRespondido ? (
                          <Badge variant="secondary" className="bg-green-500/20 text-green-500 text-[10px] font-black tracking-widest px-3 border-green-500/20">
                            <CheckCircle2 className="h-3 w-3 mr-1.5" /> RESPONDIDO
                          </Badge>
                        ) : (
                          <Badge className="bg-primary text-[10px] font-black tracking-widest px-3">
                            <Clock className="h-3 w-3 mr-1.5" /> NOVO LEAD
                          </Badge>
                        )}
                        <span className="text-[10px] font-bold text-muted-foreground uppercase flex items-center gap-1.5">
                          <Calendar className="h-3 w-3" /> {formatDateSafely(req.requestDate)}
                        </span>
                      </div>
                      
                      <div>
                        <h3 className="text-2xl font-black uppercase tracking-tight text-white group-hover:text-primary transition-colors">
                          {req.nome || req.name || 'Sem Nome'}
                        </h3>
                        <div className="flex items-center gap-2 text-primary font-bold text-lg">
                          <Building className="h-4 w-4" />
                          {req.empresa || req.company || 'Pessoa Física'}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
                          <div className="h-8 w-8 bg-white/5 rounded-lg flex items-center justify-center"><Phone className="h-4 w-4" /></div>
                          {req.phone || req.telefone || 'N/A'}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
                          <div className="h-8 w-8 bg-white/5 rounded-lg flex items-center justify-center"><Mail className="h-4 w-4" /></div>
                          {req.email || 'N/A'}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
                          <div className="h-8 w-8 bg-white/5 rounded-lg flex items-center justify-center"><MapPin className="h-4 w-4" /></div>
                          {req.cidade || 'N/A'}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-3 shrink-0">
                      <Button asChild className="rounded-2xl font-black uppercase text-xs h-12 px-6 bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20">
                        <a href={`https://wa.me/${customerPhone}?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer">
                          Responder WhatsApp <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                      
                      <div className="flex gap-2">
                        <Button 
                          variant="outline" 
                          onClick={() => handleToggleStatus(req.id, req.status)}
                          className="flex-1 rounded-xl font-bold uppercase text-[10px] border-white/10"
                        >
                          {isRespondido ? 'Marcar como Novo' : 'Marcar Respondida'}
                        </Button>
                        <Button 
                          variant="destructive" 
                          size="icon" 
                          onClick={() => handleDelete(req.id)}
                          className="rounded-xl h-10 w-10 shrink-0"
                          title="Excluir Orçamento"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>

                      <div className="bg-black/40 p-4 rounded-2xl space-y-2 border border-white/5 mt-2">
                        <div className="flex items-center justify-between gap-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                          <span className="flex items-center gap-1"><Box className="h-3 w-3" /> Tipo</span>
                          <span className="text-white">{req.tipoEmbalagem || 'N/A'}</span>
                        </div>
                        <div className="flex items-center justify-between gap-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                          <span className="flex items-center gap-1"><Hash className="h-3 w-3" /> Qtd</span>
                          <span className="text-white">{req.quantidade || 'N/A'}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-black/40 p-6 rounded-[1.5rem] border border-white/5 italic relative">
                    <div className="absolute -top-3 left-6 bg-background px-3 text-[10px] font-black text-primary uppercase tracking-widest border border-primary/20 rounded-full">Mensagem do Cliente</div>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      "{req.message || req.mensagem || 'O cliente não deixou uma mensagem adicional.'}"
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>

      <footer className="py-8 border-t border-white/5 text-center text-[10px] text-muted-foreground font-bold uppercase tracking-widest">
        &copy; {new Date().getFullYear()} Pagani Embalagens - Painel Interno
      </footer>
    </div>
  );
}
