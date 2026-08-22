export async function GET(request: Request): Promise<Response> {
  const headers = new Headers(request.headers);

  console.log(headers)

  return new Response("Hello JStack")
}
