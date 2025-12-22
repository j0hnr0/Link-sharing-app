export const dynamic = "force-dynamic";

import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";
import { NextResponse } from "next/server";
import { getUserCardLink } from "@/app/lib/link-service";

export async function GET(request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const userId = session.user.id;

    const card = await getUserCardLink({ userId });

    return NextResponse.json({ links: card.links }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: error.message || "Failed to fetch links" },
      { status: 500 }
    );
  }
}
