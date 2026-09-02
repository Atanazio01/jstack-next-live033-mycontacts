import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import { EditContactForm } from './EditContactForm';

interface IEditContactPageProps {
  params: Promise<{
    contactId: string;
  }>;
}

export default async function EditContactPage({
  params,
}: IEditContactPageProps) {
  const { contactId } = await params;

  console.log(contactId);

  const contact = await db.contact.findUnique({
    where: { id: contactId },
  });

  if (!contact) {
    return redirect("/");
  }

  return <EditContactForm contact={contact} />;
}
