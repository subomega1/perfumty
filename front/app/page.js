'use client';

import { useState } from 'react';
import { Flower2, Sparkles } from 'lucide-react';

import OrderModal from '@/components/OrderModal';
import StepProgress from '@/components/StepProgress';
import ScentSelector from '@/components/ScentSelector';
import CharacteristicsSelector from '@/components/CharacteristicsSelector';
import PremiumSelector from '@/components/PremiumSelector';
import Image from 'next/image';

const scents = {
  top: [
    { name: 'Bergamot', price: 150 },
    { name: 'Orange', price: 120 },
    { name: 'Lemon', price: 100 },
    { name: 'Mint', price: 110 },
    { name: 'Lavender', price: 130 },
  ],
  middle: [
    { name: 'Rose', price: 180 },
    { name: 'Jasmin', price: 200 },
    { name: 'Cinnamon', price: 150 },
    { name: 'Geranium', price: 160 },
  ],
  base: [
    { name: 'Vanilla', price: 140 },
    { name: 'Sandalwood', price: 220 },
    { name: 'Musk', price: 250 },
    { name: 'Cedarwood', price: 180 },
  ],
};

const sizes = [
  { name: '30ml', price: 100 },
  { name: '50ml', price: 150 },
  { name: '100ml', price: 250 },
];

const intensities = [
  { name: 'Eau de Toilette', price: 100 },
  { name: 'Eau de Parfum', price: 200 },
  { name: 'Parfum', price: 300 },
];

const bottles = [
  { name: 'Classic', price: 50 },
  { name: 'Modern', price: 100 },
  { name: 'Luxury', price: 200 },
];

const premiumIngredients = [
  { name: 'Oud', description: 'Rare and precious wood essence', price: 525 },
  { name: 'Saffron', description: 'Exotic spice with rich aroma', price: 515 },
  { name: 'Tuberose', description: 'Luxurious white floral note', price: 510 },
];

export default function Home() {
  const [step, setStep] = useState(1);
  const [selectedScents, setSelectedScents] = useState([]);
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const [selectedIntensity, setSelectedIntensity] = useState(intensities[0]);
  const [selectedBottle, setSelectedBottle] = useState(bottles[0]);
  const [selectedPremium, setSelectedPremium] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  const calculateTotal = () => {
    const scentsTotal = selectedScents.reduce((acc, scent) => acc + scent.price, 0);
    const characteristicsTotal = selectedSize.price + selectedIntensity.price + selectedBottle.price;
    const premiumTotal = selectedPremium.reduce((acc, item) => acc + item.price, 0);
    return scentsTotal + characteristicsTotal + premiumTotal;
  };

  const handleScentSelection = (scent) => {
    if (selectedScents.find(s => s.name === scent.name)) {
      setSelectedScents(selectedScents.filter(s => s.name !== scent.name));
    } else if (selectedScents.length < 3) {
      setSelectedScents([...selectedScents, scent]);
    }
  };

  const handlePremiumSelection = (ingredient) => {
    if (selectedPremium.find(i => i.name === ingredient.name)) {
      setSelectedPremium(selectedPremium.filter(i => i.name !== ingredient.name));
    } else {
      setSelectedPremium([...selectedPremium, ingredient]);
    }
  };

  const nextStep = () => {
    const newTotal = calculateTotal();
    setTotalPrice(newTotal);
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <div className="h-screen  bg-gray-50 dark:bg-gray-900 ">
      <div className="flex h-screen">
  {/* LEFT SECTION */}
  <div className="w-2/3 justify-center px-10 space-y-10 flex flex-col   align-middle py-10">
    {/* Top: Logo + Stepper */}
    <Image
    src="/logo.png"
    alt="logo"
     width={150}
    
    height={150}
   />
    <div className="items-center justify-center justify-content-center">
      <div className="mb-6">
        <StepProgress currentStep={step} />
      </div>

      {/* Form Title */}
      <h1 className="text-2xl font-bold mb-2">Now select your perfume <br /> <span className="text-purple-600">Characteristics</span></h1>
      <p className="mb-6 text-gray-600">Customize the size and intensity of your perfume</p>

      {/* Conditional Step Content */}
      {step === 1 && (
        <ScentSelector
          scents={scents}
          selectedScents={selectedScents}
          onScentSelect={handleScentSelection}
        />
      )}

      {step === 2 && (
        <CharacteristicsSelector
          sizes={sizes}
          intensities={intensities}
          bottles={bottles}
          selectedSize={selectedSize}
          selectedIntensity={selectedIntensity}
          selectedBottle={selectedBottle}
          onSizeChange={setSelectedSize}
          onIntensityChange={setSelectedIntensity}
          onBottleChange={setSelectedBottle}
        />
      )}

      {step === 3 && (
        <PremiumSelector
          premiumIngredients={premiumIngredients}
          selectedPremium={selectedPremium}
          onPremiumSelect={handlePremiumSelection}
        />
      )}
    </div>

    {/* Bottom: Total + Buttons */}
    <div>
      <div className="text-lg font-semibold mb-4">TOTAL: ${totalPrice}</div>
      <div className="flex gap-4">
        {step > 1 && (
          <button
            onClick={prevStep}
            className="px-6 py-2 rounded-full border border-gray-300 hover:border-purple-600"
          >
            Back
          </button>
        )}
        {step < 3 ? (
          <button
            onClick={nextStep}
            disabled={step === 1 && selectedScents.length === 0}
            className="px-6 py-2 rounded-full bg-purple-600 text-white hover:bg-purple-700 disabled:opacity-50"
          >
            Next
          </button>
        ) : (
          <button
            onClick={() => setShowModal(true)}
            className="px-6 py-2 rounded-full bg-purple-600 text-white hover:bg-purple-700 flex items-center gap-2"
          >
            <Sparkles className="h-4 w-4" />
            Create Perfume
          </button>
        )}
      </div>

    </div>
  </div>

  {/* RIGHT SECTION - IMAGE */}
  <div className="w-3/6 h-full bg-white flex items-center justify-center">
    <Image
      src={
        step === 1
          ? '/scent.png'
          : step === 2
          ? '/bottle.png'
          : '/premium.png'
      }
      alt="Perfume Bottle"
      width={400}
      height={600}
      className="object-fit w-full h-full"
    />
  </div>
</div>


      <OrderModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        totalPrice={totalPrice}
        selectedScents={selectedScents}
        selectedSize={selectedSize}
        selectedIntensity={selectedIntensity}
        selectedBottle={selectedBottle}
        selectedPremium={selectedPremium}
      />
    </div>
  );
}