import { NextResponse } from "next/server";
// import { neonAuth } from "@/app/(backend)/lib/auth";

export default function middleware() {
  return NextResponse.next();
}
// export default neonAuth();

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|auth|dashboard|analytics|discover|journal|community|new-habit|support|privacy|profile|notifications|settings|[^?]*\\.(?:html|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};