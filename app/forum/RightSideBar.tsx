const RightSidebar = () => {
  const contributors = [
    { name: "Alice Green", contributions: 120 },
    { name: "John Doe", contributions: 98 },
    { name: "Sophia Fern", contributions: 85 },
  ];

  return (
    <aside className="w-full lg:w-72 hidden lg:block  dark:border-gray-700 bg-gray-100 dark:bg-gray-900 p-4 space-y-6">
      {/* Suggestions Section */}
      <section className="bg-white dark:bg-gray-800 p-4 rounded-lg">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Suggestions</h2>
        <ul className="mt-3 space-y-2">
          <li className="text-sm text-gray-600 dark:text-gray-400">
            🌱 <a href="#" className="hover:underline">How to care for ferns?</a>
          </li>
          <li className="text-sm text-gray-600 dark:text-gray-400">
            🌸 <a href="#" className="hover:underline">Best indoor plants for air quality</a>
          </li>
          <li className="text-sm text-gray-600 dark:text-gray-400">
            🌵 <a href="#" className="hover:underline">Cactus care 101</a>
          </li>
        </ul>
      </section>

      {/* Blog Exploration Section */}
      <section className="bg-white dark:bg-gray-800 p-4 rounded-lg">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Explore Blog</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
          Dive into our blog for the latest updates, plant care guides, and community stories.
        </p>
        <div className="mt-3 text-right">
          <a
            href="/blog"
            className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white text-sm rounded-lg"
          >
            Visit Blog
          </a>
        </div>
      </section>

      {/* Top Contributors Section */}
      <section className="bg-white dark:bg-gray-800 p-4 rounded-lg">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
          Top Contributors
        </h2>
        <ul className="mt-3 space-y-2">
          {contributors.map((contributor, index) => (
            <li key={index} className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-400">
              <span>{contributor.name}</span>
              <span className="text-gray-500 dark:text-gray-400">{contributor.contributions} posts</span>
            </li>
          ))}
        </ul>
      </section>
    </aside>
  );
};

export default RightSidebar;
