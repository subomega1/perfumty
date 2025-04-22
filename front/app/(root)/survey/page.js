'use client';

import { useState, useMemo, useCallback } from 'react';
import { Sparkles } from 'lucide-react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import OrderModal from '@/components/OrderModal';
import StepProgress from '@/components/StepProgress';
import ScentSelector from '@/components/ScentSelector';
import CharacteristicsSelector from '@/components/CharacteristicsSelector';
import PremiumSelector from '@/components/PremiumSelector';


const SCENTS = {
  top: ['Bergamot', 'Orange', 'Lemon', 'Mint', 'Lavender'].map(name => ({ name, price: 10 })),
  middle: ['Rose', 'Jasmin', 'Cinnamon', 'Geranium'].map(name => ({ name, price: 10 })),
  base: ['Vanilla', 'Sandalwood', 'Musk', 'Cedarwood'].map(name => ({ name, price: 10 })),
};

const SIZES =[{ name: 100, price: 89 },
{ name: 200, price: 129 },
];
const INTENSITIES = [
  { name: 'Eau de Toilette', price: 100, description: 'Light, 5-15% essence' },
  { name: 'Eau de Parfum', price: 200, description: 'Rich, 15-20% essence' },
  { name: 'Pure Parfum', price: 300, description: 'Intense, 20-30% essence' },
];
const BOTTLES = [
  { name: 'Standard', price: 50, image: '/bottle-standard.png' },
  { name: 'Custom', price: 100, image: '/bottle-custom.png' },
];
const PREMIUM_INGREDIENTS = [
  { name: 'Oud', description: 'Rare and precious wood essence', price: 25 },
  { name: 'Saffron', description: 'Exotic spice with rich aroma', price: 15 },
  { name: 'Tuberose', description: 'Luxurious white floral note', price: 10 },
];

