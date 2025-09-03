export const Header = () => {
  return (
    <header className="bg-black text-white py-4 px-8 border-b border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wider uppercase">
          Ultima
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8 font-medium">
          <a href="#" className="hover:text-gray-400 transition-colors">Классы</a>
          <a href="#" className="hover:text-gray-400 transition-colors">Сервис</a>
          <a href="#" className="hover:text-gray-400 transition-colors">Города</a>
        </nav>

        {/* CTA Button */}
        <button className="bg-yellow-500 text-black font-bold py-2 px-6 rounded hover:bg-yellow-600 transition-colors uppercase">
          Заказать
        </button>
      </div>
    </header>
  );
};