import React from 'react';
import Image from 'next/image';
import Section from './Section';

const ConfidentialSection = () => {
  return (
    <Section className="bg-background-light">
      <div className="bg-surface-light rounded-lg shadow-lg overflow-hidden w-full">
        <div className="flex justify-center p-4 space-x-2">
          <div className="w-8 h-1 bg-gray-300 rounded-full"></div>
          <div className="w-8 h-1 bg-primary rounded-full"></div>
          <div className="w-8 h-1 bg-gray-300 rounded-full"></div>
        </div>

        <div className="p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold text-text-dark mb-6 text-center">
            КОНФИДЕНЦИАЛЬНО ДЛЯ КЛИЕНТА
          </h2>

          <div className="mb-6">
            <Image
              src="/images/classy-couple.jpg"
              alt="Couple next to a car"
              width={500}
              height={300}
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>

          <p className="text-text-dark text-base md:text-lg leading-relaxed text-center">
            Общение происходит через менеджера, что помогает сохранить
            анонимность при выборе спутницы, а также избежать мошенничества и шантажа.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default ConfidentialSection;