'use client';

import { useState } from 'react';
import { Sparkles } from 'lucide-react';

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
  { name: 100, price: 89 },
  { name: 200, price: 129 },
];

const intensities = [
  { name: 'Eau de Toilette', price: 100 },
  { name: 'Eau de Parfum', price: 200 },
  { name: 'Pure Parfum', price: 300 },
];

const bottles = [
  { name: 'Standard', price: 50 },
  { name: 'Custom', price: 100 },
];

const premiumIngredients = [
  { name: 'Oud', description: 'Rare and precious wood essence', price: 25 },
  { name: 'Saffron', description: 'Exotic spice with rich aroma', price: 15 },
  { name: 'Tuberose', description: 'Luxurious white floral note', price: 10 },
];

export default function Home() {
  const [step, setStep] = useState(1);
  const [selectedTopNote, setSelectedTopNote] = useState(null);
  const [selectedMiddleNote, setSelectedMiddleNote] = useState(null);
  const [selectedBaseNote, setSelectedBaseNote] = useState(null);
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const [selectedIntensity, setSelectedIntensity] = useState(intensities[0]);
  const [selectedBottle, setSelectedBottle] = useState(bottles[0]);
  const [selectedPremium, setSelectedPremium] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  const calculateTotal = () => {
    let price = selectedSize.price;

    if (selectedIntensity.name === 'Eau de Parfum') price += 10;
    if (selectedIntensity.name === 'Parfum') price += 20;

    if (selectedBottle.name === 'Custom') price += 10;

    if (selectedPremium) {
      price += selectedPremium.price;
    }

    return price;
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
    <div className="h-screen bg-gray-50 dark:bg-gray-900">
      <div className="flex h-screen">
        {/* LEFT SECTION */}
        <div className="w-2/3 justify-center px-36  space-y-10 flex flex-col align-middle py-10">
          <Image src="/logo.png" alt="logo" width={150} height={150} />
          <div className="items-center justify-center">
            <div className="mb-6">
              <StepProgress currentStep={step} />
            </div>

            <h1 className="text-2xl font-bold mb-2">
              Now select your perfume <br />
              <span className="text-purple-600">Characteristics</span>
            </h1>
            <p className="mb-6 text-gray-600">
              Customize the size and intensity of your perfume
            </p>

            {step === 1 && (
              <ScentSelector
                scents={scents}
                selectedTopNote={selectedTopNote}
                selectedMiddleNote={selectedMiddleNote}
                selectedBaseNote={selectedBaseNote}
                onTopNoteSelect={setSelectedTopNote}
                onMiddleNoteSelect={setSelectedMiddleNote}
                onBaseNoteSelect={setSelectedBaseNote}
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
              onPremiumSelect={setSelectedPremium}
              />
            )}
          </div>

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
                  className="px-6 py-2 rounded-full bg-purple-600 text-white hover:bg-purple-700"
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

        {/* RIGHT SECTION */}
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