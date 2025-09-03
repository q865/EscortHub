import React from 'react';
import Image from 'next/image';
import Section from './Section';

const ServiceAdvantages = () => {
  return (
    <Section className="bg-background text-text-main">
      <div className="w-full">
        <div className="text-center mb-12">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-wider mb-2">
            ПРЕДОСТАВЛЯЕМ
          </h2>
          <p className="text-text-secondary text-sm md:text-base">
            Премиальный сервис сопровождения по всей России
          </p>
        </div>
        
        <div className="text-center mb-12">
          <p className="text-text-main text-base md:text-lg mb-4">
            <span className="bg-surface p-1 rounded-md">Наши модели</span> — эффективные,
            разносторонние, иногда популярные и просто веселые красотки.
          </p>
          <p className="text-text-main text-base md:text-lg">
            <span className="bg-surface p-1 rounded-md">Подходящие для любых событий</span> будь то деловая встреча, вечер в
            ресторане, загородная поездка или шумная вечеринка.
          </p>
        </div>

        <div className="text-center mb-12">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-wider mb-8">
            <span className="text-text-secondary">ПОЧЕМУ</span> ВЫБИРАЮТ НАС
          </h3>
          <div className="flex justify-center space-x-2 mb-8">
            <div className="w-8 h-1 bg-gray-600 rounded-full"></div>
            <div className="w-8 h-1 bg-gray-600 rounded-full"></div>
            <div className="w-8 h-1 bg-gray-600 rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-surface rounded-lg overflow-hidden flex flex-col md:flex-row shadow-lg">
            <div className="p-6 flex flex-col justify-center items-center text-center md:text-left md:items-start">
              <span className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary mb-2">1</span>
              <p className="text-text-main">
                ЭКОНОМИМ ВАШЕ ВРЕМЯ, ИЗБАВЛЯЯ ОТ ЛИШНИХ ЗАБОТ
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-4">
            <Image
              src="/images/model-main.jpg"
              alt="Model 1"
              width={500}
              height={300}
              className="w-full h-auto rounded-lg object-cover"
            />
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/images/classy-couple.jpg"
                alt="Model 2"
                width={250}
                height={150}
                className="w-full h-auto rounded-lg object-cover"
              />
              <Image
                src="/images/model-secondary.jpg"
                alt="Model 3"
                width={250}
                height={150}
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-wider">
            НАЙТИ СПУТНИЦУ ЛЕГКО
          </h4>
        </div>
      </div>
    </Section>
  );
};

export default ServiceAdvantages;
