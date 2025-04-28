import Link from 'next/link';

export default function Footer() {
  const links = ['Our flowers', 'Customize', 'Our story', 'Our collection', 'cart'];
  const footerLinks = ['Privacy Policy', 'Terms of Service', 'Cookies Settings'];

  return (
    <footer className="bg-cosmic-latte pb-16 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center mb-8">
          <Link href="/" className="flex items-center">
          <div className="w-[300px] h-52">
                <img 
                  src="/signuplogo.png" 
                  alt="Logo" 
                  className="w-auto h-auto " 
                />
              </div> 
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