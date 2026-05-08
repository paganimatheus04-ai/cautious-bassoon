
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { Send } from "lucide-react";
import { useFirestore } from "@/firebase";
import { collection, doc } from "firebase/firestore";
import { setDocumentNonBlocking } from "@/firebase/non-blocking-updates";
import { motion } from "framer-motion";

const formSchema = z.object({
  nome: z.string().min(2, "Nome é obrigatório"),
  empresa: z.string().min(2, "Nome da empresa é obrigatório"),
  email: z.string().email("E-mail inválido"),
  telefone: z.string().min(8, "Telefone válido é obrigatório"),
  cidade: z.string().min(2, "Cidade é obrigatória"),
  tipoEmbalagem: z.string({
    required_error: "Selecione um tipo de embalagem",
  }),
  quantidade: z.string().min(1, "Quantidade estimada é obrigatória"),
  mensagem: z.string().optional(),
});

export function QuoteForm() {
  const db = useFirestore();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: "",
      empresa: "",
      email: "",
      telefone: "",
      cidade: "",
      quantidade: "",
      mensagem: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (!db) return;

    const quoteRequestsRef = collection(db, "quoteRequests");
    const newDocRef = doc(quoteRequestsRef);
    const id = newDocRef.id;

    const submissionData = {
      ...values,
      id,
      requestDate: new Date().toISOString(),
      status: "New",
      name: values.nome,
      company: values.empresa,
      phone: values.telefone,
      message: values.mensagem || "Sem mensagem adicional",
    };

    setDocumentNonBlocking(newDocRef, submissionData, { merge: true });

    toast({
      title: "Solicitação enviada!",
      description: "Recebemos seu pedido. Em breve entraremos em contato.",
    });
    form.reset();
  }

  return (
    <section id="orcamento" className="py-24 md:py-32 bg-secondary/5 relative overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center max-w-4xl mx-auto space-y-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-4"
          >
            <h2 className="text-4xl font-black tracking-tighter text-primary sm:text-5xl md:text-7xl uppercase">
              Solicite seu Orçamento
            </h2>
            <p className="text-xl md:text-2xl text-foreground font-bold italic tracking-tight">
              Conte o que você precisa. A gente resolve.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full bg-white/5 p-8 md:p-12 rounded-[2.5rem] border border-white/5 backdrop-blur-2xl shadow-[0_0_50px_rgba(0,0,0,0.3)]"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="nome"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-bold text-foreground">Nome Completo</FormLabel>
                        <FormControl>
                          <Input className="bg-white/5 border-white/10 h-12 rounded-xl" placeholder="Seu nome" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="empresa"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-bold text-foreground">Empresa</FormLabel>
                        <FormControl>
                          <Input className="bg-white/5 border-white/10 h-12 rounded-xl" placeholder="Nome da sua empresa" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-bold text-foreground">E-mail Corporativo</FormLabel>
                        <FormControl>
                          <Input className="bg-white/5 border-white/10 h-12 rounded-xl" placeholder="seu@email.com.br" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="telefone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-bold text-foreground">Telefone / WhatsApp</FormLabel>
                        <FormControl>
                          <Input className="bg-white/5 border-white/10 h-12 rounded-xl" placeholder="(00) 00000-0000" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="cidade"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-bold text-foreground">Cidade</FormLabel>
                        <FormControl>
                          <Input className="bg-white/5 border-white/10 h-12 rounded-xl" placeholder="Sua cidade" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="tipoEmbalagem"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-bold text-foreground">Tipo de Embalagem</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-white/5 border-white/10 h-12 rounded-xl">
                              <SelectValue placeholder="Selecione o tipo" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-background/95 backdrop-blur-xl border-primary/20">
                            <SelectItem value="simples">Caixa Simples</SelectItem>
                            <SelectItem value="reforcada">Caixa Reforçada</SelectItem>
                            <SelectItem value="bandeja">Bandeja</SelectItem>
                            <SelectItem value="especial">Projeto Especial</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="quantidade"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold text-foreground">Quantidade Estimada</FormLabel>
                      <FormControl>
                        <Input className="bg-white/5 border-white/10 h-12 rounded-xl" placeholder="Ex: 500 unidades" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="mensagem"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold text-foreground">Mensagem Adicional</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Como podemos ajudar no seu projeto?"
                          className="min-h-[120px] bg-white/5 border-white/10 rounded-2xl resize-none"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" size="lg" className="w-full h-16 font-black text-xl rounded-2xl bg-primary hover:bg-primary/90 shadow-[0_0_20px_rgba(249,115,22,0.3)] transition-all hover:scale-[1.01] active:scale-[0.99] uppercase tracking-widest">
                  Quero meu orçamento
                  <Send className="ml-3 h-6 w-6" />
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
