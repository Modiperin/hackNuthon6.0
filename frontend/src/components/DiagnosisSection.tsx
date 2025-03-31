interface DiagnosisSectionProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  link: string;
}

export function DiagnosisSection({
  title,
  description,
  icon,
  gradient,
  link,
}: DiagnosisSectionProps) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 flex flex-col h-full">
      <div className="flex items-center gap-4 mb-6">
        <div
          className={`w-12 h-12 ${gradient} rounded-full flex items-center justify-center`}
        >
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-700 mb-8 flex-grow">{description}</p>
      <div className="mt-auto">
        <a
          href={link}
          className="w-full bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors text-center cursor-pointer flex items-center justify-center gap-2"
        >
          <svg
            className="w-5 h-5"
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
          Upload Image for Diagnosis
        </a>
      </div>
    </div>
  );
}
