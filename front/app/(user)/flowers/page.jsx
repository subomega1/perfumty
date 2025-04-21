"use client"
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { flowers } from '../../../constants/flowers';

export default function Flowers() {
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
    <div className="min-h-screen bg-cosmic-latte font-inter px-4 py-10 space-y-16 dark:bg-gray-900">
      <Head>
        <title>The Origins of Flowers in Perfumery | Perfumty</title>
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


      <h1 className="text-4xl md:text-5xl font-playfair font-bold italic text-center text-dim-gray mb-10 dark:text-cosmic-latte">
        The Origins of Flowers in Perfumery
      </h1>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 max-w-6xl mx-auto">
        <Image
          src="/images/image 26.png"
          alt="Fleurs"
          width={500}
          height={500}
        
          className="w-[500px] md:w-60"
        />
        <div className="text-center max-w-md">
          <h2 className="text-xl md:text-2xl font-playfair font-semibold italic mb-4 text-dim-gray dark:text-cosmic-latte">
            Welcome to the World <br />
            of <br />
            Flowers and Fragrances
          </h2>
          <p className="italic md:text-lg leading-relaxed whitespace-pre-line text-dim-gray dark:text-gray-300">
            For centuries, flowers have been at the{'\n'}
            heart{'\n'}
            of the most exquisite olfactory creations.{'\n'}
            Each essence tells{'\n'}
            a story, a tradition, and an emotion.{'\n'}
            Discover the origins of the flowers that{'\n'}
            elevate our perfumes and let yourself be{'\n'}
            carried away by their enchanting scents.
          </p>
        </div>
        <Image
          src="/images/image 25.png"
          alt="Fleurs"
          width={500}
          height={500}
          className="w-48 md:w-60"
        />
      </div>

      <div id="flowers" className="space-y-16 max-w-6xl mx-auto">
        {flowers.map((flower, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              flower.reverse ? 'md:flex-row-reverse' : 'md:flex-row'
            } items-center gap-8`}
          >
            <Image
              src={flower.image}
              alt={flower.title}
              width={288}
              height={288}
              className="w-64 md:w-72"
            />
            <div className="text-center">
              <h2 className="text-xl md:text-2xl font-playfair italic mb-2 font-bold text-dim-gray dark:text-cosmic-latte">
                {flower.title}
              </h2>
              <p className="md:text-lg leading-relaxed text-center whitespace-pre-line text-dim-gray dark:text-gray-300">
                {flower.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}