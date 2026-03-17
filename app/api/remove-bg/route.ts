import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function POST(request: NextRequest) {
  try {
    const { image } = await request.json();

    if (!image) {
      return NextResponse.json(
        { success: false, error: "No image provided" },
        { status: 400 }
      );
    }

    // Get API key from environment variable
    const apiKey = process.env.REMOVEBG_API_KEY;
    
    if (!apiKey) {
      console.error("REMOVEBG_API_KEY is not set");
      return NextResponse.json(
        { success: false, error: "Server configuration error" },
        { status: 500 }
      );
    }

    // Call Remove.bg API
    const response = await axios.post(
      "https://api.remove.bg/v1.0/removebg",
      {
        image_file_b64: image,
        size: "auto",
        format: "png",
      },
      {
        headers: {
          "X-Api-Key": apiKey,
          "Content-Type": "application/json",
        },
        responseType: "arraybuffer", // Get binary response
      }
    );

    // Convert binary response to base64
    const base64Image = Buffer.from(response.data, "binary").toString("base64");

    return NextResponse.json({
      success: true,
      image: base64Image,
    });
  } catch (error: any) {
    console.error("Remove.bg API error:", error);

    let errorMessage = "Failed to remove background";
    
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 402) {
        errorMessage = "API quota exceeded. Free tier allows 50 images per month.";
      } else if (error.response?.status === 400) {
        errorMessage = "Invalid image format or size";
      } else if (error.response?.status === 403) {
        errorMessage = "Invalid API key";
      } else if (error.response?.data) {
        // Try to parse error from Remove.bg
        try {
          const errorData = JSON.parse(Buffer.from(error.response.data).toString());
          errorMessage = errorData.errors?.[0]?.title || errorMessage;
        } catch {
          // If can't parse, use default message
        }
      }
    }

    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: error.response?.status || 500 }
    );
  }
}