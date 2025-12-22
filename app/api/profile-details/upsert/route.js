export const dynamic = "force-dynamic";

import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";
import { NextResponse } from "next/server";
import { createProfile } from "@/app/lib/profile-service";

export async function POST(request) {
  try {
    const { firstName, lastName, email, profileImage } = await request.json();

    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const userId = session.user.id;

    const profile = await createProfile({
      userId,
      profileImage,
      firstName,
      lastName,
      email,
    });

    return NextResponse.json(
      { message: "Profile created successfully", profile },
      { status: 201 }
    );
  } catch (error) {
    if (error.message === "User not found") {
      return NextResponse.json(
        { message: "User cannot be found." },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}
