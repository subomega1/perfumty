'use client';

import Image from "next/image";

export default function ScentSelector({ scents, selectedScents, onScentSelect }) {
  return (
    <div className="flex">
     
        
    <div className="">
      <h2 className="text-2xl font-bold mb-6 text-yellow-300">Let's start with your preferred scent</h2>
      
      <div className="">
        <div>
          <h3 className="text-lg font-semibold mb-3">TOP NOTES</h3>
          <div className="flex flex-wrap gap-2">
            {scents.top.map((scent) => (
              <button
                key={scent.name}
                onClick={() => onScentSelect(scent)}
                className={`px-4 py-2 rounded-full border transition-colors ${
                  selectedScents.find(s => s.name === scent.name)
                    ? 'bg-purple-600 text-white border-purple-600'
                    : 'border-gray-300 dark:border-gray-600 hover:border-purple-600'
                }`}
              >
                {scent.name}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">MIDDLE NOTES</h3>
          <div className="flex flex-wrap gap-2">
            {scents.middle.map((scent) => (
              <button
                key={scent.name}
                onClick={() => onScentSelect(scent)}
                className={`px-4 py-2 rounded-full border transition-colors ${
                  selectedScents.find(s => s.name === scent.name)
                    ? 'bg-purple-600 text-white border-purple-600'
                    : 'border-gray-300 dark:border-gray-600 hover:border-purple-600'
                }`}
              >
                {scent.name}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">BASE NOTES</h3>
          <div className="flex flex-wrap gap-2">
            {scents.base.map((scent) => (
              <button
                key={scent.name}
                onClick={() => onScentSelect(scent)}
                className={`px-4 py-2 rounded-full border transition-colors ${
                  selectedScents.find(s => s.name === scent.name)
                    ? 'bg-purple-600 text-white border-purple-600'
                    : 'border-gray-300 dark:border-gray-600 hover:border-purple-600'
                }`}
              >
                {scent.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}