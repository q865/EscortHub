import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ children, className = '' }) => {
  return (
    <section className={`min-h-screen flex items-center justify-center p-4 ${className}`}>
      <div className="container mx-auto max-w-sm md:max-w-md lg:max-w-xl">
        {children}
      </div>
    </section>
  );
};

export default Section;
