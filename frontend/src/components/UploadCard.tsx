import { ChangeEvent } from "react";
import { Card } from "@/components/ui/card";
import { Trash2Icon } from "lucide-react";
import "./style.css";

interface UploadCardProps {
  previewUrl: string | null;
  error: string | null;
  onImageSelect: (event: ChangeEvent<HTMLInputElement>) => void;
  onRemoveImage: () => void;
  selectedImage: File | null;
  title: string;
  description: string;
  accept: string;
  onAnalyze: () => void;
}

export function UploadCard({
  previewUrl,
  error,
  onImageSelect,
  onRemoveImage,
  title,
  description,
  accept,
  onAnalyze,
}: UploadCardProps) {
  return (
    <Card className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl">
      <div className="relative">
        {/* Decorative Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 to-purple-100/20 rounded-3xl"></div>

        {/* Content */}
        <div className="relative" style={{ padding: "20px" }}>
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
            <p className="text-gray-600">{description}</p>
          </div>

          {/* Upload Area or Image Preview */}
          {!previewUrl ? (
            <div
              id="upload-area"
              className="border-2 border-dashed border-gray-300 rounded-2xl p-8 hover:border-blue-500 transition-all duration-300 text-center"
            >
              <input
                type="file"
                accept={accept}
                onChange={onImageSelect}
                className="hidden"
                id="image-upload"
              />
              <label
                htmlFor="image-upload"
                className="cursor-pointer flex flex-col items-center"
              >
                <svg
                  className="w-12 h-12 text-gray-400 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-gray-600">
                  Click here to upload an image
                </span>
                <span className="text-sm text-gray-500 mt-2">
                  Supported formats: {accept}
                </span>
              </label>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="relative group">
                <img
                  src={previewUrl}
                  alt="Preview"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                <button
                  onClick={onRemoveImage}
                  className="absolute top-4 right-4 p-2 text-white rounded-full hover:bg-red-600 transition-colors shadow-lg opacity-0 group-hover:opacity-100 cursor-pointer"
                  aria-label="Remove image"
                  style={{
                    backgroundColor: "red",
                  }}
                >
                  <Trash2Icon className="w-6 h-6" />
                </button>
              </div>
              <div className="flex justify-center">
                <button
                  onClick={onAnalyze}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                >
                  Analyze Image
                </button>
              </div>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="text-red-500 text-center text-sm">{error}</div>
          )}
        </div>
      </div>
    </Card>
  );
}
