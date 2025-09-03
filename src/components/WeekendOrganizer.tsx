import React from 'react';
import Image from 'next/image';
import Section from './Section';
import Button from './Button';

const WeekendOrganizer = () => {
  return (
    <Section className="bg-background">
      <div className="bg-surface-light rounded-lg shadow-lg overflow-hidden w-full">
        <div className="relative">
          <Image
            src="/images/hero-woman.jpg"
            alt="Fashionable woman"
            width={500}
            height={500}
            className="relative w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold text-center leading-tight">
              ОРГАНИЗУЙ СВОЙ СВОБОДНЫЙ ВЫХОДНОЙ
            </h1>
          </div>
        </div>

        <div className="p-6 md:p-8 text-center">
          <p className="text-text-dark text-base md:text-lg mb-6">
            Оказавшись в мире возможностей – выбери идеальную спутницу.
            <span className="font-semibold text-primary cursor-pointer hover:underline ml-1 mr-1">
              Расскажи запрос менеджеру
            </span>
            и весь процесс организации мы возьмём на себя.
          </p>
          <Button>Начать</Button>
        </div>
      </div>
    </Section>
  );
};

export default WeekendOrganizer;