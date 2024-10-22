import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const url = request.nextUrl.pathname;

  const cookie = request.cookies.get("user");
  if(url == "/" || !cookie) {
    return NextResponse.redirect(new URL('/create-your-account', request.url))
  }
  if((url == "/create-your-account" || url == "/login") && cookie) {
    return NextResponse.redirect(new URL('/home', request.url));
  }
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [ 
    '/', 
    '/home', 
    '/business', 
    '/marketing', 
    '/legal', 
    '/profile', 
    '/funding', 
    '/document', 
    '/pitchdeck', 
    '/roadmap',
    '/login',
    '/create-your-account'
  ],
}