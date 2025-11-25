"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2, "O nome deve ter pelo menos 2 caracteres."),
  company: z
    .string()
    .trim()
    .min(2, "O nome da empresa deve ter pelo menos 2 caracteres."),
  email: z.string().email("Por favor, insira um e-mail válido."),
  phone: z.string().trim().min(8, "O telefone deve ter pelo menos 8 dígitos."),
  message: z
    .string()
    .trim()
    .min(10, "A mensagem deve ter pelo menos 10 caracteres."),
});

export type FormState = {
  message: string;
  errors?: {
    name?: string[];
    company?: string[];
    email?: string[];
    phone?: string[];
    message?: string[];
  };
  success: boolean;
};

export async function submitContactForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = contactSchema.safeParse({
    name: formData.get("name"),
    company: formData.get("company"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Por favor, preencha todos os campos corretamente.",
    };
  }

  // Here you would typically send an email, save to a database, etc.
  // For this example, we'll just log it and return success.
  console.log("Form data received:", validatedFields.data);

  return {
    success: true,
    message: "Obrigado pelo seu contato! Retornaremos em breve.",
  };
}
