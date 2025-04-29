import Link from 'next/link';

export default function HeroSection() {
  return (
    <section
      className="py-28 relative justify-center bg-purple-400 bg-cover bg-center flex items-center px-5 bg-blend-overlay bg-dim-gray/40 dark:bg-gray-800/40"
    >
      <div
          className="absolute  inset-0 bg-cover bg-center opacity-10 dark:opacity-20"
          style={{ backgroundImage: `url('https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=1600')` }}
        />
      <div className=" justify-center items-center text-center text-cosmic-latte dark:text-gray-200">
        <h1 className="text-5xl font-bold font-serif leading-tight mb-6">
          Your Signature Perfume Story
        </h1>
        <p className="text-xl font-inter mb-8  max-w-3xl mx-auto dark:text-gray-200">
          Every fragrance tells a story. Craft your unique olfactory journey through our bespoke perfume creation process.
        </p>
        <Link href="/quiz">
          <button className="bg-cosmic-latte justify-center items-center text-black px-6 py-3 rounded font-inter font-medium text-base hover:bg-story-coral-hover transition-colors dark:bg-lavender dark:hover:bg-coral">
            Take the Scent Quiz
          </button>
        </Link>
      </div>
    </section>
  );
}