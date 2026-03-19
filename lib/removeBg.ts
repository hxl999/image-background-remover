export interface RemoveBgResponse {
  success: boolean;
  image?: string;
  error?: string;
}

export async function processImage(base64Image: string): Promise<RemoveBgResponse> {
  try {
    const response = await fetch("/api/remove-bg", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ image: base64Image }),
    });

    return await response.json();
  } catch (error) {
    console.error("Error processing image:", error);
    return {
      success: false,
      error: "Failed to process image. Please try again.",
    };
  }
}
