import { NextRequest, NextResponse } from 'next/server';

const isSignedIn = false;

export function middleware(request: NextRequest) {
  console.log('caiu no middleware');

  if (!isSignedIn) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/contacts/create',
}