import Link from 'next/link';

export default function HeroSection() {
  return (
    <section
      className="min-h-[600px] h-screen bg-purple-400 bg-cover bg-center flex items-center px-5 bg-blend-overlay bg-dim-gray/40 dark:bg-gray-800/40"
    >
      <div className="max-w-xl text-cosmic-latte dark:text-gray-200">
        <h1 className="text-5xl md:text-6xl font-playfair leading-tight mb-6">
          Your Signature<br />Perfume Story
        </h1>
        <p className="text-xl font-inter mb-8">
          Every fragrance tells a story. Craft your unique olfactory journey through our bespoke perfume creation process.
        </p>
        <Link href="/quiz">
          <button className="bg-story-coral text-white px-6 py-3 rounded font-inter font-medium text-base hover:bg-story-coral-hover transition-colors dark:bg-lavender dark:hover:bg-coral">
            Take the Scent Quiz
          </button>
        </Link>
      </div>
    </section>
  );
}