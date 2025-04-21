import Link from 'next/link';

export default function NewsletterSection() {
  return (
    <div className="py-16 px-4 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold font-serif mb-4 dark:text-cream">Get your Personality-Scent quiz!</h2>
        <p className="text-gray mb-6 dark:text-gray-300">The ultimate quiz for analyzing your scent preferences.</p>
        <div>
          <Link href="/quiz">
            <button className="px-6 py-3 bg-purple text-white rounded-full whitespace-nowrap hover:bg-purple/90 dark:bg-coral dark:hover:bg-coral/90">
              TAKE PERSONALITY-SCENT<br />QUIZ!
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}