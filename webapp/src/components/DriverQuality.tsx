export const DriverQuality = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Title */}
          <div>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter uppercase">
              Водители класса U
            </h2>
          </div>

          {/* Right Column - Description */}
          <div>
            <p className="text-lg text-gray-400 mb-4">
              Наши водители — это профессионалы, прошедшие строгий отбор и специальную подготовку. Они соблюдают дресс-код, принципы конфиденциальности и всегда готовы помочь.
            </p>
            <ul className="space-y-2 text-lg">
              <li>✓ Строгий отбор и обучение</li>
              <li>✓ Деловой стиль одежды</li>
              <li>✓ Знание города и этикета</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};