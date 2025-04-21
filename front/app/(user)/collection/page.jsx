"use client"
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import HeroSection from '@/components/sections/collections/HeroSection';
import Filters from '@/components/sections/collections/Filters';
import PerfumeGrid from '@/components/sections/collections/PerfumeGrid';
import CtaSection from '@/components/sections/collections/CtaSection';
import NewsletterSection from '@/components/sections/collections/NewsletterSection';
import { perfumes } from '../../../constants/perfumes'; // Import perfumes

export default function Collection() {
  const [theme, setTheme] = useState('light');
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPerfumes, setFilteredPerfumes] = useState(perfumes);

  // Toggle dark mode
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

  // Filter and search perfumes
  useEffect(() => {
    let result = perfumes;
    if (activeFilter !== 'All') {
      result = result.filter((perfume) => perfume.category === activeFilter);
    }
    if (searchQuery) {
      result = result.filter((perfume) =>
        perfume.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        perfume.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    setFilteredPerfumes(result);
  }, [activeFilter, searchQuery]);

  const handleAddToCart = (perfume) => {
    alert(`Added ${perfume.name} to cart!`);
    // Integrate with actual cart logic here
  };

  return (
    <div className="min-h-screen">
      <Head>
        <title>Our Collection | Perfumty</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* Dark Mode Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={toggleTheme}
          className="p-2 bg-coral text-white rounded-full dark:bg-purple"
          aria-label="Toggle dark mode"
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </div>

      <HeroSection />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Filters
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <PerfumeGrid perfumes={filteredPerfumes} handleAddToCart={handleAddToCart} />
        <CtaSection />
        <NewsletterSection />
      </div>
    </div>
  );
}