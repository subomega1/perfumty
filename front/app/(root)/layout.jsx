import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for Toast notifications

export default function RootLayout({ children }) {
  return (
      <div
       
      >
        <ToastContainer position="top-right" autoClose={3000} />
        {children}
      </div>
  );
}
