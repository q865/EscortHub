import React from 'react';

interface StepProps {
  number: number;
  title: string;
}

const Step = ({ number, title }: StepProps) => (
  <div className="relative text-center w-1/4">
    <div className="mx-auto w-12 h-12 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center font-bold text-lg">
      {number}
    </div>
    <p className="mt-4 text-gray-600">{title}</p>
  </div>
);

export const HowItWorks = () => {
  const steps = [
    { number: 1, title: 'Заполните и отправьте форму' },
    { number: 2, title: 'Вам напишет личный менеджер для уточнения деталей' },
    { number: 3, title: 'Подберем идеальную спутницу' },
    { number: 4, title: 'Встреча с моделью и оплата' },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Этапы организации мероприятия</h2>
        <div className="relative flex justify-between items-start">
          {/* Connecting line */}
          <div className="absolute top-6 left-0 w-full h-0.5 bg-gray-300" />
          
          {steps.map((step) => (
            <Step key={step.number} number={step.number} title={step.title} />
          ))}
        </div>
      </div>
    </section>
  );
};