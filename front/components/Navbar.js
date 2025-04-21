import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-coral py-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-white text-xl font-semibold">
          <span className="text-cosmic-latte mr-1">✦</span> Perfume Studio
        </Link>
        <div className="nav-links hidden md:flex gap-8">
          <Link href="/collection" className="text-white hover:text-cosmic-latte">
            Collection
          </Link>
          <Link href="/create" className="text-white hover:text-cosmic-latte">
            Create
          </Link>
          <Link href="/about" className="text-white hover:text-cosmic-latte">
            About
          </Link>
        </div>
        <div className="nav-icons flex gap-4 items-center">
          <Link href="/cart" className="text-white relative">
            🛒
            <span className="absolute -top-2 -right-2 bg-lavender text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
              2
            </span>
          </Link>
          <Link href="/profile" className="text-white">
            👤
          </Link>
        </div>
      </div>
    </nav>
  );
}