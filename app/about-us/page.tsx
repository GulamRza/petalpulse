const AboutUs = () => {
    return (
      <section className="bg-gray-100 dark:bg-gray-900 py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          {/* Heading */}
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            About Us
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Welcome to our plant lovers' community! Our mission is to inspire a love for greenery and help you
            grow thriving plants in your home or garden. We believe that nurturing plants nurtures the soul.
          </p>
  
          {/* Our Mission Section */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              We aim to create a vibrant community where plant enthusiasts can connect, learn, and share their
              experiences. From beginners to seasoned gardeners, everyone is welcome here!
            </p>
          </div>
  
          {/* Team Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
              <img
                src="/thumbnail-image.png"
                alt="Team Member 1"
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                Gulam Raza
              </h3>
              <p className="text-gray-600 dark:text-gray-300">Founder & Plant Enthusiast</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
              <img
                src="/thumbnail-image.png"
                alt="Team Member 2"
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                Jamie Bloom*
              </h3>
              <p className="text-gray-600 dark:text-gray-300">Community Manager</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
              <img
                src="/thumbnail-image.png"
                alt="Team Member 3"
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                Riley Fern*
              </h3>
              <p className="text-gray-600 dark:text-gray-300">Plant Care Specialist</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutUs;
  