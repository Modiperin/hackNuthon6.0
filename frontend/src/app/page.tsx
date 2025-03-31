import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DiagnosisSection } from "@/components/DiagnosisSection";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import {
  ChartLine,
  Clock,
  Eye,
  FastForward,
  HandHelping,
  Lock,
  Pipette,
  WashingMachine,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 w-full border-b border-blue-100 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex cursor-pointer items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Arjun AI
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#diagnosis"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Diagnosis
              </a>
              <a
                href="#advantages"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                AI Advantages
              </a>
              <a
                href="#overview"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Overview
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 rounded-lg hover:bg-gray-100">
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="technology"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

        {/* Animated Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        {/* Content */}
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8 animate-fade-in">
              AI-Powered Healthcare
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
              Revolutionizing disease detection through advanced image
              processing and artificial intelligence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#diagnosis"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                Start Diagnosis
              </a>
              <a
                href="#overview"
                className="px-8 py-4 bg-white text-gray-900 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Stats Section */}
          <div
            style={{ marginTop: "40px" }}
            className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center transform hover:scale-105 transition-all duration-300 flex-1 min-w-[200px]">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                <AnimatedCounter end={99} suffix="%" />
              </div>
              <div className="text-gray-600 text-lg">Diagnostic Accuracy</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center transform hover:scale-105 transition-all duration-300 flex-1 min-w-[200px]">
              <div className="text-4xl font-bold text-purple-600 mb-2">
                <AnimatedCounter end={24} suffix="/7" />
              </div>
              <div className="text-gray-600 text-lg">Instant Analysis</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center transform hover:scale-105 transition-all duration-300 flex-1 min-w-[200px]">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                <AnimatedCounter end={100} suffix="K+" />
              </div>
              <div className="text-gray-600 text-lg">Images Analyzed</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center transform hover:scale-105 transition-all duration-300 flex-1 min-w-[200px]">
              <div className="text-4xl font-bold text-purple-600 mb-2">
                <AnimatedCounter end={3} suffix="+" />
              </div>
              <div className="text-gray-600 text-lg">Diagnosis Types</div>
            </div>
          </div>
        </div>
      </section>

      {/* Dermoscopy Section */}
      <section id="dermoscopy" className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Understanding Dermoscopy
            </h2>
            <p className="text-xl text-gray-600">
              Advanced imaging technology for precise skin analysis
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-10 transform hover:scale-[1.02] transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  What is Dermoscopy?
                </h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Dermoscopy (also called epiluminescence microscopy or skin
                surface microscopy) is a non-invasive, in vivo imaging technique
                used to examine skin lesions with high magnification. It helps
                dermatologists visualize subsurface structures in the epidermis,
                dermo-epidermal junction, and upper dermis, which are otherwise
                invisible to the naked eye.
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-10 transform hover:scale-[1.02] transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Clinical Applications
                </h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Dermoscopy is especially useful for early detection of skin
                cancers, including melanoma, basal cell carcinoma (BCC), and
                squamous cell carcinoma (SCC), as well as diagnosing benign skin
                conditions like seborrheic keratoses, warts, and fungal
                infections.
              </p>
            </div>
            <div className="md:col-span-2 bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-10 transform hover:scale-[1.02] transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-blue-600"
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
                <h3 className="text-2xl font-bold text-gray-900">
                  Digital Dermoscopy Images
                </h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Dermoscopy lesion images are high-resolution images of skin
                lesions captured using a dermoscope (a specialized magnifying
                tool with a light source). These images are used for
                computer-aided diagnosis (CAD), medical research, and clinical
                assessments. Our AI technology analyzes these specialized images
                to provide accurate and timely diagnostic insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Diagnosis Sections */}
      <section id="diagnosis" className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              AI-Powered Diagnosis
            </h2>
            <p className="text-xl text-gray-600">
              Advanced diagnostic capabilities across multiple medical
              specialties
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="md:mt-16">
              <DiagnosisSection
                title="Skin"
                description="Our AI analyzes skin images to detect various dermatological conditions, including skin cancer, rashes, and infections. Get instant preliminary diagnosis and recommendations."
                icon={<HandHelping className="w-6 h-6 text-white" />}
                gradient="bg-gradient-to-br from-purple-500 to-blue-600"
                link="/diagnose/skin"
              />
            </div>
            <DiagnosisSection
              title="Throat"
              description="Our AI analyzes throat images to detect early signs of infections, inflammation, and other throat conditions. Get rapid preliminary analysis of throat examinations with high accuracy."
              icon={<Pipette className="w-6 h-6 text-white" />}
              gradient="bg-gradient-to-br from-blue-500 to-purple-600"
              link="/diagnose/throat"
            />
            <div className="md:mt-16">
              <DiagnosisSection
                title="Retina"
                description="Our AI analyzes retinal images to detect early signs of diabetic retinopathy, macular degeneration, and other eye conditions. Get rapid preliminary analysis of fundus images with high accuracy."
                icon={<Eye className="w-6 h-6 text-white" />}
                gradient="bg-gradient-to-br from-blue-500 to-purple-600"
                link="/diagnose/retina"
              />
            </div>
            <DiagnosisSection
              title="Breast"
              description="Our AI analyzes breast X-ray images to detect early signs of breast cancer, calcifications, and other breast abnormalities. Get rapid preliminary analysis of mammograms with high accuracy."
              icon={<WashingMachine className="w-6 h-6 text-white" />}
              gradient="bg-gradient-to-br from-purple-500 to-blue-600"
              link="/diagnose/breast"
            />
          </div>
        </div>
      </section>

      {/* AI Benefits Section */}
      <section id="advantages" className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              AI Diagnostic Advantages
            </h2>
            <p className="text-xl text-gray-600">
              How AI enhances medical diagnosis and patient care
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Enhanced Accuracy
              </h3>
              <p className="text-gray-700">
                AI algorithms achieve diagnostic accuracy rates of up to 99%,
                significantly reducing misdiagnosis and improving patient
                outcomes through precise disease detection.
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FastForward className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Early Detection
              </h3>
              <p className="text-gray-700">
                AI can identify subtle patterns and early-stage abnormalities
                that human eyes might miss, enabling earlier intervention and
                better treatment outcomes.
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Rapid Analysis
              </h3>
              <p className="text-gray-700">
                AI processes medical images in seconds, providing immediate
                diagnostic insights and enabling faster treatment decisions
                compared to traditional methods.
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Real-time Analysis
              </h3>
              <p className="text-gray-700">
                Instant processing of medical images with advanced AI algorithms
                for immediate diagnostic insights and treatment recommendations.
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <ChartLine className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Predictive Analytics
              </h3>
              <p className="text-gray-700">
                Advanced predictive models analyze patient data to forecast
                health outcomes and recommend preventive measures.
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Secure Platform
              </h3>
              <p className="text-gray-700">
                HIPAA-compliant infrastructure ensuring patient data security
                and privacy while maintaining seamless accessibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Healthcare Innovation
            </h2>
            <p className="text-xl text-gray-600">
              Advancing medical technology through AI and digital solutions
            </p>
          </div>
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-8">
            <Accordion
              type="single"
              collapsible
              className="w-full"
              defaultValue="ai-technology"
            >
              <AccordionItem value="ai-technology">
                <AccordionTrigger className="text-xl font-semibold">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    Advanced AI Technology
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  Our cutting-edge AI algorithms leverage deep learning and
                  computer vision to analyze medical images with unprecedented
                  accuracy. Trained on millions of medical images, our neural
                  networks can detect even the most subtle abnormalities. The
                  technology continuously learns and improves from each
                  analysis, ensuring increasingly accurate diagnoses.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="imaging">
                <AccordionTrigger className="text-xl font-semibold">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-white"
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
                    Comprehensive Imaging
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  Supporting multiple medical imaging modalities including
                  X-rays, MRIs, CT scans, and ultrasound. Our technology
                  provides comprehensive diagnostic capabilities across various
                  medical specialties. Each imaging type is optimized for
                  specific diagnostic needs, ensuring the most accurate results
                  for every case.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="integration">
                <AccordionTrigger className="text-xl font-semibold">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    Integrated Healthcare Solution
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  We combine machine learning with medical expertise to create a
                  comprehensive digital healthcare solution that improves
                  diagnosis accuracy and patient outcomes. Our platform
                  seamlessly integrates with existing medical systems, enabling
                  real-time analysis and immediate diagnostic insights. The
                  solution is designed to work alongside healthcare
                  professionals, enhancing their capabilities rather than
                  replacing them.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-full p-4 shadow-lg">
            <p className="text-gray-600">
              © 2024 Arjun AI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
