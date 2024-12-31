import Image from "next/image";
import PlantGallarySection from "./Components/PlantGallarySection";
import TipsAndGuideSection from "./Components/TipsAndGuideSection";
import TestimonialsSection from "./Components/TestimonialsSection";
import EventAndChallangesSection from "./Components/EventAndChallangesSection";
import ContactUsSection from "./Components/ContactUsSection";
import FAQSection from "./Components/FAQSection";
import CheckUpFeatureHightLight from "./Components/CheckUpFeatureHightLight";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-900 lg:pt-32 pt-10 overflow-hidden ">
        <div className="px-6">
          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-800 dark:text-gray-200 text-center">
            Welcome to the Plant Community
          </h1>

          {/* Tagline */}
          <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300 text-center">
            Join a community of plant lovers! Share tips, discover new plants, and
            learn how to care for them.
          </p>

          {/* Call-to-action buttons */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link href='/auth/register' className="px-6 py-3 bg-green-600 text-white text-lg font-medium rounded-lg hover:bg-green-500 transition">
              Join Us
            </Link>
            <Link href='/about-us' className="px-6 py-3 border border-green-600 text-green-600 text-lg font-medium rounded-lg hover:bg-green-50 transition">
              Learn More
            </Link>
          </div>

        </div>

        {/* Decorative Illustration */}
        <div className="mt-12">
          <div className="w-full h-72 flex gap-40 justify-between">
            {/* Replace the placeholder with a decorative image */}
            <Image
              src="/pi2.png"
              alt="Potted plants"
              width={800}
              height={800}
              className="object-cover w-full h-full translate-y-6 lg:scale-120 mix-blend-multiply dark:mix-blend-screen" 
            />
            <Image
              src="/pi3.png"
              alt="Potted plants"
              width={800}
              height={800}
              className=" w-full h-full translate-y-7 scale-[200%] mix-blend-multiply dark:mix-blend-screen -hue-rotate-[3deg]"
            />
          </div>
        </div>
      </div>

      <section id="about" className="bg-green-800 dark:bg-green-900 text-white py-16">
        <div className="container mx-auto px-6 lg:px-20 text-center lg:text-left">
          <div className="lg:flex items-center space-x-4">
            {/* Left Content: Text */}
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <h2 className="text-3xl lg:text-4xl font-bold ">
                About Our Community
              </h2>
              <p className="mt-4 text-lg leading-relaxed">
                Our mission is to bring plant lovers together and inspire more people
                to discover the joys of plants. Whether you're a seasoned gardener
                or a beginner, you'll find a welcoming space to grow your passion for plants.
              </p>
              <div className="mt-6">
                <p className="text-xl font-semibold">
                  "Let’s grow together!"
                </p>
              </div>
            </div>

            {/* Right Content: Image */}
            <div className="lg:w-1/2 flex justify-center rounded overflow-hidden">
              <img
                // src="/about-plants.png"
                src={'/community-image.webp'}
                alt="Community of plant lovers"
                className="w-full max-w-lg rounded-lg h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <PlantGallarySection />
      <CheckUpFeatureHightLight />
      <TipsAndGuideSection />
      <TestimonialsSection />
      <EventAndChallangesSection />
      <ContactUsSection />
      <FAQSection />

    </>
  );
}
