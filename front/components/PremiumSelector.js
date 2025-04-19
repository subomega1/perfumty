'use client';

export default function PremiumSelector({ premiumIngredients, selectedPremium, onPremiumSelect }) {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold mb-6">Premium Ingredients</h2>
      <p className="text-gray-600 dark:text-gray-400">Add luxury ingredients to enhance your fragrance</p>
      
      <div className="space-y-4">
        {premiumIngredients.map((ingredient) => (
          <div
            key={ingredient.name}
            className="flex items-center space-x-3"
          >
            <input
              type="checkbox"
              id={ingredient.name}
              checked={selectedPremium?.name === ingredient.name}
              onChange={() => {
                const isSelected = selectedPremium?.name === ingredient.name;
                onPremiumSelect(isSelected ? null : ingredient);
              }}
              className="w-4 h-4 text-purple-600 rounded border-gray-300 focus:ring-purple-500"
            />
            <label htmlFor={ingredient.name} className="flex-1">
              <span className="font-medium">{ingredient.name}</span>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {ingredient.description} (+${ingredient.price})
              </p>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
