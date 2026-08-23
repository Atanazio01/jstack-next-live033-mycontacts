"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

interface IContactFormProps {
  contact?: {
    email: string;
    name: string;
  };
  onSubmit?: (formData: { name: string; email: string }) => void;
}

export function ContactForm({ contact, onSubmit }: IContactFormProps) {
  const [name, setName] = useState(contact?.name || "");
  const [email, setEmail] = useState(contact?.email || "");

  function handleSubmit(event: React.SubmitEvent) {
    event.preventDefault();
    onSubmit?.({ name, email });
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="space-y-1.5">
        <Label>Nome</Label>
        <Input
          name="name"
          onChange={(event) => setName(event.target.value)}
          value={name}
        />
      </div>

      <div className="space-y-1.5">
        <Label>Email</Label>
        <Input
          name="email"
          onChange={(event) => setEmail(event.target.value)}
          value={email}
        />
      </div>

      <Button type="submit">{contact ? "Salvar" : "Criar"}</Button>
    </form>
  );
}
