
import { getLinksPublic } from "@/app/lib/public-profile";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ message: "ID not found" }, { status: 400 });
    }

    const card = await getLinksPublic({ id });

    return NextResponse.json(card, { status: 200 });
  } catch (error) {
    if (error.message === "Card not found") {
      return NextResponse.json({ message: error.message }, { status: 404 });
    }

    return NextResponse.json(
      { message: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}
