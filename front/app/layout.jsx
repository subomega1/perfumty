/*import { Mochiy_Pop_One } from "next/font/google";
import "./globals.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for Toast notifications

const Mochiy = Mochiy_Pop_One({
  variable: "--font-mochiy",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Perfumty",
  description: "your personalized perfume",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${Mochiy.variable} antialiased`}
      >
        <ToastContainer position="top-right" autoClose={3000} />
        {children}
      </body>
    </html>
  );
}*/
// ❌ PAS de 'use client'
import { Mochiy_Pop_One } from "next/font/google";
import './globals.css';

import ClientProviders from "@/components/clientProvider"; // (voir plus bas)

const Mochiy = Mochiy_Pop_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-mochiy",
  display: 'swap',
});

export const metadata = {
  title: {
    default: "Perfumty - Your Personalized Perfume",
    template: "%s | Perfumty"
  },
  description: "Create your unique, custom fragrance",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" >
      <body className={`${Mochiy.variable} font-sans antialiased bg-gray-50 text-gray-900`}>
        <ClientProviders />
        {children}
      </body>
    </html>
  );
}

