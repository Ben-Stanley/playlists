import { NextResponse} from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = Boolean(request.cookies.get("token")?.value) || null;
  const { pathname } = request.nextUrl;

  if ( !pathname.startsWith("/") ) {
    if (token) {
        return NextResponse.next();
    } else {
        return NextResponse.redirect(new URL("/", request.url));
    }
  }
}
