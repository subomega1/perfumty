"use client"

import HeroSection from '@/components/sections/story/StoryHeroSection';
import IntroductionSection from '@/components/sections/story/IntroductionSection';
import IngredientsSection from '@/components/sections/story/IngredientsSection';
import LayersSection from '@/components/sections/story/LayersSection';
import ProcessSection from '@/components/sections/story/ProcessSection';
import CtaSection from '@/components/sections/story/StoryCtaSection';
import { ingredients, fragranceLayers } from '../../../constants/story';

export default function Story() {
  

  return (
    <div className="min-h-screen bg-cosmic-latte dark:bg-gray-900">
      <HeroSection />
      <IntroductionSection />
      <IngredientsSection ingredients={ingredients} />
      <LayersSection layers={fragranceLayers} />
      <ProcessSection />
      <CtaSection />
    </div>
  );
}