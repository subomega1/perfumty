export default function LayersSection({ layers }) {
    return (
      <section className="bg-cosmic-latte py-24 dark:bg-gray-800">
        <div className="max-w-5xl mx-auto px-5">
          <h2 className="text-4xl font-playfair text-dim-gray text-center mb-12 dark:text-cosmic-latte">
            The Architecture of Your Fragrance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {layers.map((layer, index) => (
              <div key={index} className="bg-white p-8 rounded shadow-layer dark:bg-gray-700">
                <h3 className="text-2xl font-playfair text-story-coral mb-4 dark:text-lavender">{layer.name}</h3>
                <p className="text-base font-inter text-dim-gray dark:text-gray-300">{layer.description}</p>
                <div className="mt-4 text-sm font-inter text-dim-gray italic dark:text-gray-300">
                  Duration: {layer.duration}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }