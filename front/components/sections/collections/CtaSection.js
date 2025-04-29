import Link from 'next/link';
export default function CtaSection() {
    return (
      <div className="bg-coral text-white w-full py-16 px-4 text-center mt-16 dark:bg-purple">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold font-serif mb-6 dark:text-cream">Create Your Signature Scent</h2>
          <p className="text-lg mb-8 dark:text-gray-200">
            Can't find exactly what you're looking for? Create a custom fragrance that's uniquely yours.
          </p>
          <div className="gap-1 space-x-2">
          <Link href="/survey">
          <button className="px-8 py-3 bg-white text-coral rounded-full font-medium hover:bg-gray-100 dark:bg-gray-800 dark:text-cream dark:hover:bg-gray-700">
            Start Customizing
          </button>
          </Link>
          <Link href="/quiz">
            <button className="px-10 py-3 bg-white text-coral rounded-full font-medium hover:bg-gray-100 dark:bg-gray-800 dark:text-cream dark:hover:bg-gray-700">
              take scent quiz!
            </button>
          </Link>
          </div>
        </div>
      </div>
    );
  }