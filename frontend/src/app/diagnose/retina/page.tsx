"use client";

import { UploadCard } from "@/components/UploadCard";
import { DiagnosisNavbar } from "@/components/DiagnosisNavbar";
import { AnalysisResult } from "@/components/AnalysisResult";
import { useState } from "react";

export default function SkinSegmentation() {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleImageSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        setError("File size must be less than 10MB");
        return;
      }
      if (!file.type.match(/^image\/(jpeg|png)$/)) {
        setError("Only JPG and PNG images are supported");
        return;
      }
      setError(null);
      setSelectedImage(file);
      setPreviewUrl(URL.createObjectURL(file));
      setIsAnalyzing(false);
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
    setPreviewUrl(null);
    setError(null);
    setIsAnalyzing(false);
  };

  const handleAnalyze = () => {
    setIsAnalyzing(true);
  };

  const handleBack = () => {
    setIsAnalyzing(false);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <DiagnosisNavbar />
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Retina Analysis
            </h1>
            <p className="text-xl text-gray-600">
              Upload a retina image for analysis
            </p>
          </div>

          {!isAnalyzing ? (
            <UploadCard
              previewUrl={previewUrl}
              error={error}
              onImageSelect={handleImageSelect}
              onRemoveImage={handleRemoveImage}
              selectedImage={selectedImage}
              title="Upload Retina Image"
              description="Upload a clear image of retina. Supported formats: JPG, PNG"
              accept=".jpg,.jpeg,.png"
              onAnalyze={handleAnalyze}
            />
          ) : (
            <AnalysisResult previewUrl={previewUrl!} onBack={handleBack} />
          )}
        </div>
      </div>
    </main>
  );
}
