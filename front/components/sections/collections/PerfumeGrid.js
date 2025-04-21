import Image from 'next/image';

export default function PerfumeGrid({ perfumes, handleAddToCart }) {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {perfumes.map((perfume) => (
        <div
          key={perfume.id}
          className="bg-white rounded-lg shadow-card overflow-hidden transition-transform hover:-translate-y-2 dark:bg-gray-800"
        >
          <div className="relative h-64 bg-cream dark:bg-gray-700">
            <Image
              src={perfume.image}
              alt={perfume.name}
              layout="fill"
              objectFit="cover"
              className="object-center"
            />
            <span
              className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold text-white ${
                perfume.badge === 'new' ? 'bg-purple' : 'bg-coral'
              }`}
            >
              {perfume.badge === 'new' ? 'NEW' : 'BEST SELLER'}
            </span>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold font-serif mb-2 dark:text-cream">{perfume.name}</h3>
            <p className="text-gray mb-4 dark:text-gray-300">{perfume.description}</p>
            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray mb-2 dark:text-gray-400">Notes:</h4>
              <div className="flex flex-wrap gap-2">
                {perfume.notes.top.map((note) => (
                  <span key={note} className="px-2 py-1 bg-top-note text-coral rounded-full text-xs">
                    {note}
                  </span>
                ))}
                {perfume.notes.middle.map((note) => (
                  <span key={note} className="px-2 py-1 bg-middle-note text-purple rounded-full text-xs">
                    {note}
                  </span>
                ))}
                {perfume.notes.base.map((note) => (
                  <span key={note} className="px-2 py-1 bg-base-note text-gray rounded-full text-xs">
                    {note}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold dark:text-cream">{perfume.price} tnd</span>
              <button
                onClick={() => handleAddToCart(perfume)}
                className="px-4 py-2 bg-coral text-white rounded-full text-sm hover:bg-coral/90 dark:bg-purple dark:hover:bg-purple/90"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}