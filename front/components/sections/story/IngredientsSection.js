import Image from 'next/image';

export default function IngredientsSection({ ingredients }) {
  return (
    <section className="bg-dim-gray py-24 dark:bg-gray-700">
      <div className="max-w-5xl mx-auto px-5">
        <h2 className="text-4xl font-playfair text-cosmic-latte text-center mb-6 dark:text-gray-200">
          Our Botanical Treasures
        </h2>
        <p className="text-lg font-inter text-cosmic-latte text-center max-w-3xl mx-auto mb-12 dark:text-gray-300">
          We source our ingredients directly from the world's finest gardens and farms, where traditional cultivation
          methods ensure the highest quality blooms.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ingredients.map((ingredient, index) => (
            <div key={index} className="bg-cosmic-latte rounded overflow-hidden dark:bg-gray-800">
              <Image
                src={ingredient.image}
                alt={ingredient.name}
                width={350}
                height={250}
                className="w-full h-64 object-cover"
              />
              <h3 className="text-2xl font-playfair text-dim-gray px-6 pt-6 pb-2 dark:text-cosmic-latte">
                {ingredient.name}
              </h3>
              <p className="text-sm font-inter text-dim-gray px-6 pb-6 dark:text-gray-300">{ingredient.description}</p>
              <div className="text-story-coral font-inter font-medium text-sm px-6 pb-2 dark:text-lavender">
                Origin: {ingredient.origin}
              </div>
              <div className="text-story-coral font-inter font-medium text-sm px-6 pb-4 dark:text-lavender">
                Harvest: {ingredient.harvest}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}