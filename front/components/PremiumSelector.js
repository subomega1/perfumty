'use client';

export default function PremiumSelector({ premiumIngredients, selectedPremium, onPremiumSelect }) {
  return (
    <div className="space-y-8 font-[Quicksand]">
      <h2 className="text-2xl font-bold text-purple-700 mb-2 tracking-wide">Premium Ingredients</h2>
      <p className="text-gray-600 dark:text-gray-400">
        Add luxury ingredients to enhance your fragrance
      </p>

      <div className="space-y-4">
        {premiumIngredients.map((ingredient) => {
          const isSelected = selectedPremium?.name === ingredient.name;
          return (
            <label
              key={ingredient.name}
              htmlFor={ingredient.name}
              className={`flex items-start p-4 rounded-xl border transition-all cursor-pointer ${
                isSelected
                  ? 'bg-gradient-to-r from-[#E6ADEC] to-[#C287E8] text-white border-purple-400 shadow-lg'
                  : 'border-gray-300 dark:border-gray-600 hover:border-purple-400 hover:shadow-md'
              }`}
            >
              <input
                type="checkbox"
                id={ingredient.name}
                checked={isSelected}
                onChange={() => onPremiumSelect(isSelected ? null : ingredient)}
                className="w-5 h-5 accent-purple-600 mt-1 mr-4 transition-transform duration-200"
              />
              <div>
                <span className={`block font-semibold text-md ${isSelected ? 'text-white' : ''}`}>
                  {ingredient.name}
                </span>
                <p className={`text-sm ${isSelected ? 'text-purple-100' : 'text-gray-500 dark:text-gray-400'}`}>
                  {ingredient.description} (+${ingredient.price})
                </p>
              </div>
            </label>
          );
        })}
      </div>
    </div>
  );
}

