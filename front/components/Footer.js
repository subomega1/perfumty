import Link from 'next/link';

export default function Footer() {
  const links = ['Link One', 'Link Two', 'Link Three', 'Link Four', 'Link Five'];
  const footerLinks = ['Privacy Policy', 'Terms of Service', 'Cookies Settings'];

  return (
    <footer className="bg-cosmic-latte py-16 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center mb-8">
          <Link href="/" className="flex items-center">
            <span className="text-4xl text-black mr-2 transform rotate-12 dark:text-cosmic-latte">🌸</span>
            <span className="font-mochiy text-2xl text-black tracking-wider dark:text-cosmic-latte">Perfumty</span>
          </Link>
        </div>
        <div className="flex justify-center gap-8 mb-8">
          {links.map((link, index) => (
            <Link key={index} href={`/${link.toLowerCase().replace(' ', '-')}`} className="text-black text-sm font-roboto font-semibold dark:text-cosmic-latte">
              {link}
            </Link>
          ))}
        </div>
        <div className="border-t border-black dark:border-cosmic-latte my-8"></div>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-black text-sm font-roboto dark:text-cosmic-latte">© 2025 Perfumty. All rights reserved.</p>
          <div className="flex gap-6">
            {footerLinks.map((link, index) => (
              <Link key={index} href={`/${link.toLowerCase().replace(' ', '-')}`} className="text-black text-sm font-roboto underline dark:text-cosmic-latte">
                {link}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}