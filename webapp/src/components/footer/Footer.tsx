export const Footer = () => {
  return (
    <footer className="bg-black text-gray-500 py-6 px-8 border-t border-gray-800">
      <div className="container mx-auto flex justify-between items-center text-sm">
        <p>&copy; {new Date().getFullYear()} Ultima. Все права защищены.</p>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
          <a href="#" className="hover:text-white transition-colors">Условия использования</a>
        </div>
      </div>
    </footer>
  );
};