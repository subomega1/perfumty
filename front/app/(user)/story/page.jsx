"use client"
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import HeroSection from '@/components/sections/story/StoryHeroSection';
import IntroductionSection from '@/components/sections/story/IntroductionSection';
import IngredientsSection from '@/components/sections/story/IngredientsSection';
import LayersSection from '@/components/sections/story/LayersSection';
import ProcessSection from '@/components/sections/story/ProcessSection';
import CtaSection from '@/components/sections/story/StoryCtaSection';
import { ingredients, fragranceLayers } from '../../../constants/story';

export default function Story() {
  const [theme, setTheme] = useState('light');

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

  return (
    <div className="min-h-screen bg-cosmic-latte dark:bg-gray-900">
      <Head>
        <title>Custom Perfume Atelier | Your Signature Scent | Perfumty</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* Dark Mode Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={toggleTheme}
          className="p-2 bg-coral text-white rounded-full dark:bg-lavender"
          aria-label="Toggle dark mode"
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </div>

      <HeroSection />
      <IntroductionSection />
      <IngredientsSection ingredients={ingredients} />
      <LayersSection layers={fragranceLayers} />
      <ProcessSection />
      <CtaSection />
    </div>
  );
}