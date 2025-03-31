import { UploadCard } from "@/components/UploadCard";

interface AnalysisResultProps {
  previewUrl: string;
  onBack: () => void;
}

export function AnalysisResult({ previewUrl, onBack }: AnalysisResultProps) {
  return (
    <div className="space-y-8">
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Diagnosis of the Uploaded Image
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <img
              src={previewUrl}
              alt="Analyzed image"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Primary Diagnosis
              </h3>
              <p className="text-gray-700">
                Eczema (Atopic Dermatitis) - Moderate Severity
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Confidence Level
              </h3>
              <p className="text-gray-700">95%</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Key Observations
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Red, inflamed patches</li>
                <li>Dry, scaly skin</li>
                <li>Moderate itching</li>
                <li>No signs of infection</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Recommended Actions
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Apply prescribed topical corticosteroids</li>
                <li>Use gentle, fragrance-free moisturizers</li>
                <li>Avoid known triggers</li>
                <li>Schedule follow-up in 2 weeks</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <button
          onClick={onBack}
          className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 cursor-pointer"
        >
          Analyze Another Image
        </button>
      </div>
    </div>
  );
}
