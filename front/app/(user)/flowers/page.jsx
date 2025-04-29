"use client"
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { flowers } from '../../../constants/flowers';
import { motion } from "framer-motion";

export default function Flowers() {
  const text1 = "The Origins of Flowers in Perfumety";
  
  const letterAnimation = {
    hidden: { opacity: 0, y: -50 }, // drop from top
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1, // slower animation (0.1s between letters)
        duration: 0.5, // smooth drop
      },
    }),
  };
 
  return (
    <div className="min-h-screen bg-cosmic-latte font-inter px-4 py-10 space-y-16 dark:bg-gray-900">


<div className="text-4xl md:text-5xl font-playfair font-bold italic tracking-tight text-center text-dim-gray mb-10 dark:text-gray-300">
      {text1.split("").map((letter, index) => (
          <motion.span
            key={index}
            custom={index}
            variants={letterAnimation}
            initial="hidden"
            animate="visible"
          >
            {letter === " " ? "\u00A0" : letter} {/* keeps spaces */}
          </motion.span>
        ))}
        </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 max-w-6xl mx-auto">
        <Image
          src="/images/image 26.png"
          alt="Fleurs"
          width={500}
          height={500}
        
          className="w-[350px] "
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
          className="w-[300px]"
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