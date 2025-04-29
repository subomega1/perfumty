"use client"
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import HeroSection from '@/components/sections/collections/HeroSection';
import Filters from '@/components/sections/collections/Filters';
import PerfumeGrid from '@/components/sections/collections/PerfumeGrid';
import CtaSection from '@/components/sections/collections/CtaSection';
import { perfumes } from '../../../constants/perfumes'; // Import perfumes

export default function Collection() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPerfumes, setFilteredPerfumes] = useState(perfumes);


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
    <div className="dark:bg-gray-800">
    
     

      <HeroSection />
      <div className="max-w-6xl mx-auto px-4 py-8 ">
        <Filters
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <PerfumeGrid perfumes={filteredPerfumes} handleAddToCart={handleAddToCart} />
        </div>
        <CtaSection />
      
    </div>
  );
}