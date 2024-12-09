import Link from "next/link";
import Image from "next/image";


const NotFoundPage = () => {
  return (
    <div className="py-20 flex flex-col items-center justify-center bg-gradient-to-b from-green-100 to-green-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl text-center px-4 flex flex-col lg:flex-row gap-4 items-center">
        {/* Illustration */}
          <Image
            src="/not-found-illustration.jpg"
            alt="Not Found Illustration"
            width={600}
            height={600}
            className="w-full max-w-md mix-blend-multiply"
          />

        <div>
          {/* Title */}
          <h1 className="text-5xl font-extrabold text-green-700 dark:text-green-300">
            Page Not Found
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Sorry, we couldn’t find the page you’re looking for. It may have been
            removed or moved to another location.
          </p>

          {/* Search or Actions */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="px-6 py-3 bg-green-600 text-white rounded-lg  hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800"
            >
              Go to Homepage
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
