export const Hero = () => {
  return (
    <section className="text-center py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tighter uppercase mb-4">
          Разные вы. Одна Ultima
        </h1>
        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-8">
          Поездки на автомобилях премиум-класса для работы и отдыха
        </p>
        <button className="bg-yellow-500 text-black font-bold py-4 px-10 rounded hover:bg-yellow-600 transition-colors text-lg">
          Заказать
        </button>
      </div>
    </section>
  );
};