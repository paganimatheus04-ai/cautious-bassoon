"use client";

import { ContactForm } from "../contact-form";

export function Contact() {
  return (
    <section>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm font-medium">
            Contato
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">
            Fale Conosco
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Tem alguma dúvida ou quer solicitar um orçamento? Preencha o
            formulário. Nossa equipe retornará o mais breve possível.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-2xl">
           <ContactForm />
        </div>
      </div>
    </section>
  );
}
