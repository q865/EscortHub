import React from 'react';

// Reusable Input component for the form
const Input = ({ label, placeholder, type = 'text' }: { label: string; placeholder: string; type?: string }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500 text-black"
    />
  </div>
);

// Reusable Select component
const Select = ({ label, options }: { label: string; options: string[] }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500 text-black">
      {options.map(option => <option key={option}>{option}</option>)}
    </select>
  </div>
);


export const ContactForm = () => {
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">Организуем встречу с вашими индивидуальными предпочтениями</h2>
        <div className="grid md:grid-cols-2 gap-6 p-8 border border-gray-700 rounded-lg bg-gray-900">
          {/* Left Column */}
          <div className="space-y-4">
            <Select label="Поводы для сопровождения" options={[
              "Романтические свидания и встречи",
              "Официальные и публичные мероприятия",
              "Яркие вечеринки и закрытые тусовки",
              "Совместный отпуск или путешествие",
              "Развлечение и досуг",
            ]} />
            <button className="w-full bg-gray-700 text-white font-bold py-2 px-6 rounded hover:bg-gray-600 transition-colors">
              Организовать сейчас
            </button>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            <Input label="Город" placeholder="Например, Москва" />
            <Input label="Тип мероприятия" placeholder="Например, ужин в ресторане" />
            <Input label="Дата и предполагаемое время" placeholder="ДД.ММ.ГГГГ ЧЧ:ММ" />
            <Input label="Контакт для связи" placeholder="Telegram / WhatsApp" />
            <button className="w-full bg-yellow-500 text-black font-bold py-2 px-6 rounded hover:bg-yellow-600 transition-colors">
              Отправить заявку
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
