import Link from 'next/link';
import Image from 'next/image';
export default function BestSellersSection({ bestSellers }) {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      <h2 className="text-4xl font-afacad text-center text-black dark:text-cosmic-latte">
        DISCOVER OUR MOST-LOVED SCENTS, CRAFTED TO PERFECTION
      </h2>
      <div className="w-3/4 mx-auto h-1 bg-black dark:bg-cosmic-latte my-8"></div>

      <div className="relative">
        <div className="flex items-center gap-4 mb-8">
          <h3 className="text-4xl font-playfair font-semibold text-black dark:text-cosmic-latte">Best Sellers</h3>
          <div className="w-48 h-1 bg-black dark:bg-cosmic-latte"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {bestSellers.map((item) => (
            <div key={item.id} className="flex flex-col md:flex-row items-center gap-4">
              <div>
                <h4 className="text-4xl font-jakarta text-black dark:text-cosmic-latte">{item.name}</h4>
                <p className="text-2xl font-jakarta text-dim-gray dark:text-gray-300 mt-4">
                  Top Notes: {item.notes.top.join(', ')}<br />
                  Middle Notes: {item.notes.middle.join(', ')}<br />
                  Base Notes: {item.notes.base.join(', ')}
                </p>
                <Link href={`/product/${item.id}`}>
                  <div className="bg-coral text-black px-6 py-3 rounded-2xl text-lg font-afacad text-center hover:bg-plum dark:bg-lavender dark:hover:bg-coral mt-4">
                    SHOP NOW
                  </div>
                </Link>
              </div>
              <Image src={item.image} alt={item.name} width={200} height={300} className="object-contain" />
            </div>
          ))}
        </div>

        <Image
          src="/images/group-26.png"
          alt="Decoration"
          width={194}
          height={79}
          className="absolute top-0 left-1/2 transform -translate-x-1/2"
        />
      </div>
    </section>
  );
}