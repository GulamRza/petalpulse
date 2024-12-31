import Image from "next/image";
import Link from "next/link";

const CheckUpFeatureHightLight = () => {
  return (
    <section id="plant-disease-highlight" className="bg-gray-100 dark:bg-green-900 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8">
        {/* Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl lg:text-7xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            Diagnose Your Plants
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
            Upload a photo of your plant and instantly discover any diseases it might have, along with expert solutions.
          </p>
          <h1>
            <Link
              href="/checkup"
              className="bg-green-600 text-white text-2xl font-semibold py-3 px-6 rounded-lg hover:bg-green-700 transition duration-300"
            >
              Try It Now
            </Link>
          </h1>
        </div>

        {/* Image/Illustration */}
        <div className="lg:w-1/2">
          <Image
            src="/plant-diagnosis.webp"
            width={400}
            height={400}
            alt="Plant Disease Detection"
            className="w-full max-w-md mx-auto rounded-2xl h-1/2 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default CheckUpFeatureHightLight;
