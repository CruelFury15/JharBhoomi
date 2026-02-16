import funnel from '../images/funnel.svg';
import shop from '../images/shop.svg';  
import award from '../images/award.svg';
import home from '../images/home.svg';
import month from '../images/month.svg';
import guide from '../images/guide.svg';
import food from '../images/food.svg';

function Leftbar() {
  const categories = [
    { name: 'All Products', icon: shop, count: 14 },
    { name: 'Handicraft', icon: award, count: 2 },
    { name: 'Homestays', icon: home, count: 1 },
    { name: 'Food & Cuisines', icon: food, count: 1 },
    { name: 'Tour Guides', icon: guide, count: 1 },
    { name: 'Events & Festivals', icon: month, count: 1 }
  ];

  return (
    <div className="rounded-2xl border border-yellow-200 bg-red shadow-sm dark:border-yellow-800 dark:bg-red-900 overflow-hidden">
      {/* Header */}
      <div className="bg-yellow-600 px-6 py-4 flex items-center gap-3">
        <img src={funnel} alt="Filter" className="w-5 h-5 filter invert" />
        <h3 className="text-lg font-bold text-white">Categories</h3>
      </div>

      {/* Categories List */}
      <div className="divide-y divide-yellow-200 dark:divide-red-800">
        {categories.map((category, index) => (
          <button
            key={index}
            className="w-full px-6 py-4 flex items-center justify-between hover:bg-yellow-50 dark:hover:bg-red-800 transition-colors text-left group"
          >
            <div className="flex items-center gap-3">
              <img 
                src={category.icon} 
                alt={category.name} 
                className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" 
              />
              <span className="text-sm font-medium text-yellow-700 dark:text-red-500 group-hover:text-yellow-600 dark:group-hover:text-red-800">
                {category.name}
              </span>
            </div>
            <span className="inline-flex items-center justify-center min-w-8 h-6 px-2 text-xs font-semibold rounded-full bg-yellow-100 text-red-600 dark:bg-yellow-900/30 dark:text-red-400">
              {category.count}
            </span>
          </button>
        ))}
      </div>

      {/* Additional Filters */}
      <div className="p-6 border-t border-yellow-200 dark:border-red-800 space-y-4">
        <div>
          <label className="block text-sm font-medium text-yellow-900 dark:text-red-200 mb-3">
            Price Range
          </label>
          <input
            type="range"
            min="0"
            max="10000"
            defaultValue="5000"
            className="w-full h-2 bg-yellow-200 rounded-lg appearance-none cursor-pointer dark:bg-red-700"
          />
          <div className="flex justify-between text-xs text-yellow-900 dark:text-red-200 mt-2">
            <span>₹0</span>
            <span>₹10,000</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium  text-yellow-900 dark:text-red-200 mb-3">
            Availability
          </label>
          <div className="space-y-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                defaultChecked
                className="w-4 h-4 rounded border-yellow-300 text-red-600 focus:ring-red-500"
              />
              <span className="text-sm  text-yellow-900 dark:text-red-200">
                In Stock
              </span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-yellow-300 text-red-600 focus:ring-red-500"
              />
              <span className="text-sm  text-yellow-900 dark:text-red-200">
                Pre-Order
              </span>
            </label>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium  text-yellow-900 dark:text-red-200 mb-3">
            Rating
          </label>
          <div className="space-y-2">
            {[5, 4, 3].map((rating) => (
              <label key={rating} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-yellow-300 text-red-600 focus:ring-red-500"
                />
                <span className="text-sm  text-yellow-900 dark:text-red-200">
                  {'⭐'.repeat(rating)} & up
                </span>
              </label>
            ))}
          </div>
        </div>

        <button className="w-full bg-red-600 hover:bg-red-500 text-white font-semibold py-3 rounded-xl transition-colors">
          Apply Filters
        </button>

        <button className="w-full border border-yellow-200 dark:border-red-900 hover:bg-yellow-50 dark:hover:bg-red-800 text-white-200 dark:text-white font-semibold py-3 rounded-xl transition-colors">
          Reset Filters
        </button>
      </div>
    </div>
  );
}

export default Leftbar;
