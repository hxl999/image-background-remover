"use client";

import { Check } from "lucide-react";

interface ImagePreviewProps {
  image: string;
  isProcessed?: boolean;
}

export default function ImagePreview({ image, isProcessed = false }: ImagePreviewProps) {
  return (
    <div className="relative">
      <div className="relative bg-gray-100 rounded-xl overflow-hidden">
        <img
          src={image}
          alt={isProcessed ? "Processed image" : "Original image"}
          className="w-full h-auto max-h-96 object-contain"
        />
        
        {isProcessed && (
          <div className="absolute top-4 right-4">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-green-500 text-white text-sm font-medium rounded-full">
              <Check className="w-4 h-4" />
              Background Removed
            </div>
          </div>
        )}
      </div>
      
      {isProcessed && (
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1.5 rounded-full text-sm font-medium shadow-lg">
            Transparent PNG
          </div>
        </div>
      )}
    </div>
  );
}