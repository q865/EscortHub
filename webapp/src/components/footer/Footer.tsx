export const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-6 px-8 border-t border-gray-800">
      <div className="container mx-auto flex justify-between items-center">
        <p>&copy; {new Date().getFullYear()} Ultima. Все права защищены.</p>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
          <a href="#" className="hover:text-white transition-colors">Контакты</a>
        </div>
      </div>
    </footer>
  );
};