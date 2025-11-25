"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useEffect, useRef } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Facebook,
  Instagram,
} from "lucide-react";
import { submitContactForm } from "@/app/actions";
import { useToast } from "@/hooks/use-toast";
import { Label } from "@/components/ui/label";

const initialState = {
  message: "",
  errors: undefined,
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full" aria-disabled={pending}>
      {pending ? "Enviando..." : "Enviar Mensagem"}
    </Button>
  );
}

export function Contact() {
  const { toast } = useToast();
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state?.message) {
      if (state.success) {
        toast({
          title: "Sucesso!",
          description: state.message,
        });
        formRef.current?.reset();
      } else {
        toast({
          variant: "destructive",
          title: "Erro de Validação",
          description:
            state.message || "Por favor, corrija os erros no formulário.",
        });
      }
    }
  }, [state, toast]);

  return (
    <section id="contato">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm font-medium">
            Contato
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Fale Conosco
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Tem alguma dúvida ou quer solicitar um orçamento? Preencha o
            formulário ou utilize um de nossos canais de atendimento.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-5xl gap-12 lg:grid-cols-5 lg:gap-8">
          <div className="lg:col-span-3">
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <form ref={formRef} action={formAction} className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome</Label>
                      <Input id="name" name="name" placeholder="Seu nome" />
                      {state?.errors?.name && (
                        <p className="text-sm font-medium text-destructive">
                          {state.errors.name[0]}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Empresa</Label>
                      <Input
                        id="company"
                        name="company"
                        placeholder="Nome da sua empresa"
                      />
                      {state?.errors?.company && (
                        <p className="text-sm font-medium text-destructive">
                          {state.errors.company[0]}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="seu@email.com"
                      />
                      {state?.errors?.email && (
                        <p className="text-sm font-medium text-destructive">
                          {state.errors.email[0]}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="(00) 00000-0000"
                      />
                      {state?.errors?.phone && (
                        <p className="text-sm font-medium text-destructive">
                          {state.errors.phone[0]}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Como podemos ajudar?"
                      className="min-h-[120px]"
                    />
                    {state?.errors?.message && (
                      <p className="text-sm font-medium text-destructive">
                        {state.errors.message[0]}
                      </p>
                    )}
                  </div>
                  <SubmitButton />
                </form>
              </CardContent>
            </Card>
          </div>
          <div className="flex flex-col justify-center space-y-8 lg:col-span-2">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Nossos Contatos</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <Phone className="h-5 w-5 flex-shrink-0 text-primary" />
                  <a
                    href="tel:+5511999999999"
                    className="text-muted-foreground hover:text-primary hover:underline"
                  >
                    (11) 99999-9999
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="h-5 w-5 flex-shrink-0 text-primary" />
                  <a
                    href="mailto:contato@paganisolutions.com.br"
                    className="text-muted-foreground hover:text-primary hover:underline"
                  >
                    contato@paganisolutions.com.br
                  </a>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 flex-shrink-0 text-primary mt-1" />
                  <span className="text-muted-foreground">
                    Rua da Indústria, 123 - Distrito Industrial
                    <br />
                    São Paulo, SP - CEP 01234-567
                  </span>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Siga-nos</h3>
              <div className="flex items-center gap-4">
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
