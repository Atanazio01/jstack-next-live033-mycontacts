import { NextResponse } from "next/server";

export async function GET(request: Request): Promise<Response> {
  const headers = new Headers(request.headers);

  console.log(headers);

  return NextResponse.json({ message: "Hello JStack" });
}
