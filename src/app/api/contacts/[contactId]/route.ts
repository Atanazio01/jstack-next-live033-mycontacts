import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

interface IEditContactRouteProps {
  params: Promise<{ contactId: string }>;
}
export async function PUT(
  request: NextRequest,
  { params }: IEditContactRouteProps,
) {
  const { contactId } = await params;
  const { name, email } = await request.json();

  if (!name || !email) {
    return NextResponse.json(
      { error: "Name and email are required" },
      { status: 400 },
    );
  }

  const emailAlreadyExists = await db.contact.findUnique({
    where: { email, AND: { id: { not: contactId } } },
  });

  if (emailAlreadyExists) {
    return NextResponse.json(
      { error: "Email already exists" },
      { status: 409 },
    );
  }

  const contact = await db.contact.update({
    where: { id: contactId },
    data: { name, email },
  });

  return NextResponse.json({ contact });
}
