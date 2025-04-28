import Link from 'next/link';

export default function CtaSection() {
  return (
    <section className="bg-dim-gray py-24 text-center dark:bg-gray-700">
      <div className="max-w-5xl mx-auto px-5">
        <h2 className="text-4xl font-playfair text-cosmic-latte mb-6 dark:text-gray-200">Begin Your Perfume Journey</h2>
        <p className="text-lg font-inter text-cosmic-latte max-w-xl mx-auto mb-8 dark:text-gray-300">
          Take our scent personality quiz to start creating your unique fragrance.
        </p>
        <Link href="/quiz">
          <button className="bg-cosmic-latte text-black px-6 py-3 rounded font-inter font-medium text-base hover:bg-story-coral-hover transition-colors dark:bg-lavender dark:hover:bg-coral">
            Take the Quiz
          </button>
        </Link>
      </div>
    </section>
  );
}