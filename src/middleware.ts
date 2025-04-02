import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose"; // Using jose instead of jsonwebtoken

const JWT_SECRET = new TextEncoder().encode("hbjgvgjvgjhbvvutyrcf"); // Replace with your actual secret key

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  console.log("Requested Path:", path);

  // Protected pages
  const ProtectedRoutes = ["/admin", "/admin/:path*", "/dashboard", "/dashboard/:path*"];

  // Check if the requested path is a protected route
  if (ProtectedRoutes.some(route => path.startsWith(route.replace(":path*", "")))) {
    console.log("Protected route accessed:", path);
    
    // Step-1: Check if token exists in cookies
    const token = request.cookies.get("token")?.value;
    console.log("Token found:", token ? "Yes" : "No");
    
    if (!token) {
      console.log("No token found, redirecting to login");
      return NextResponse.redirect(new URL("/auth/login", request.url));
    }

    try {
      // Step-2: Decode and verify token
      const { payload } = await jwtVerify(token, JWT_SECRET);
      console.log("Token verification successful:", payload);
      if (!payload) {
        console.log("Invalid token, redirecting to login");
        return NextResponse.redirect(new URL("/auth/login", request.url));
      }
    } catch (error) {
      // Assert that the error is an instance of Error
      if (error instanceof Error) {
        console.log("Token verification failed:", error.message);
      } else {
        // Handle unknown error type
        console.log("Token verification failed: Unknown error");
      }
      return NextResponse.redirect(new URL("/auth/login", request.url));
    }
    
  }

  console.log("Access granted to:", path);
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"], // Only run middleware on these routes
};
