
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
      // Mapeando para os nomes de propriedades definidos no backend.json se necessário
      name: values.nome,
      company: values.empresa,
      phone: values.telefone,
      message: values.mensagem || "Sem mensagem adicional",
    };

    setDocumentNonBlocking(newDocRef, submissionData, { merge: true });

    toast({
      title: "Solicitação enviada!",
      description: "Recebemos seu pedido. Em breve um de nossos especialistas entrará em contato.",
    });
    form.reset();
  }

  return (
    <section id="orcamento" className="py-20 md:py-32 bg-secondary/20">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 items-start">
          <div className="space-y-6 animate-fade-in-up">
            <h2 className="text-3xl font-black tracking-tighter text-primary sm:text-4xl md:text-5xl">
              SOLICITE SEU ORÇAMENTO
            </h2>
            <p className="text-lg text-muted-foreground">
              Preencha o formulário abaixo e receba uma proposta personalizada
              para as necessidades da sua empresa. Atendimento ágil e consultivo.
            </p>
            <div className="bg-primary/10 border border-primary/20 p-6 rounded-lg">
              <h4 className="font-bold text-primary mb-2">Por que pedir um orçamento conosco?</h4>
              <ul className="space-y-2 text-sm">
                <li>• Projetos otimizados para redução de custos</li>
                <li>• Análise técnica de resistência e empilhamento</li>
                <li>• Suporte no desenvolvimento de protótipos</li>
                <li>• Flexibilidade em lotes de produção</li>
              </ul>
            </div>
          </div>

          <div className="bg-background p-6 md:p-8 rounded-xl border shadow-2xl animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="nome"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nome Completo</FormLabel>
                        <FormControl>
                          <Input placeholder="Seu nome" {...field} />
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
                        <FormLabel>Empresa</FormLabel>
                        <FormControl>
                          <Input placeholder="Nome da sua empresa" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>E-mail Corporativo</FormLabel>
                        <FormControl>
                          <Input placeholder="seu@email.com.br" {...field} />
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
                        <FormLabel>Telefone / WhatsApp</FormLabel>
                        <FormControl>
                          <Input placeholder="(00) 00000-0000" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="cidade"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Cidade</FormLabel>
                        <FormControl>
                          <Input placeholder="Sua cidade" {...field} />
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
                        <FormLabel>Tipo de Embalagem</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione o tipo" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
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
                      <FormLabel>Quantidade Estimada</FormLabel>
                      <FormControl>
                        <Input placeholder="Ex: 500 unidades" {...field} />
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
                      <FormLabel>Mensagem Adicional (Opcional)</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Descreva detalhes do seu projeto ou dúvidas específicas"
                          className="min-h-[100px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" size="lg" className="w-full font-bold text-lg hover:scale-[1.02] transition-transform">
                  Quero meu orçamento
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
