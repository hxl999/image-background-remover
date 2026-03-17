import axios from "axios";

export interface RemoveBgResponse {
  success: boolean;
  image?: string;
  error?: string;
}

export async function processImage(base64Image: string): Promise<RemoveBgResponse> {
  try {
    // In production, this would call your API route
    // For now, we'll simulate the API call structure
    const response = await axios.post("/api/remove-bg", {
      image: base64Image,
    });

    return response.data;
  } catch (error) {
    console.error("Error processing image:", error);
    return {
      success: false,
      error: "Failed to process image. Please try again.",
    };
  }
}