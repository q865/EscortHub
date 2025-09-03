import React from 'react';

interface InfoCardProps {
  title: string;
  children: React.ReactNode;
}

const InfoCard = ({ title, children }: InfoCardProps) => (
  <div>
    <h4 className="font-bold text-lg mb-2">{title}</h4>
    <p className="text-gray-600">{children}</p>
  </div>
);

export const ImportantInfo = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-gray-50 p-8 md:p-12 rounded-2xl">
          <h2 className="text-3xl font-bold text-center mb-10">Важно знать</h2>
          <div className="grid md:grid-cols-2 gap-x-10 gap-y-8">
            <InfoCard title="Гарантия конфиденциальности">
              Мы ценим вашу конфиденциальность и обеспечиваем полную анонимность на всех этапах сотрудничества.
            </InfoCard>
            <InfoCard title="Стоимость услуг">
              Цены на мероприятия начинаются от XXX. Уже более X лет мы совершенствуем сервис, расширяем географию и предлагаем клиентам лучших моделей.
            </InfoCard>
            <InfoCard title="Время на организацию мероприятия">
              Минимальное время подготовки X часа. Однако для комфортного планирования рекомендуется делать заказ за XXX.
            </InfoCard>
            <InfoCard title="Уровень моделей">
              Наши модели — это роскошные, харизматичные и утончённые спутники с безупречной внешностью, интеллектом и изысканными манерами, способные очаровать и поиграть с вашими чувствами.
            </InfoCard>
          </div>
          <div className="text-center mt-12">
            <button className="bg-gray-900 text-white font-bold py-3 px-10 rounded hover:bg-gray-800 transition-colors text-lg">
              Подобрать спутницу
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};