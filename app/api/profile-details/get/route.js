export const dynamic = "force-dynamic";

import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";
import { getProfileInfo } from "@/app/lib/profile-service";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const userId = session.user.id;

    const profileInfo = await getProfileInfo({ userId });

    return NextResponse.json(profileInfo, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message || "Internal server error",
      },
      { status: 500 }
    );
  }
}
