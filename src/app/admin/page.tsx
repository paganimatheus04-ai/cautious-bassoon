
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
  Mail,
  Building,
  MapPin,
  Box,
  Hash,
  Calendar,
  Lock,
  ExternalLink,
  LogOut
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

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

  useEffect(() => {
    if (!mounted || !isAuthenticated) return;

    const loadData = async () => {
      try {
        setIsLoading(true);
        const { initializeFirebase } = await import('@/firebase');
        const { collection, getDocs, orderBy, query } = await import('firebase/firestore');
        const { firestore } = initializeFirebase();

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
        setError("Erro ao conectar com o banco de dados. Verifique sua conexão.");
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, [mounted, isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      localStorage.setItem('pagani_admin_auth', 'true');
    } else {
      alert("Senha incorreta");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('pagani_admin_auth');
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
            <h1 className="text-3xl font-black uppercase tracking-tighter">Área <span className="text-primary">Restrita</span></h1>
            <p className="text-muted-foreground font-medium italic">Acesso exclusivo Pagani Embalagens</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <Input
                type="password"
                placeholder="Digite a senha mestra"
                className="bg-black/20 border-white/10 h-12 rounded-xl text-center"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                autoFocus
              />
            </div>
            <Button type="submit" className="w-full h-12 font-black uppercase tracking-widest rounded-xl">
              Entrar no Painel
            </Button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-[100dvh] flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-black uppercase tracking-tighter">
              Solicitações de <span className="text-primary">Orçamento</span>
            </h1>
            <p className="text-muted-foreground font-bold italic">Leads capturados em tempo real.</p>
          </div>
          <Button variant="outline" onClick={handleLogout} className="rounded-xl border-white/10 text-xs font-bold uppercase tracking-widest">
            <LogOut className="h-4 w-4 mr-2" /> Sair do Painel
          </Button>
        </div>

        {error ? (
          <div className="bg-destructive/10 border border-destructive/20 rounded-[2rem] p-12 text-center text-destructive">
            <p className="font-bold">{error}</p>
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
              <div key={req.id} className="bg-white/5 border border-white/5 rounded-[2.5rem] p-6 md:p-10 flex flex-col gap-8 hover:border-primary/20 transition-all group">
                <div className="flex flex-col md:flex-row justify-between gap-6">
                  <div className="space-y-4 flex-1">
                    <div className="flex items-center gap-4">
                      <Badge className="bg-primary text-[10px] font-black tracking-widest px-3">LEAD NOVO</Badge>
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
                    <Button asChild variant="secondary" className="rounded-2xl font-black uppercase text-xs h-12 px-6">
                      <a href={req.phone || req.telefone ? `https://wa.me/55${(req.phone || req.telefone).replace(/\D/g, '')}` : '#'} target="_blank" rel="noopener noreferrer">
                        Responder WhatsApp <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                    <div className="bg-black/40 p-4 rounded-2xl space-y-3 border border-white/5">
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

                <div className="bg-black/40 p-6 rounded-[2rem] border border-white/5 italic relative">
                  <div className="absolute -top-3 left-6 bg-background px-3 text-[10px] font-black text-primary uppercase tracking-widest border border-primary/20 rounded-full">Mensagem do Cliente</div>
                  <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
                    "{req.message || req.mensagem || 'O cliente não deixou uma mensagem adicional.'}"
                  </p>
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
