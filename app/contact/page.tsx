import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Contact = () => {
    return (
      <section className="bg-gray-100 dark:bg-gray-900 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Page Heading */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              Contact Us
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Have questions or need assistance? Feel free to reach out to us.
            </p>
          </div>
  
          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                Send Us a Message
              </h2>
              <form>
                <div className="mb-4">
                  <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-green-400"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-green-400"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-green-400"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white font-semibold py-2 rounded-lg hover:bg-green-700 transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
  
            {/* Contact Info */}
            <div>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                  Contact Information
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  We’d love to hear from you. Reach out to us using any of the options below:
                </p>
                <ul>
                  <li className="mb-2">
                    <strong className="text-gray-600 dark:text-gray-200">Email:</strong>{' '}
                    <a
                      href="mailto:info@plantlovers.com"
                      className="text-green-600 hover:underline dark:text-green-400"
                    >
                      info@plantlovers.com
                    </a>
                  </li>
                  <li className="mb-2">
                    <strong className="text-gray-600 dark:text-gray-200">Phone:</strong>{' '}
                    <a href="tel:+123456789" className="text-green-600 hover:underline dark:text-green-400">
                      +123 456 789
                    </a>
                  </li>
                  <li>
                    <strong className="text-gray-600 dark:text-gray-200">Address:</strong> <span className="text-green-600 hover:underline dark:text-green-400">123 Greenway, Plant City, PC 56789</span>
                  </li>
                </ul>
              </div>
  
              {/* Social Links */}
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                  Follow Us
                </h2>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center bg-green-600 text-white rounded-full hover:bg-green-700 transition duration-300"
                    aria-label="Facebook"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center bg-green-600 text-white rounded-full hover:bg-green-700 transition duration-300"
                    aria-label="Twitter"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center bg-green-600 text-white rounded-full hover:bg-green-700 transition duration-300"
                    aria-label="Instagram"
                  >
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Contact;
  