'use client';

export default function CharacteristicsSelector({ 
  sizes, 
  intensities, 
  bottles, 
  selectedSize, 
  selectedIntensity, 
  selectedBottle,
  onSizeChange,
  onIntensityChange,
  onBottleChange
}) {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold mb-6">Now select your perfume characteristics</h2>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Size</label>
          <select
            value={selectedSize.name}
            onChange={(e) =>
              onSizeChange(sizes.find(s => s.name === Number(e.target.value)))
            }
            className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-transparent"
          >
            {sizes.map((size) => (
              <option key={size.name} value={size.name}>
                {size.name} ml (${size.price})
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Intensity</label>
          <select
            value={selectedIntensity.name}
            onChange={(e) => onIntensityChange(intensities.find(i => i.name === e.target.value))}
            className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-transparent"
          >
            {intensities.map((intensity) => (
              <option key={intensity.name} value={intensity.name}>
                {intensity.name} (${intensity.price})
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Bottle Design</label>
          <select
            value={selectedBottle.name}
            onChange={(e) => onBottleChange(bottles.find(b => b.name === e.target.value))}
            className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-transparent"
          >
            {bottles.map((bottle) => (
              <option key={bottle.name} value={bottle.name}>
                {bottle.name} (${bottle.price})
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
