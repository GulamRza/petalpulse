import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// List of routes that require the user to be authenticated
const protectedRoutes = ['/forum/new'];

// List of routes restricted to unauthenticated users
const guestOnlyRoutes = ['/auth/sign-in', '/auth/register'];

export function middleware(request: NextRequest) {

  const { pathname } = request.nextUrl;
  const token = request.cookies.get('next-auth.session-token') || request.cookies.get('__Secure-next-auth.session-token');

  if (protectedRoutes.some((route) => pathname.startsWith(route))) {
    // If the route is protected and the user is not logged in, redirect to login
    if (!token) {
      const url = new URL('/auth/sign-in', request.url);
      url.searchParams.set('redirect', pathname); // Preserve the original route to redirect after login
      return NextResponse.redirect(url);
    }
  }

  if (guestOnlyRoutes.some((route) => pathname.startsWith(route))) {
    // If the user is logged in and tries to access login/register, redirect to home
    if (token) {
      return NextResponse.redirect(new URL('/', request.url));
    }
  }

  // Allow the request to proceed
  return NextResponse.next();
}

// Define the matcher to run middleware only on relevant routes
export const config = {
  matcher: [
      '/auth/sign-in',
      '/auth/register',
      '/forum/new',
  ],
};
