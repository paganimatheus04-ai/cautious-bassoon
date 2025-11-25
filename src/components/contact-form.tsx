"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useEffect, useRef } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
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

export function ContactForm() {
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
      <Card className="shadow-lg bg-secondary border-border">
        <CardContent className="p-6">
          <form ref={formRef} action={formAction} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nome</Label>
              <Input id="name" name="name" placeholder="Seu nome completo" required />
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
                required
                />
                {state?.errors?.company && (
                <p className="text-sm font-medium text-destructive">
                    {state.errors.company[0]}
                </p>
                )}
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="seu.email@empresa.com"
                  required
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
                  required
                />
                {state?.errors?.phone && (
                  <p className="text-sm font-medium text-destructive">
                    {state.errors.phone[0]}
                  </p>
                )}
              </div>
            </div>
             <div className="space-y-2">
                <Label htmlFor="subject">Assunto</Label>
                <Input id="subject" name="subject" placeholder="Ex: Orçamento para caixas" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Mensagem</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Descreva sua necessidade ou dúvida."
                className="min-h-[120px]"
                required
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
  );
}
