export const initialCartState = {
    items: [
      {
        id: 1,
        name: 'Custom Blend - Floral Elegance',
        price: 119.0,
        quantity: 1,
        image: '/rosee.jpg',
        details: {
          topNotes: 'Bergamot, Lemon, Lavender',
          middleNotes: 'Rose, Jasmine, Ylang-Ylang',
          baseNotes: 'Sandalwood, Amber, Musk',
          size: '200ml',
          intensity: 'Medium',
          bottle: 'Lavender',
          engraving: 'Emma',
        },
      },
      {
        id: 2,
        name: 'Custom Blend - Citrus Breeze',
        price: 65.0,
        quantity: 1,
        image: '/lemonn.png',
        details: {
          topNotes: 'Grapefruit, Bergamot, Lemon',
          middleNotes: 'Green Tea, Neroli',
          baseNotes: 'Cedar, White Musk',
          size: '100ml',
          intensity: 'Light',
          bottle: 'Clear',
        },
      },
    ],
    promoCode: '',
    promoApplied: false,
  };