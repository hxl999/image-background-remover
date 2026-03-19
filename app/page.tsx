"use client";

import { useState, useRef } from "react";
import { Upload, Download, Trash2, Image as ImageIcon, Loader2 } from "lucide-react";
import ImageUploader from "@/components/ImageUploader";
import ImagePreview from "@/components/ImagePreview";
import { processImage } from "@/lib/removeBg";

export default function Home() {
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setOriginalImage(e.target?.result as string);
      setProcessedImage(null);
      setError(null);
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveBackground = async () => {
    if (!originalImage) return;

    setIsProcessing(true);
    setError(null);

    try {
      const base64Data = originalImage.split(",")[1];
      const result = await processImage(base64Data);
      
      if (result.success && result.image) {
        setProcessedImage(`data:image/png;base64,${result.image}`);
      } else {
        setError(result.error || "Failed to remove background");
      }
    } catch (err) {
      setError("An error occurred while processing the image");
      console.error(err);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleReset = () => {
    setOriginalImage(null);
    setProcessedImage(null);
    setError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            AI Background Remover
          </h1>
          <p className="text-gray-600 text-lg">
            Remove backgrounds from images instantly using AI. Free for up to 50 images per month.
          </p>
        </header>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Upload & Original */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Upload className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-800">Upload Image</h2>
              </div>
              
              <ImageUploader 
                onFileSelect={handleFileSelect}
                fileInputRef={fileInputRef}
              />

              {originalImage && (
                <div className="mt-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-medium text-gray-700">Original Image</h3>
                    <button
                      onClick={handleReset}
                      className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                      Clear
                    </button>
                  </div>
                  <ImagePreview image={originalImage} />
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Processed & Actions */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <ImageIcon className="w-6 h-6 text-purple-600" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-800">Processed Image</h2>
              </div>

              {processedImage ? (
                <div className="space-y-4">
                  <ImagePreview image={processedImage} isProcessed={true} />
                  <div className="flex gap-4">
                    <a
                      href={processedImage}
                      download="background-removed.png"
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
                    >
                      <Download className="w-5 h-5" />
                      Download PNG
                    </a>
                    <button
                      onClick={handleReset}
                      className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      New Image
                    </button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-4">
                    <ImageIcon className="w-10 h-10 text-gray-400" />
                  </div>
                  <p className="text-gray-500">
                    {originalImage 
                      ? "Click the button below to remove the background"
                      : "Upload an image to get started"}
                  </p>
                </div>
              )}
            </div>

            {/* Action Button */}
            {originalImage && !processedImage && (
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl shadow-xl p-6">
                <button
                  onClick={handleRemoveBackground}
                  disabled={isProcessing}
                  className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-white text-gray-800 font-bold text-lg rounded-xl hover:bg-gray-50 disabled:opacity-70 disabled:cursor-not-allowed transition-all transform hover:scale-[1.02]"
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="w-6 h-6 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <div className="p-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded">
                        <ImageIcon className="w-5 h-5 text-white" />
                      </div>
                      Remove Background Instantly
                    </>
                  )}
                </button>
                <p className="text-center text-white/80 text-sm mt-4">
                  Powered by Remove.bg AI • Free for 50 images/month
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-xl">
            <p className="text-red-700 font-medium">{error}</p>
          </div>
        )}

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
          <p>
            This tool uses the Remove.bg API. Images are processed in memory and are not stored.
            Free tier allows 50 images per month.
          </p>
          <p className="mt-2">
            Built with Next.js • Deployed on Cloudflare Pages
          </p>
        </footer>
      </div>
    </div>
  );
}