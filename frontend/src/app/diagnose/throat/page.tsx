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
  const [segmentedImagePath, setSegmentedImagePath] = useState<string | null>(
    null
  );
  const [className, setClassName] = useState<string | null>(null);

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

  const handleAnalyze = async () => {
    if (!selectedImage) return;

    setIsAnalyzing(true);
    const formData = new FormData();
    formData.append("image", selectedImage as Blob);

    try {
      const response = await fetch("http://localhost:8001/throat", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to analyze image");
      }

      const data = await response.json();
      console.log("Response data:", data);

      if (data.success) {
        setSegmentedImagePath(data?.throat?.result_url);
        setClassName(data?.throat?.class_name);
      } else {
        throw new Error(data?.error || "Failed to analyze image");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Failed to analyze image. Please try again.");
    } finally {
      setIsAnalyzing(false);
    }
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
              Skin Disease Diagnosis
            </h1>
            <p className="text-xl text-gray-600">
              Upload a skin image for AI-powered analysis of dermatological
              conditions
            </p>
          </div>

          {!isAnalyzing ? (
            <div className="space-y-8">
              <UploadCard
                previewUrl={previewUrl}
                error={error}
                onImageSelect={handleImageSelect}
                onRemoveImage={handleRemoveImage}
                selectedImage={selectedImage}
                title="Upload Skin Image"
                description="Upload a clear image of the affected skin area. Supported formats: JPG, PNG"
                accept=".jpg,.jpeg,.png"
                onAnalyze={handleAnalyze}
              />

              {/* Show classification result if available */}
              {className && (
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h2 className="text-2xl font-semibold mb-4">
                    Classification Result
                  </h2>
                  <div className="text-xl text-gray-700">
                    Predicted Condition:{" "}
                    <span className="font-bold text-blue-600">{className}</span>
                  </div>
                </div>
              )}

              {/* Show segmented image if available */}
              {segmentedImagePath && (
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h2 className="text-2xl font-semibold mb-4">
                    Segmentation Result
                  </h2>
                  <img
                    src={segmentedImagePath}
                    alt="Segmented skin analysis"
                    className="max-w-full h-auto rounded-lg shadow-md"
                    onError={(e) => console.error("Image load error:", e)}
                  />
                </div>
              )}
            </div>
          ) : (
            <AnalysisResult previewUrl={previewUrl!} onBack={handleBack} />
          )}
        </div>
      </div>
    </main>
  );
}
