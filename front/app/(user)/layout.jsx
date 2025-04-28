import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for Toast notifications
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
export default function RootLayout({ children }) {
  return (
      <>
      <Navbar />
        <ToastContainer position="top-right" autoClose={3000} />
        <div className="pt-[100px]">
        {children}
        </div>
        <Footer/>
      </>
  );
}
