export const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-600 py-6 px-8 border-t border-gray-200">
      <div className="container mx-auto flex justify-between items-center">
        <p>&copy; {new Date().getFullYear()} Ultima. Все права защищены.</p>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-gray-900 transition-colors">Политика конфиденциальности</a>
          <a href="#" className="hover:text-gray-900 transition-colors">Контакты</a>
        </div>
      </div>
    </footer>
  );
};
