export const Header = () => {
  return (
    <header className="bg-white text-gray-900 py-4 px-8 border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wider">
          ULTIMA
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8 text-gray-600">
          <a href="#" className="hover:text-gray-900 transition-colors">Классы</a>
          <a href="#" className="hover:text-gray-900 transition-colors">Сервис</a>
          <a href="#" className="hover:text-gray-900 transition-colors">Города</a>
        </nav>

        {/* CTA Button */}
        <button className="border border-gray-900 text-gray-900 font-bold py-2 px-6 rounded hover:bg-gray-100 transition-colors">
          Каталог моделей
        </button>
      </div>
    </header>
  );
};
