import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const JWT_SECRET = "hbjgvgjvgjhbvvutyrcf";

// Function to verify if the user is an admin
export const verifyAdmin = async (request: NextRequest) => {
  const token = request.cookies.get("token")?.value; // Extract token value
  console.log(token);

  if (!token) {
    return NextResponse.json({ error: "Authentication required", token }, { status: 401 });
  }

  try {
    console.log("its going here");

    // Verify the token
    const decoded = jwt.verify(token, JWT_SECRET) as { userId: string; role: string };
    console.log(decoded, "this is decode value");

    // Check if the user is an admin
    if (decoded.role !== "admin") {
      return NextResponse.json({ error: "Access denied. Admins only" }, { status: 403 });
    }

    // If the role is admin, return the decoded token to proceed
    return decoded;
  } catch (error: unknown) {
    // Handle the error appropriately based on the type of error
    if (error instanceof Error) {
      console.error("JWT Verification Error:", error.message);
    } else {
      console.error("Unknown error during JWT verification.");
    }
    return NextResponse.json({ error: "Invalid or expired token" }, { status: 401 });
  }
};


// Function to verify if the user exists in the database or not
// This is applied when calling APIs
// export const verifyfromDatabase = async (request: NextRequest) => {
//   const token = request.cookies.get("token")?.value; // Extract token value
//   console.log("Received token:", token);

//   if (!token) {
//     return NextResponse.json({ error: "Authentication required" }, { status: 401 });
//   }

//   try {
//     console.log("Verifying token...");

//     // Verify the token
//     const decoded = jwt.verify(token, JWT_SECRET) as { email: string; role: string };
//     console.log("Decoded token:", decoded);

//     if (!decoded.email) {
//       return NextResponse.json({ error: "Invalid token data" }, { status: 401 });
//     }

//     // Connect to the database
//     await connectToDatabase();

//     // Find user in the database by email
//     const user = await User.findOne({ email: decoded.email });

//     if (!user) {
//       return NextResponse.json({ error: "User not found" }, { status: 404 });
//     }

//     if (user.role !== "admin") {
//       return NextResponse.json({ error: "User not authorized" }, { status: 403 });
//     }

//     return decoded; // If everything is fine, return the decoded user data

//   } catch (error: unknown) {
//     // Handle the error appropriately based on the type of error
//     if (error instanceof Error) {
//       console.error("JWT Verification Error:", error.message);
//     } else {
//       console.error("Unknown error during JWT verification.");
//     }
//     return NextResponse.json({ error: "Invalid or expired token" }, { status: 401 });
//   }
// };
