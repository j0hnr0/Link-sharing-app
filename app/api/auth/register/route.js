import { createUser } from "@/app/lib/user-service";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    const user = await createUser({ email, password });

    return NextResponse.json(
      {
        message: "User registered successfully",
        user: { id: user.id, email: user.email },
      },
      { status: 201 }
    );
  } catch (error) {
    if (error.message === "User already exists") {
      return NextResponse.json(
        { message: "User with this email already exist" },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { message: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}
