import { Mochiy_Pop_One } from "next/font/google";
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
}