export default function PerfumeCustomizer() {
  const [step, setStep] = useState(1);
  const [selectedTopNote, setSelectedTopNote] = useState(null);
  const [selectedMiddleNote, setSelectedMiddleNote] = useState(null);
  const [selectedBaseNote, setSelectedBaseNote] = useState(null);
  const [selectedSize, setSelectedSize] = useState(SIZES[0]);
  const [selectedIntensity, setSelectedIntensity] = useState(INTENSITIES[0]);
  const [selectedBottle, setSelectedBottle] = useState(BOTTLES[0]);
  const [selectedPremium, setSelectedPremium] = useState(null);
  const [showModal, setShowModal] = useState(false);


  const totalPrice = useMemo(() => {
    if (!selectedTopNote || !selectedSize || !selectedIntensity || !selectedBottle) return 0;
  
    let price = selectedSize.price + selectedIntensity.price + selectedBottle.price;
    if (selectedPremium) price += selectedPremium.price;
    return price;
  }, [
    selectedTopNote,
    selectedMiddleNote,
    selectedBaseNote,
    selectedSize,
    selectedIntensity,
    selectedBottle,
    selectedPremium,
  ]);
  const nextStep = useCallback(() => step < 3 && setStep(step + 1), [step]);
  const prevStep = useCallback(() => step > 1 && setStep(step - 1), [step]);

  const handleNoteSelect = useCallback((type, note) => {
    setSelectedNotes(prev => ({ ...prev, [type]: note }));
  }, []);

  return (
    
    <div className="  min-h-screen  py-5 px-3  bg-gradient-to-b from-[#FAF5FF] to-[#F3E8FF]">
      <ToastContainer position="top-center" autoClose={3000} />
  
      <div className="w-full mx-auto ">

  
        <div className="flex flex-col lg:flex-row gap-8 ">
          {/* Configuration Panel */}
          <div className="lg:w-2/3 items-center align-middle justify-center bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
          <Image 
            src="/perfumty1.png" 
            alt="Perfumty" 
            width={700} 
            height={500}
            className="mx-auto w-[300px] h-[100px] object-contain "
          />
            <StepProgress currentStep={step} totalSteps={3} className="mb-8" />
  
            <div className="space-y-8 items-center align-middle justify-center">
            
  {step === 1 && (
    <div className="step-content fade-in ">
       <ScentSelector
                scents={SCENTS}
                selectedTopNote={selectedTopNote}
                selectedMiddleNote={selectedMiddleNote}
                selectedBaseNote={selectedBaseNote}
                onTopNoteSelect={setSelectedTopNote}
                onMiddleNoteSelect={setSelectedMiddleNote}
                onBaseNoteSelect={setSelectedBaseNote}
              />
    </div>
  )}

  {step === 2 && (
    <div className="step-content fade-in">
      <CharacteristicsSelector
        sizes={SIZES}
        intensities={INTENSITIES}
        bottles={BOTTLES}
        selectedSize={selectedSize}
        selectedIntensity={selectedIntensity}
        selectedBottle={selectedBottle}
        onSizeChange={setSelectedSize}
        onIntensityChange={setSelectedIntensity}
        onBottleChange={setSelectedBottle}
      />
    </div>
  )}

  {step === 3 && (
    <div className="step-content fade-in">
      <PremiumSelector
        premiumIngredients={PREMIUM_INGREDIENTS}
        selectedPremium={selectedPremium}
        onPremiumSelect={setSelectedPremium}
      />
    </div>
  )}
 </div>
            <div className="mt-2 flex flex-col sm:flex-row justify-between items-center gap-4">
              {selectedBaseNote && (
                <div className="text-xl font-medium">
                  Total: <span className="total">${totalPrice.toFixed(2)}</span>
                </div>
              )}
  
              <div className="flex gap-4">
                {step > 1 && (
                  <button
                    onClick={prevStep}
                    className="back-btn"
                  >
                    Back
                  </button>
                )}
  
                {step < 3 ? (
                  <button
                  onClick={nextStep}
                  className="continue-btn flex items-center justify-center gap-2 px-6 py-3 rounded-full text-white font-semibold bg-[#E6ADEC] hover:bg-[#C287E8] transition duration-200 shadow-md hover:shadow-lg"
                >
                  Continue
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                
                ) : (
<button
  onClick={() => setShowModal(true)}
  className="flex items-center justify-center gap-2 px-8 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-[#E6ADEC] via-[#D49DE8] to-[#C287E8] hover:from-[#D49DE8] hover:via-[#A180E5] hover:to-[#5C6BC0] transition-all duration-500 shadow-lg hover:shadow-xl hover:scale-105"
>
  <Sparkles size={18} className="text-yellow-300" />
  Complete Your Perfume
</button>


                )}
              </div>
            </div>
          </div>
  
          {/* Visual Preview */}
          <div className="lg:w-1/3 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg transition-all duration-500 hover:shadow-xl hover:-translate-y-1 flex flex-col">
          <h2 className="scent-category-title text-center text-4xl font-bold bg-gradient-to-r from-pink-300 via-pink-400 to-lilac-300 bg-clip-text text-transparent mb-6 tracking-wide italic font-serif">
  Your Creation
</h2>

            <div className="relative flex-1">
              <Image
                src={
                  step === 1
                    ? '/step1.webp'
                    : step === 2
                    ? '/step2.avif'
                    : '/premium.png'
                }
                alt="Perfume Bottle"
                width={400}
                height={600}
                className="object-fit w-full h-full"
              />
            </div>
            <div className="mt-4 text-center text-sm text-gray-600">
              {step === 1 && "Select your perfect scent combination"}
              {step === 2 && "Choose your bottle and concentration"}
              {step === 3 && "Add premium ingredients for luxury"}
            </div>
          </div>
        </div>
      </div>
  
      <OrderModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        totalPrice={totalPrice}
        selectedTopNote={selectedTopNote}
        selectedMiddleNote={selectedMiddleNote}
        selectedBaseNote={selectedBaseNote}
        selectedSize={selectedSize}
        selectedIntensity={selectedIntensity}
        selectedBottle={selectedBottle}
        selectedPremium={selectedPremium}
      />
    </div>
  );
  
}