import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 ease-in-out ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
