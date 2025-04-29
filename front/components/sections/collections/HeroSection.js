export default function HeroSection() {
    return (
      <div className="z-10 relative py-28 px-4 bg-[#C287E8] text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10 dark:opacity-20"
          style={{ backgroundImage: `url('https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')` }}
        />
        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold font-serif mb-6 dark:text-cream">Our Collection</h1>
          <p className="text-xl max-w-3xl mx-auto dark:text-gray-200">
            Discover our exquisite range of fragrances, each crafted with care to tell a unique sensory story.
            From fresh florals to deep orientals, find the perfect scent to express your individuality.
          </p>
        </div>
      </div>
    );
  }