import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";
import { NextResponse } from "next/server";
import { saveUserLinks } from "@/app/lib/link-service";

export async function POST(request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const userId = session.user.id;
    const body = await request.json();
    const { links } = body;

    const savedLinks = await saveUserLinks({ userId, links });

    return NextResponse.json(
      { message: "Links saved successfully", links: savedLinks },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: error.message || "Failed to save links" },
      { status: 500 }
    );
  }
}
