'use client';

import React from 'react';
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
import { format } from 'date-fns';
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
import { motion, AnimatePresence } from 'framer-motion';

export default function AdminPage() {
  const db = useFirestore();

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
    if (confirm('Tem certeza que deseja remover este lead permanentemente?')) {
      const docRef = doc(db, 'quoteRequests', id);
      deleteDocumentNonBlocking(docRef);
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
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <div className="flex min-h-[100dvh] flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12 md:py-24 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-2"
          >
            <div className="flex items-center gap-2 text-primary font-bold tracking-widest uppercase text-xs">
              <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              Gestão de Leads em Tempo Real
            </div>
            <h1 className="text-4xl font-black tracking-tighter uppercase">
              Painel de <span className="text-primary">Controle</span>
            </h1>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex gap-4"
          >
            <Card className="bg-white/5 border-white/10 backdrop-blur-xl px-6 py-3 rounded-2xl flex items-center gap-4">
               <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Inbox className="h-5 w-5 text-primary" />
               </div>
               <div>
                  <p className="text-[10px] font-black uppercase text-muted-foreground leading-none mb-1">Total Recebido</p>
                  <p className="text-2xl font-black leading-none">{requests?.length || 0}</p>
               </div>
            </Card>
          </motion.div>
        </div>

        {isLoading ? (
          <div className="flex h-96 items-center justify-center flex-col gap-4">
            <Loader2 className="h-12 w-12 animate-spin text-primary" />
            <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Sincronizando Leads...</p>
          </div>
        ) : error ? (
          <Card className="border-destructive bg-destructive/10 backdrop-blur-xl rounded-[2rem]">
            <CardContent className="pt-8 text-center space-y-4">
              <AlertCircle className="h-12 w-12 text-destructive mx-auto" />
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Erro de Acesso</h3>
                <p className="text-muted-foreground">Você precisa estar logado como administrador para ver esta página.</p>
              </div>
            </CardContent>
          </Card>
        ) : !requests || requests.length === 0 ? (
          <Card className="bg-white/5 border-dashed border-white/10 rounded-[3rem] py-32">
            <CardContent className="flex flex-col items-center justify-center gap-6">
              <Inbox className="h-16 w-16 text-muted-foreground/20" />
              <div className="text-center space-y-2">
                <h3 className="text-2xl font-black uppercase tracking-tight">Sem orçamentos por enquanto</h3>
                <p className="text-muted-foreground font-medium">Os novos pedidos aparecerão aqui instantaneamente.</p>
              </div>
            </CardContent>
          </Card>
        ) : (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid gap-6"
          >
            <div className="overflow-hidden rounded-[2rem] border border-white/5 bg-white/5 backdrop-blur-2xl">
              <Table>
                <TableHeader className="bg-white/5">
                  <TableRow className="border-b border-white/5 hover:bg-transparent">
                    <TableHead className="text-xs font-black uppercase tracking-widest py-6 px-8 text-white">Status / Data</TableHead>
                    <TableHead className="text-xs font-black uppercase tracking-widest py-6 text-white">Cliente</TableHead>
                    <TableHead className="text-xs font-black uppercase tracking-widest py-6 text-white">Especificação</TableHead>
                    <TableHead className="text-xs font-black uppercase tracking-widest py-6 text-white">Mensagem</TableHead>
                    <TableHead className="text-xs font-black uppercase tracking-widest py-6 pr-8 text-right text-white">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <AnimatePresence>
                    {requests.map((req, index) => (
                      <motion.tr 
                        key={req.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ delay: index * 0.03 }}
                        className={`group border-b border-white/5 hover:bg-white/[0.02] transition-colors ${req.status === 'Archived' ? 'opacity-50' : ''}`}
                      >
                        <TableCell className="py-6 px-8 align-top">
                          <div className="space-y-2">
                            {getStatusBadge(req.status || 'New')}
                            <div className="flex items-center gap-2 text-muted-foreground text-[10px] font-bold uppercase tracking-wider">
                              <Clock className="h-3 w-3" />
                              {req.requestDate ? format(new Date(req.requestDate), "dd/MM HH:mm", { locale: ptBR }) : 'N/A'}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="py-6 align-top">
                          <div className="space-y-1">
                            <p className="font-black text-foreground tracking-tight">{req.name}</p>
                            <p className="text-xs font-bold text-primary uppercase flex items-center gap-1">
                              <Building className="h-3 w-3" /> {req.company}
                            </p>
                            <a 
                              href={`https://wa.me/55${req.phone?.replace(/\D/g, '')}`} 
                              target="_blank" 
                              className="text-xs font-medium text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                            >
                              <Phone className="h-3 w-3" /> {req.phone}
                            </a>
                          </div>
                        </TableCell>
                        <TableCell className="py-6 align-top">
                          <div className="space-y-1">
                            <Badge variant="secondary" className="text-[9px] font-black uppercase tracking-tighter">
                              {req.tipoEmbalagem}
                            </Badge>
                            <div className="flex items-center gap-1.5 text-xs font-bold text-muted-foreground">
                              <Package className="h-3 w-3" /> {req.quantidade}
                            </div>
                            <div className="flex items-center gap-1.5 text-[10px] font-bold text-muted-foreground/60 uppercase">
                              <MapPin className="h-2.5 w-2.5" /> {req.cidade}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="py-6 align-top max-w-xs">
                          <p className="text-xs font-medium text-muted-foreground leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all">
                            {req.message}
                          </p>
                        </TableCell>
                        <TableCell className="py-6 pr-8 align-top text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-white/10">
                                <MoreVertical className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="bg-background/95 backdrop-blur-xl border-white/10">
                              <DropdownMenuItem onClick={() => handleUpdateStatus(req.id, 'Pending')} className="gap-2 cursor-pointer">
                                <Clock className="h-4 w-4 text-yellow-500" /> Marcar Pendente
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={() => handleUpdateStatus(req.id, 'Processed')} className="gap-2 cursor-pointer">
                                <CheckCircle2 className="h-4 w-4 text-green-500" /> Marcar Respondido
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={() => handleUpdateStatus(req.id, 'Archived')} className="gap-2 cursor-pointer">
                                <Inbox className="h-4 w-4 text-muted-foreground" /> Arquivar
                              </DropdownMenuItem>
                              <div className="h-px bg-white/10 my-1" />
                              <DropdownMenuItem onClick={() => handleDelete(req.id)} className="gap-2 text-destructive cursor-pointer focus:text-destructive">
                                <Trash2 className="h-4 w-4" /> Deletar Lead
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </motion.tr>
                    ))}
                  </AnimatePresence>
                </TableBody>
              </Table>
            </div>
          </motion.div>
        )}
      </main>
      <Footer />
    </div>
  );
}
