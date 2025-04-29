"use client"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for Toast notifications
import { useState, useEffect } from 'react';
export default function RootLayout({ children }) {
  const [theme, setTheme] = useState('light');
  
    useEffect(() => {
      const savedTheme = localStorage.getItem('theme') || 'light';
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }, []);
  
    const toggleTheme = () => {
      const newTheme = theme === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
      localStorage.setItem('theme', newTheme);
      document.documentElement.classList.toggle('dark', newTheme === 'dark');
    };
  return (
      <div
      >
        {/* Dark Mode Toggle */}
       <div className="fixed top-7 right-4 z-50">
        <button
          onClick={toggleTheme}
          className="p-2 bg-coral text-white rounded-full dark:bg-lavender"
          aria-label="Toggle dark mode"
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </div>
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
