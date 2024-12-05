import { FaHome, FaQuestion, FaTags, FaBlog, FaShoppingBag } from "react-icons/fa";

const LeftSidebar = () => {
  return (
    <aside className="w-64 hidden lg:flex bg-gray-100 dark:bg-gray-900 h-screen flex-col p-4 space-y-6  dark:border-gray-700">
      {/* Navigation Section */}
      <nav>
        <ul className="space-y-3">
          <li>
            <a
              href="#"
              className="flex items-center px-4 py-2 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              <span className="material-icons-outlined text-lg mr-3"><FaHome /></span>
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center px-4 py-2 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              <span className="material-icons-outlined text-lg mr-3"><FaQuestion /></span>
              Questions
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center px-4 py-2 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              <span className="material-icons-outlined text-lg mr-3"><FaTags /></span>
              Tags
            </a>
          </li>
        </ul>
      </nav>

      {/* Labs Section */}
      <div>
        <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
          Links
        </h3>
        <ul className="space-y-3 mt-3">
          <li>
            <a
              href="#"
              className="flex items-center px-4 py-2 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              <span className="material-icons-outlined text-lg mr-3"><FaBlog /></span>
              Blogs
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center px-4 py-2 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              <span className="material-icons-outlined text-lg mr-3"><FaShoppingBag /></span>
              Shop
            </a>
          </li>
        </ul>
      </div>

      {/* Collectives Section */}
      <div>
        <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
          Collectives
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
          Communities for your favorite technologies.{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Explore all Collectives
          </a>
        </p>
      </div>

      {/* Teams Section */}
      <div className="bg-gray-200 dark:bg-gray-800 rounded-lg p-4">
        <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200">
          Teams
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
          Ask questions, find answers, and collaborate at work with Teams.
        </p>
        <a
          href="#"
          className="block mt-3 px-4 py-2 text-center bg-orange-500 hover:bg-orange-600 text-white text-sm rounded-lg"
        >
          Contact Our Team
        </a>
        
      </div>
    </aside>
  );
};

export default LeftSidebar;
