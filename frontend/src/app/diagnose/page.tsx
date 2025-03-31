"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { UploadCard } from "@/components/UploadCard";
import { Features } from "@/components/Features";

export default function DiagnosePage() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleImageSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setError(null);

    if (file) {
      // Check file type
      if (!file.type.startsWith("image/jpeg")) {
        setError("Please upload a JPG image file");
        return;
      }

      // Check file size (10MB limit)
      if (file.size > 10 * 1024 * 1024) {
        setError("File size should be less than 10MB");
        return;
      }

      setSelectedImage(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
      setPreviewUrl(null);
    }
    setError(null);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navbar showBackButton />

      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                AI Disease Diagnosis
              </h1>
              <p className="text-xl text-gray-600">
                Upload your X-ray image for instant AI-powered analysis
              </p>
            </div>

            <UploadCard
              previewUrl={previewUrl}
              error={error}
              onImageSelect={handleImageSelect}
              onRemoveImage={handleRemoveImage}
              selectedImage={selectedImage}
              title="Upload X-ray Image"
              description="Upload a clear X-ray image for analysis. Supported format: JPG"
              accept=".jpg,.jpeg"
            />

            <Features />
          </div>
        </div>
      </div>
    </main>
  );
}
