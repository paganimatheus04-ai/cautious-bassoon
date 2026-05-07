
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
import { Loader2, Inbox, Phone, Building, MapPin, Package } from 'lucide-react';

export default function AdminPage() {
  const db = useFirestore();

  const quoteRequestsQuery = useMemoFirebase(() => {
    if (!db) return null;
    return query(collection(db, 'quoteRequests'), orderBy('requestDate', 'desc'));
  }, [db]);

  const { data: requests, isLoading, error } = useCollection(quoteRequestsQuery);

  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12 md:py-24">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-primary">Painel de Orçamentos</h1>
            <p className="text-muted-foreground">Gerencie as solicitações recebidas pelo site.</p>
          </div>
          <Badge variant="outline" className="text-lg py-1 px-4 border-primary text-primary">
            {requests?.length || 0} Solicitações
          </Badge>
        </div>

        {isLoading ? (
          <div className="flex h-64 items-center justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : error ? (
          <Card className="border-destructive">
            <CardContent className="pt-6">
              <p className="text-destructive">Erro ao carregar dados. Verifique suas permissões no Firestore.</p>
            </CardContent>
          </Card>
        ) : !requests || requests.length === 0 ? (
          <Card className="bg-secondary/20 border-dashed">
            <CardContent className="flex flex-col items-center justify-center h-64 gap-4">
              <Inbox className="h-12 w-12 text-muted-foreground" />
              <p className="text-muted-foreground">Nenhuma solicitação de orçamento encontrada.</p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-6">
            <Card className="bg-background border-primary/10 overflow-hidden">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader className="bg-secondary/50">
                    <TableRow>
                      <TableHead>Data</TableHead>
                      <TableHead>Cliente / Empresa</TableHead>
                      <TableHead>Contato</TableHead>
                      <TableHead>Localização</TableHead>
                      <TableHead>Pedido</TableHead>
                      <TableHead>Mensagem</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {requests.map((req) => (
                      <TableRow key={req.id} className="hover:bg-secondary/30 transition-colors">
                        <TableCell className="font-medium whitespace-nowrap">
                          {req.requestDate ? format(new Date(req.requestDate), "dd/MM/yyyy HH:mm", { locale: ptBR }) : 'N/A'}
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-col">
                            <span className="font-bold text-foreground">{req.name}</span>
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                              <Building className="h-3 w-3" />
                              {req.company}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-col gap-1 text-sm">
                            <div className="flex items-center gap-2">
                              <Phone className="h-3 w-3 text-primary" />
                              <a href={`https://wa.me/55${req.phone?.replace(/\D/g, '')}`} target="_blank" className="hover:underline">
                                {req.phone}
                              </a>
                            </div>
                            <span className="text-xs text-muted-foreground">{req.email}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <MapPin className="h-3 w-3" />
                            {req.cidade || 'N/A'}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-col gap-1 text-sm">
                            <Badge variant="secondary" className="w-fit text-[10px] uppercase">
                              {req.tipoEmbalagem}
                            </Badge>
                            <span className="text-xs font-semibold">{req.quantidade} un.</span>
                          </div>
                        </TableCell>
                        <TableCell className="max-w-xs">
                          <p className="text-xs text-muted-foreground line-clamp-3">
                            {req.message}
                          </p>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </Card>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
