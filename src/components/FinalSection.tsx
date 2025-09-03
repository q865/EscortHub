import React from 'react';
import Section from './Section';
import Button from './Button';

const FinalSection = () => {
  return (
    <Section className="bg-background-light">
      <div className="w-full py-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-dark text-center mb-8">
          ВАЖНО ЗНАТЬ
        </h2>

        <div className="flex justify-center space-x-2 mb-12">
          <div className="w-8 h-1 bg-gray-400 rounded-full"></div>
          <div className="w-8 h-1 bg-primary rounded-full"></div>
          <div className="w-8 h-1 bg-gray-400 rounded-full"></div>
          <div className="w-8 h-1 bg-gray-400 rounded-full"></div>
        </div>

        <div className="bg-surface-light rounded-lg shadow-lg p-6 md:p-8 text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-secondary-light flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 1a4 4 0 00-4 4v2h8V5a4 4 0 00-4-4zM5 7v14a2 2 0 002 2h10a2 2 0 002-2V7H5zm7 10a1 1 0 110-2 1 1 0 010 2z"/>
              </svg>
            </div>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-text-dark mb-2">
            В целях<br/>конфиденциальности
          </h3>
          <p className="text-gray-600 text-sm md:text-base">
            На сайте представлены образцы девушек, исключительно в ознакомительных целях
          </p>
        </div>

        <div className="bg-gray-100 rounded-lg p-6 md:p-8 text-center">
          <h3 className="text-xl md:text-2xl font-bold text-text-dark mb-4">
            УСТРОЙ НАСТОЯЩИЙ<br/>ВЫХОДНОЙ
          </h3>
          <p className="text-gray-600 text-sm md:text-base mb-6">
            Оставь контакт или напиши самостоятельно. Расскажи, для какого события и, когда тебе нужна спутница.
          </p>
          <Button>Начать</Button>
        </div>
      </div>
    </Section>
  );
};

export default FinalSection;
