import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative max-w-7xl mx-auto px-4 py-20">
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Text Content */}
        <div className="flex-1">
          <h1 className="text-6xl md:text-8xl font-afacad text-black dark:text-cosmic-latte">
            Perfume <span className="text-4xl md:text-6xl">Customize your own</span>
          </h1>
          <p className="mt-8 text-2xl font-josefin font-semibold text-dim-gray max-w-2xl dark:text-gray-300">
            Design a fragrance that is uniquely yours! Choose from a variety of top, middle, and base notes to create a scent that matches your style. Customize the intensity, bottle size, and even add a personal touch with engraving. Whether you love fresh citrus, warm woods, or sweet florals, craft the perfect perfume that’s made just for you!
          </p>
          <div className="mt-12 flex gap-4">
            <Link href="/quiz">
              <div className="bg-coral text-black px-6 py-3 rounded-2xl text-lg font-afacad text-center hover:bg-plum dark:bg-lavender dark:hover:bg-coral">
                TAKE PERSONALITY-SCENT<br />QUIZ!
              </div>
            </Link>
            <Link href="/customizing">
              <div className="bg-coral text-black px-6 py-3 rounded-2xl text-lg font-afacad text-center hover:bg-plum dark:bg-lavender dark:hover:bg-coral">
                START CUSTOMIZING!
              </div>
            </Link>
          </div>
          <div className="mt-8 text-3xl font-afacad text-center text-black dark:text-cosmic-latte">
            FIND YOUR SIGNATURE SCENT – TAKE OUR PERSONALITY QUIZ!
          </div>
          <div className="mt-4 text-2xl font-afacad text-center text-dim-gray dark:text-gray-300">
            DISCOVER YOUR PERFECT FRAGRANCE<br />BASED ON YOUR PERSONALITY AND PREFERENCES
          </div>
        </div>

        {/* Images and Decorations */}
        <div className="flex-1 relative">
          <Image
            src="/images/rose-removebg-preview.png"
            alt="Perfume Bottle"
            width={800}
            height={600}
            className="object-contain"
          />
          <div className="absolute top-32 left-20 w-20 h-48 border-2 border-gray-500 rounded-full flex flex-col items-center gap-2 p-2">
            <Image src="/images/variant-20.png" alt="Flower" width={70} height={70} />
            <Image src="/images/variant-61.png" alt="Flower" width={70} height={70} />
            <Image src="/images/variant-1.png" alt="Flower" width={70} height={70} />
            <Image src="/images/variant-10.png" alt="Flower" width={70} height={70} />
            <Image src="/images/variant-138.png" alt="Flower" width={70} height={70} />
          </div>
          <Image
            src="/images/vector.svg"
            alt="Vector"
            width={100}
            height={175}
            className="absolute top-32 left-0"
          />
          <div className="absolute bottom-0 left-24 text-xl font-josefin font-semibold text-black dark:text-cosmic-latte">
            Flower complexions
          </div>
        </div>
      </div>
    </section>
  );
}