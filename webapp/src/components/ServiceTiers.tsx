import React from 'react';

const FeatureHighlight = ({ text }: { text: string }) => (
  <div className="border-t border-gray-800 py-8">
    <p className="text-4xl md:text-5xl font-bold tracking-tighter">{text}</p>
  </div>
);

export const ServiceTiers = () => {
  // Mock data for one tier
  const premierTier = {
    name: 'Premier',
    cars: ['Mercedes-Benz S-Class', 'BMW 7 Series', 'Audi A8'],
    features: [
      'Больше пространства',
      'Вода и зарядные устройства',
      'Тишина и покой',
    ],
  };

  return (
    <section className="py-16 bg-black border-t border-b border-gray-800">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Tier Switcher */}
        <div className="flex justify-center space-x-8 mb-12">
          <button className="text-2xl font-bold uppercase tracking-wider border-b-2 border-yellow-500 pb-2">
            Premier
          </button>
          <button className="text-2xl font-bold uppercase tracking-wider text-gray-600 hover:text-white transition-colors">
            Élite
          </button>
        </div>

        {/* Tier Content */}
        <div>
          <div className="text-center mb-12">
            <p className="text-gray-400">Автомобили класса Premier</p>
            <p className="text-lg font-medium">{premierTier.cars.join(' • ')}</p>
          </div>

          <div>
            {premierTier.features.map(feature => (
              <FeatureHighlight key={feature} text={feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};