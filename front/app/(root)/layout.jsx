import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for Toast notifications

export default function RootLayout({ children }) {
  return (
      <div
       
      >
 <ToastContainer 
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        toastClassName="font-sans"
        bodyClassName="text-sm"
        progressClassName="bg-gradient-to-r from-purple-500 to-pink-500"
      />
              {children}
      </div>
  );
}
