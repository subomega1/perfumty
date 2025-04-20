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
  onBottleChange,
}) {
  return (
    <div className="space-y-10 font-[Quicksand]">
      <h2 className="text-2xl font-bold text-purple-700 mb-2 tracking-wide">
        Now select your perfume characteristics
      </h2>

      {/* Size Selector */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 space-y-3">
        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200">
          Size
        </label>
        <select
          value={selectedSize.name}
          onChange={(e) =>
            onSizeChange(sizes.find((s) => s.name === Number(e.target.value)))
          }
          className="w-full p-3 rounded-xl bg-transparent border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
        >
          {sizes.map((size) => (
            <option key={size.name} value={size.name}>
              {size.name} ml (${size.price})
            </option>
          ))}
        </select>
      </div>

      {/* Intensity Selector */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 space-y-3">
        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200">
          Intensity
        </label>
        <select
          value={selectedIntensity.name}
          onChange={(e) =>
            onIntensityChange(intensities.find((i) => i.name === e.target.value))
          }
          className="w-full p-3 rounded-xl bg-transparent border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
        >
          {intensities.map((intensity) => (
            <option key={intensity.name} value={intensity.name}>
              {intensity.name} (${intensity.price})
            </option>
          ))}
        </select>
      </div>

      {/* Bottle Selector */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 space-y-3">
        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200">
          Bottle Design
        </label>
        <select
          value={selectedBottle.name}
          onChange={(e) =>
            onBottleChange(bottles.find((b) => b.name === e.target.value))
          }
          className="w-full p-3 rounded-xl bg-transparent border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
        >
          {bottles.map((bottle) => (
            <option key={bottle.name} value={bottle.name}>
              {bottle.name} (${bottle.price})
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

