"use client"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for Toast notifications
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
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
      <>
      <Navbar />
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
        <ToastContainer position="top-right" autoClose={3000} />
        <div className="pt-[100px]">
        {children}
        </div>
        <Footer/>
      </>
  );
}
