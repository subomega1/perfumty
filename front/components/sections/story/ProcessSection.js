export default function ProcessSection() {
    const timelineItems = [
      {
        number: 1,
        title: 'Scent Personality Quiz',
        description:
          'Begin your journey with our interactive quiz that analyzes your preferences, lifestyle, and emotional connections to different aromas. This helps us understand your unique olfactory profile.',
      },
      {
        number: 2,
        title: 'Layer Selection',
        description:
          'Based on your quiz results, explore and select from our curated ingredient recommendations for each fragrance layer, with the guidance of our master perfumers.',
      },
      {
        number: 3,
        title: 'Artisanal Creation',
        description:
          'Our perfumers meticulously blend your chosen ingredients by hand, adjusting proportions to achieve perfect harmony. Each fragrance is aged for optimal note development before bottling.',
      },
    ];
  
    return (
      <section className="bg-white py-24 dark:bg-gray-900">
        <div className="max-w-3xl mx-auto px-5">
          <h2 className="text-4xl font-playfair text-dim-gray text-center mb-12 dark:text-cosmic-latte">
            Creating Your Signature Scent
          </h2>
          <div className="relative">
            <div className="absolute left-0 transform translate-x-1/2 w-0.5 h-full bg-black dark:bg-lavender"></div>
            {timelineItems.map((item, index) => (
              <div key={index} className="flex items-center mb-12 flex-col md:flex-row">
                <div className="w-12 h-12 bg-dim-gray text-cosmic-latte rounded-full flex items-center justify-center font-bold z-10 mb-4 md:mb-0 md:mr-8 dark:bg-lavender dark:text-gray-900">
                  {item.number}
                </div>
                <div className="bg-cosmic-latte p-6 rounded shadow-layer w-full md:w-auto dark:bg-gray-800">
                  <h3 className="text-xl font-playfair text-dim-gray mb-2 dark:text-cosmic-latte">{item.title}</h3>
                  <p className="text-base font-inter text-dim-gray dark:text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }