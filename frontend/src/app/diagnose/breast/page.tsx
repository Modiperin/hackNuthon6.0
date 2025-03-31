"use client";

import { UploadCard } from "@/components/UploadCard";
import { DiagnosisNavbar } from "@/components/DiagnosisNavbar";
import { AnalysisResult } from "@/components/AnalysisResult";
import { useState } from "react";

export default function AnalysisSelector() {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [selectedMode, setSelectedMode] = useState<'histopathology' | 'mammography' | null>(null);
  const [segmentedImagePath, setSegmentedImagePath] = useState<string | null>(
    null
  );
  const [className, setClassName] = useState<string | null>(null);
  const [outputImage, setOutputImage] = useState<string | null>(null);

  const handleModeSelect = (mode: 'histopathology' | 'mammography') => {
    if (mode === 'histopathology') {
      window.location.href = 'http://localhost:5173/';
    } else {
      setSelectedMode(mode);
    }
  };

  const handleImageSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 101000 * 1024 * 1024) {
        setError("File size must be less than 10MB");
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

  const handleAnalyze = async() => {
    if (!selectedImage) return;

    setIsAnalyzing(true);
    const formData = new FormData();
    formData.append("image", selectedImage as Blob);

    try {
      const response = await fetch("http://localhost:8001/"+selectedMode, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to analyze image");
      }

      const data = await response.json();
      console.log("Response data:", data);

      if (data.success) {
        setSegmentedImagePath(data?.mammo?.result_url);
        // setClassName(data?.throat?.class_name);
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

  if (!selectedMode) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8">Choose Analysis Mode</h1>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg mr-4" onClick={() => handleModeSelect('histopathology')}>Analyze Histopathology Slides</button>
          <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-lg" onClick={() => handleModeSelect('mammography')}>Analyze Mammography</button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <DiagnosisNavbar />
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {selectedMode === 'histopathology' ? 'Histopathology Slide Analysis' : 'Breast Analysis'}
            </h1>
            <p className="text-xl text-gray-600">
              Upload an image for AI-powered analysis of radiographic findings
            </p>
          </div>

          {segmentedImagePath ? (
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Analysis Result</h2>
              <img src={segmentedImagePath} alt="Analysis Mask" className="max-w-full h-auto" />
              <button onClick={handleBack} className="mt-4 bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">Back</button>
            </div>
          ) : (
            <UploadCard
              previewUrl={previewUrl}
              error={error}
              onImageSelect={handleImageSelect}
              onRemoveImage={handleRemoveImage}
              selectedImage={selectedImage}
              title={selectedMode === 'histopathology' ? 'Upload the Histopathology Slide' : 'Upload the Breast X-ray Image'}
              description={selectedMode === 'histopathology' ? 'Upload a clear slide image for analysis. Supported format: JPG' : 'Upload a clear image for breast analysis. Supported format: JPG'}
              accept=".jpg,.jpeg,.png"
              onAnalyze={handleAnalyze}
            />
          )}
        </div>
      </div>
    </main>
  );
}
