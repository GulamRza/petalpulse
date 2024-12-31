import FilterBar from "./FilterBar";



export default function Marketplace() {
    return (
      <div className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 min-h-screen">
        {/* Hero Section */}
        {/* <section className="relative bg-gradient-to-r from-green-600 to-lime-800 dark:from-green-700 dark:to-green-900 text-white py-20 px-8">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to the Plant Marketplace</h1>
            <p className="text-lg mb-6">Discover and shop for beautiful plants, accessories, and more!</p>
            <button className="bg-white text-green-600 dark:text-gray-900 px-6 py-3 rounded-lg ">
              Shop Now
            </button>
          </div>
        </section> */}
  
        {/* Search & Filter Tools */}
        <section className="py-10 px-6">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-6 items-center justify-center">
            <input
              type="text"
              placeholder="Search plants or products..."
              className="w-full lg:w-3/4 px-4 py-3 rounded-lg  dark:bg-gray-800 dark:border-gray-700 border border-gray-300 focus:outline-none"
            />
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg">
              Search
            </button>
          </div>
        </section>

        {/* Filter Bar */}
        <FilterBar />

        {/* Product Catalog */}
        <section className="py-10 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Featured Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Example Product Card */}
              {[...Array(6)].map((_, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-2xl  p-4"
                >
                  <img
                    src="thumbnail-image.png"
                    alt="Plant"
                    className="rounded-lg mb-4 w-full h-48 object-cover"
                  />
                  <h3 className="text-lg font-semibold mb-2">Plant Name</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    Indoor, Low Light, Easy to Care
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-lg">$19.99</span>
                    <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* Categories */}
        <section className="py-10 px-6 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Shop by Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {["Indoor Plants", "Outdoor Plants", "Accessories"].map((category, idx) => (
                <div
                  key={idx}
                  className="bg-green-100 dark:bg-gray-700 rounded-lg p-6 text-center"
                >
                  <h3 className="text-xl font-semibold mb-2">{category}</h3>
                  <p className="text-gray-600 dark:text-gray-300">Discover the best options in {category.toLowerCase()}.</p>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        

        {/* Offers Section */}
        <section className=" py-10 px-6 bg-gray-50 dark:bg-gray-800 text-center">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl font-bold mb-4">Nearby Shops For You</h2>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224399.0689009885!2d76.79192859453121!3d28.502563000000013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19c28261efa5%3A0x7c7cffee5ffb7d58!2sNurturing%20Green!5e0!3m2!1sen!2sin!4v1733142801792!5m2!1sen!2sin" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-full h-72 rounded-lg dark:invert-[90%] dark:hue-rotate-180 border-2 border-gray-400"></iframe>
            </div>
        </section>


      </div>
    );
  }
  