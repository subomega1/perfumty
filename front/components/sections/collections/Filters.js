export default function Filters({ activeFilter, setActiveFilter, searchQuery, setSearchQuery }) {
    const filters = ['All', 'Floral', 'Fresh', 'Gourmand', 'Oriental', 'Citrus', 'Woody'];
  
    return (
      <div className="flex flex-col gap-4 mb-12 md:flex-row md:justify-between md:items-center">
        <div className="scent-filters flex gap-3 overflow-x-auto pb-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full whitespace-nowrap transition-all ${
                activeFilter === filter
                  ? 'bg-coral text-white'
                  : 'bg-white text-gray hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="relative w-full md:w-72">
          <input
            type="text"
            placeholder="Search perfumes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-full focus:border-purple focus:ring-2 focus:ring-purple/20 outline-none dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
          />
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">🔍</span>
        </div>
      </div>
    );
  }