export const Hero = () => {
  return (
    <section className="text-center py-24 sm:py-40 bg-black">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tighter uppercase mb-6">
          Разные вы. Одна Ultima
        </h1>
        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
          Поездки на автомобилях премиум-класса для работы и отдыха.
        </p>
        <button className="bg-yellow-500 text-black font-bold py-4 px-10 rounded hover:bg-yellow-600 transition-colors text-lg uppercase">
          Заказать
        </button>
      </div>
    </section>
  );
};