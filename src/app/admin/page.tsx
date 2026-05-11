
'use client';

import React from 'react';
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { useCollection, useMemoFirebase } from '@/firebase';
import { collection, query, orderBy } from 'firebase/firestore';
import { useFirestore } from '@/firebase';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Loader2, Inbox, Phone, Building, MapPin, Package, Clock, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AdminPage() {
  const db = useFirestore();

  const quoteRequestsQuery = useMemoFirebase(() => {
    if (!db) return null;
    return query(collection(db, 'quoteRequests'), orderBy('requestDate', 'desc'));
  }, [db]);

  const { data: requests, isLoading, error } = useCollection(quoteRequestsQuery);

  return (
    <div className="flex min-h-[100dvh] flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12 md:py-24 max-w-7xl">
        {/* Header do Dashboard */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-2"
          >
            <div className="flex items-center gap-2 text-primary font-bold tracking-widest uppercase text-xs">
              <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              Monitoramento em tempo real
            </div>
            <h1 className="text-4xl font-black tracking-tighter uppercase">
              Painel de <span className="text-primary">Orçamentos</span>
            </h1>
            <p className="text-muted-foreground font-medium">
              Gerencie os leads industriais recebidos através da plataforma.
            </p>
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

        {/* Estado de Carregamento */}
        {isLoading ? (
          <div className="flex h-96 items-center justify-center flex-col gap-4">
            <Loader2 className="h-12 w-12 animate-spin text-primary" />
            <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Sincronizando com o banco...</p>
          </div>
        ) : error ? (
          <Card className="border-destructive bg-destructive/10 backdrop-blur-xl rounded-[2rem]">
            <CardContent className="pt-8 text-center space-y-4">
              <div className="h-16 w-16 bg-destructive/20 rounded-full flex items-center justify-center mx-auto">
                 <MapPin className="h-8 w-8 text-destructive" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Erro de Sincronização</h3>
                <p className="text-muted-foreground max-w-md mx-auto">Não foi possível carregar os dados. Verifique se você tem permissões administrativas no Firebase Firestore.</p>
              </div>
            </CardContent>
          </Card>
        ) : !requests || requests.length === 0 ? (
          <Card className="bg-white/5 border-dashed border-white/10 rounded-[3rem] py-32">
            <CardContent className="flex flex-col items-center justify-center gap-6">
              <div className="h-20 w-20 bg-white/5 rounded-full flex items-center justify-center">
                <Inbox className="h-10 w-10 text-muted-foreground/30" />
              </div>
              <div className="text-center space-y-2">
                <h3 className="text-2xl font-black uppercase tracking-tight">Nenhuma solicitação ainda</h3>
                <p className="text-muted-foreground font-medium">Assim que alguém preencher o formulário, <br/> os dados aparecerão aqui instantaneamente.</p>
              </div>
            </CardContent>
          </Card>
        ) : (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid gap-6"
          >
            <Card className="bg-white/5 border-white/10 backdrop-blur-2xl rounded-[2.5rem] overflow-hidden shadow-2xl">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader className="bg-white/5 border-b border-white/10">
                    <TableRow className="hover:bg-transparent border-none">
                      <TableHead className="text-xs font-black uppercase tracking-widest py-6 px-8">Data/Hora</TableHead>
                      <TableHead className="text-xs font-black uppercase tracking-widest py-6">Cliente/Empresa</TableHead>
                      <TableHead className="text-xs font-black uppercase tracking-widest py-6">Contato</TableHead>
                      <TableHead className="text-xs font-black uppercase tracking-widest py-6">Especificação</TableHead>
                      <TableHead className="text-xs font-black uppercase tracking-widest py-6 pr-8">Mensagem</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <AnimatePresence>
                      {requests.map((req, index) => (
                        <motion.tr 
                          key={req.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="group border-b border-white/5 hover:bg-white/[0.02] transition-colors"
                        >
                          <TableCell className="py-6 px-8 align-top">
                            <div className="flex items-center gap-2 text-muted-foreground group-hover:text-primary transition-colors">
                              <Clock className="h-3 w-3" />
                              <span className="text-xs font-bold whitespace-nowrap">
                                {req.requestDate ? format(new Date(req.requestDate), "dd/MM/yyyy HH:mm", { locale: ptBR }) : 'N/A'}
                              </span>
                            </div>
                          </TableCell>
                          <TableCell className="py-6 align-top">
                            <div className="flex flex-col">
                              <span className="font-black text-foreground text-base tracking-tight">{req.name}</span>
                              <div className="flex items-center gap-1.5 text-xs font-bold text-muted-foreground uppercase tracking-wider">
                                <Building className="h-3 w-3 text-primary" />
                                {req.company}
                              </div>
                            </div>
                          </TableCell>
                          <TableCell className="py-6 align-top">
                            <div className="flex flex-col gap-2">
                              <a 
                                href={`https://wa.me/55${req.phone?.replace(/\D/g, '')}`} 
                                target="_blank" 
                                className="flex items-center gap-2 text-sm font-black hover:text-primary transition-colors group/link"
                              >
                                <Phone className="h-3 w-3 text-primary" />
                                {req.phone}
                                <ExternalLink className="h-3 w-3 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                              </a>
                              <span className="text-xs font-medium text-muted-foreground">{req.email}</span>
                              <div className="flex items-center gap-1.5 text-[10px] font-bold text-muted-foreground/60 uppercase">
                                <MapPin className="h-2.5 w-2.5" />
                                {req.cidade || 'Local não informado'}
                              </div>
                            </div>
                          </TableCell>
                          <TableCell className="py-6 align-top">
                            <div className="flex flex-col gap-2">
                              <Badge variant="outline" className="w-fit text-[10px] font-black uppercase tracking-tighter border-primary/20 bg-primary/5 text-primary rounded-lg py-1 px-3">
                                {req.tipoEmbalagem}
                              </Badge>
                              <div className="flex items-center gap-1.5 text-xs font-bold">
                                <Package className="h-3 w-3 text-muted-foreground" />
                                {req.quantidade} un.
                              </div>
                            </div>
                          </TableCell>
                          <TableCell className="py-6 align-top pr-8 max-w-xs">
                            <p className="text-xs font-medium text-muted-foreground leading-relaxed line-clamp-4 group-hover:line-clamp-none transition-all">
                              {req.message}
                            </p>
                          </TableCell>
                        </motion.tr>
                      ))}
                    </AnimatePresence>
                  </TableBody>
                </Table>
              </div>
            </Card>
          </motion.div>
        )}
      </main>
      <Footer />
    </div>
  );
}
