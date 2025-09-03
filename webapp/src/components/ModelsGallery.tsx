import React from 'react';

interface ModelCardProps {
  name: string;
  rating: number;
}

const ModelCard = ({ name, rating }: ModelCardProps) => (
  <div className="text-center">
    <div className="bg-gray-100 h-80 w-full rounded-lg mb-4 flex items-center justify-center">
      <p className="text-gray-500">Фото</p>
    </div>
    <h4 className="font-bold text-lg">{name}</h4>
    <div className="flex justify-center mt-1">
      {'★'.repeat(rating)}
      {'☆'.repeat(5 - rating)}
    </div>
  </div>
);

export const ModelsGallery = () => {
  const models = [
    { name: 'Анастасия', rating: 5 },
    { name: 'София', rating: 5 },
    { name: 'Виктория', rating: 5 },
    { name: 'Мария', rating: 5 },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">Модели агентства XXX</h2>
        <p className="text-center text-gray-600 mb-12">Выберите ту, что украсит ваш вечер</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {models.map(model => (
            <ModelCard key={model.name} name={model.name} rating={model.rating} />
          ))}
        </div>
      </div>
    </section>
  );
};