import { headers } from "next/headers";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();

  const headersList = await headers();
  console.log(headersList.get("Content-Type"));

  console.log("id", request.nextUrl.searchParams.get("id"));
  console.log("batatinha", request.nextUrl.searchParams.get("batatinha"));

  console.log(request.cookies.get('name'))

  const response = NextResponse.json({ created: true }, { status: 201 });
  response.cookies.set('name', 'John Doe', { httpOnly: true });

  console.log(body);

  return response;
}
