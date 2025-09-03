export const Header = () => {
  return (
    <header className="bg-black text-white py-4 px-8 border-b border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wider uppercase">
          Agency
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8 font-medium text-gray-300">
          <a href="#" className="hover:text-white transition-colors">Россия</a>
          <a href="#" className="hover:text-white transition-colors">Telegram</a>
          <a href="#" className="hover:text-white transition-colors">WhatsApp</a>
        </nav>

        {/* CTA Button */}
        <button className="bg-yellow-500 text-black font-bold py-2 px-6 rounded hover:bg-yellow-600 transition-colors uppercase">
          Каталог моделей
        </button>
      </div>
    </header>
  );
};
