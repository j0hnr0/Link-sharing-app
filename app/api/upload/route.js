import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get("image");

    if (!file) {
      return NextResponse.json(
        { message: "No file uploaded" },
        { status: 400 }
      );
    }

    if(!file.type.startsWith('image/')) {
        return NextResponse.json(
            {message: "File must be an image"},
            {status: 400}
        );
    }

    // 5MB limit
    if (file.size > 5 * 1024 * 1024) {
        return NextResponse.json(
            {message: "File size must be less than 5MB"},
            {status: 400}
        )
    }

    const bytes = await file.arrayBuffer();
    
  } catch (error) {}
}
