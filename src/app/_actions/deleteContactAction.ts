"use server";

import { sleep } from "@/lib/utils";

import { db } from "@/lib/db";
import { ActionResponse } from "@/types/actionResponse";
import { revalidatePath } from "next/cache";

export async function deleteContactAction(
  contactId: string,
): Promise<ActionResponse> {
  try {
    await sleep(1000);
    await db.contact.delete({
      where: { id: contactId },
    });

    revalidatePath("/");

    return {
      status: "success",
      body: { message: "Contato deletado com sucesso" },
    };
  } catch (error) {
    return {
      status: "error",
      body: { message: "Erro ao deletar contato" },
    };
  }
}
