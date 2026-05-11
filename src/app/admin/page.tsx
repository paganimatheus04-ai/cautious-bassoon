'use client';

import React, { useState, useEffect } from 'react';
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { useCollection, useMemoFirebase } from '@/firebase';
import { collection, query, orderBy, doc } from 'firebase/firestore';
import { useFirestore } from '@/firebase';
import { 
  updateDocumentNonBlocking, 
  deleteDocumentNonBlocking 
} from '@/firebase/non-blocking-updates';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { format, isValid } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { 
  Loader2, 
  Inbox, 
  Phone, 
  Building, 
  MapPin, 
  Package, 
  Clock, 
  MoreVertical,
  Trash2,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

export default function AdminPage() {
  const db = useFirestore();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const quoteRequestsQuery = useMemoFirebase(() => {
    if (!db) return null;
    return query(collection(db, 'quoteRequests'), orderBy('requestDate', 'desc'));
  }, [db]);

  const { data: requests, isLoading, error } = useCollection(quoteRequestsQuery);

  const handleUpdateStatus = (id: string, newStatus: string) => {
    if (!db) return;
    const docRef = doc(db, 'quoteRequests', id);
    updateDocumentNonBlocking(docRef, { status: newStatus });
  };

  const handleDelete = (id: string) => {
    if (!db) return;
    if (typeof window !== 'undefined' && window.confirm('Tem certeza que deseja remover este lead permanentemente?')) {
      const docRef = doc(db, 'quoteRequests', id);
      deleteDocumentNonBlocking(docRef);
    }
  };

  const formatDateSafely = (dateStr: string | undefined) => {
    if (!dateStr) return 'N/A';
    try {
      const date = new Date(dateStr);
      return isValid(date) ? format(date, "dd/MM HH:mm", { locale: ptBR }) : 'Data Inválida';
    } catch (e) {
      return 'Erro na data';
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'New':
        return <Badge className="bg-primary text-white font-black">NOVO</Badge>;
      case 'Pending':
        return <Badge variant="outline" className="text-yellow-500 border-yellow-500">PENDENTE</Badge>;
      case 'Processed':
        return <Badge variant="outline" className="text-green-500 border-green-500">RESPONDIDO</Badge>;
      case 'Archived':
        return <Badge variant="secondary">ARQUIVADO</Badge>;
      default:
        return <Badge variant="outline">{status || 'Lead'}</Badge>;
    }
  };

  if (!isMounted) {
    return (
      <div className="flex min-h-screen flex-col bg-background">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-primary font-bold tracking-widest uppercase text-xs">
              <div className="h-2 w-2 rounded-full bg-primary" />
              Gestão de Leads
            </div>
            <h1 className="text-4xl font-black tracking-tighter uppercase">
              Painel de <span className="text-primary">Controle</span>
            </h1>
          </div>

          <div className="flex gap-4">
            <Card className="bg-white/5 border-white/10 px-6 py-3 rounded-2xl flex items-center gap-4">
               <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Inbox className="h-5 w-5 text-primary" />
               </div>
               <div>
                  <p className="text-[10px] font-black uppercase text-muted-foreground leading-none mb-1">Total</p>
                  <p className="text-2xl font-black leading-none">{requests ? requests.length : 0}</p>
               </div>
            </Card>
          </div>
        </div>

        {isLoading ? (
          <div className="flex h-64 items-center justify-center flex-col gap-4">
            <Loader2 className="h-10 w-10 animate-spin text-primary" />
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Sincronizando dados...</p>
          </div>
        ) : error ? (
          <Card className="border-destructive bg-destructive/10 rounded-2xl">
            <CardContent className="p-8 text-center space-y-4">
              <AlertCircle className="h-10 w-10 text-destructive mx-auto" />
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Acesso Restrito</h3>
                <p className="text-muted-foreground text-sm">Este painel é exclusivo para administradores autorizados.</p>
              </div>
            </CardContent>
          </Card>
        ) : !requests || requests.length === 0 ? (
          <Card className="bg-white/5 border-dashed border-white/10 rounded-[2rem] py-24">
            <CardContent className="flex flex-col items-center justify-center gap-6">
              <Inbox className="h-12 w-12 text-muted-foreground/20" />
              <div className="text-center space-y-1">
                <h3 className="text-xl font-black uppercase">Nenhum pedido encontrado</h3>
                <p className="text-muted-foreground text-sm">Os orçamentos do site aparecerão aqui automaticamente.</p>
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="rounded-2xl border border-white/5 bg-white/5 overflow-hidden">
            <Table>
              <TableHeader className="bg-white/5">
                <TableRow className="border-b border-white/5 hover:bg-transparent">
                  <TableHead className="text-[10px] font-black uppercase tracking-widest py-4 px-6">Status / Data</TableHead>
                  <TableHead className="text-[10px] font-black uppercase tracking-widest py-4">Cliente</TableHead>
                  <TableHead className="text-[10px] font-black uppercase tracking-widest py-4">Especificação</TableHead>
                  <TableHead className="text-[10px] font-black uppercase tracking-widest py-4">Mensagem</TableHead>
                  <TableHead className="text-[10px] font-black uppercase tracking-widest py-4 px-6 text-right">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {requests.map((req) => (
                  <TableRow key={req.id} className="border-b border-white/5 hover:bg-white/[0.02]">
                    <TableCell className="py-4 px-6 align-top">
                      <div className="space-y-2">
                        {getStatusBadge(req.status)}
                        <div className="flex items-center gap-1.5 text-[9px] font-bold text-muted-foreground uppercase">
                          <Clock className="h-3 w-3" />
                          {formatDateSafely(req.requestDate)}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="py-4 align-top">
                      <div className="space-y-1">
                        <p className="font-bold text-sm">{req.name || 'Sem nome'}</p>
                        <p className="text-[10px] font-bold text-primary uppercase">{req.company || 'Particular'}</p>
                        <a 
                          href={`tel:${req.phone}`} 
                          className="text-[10px] text-muted-foreground hover:text-primary flex items-center gap-1"
                        >
                          <Phone className="h-3 w-3" /> {req.phone || 'N/A'}
                        </a>
                      </div>
                    </TableCell>
                    <TableCell className="py-4 align-top">
                      <div className="space-y-1">
                        <Badge variant="secondary" className="text-[9px] px-1.5 py-0">
                          {req.tipoEmbalagem || 'Padrão'}
                        </Badge>
                        <div className="flex items-center gap-1 text-[10px] text-muted-foreground font-medium">
                          <Package className="h-3 w-3" /> {req.quantidade || 'N/A'}
                        </div>
                        <div className="flex items-center gap-1 text-[9px] text-muted-foreground/60 uppercase">
                          <MapPin className="h-3 w-3" /> {req.cidade || 'N/A'}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="py-4 align-top max-w-[200px]">
                      <p className="text-[11px] text-muted-foreground line-clamp-2 leading-relaxed">
                        {req.message}
                      </p>
                    </TableCell>
                    <TableCell className="py-4 px-6 align-top text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="bg-popover border-white/10">
                          <DropdownMenuItem onClick={() => handleUpdateStatus(req.id, 'Pending')} className="text-xs cursor-pointer">
                            Marcar Pendente
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleUpdateStatus(req.id, 'Processed')} className="text-xs cursor-pointer">
                            Marcar Respondido
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleUpdateStatus(req.id, 'Archived')} className="text-xs cursor-pointer">
                            Arquivar
                          </DropdownMenuItem>
                          <div className="h-px bg-white/5 my-1" />
                          <DropdownMenuItem onClick={() => handleDelete(req.id)} className="text-xs text-destructive cursor-pointer">
                            Remover Lead
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
