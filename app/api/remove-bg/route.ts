import { NextRequest, NextResponse } from "next/server";

export const runtime = 'edge';

export async function POST(request: NextRequest) {
  try {
    const { image } = await request.json();

    if (!image) {
      return NextResponse.json(
        { success: false, error: "No image provided" },
        { status: 400 }
      );
    }

    const apiKey = process.env.REMOVEBG_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { success: false, error: "Server configuration error" },
        { status: 500 }
      );
    }

    const response = await fetch("https://api.remove.bg/v1.0/removebg", {
      method: "POST",
      headers: {
        "X-Api-Key": apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        image_file_b64: image,
        size: "auto",
        format: "png",
      }),
    });

    if (!response.ok) {
      let errorMessage = "Failed to remove background";
      if (response.status === 402) {
        errorMessage = "API quota exceeded. Free tier allows 50 images per month.";
      } else if (response.status === 400) {
        errorMessage = "Invalid image format or size";
      } else if (response.status === 403) {
        errorMessage = "Invalid API key";
      }
      return NextResponse.json(
        { success: false, error: errorMessage },
        { status: response.status }
      );
    }

    const arrayBuffer = await response.arrayBuffer();
    const bytes = new Uint8Array(arrayBuffer);
    let binary = '';
    for (let i = 0; i < bytes.length; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    const base64Image = btoa(binary);

    return NextResponse.json({
      success: true,
      image: base64Image,
    });
  } catch (error: any) {
    console.error("Remove.bg API error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to remove background" },
      { status: 500 }
    );
  }
}