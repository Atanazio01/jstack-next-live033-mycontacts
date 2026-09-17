"use client";

import { ActionResponse } from "@/types/actionResponse";
import { Loader2Icon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useActionState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

interface IContactFormProps {
  contact?: {
    email: string;
    name: string;
  };
  submitAction?: (formData: FormData) => Promise<ActionResponse>;
}

export function ContactForm({ contact, submitAction }: IContactFormProps) {
  const router = useRouter();

  const [state, clientSubmitAction, isPending] = useActionState(
    async (_previousData: unknown, formData: FormData) => {
      const response = await submitAction?.(formData);

      if (response?.status === "success") {
        router.push(`/contacts/${response.body.contact.id}/edit`);
      }

      return response;
    },
    null,
  );

  return (
    <form className="space-y-4" action={clientSubmitAction}>
      {state?.status === "error" && <p className="text-red-500">{state.body.message}</p>}
      <div className="space-y-1.5">
        <Label>Nome</Label>
        <Input name="name" defaultValue={contact?.name || ""} />
      </div>

      <div className="space-y-1.5">
        <Label>Email</Label>
        <Input name="email" defaultValue={contact?.email || ""} />
      </div>

      <Button type="submit" disabled={isPending}>
        {isPending && <Loader2Icon className="size-4 mr-1 animate-spin" />}
        {contact ? "Salvar" : "Criar"}
      </Button>
    </form>
  );
}
