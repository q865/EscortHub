export const About = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Placeholder */}
          <div className="bg-gray-100 h-96 flex items-center justify-center rounded-lg">
            <p className="text-gray-500">Фото рандомной девушки</p>
          </div>

          {/* Text Content */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Мы предоставляем премиальный сервис сопровождения по всей России.</h2>
            <p className="text-gray-600 mb-6">
              Наши модели — это не просто эффектные девушки, а утончённые спутницы, идеально подходящие для любых событий: будь то деловая встреча, вечер в ресторане, загородная поездка или шумная вечеринка. Каждый из них умеет создавать атмосферу комфорта, стиля и подчеркивать ваш статус.
            </p>
            <h3 className="font-bold mb-2">Почему выбирают нас:</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Экономим ваше время, избавляя от лишних забот</li>
              <li>Полная конфиденциальность и отсутствие ответственности</li>
              <li>Только проверенные модели и высокий уровень сервиса</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};