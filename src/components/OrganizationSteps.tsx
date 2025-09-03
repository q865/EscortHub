import React from 'react';
import Section from './Section';

const OrganizationSteps = () => {
  return (
    <Section className="bg-background-light">
      <div className="w-full py-12">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-dark text-center mb-12">
          ЭТАПЫ ОРГАНИЗАЦИИ
        </h2>

        <div className="relative flex flex-col items-center">
          <div className="absolute inset-x-1/2 top-0 bottom-0 w-px bg-gray-300 transform -translate-x-1/2"></div>
          
          <div className="flex items-center w-full mb-8 relative z-10">
            <div className="flex-shrink-0 w-20 h-20 rounded-full bg-primary-light flex items-center justify-center border border-primary shadow-md">
              <span className="text-2xl font-bold text-primary">1</span>
            </div>
            <p className="ml-6 text-text-dark text-base md:text-lg">
              Оставьте свой контакт на сайте
            </p>
          </div>

          <div className="flex items-center w-full mb-8 relative z-10 justify-end text-right">
            <p className="mr-6 text-text-dark text-base md:text-lg">
              Вам напишет личный менеджер для уточнения деталей
            </p>
            <div className="flex-shrink-0 w-20 h-20 rounded-full bg-secondary-light flex items-center justify-center border border-secondary shadow-md">
              <span className="text-2xl font-bold text-secondary">2</span>
            </div>
          </div>
          
          <div className="flex items-center w-full mb-8 relative z-10">
            <div className="flex-shrink-0 w-20 h-20 rounded-full bg-primary-light flex items-center justify-center border border-primary shadow-md">
              <span className="text-2xl font-bold text-primary">3</span>
            </div>
            <p className="ml-6 text-text-dark text-base md:text-lg">
              Подберет идеальную спутницу
            </p>
          </div>

          <div className="flex items-center w-full mb-8 relative z-10 justify-end text-right">
            <p className="mr-6 text-text-dark text-base md:text-lg">
              Назначите время и дату
            </p>
            <div className="flex-shrink-0 w-20 h-20 rounded-full bg-accent-light flex items-center justify-center border border-accent shadow-md">
              <span className="text-2xl font-bold text-accent">4</span>
            </div>
          </div>

          <div className="flex items-center w-full relative z-10">
            <div className="flex-shrink-0 w-20 h-20 rounded-full bg-secondary-light flex items-center justify-center border border-secondary shadow-md">
              <span className="text-2xl font-bold text-secondary">5</span>
            </div>
            <p className="ml-6 text-text-dark text-base md:text-lg">
              Модель ждет вас
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default OrganizationSteps;
