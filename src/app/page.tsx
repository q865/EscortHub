'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import { useModalStore } from '@/stores/useModalStore';

// Массив с путями к скачанным фотографиям для слайдера
const photos = [
  '/images/model-1.jpg',
  '/images/model-2.jpg',
  '/images/model-3.jpg',
  '/images/model-4.jpg',
  '/images/model-5.jpg',
];

const HomePage = () => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const { openModal } = useModalStore();

  // Автоматическая смена фото каждые 5 секунд
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhotoIndex((prev) => (prev + 1) % photos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Варианты анимации для текста с эффектом "печатания"
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94] 
      } 
    },
  };

  // Варианты анимации для заголовка с задержкой по буквам
  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  // Варианты анимации для фото (cross-fade)
  const photoVariants = {
    enter: { opacity: 0, scale: 1.05 },
    center: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 1.2, ease: 'easeOut' }
    },
    exit: { 
      opacity: 0, 
      scale: 0.95,
      transition: { duration: 1 } 
    },
  };

  // Hover эффект для ссылок
  const linkHoverVariants = {
    rest: { y: 0, color: '#FFFFFF' },
    hover: { 
      y: -2, 
      color: '#D4AF37', 
      transition: { 
        duration: 0.3,
        ease: 'easeOut'
      } 
    },
  };

  // Hover эффект для кнопки CTA
  const ctaVariants = {
    rest: { 
      scale: 1,
      backgroundColor: 'transparent',
      color: '#D4AF37'
    },
    hover: { 
      scale: 1.02,
      backgroundColor: '#D4AF37',
      color: '#000000',
      transition: { 
        duration: 0.4,
        ease: 'easeOut'
      }
    },
  };

  const title = "ИСКУССТВО КОМПАНИИ";

  return (
    <div className="flex flex-col md:flex-row h-screen overflow-hidden font-sans">
      {/* Левая часть: Черная, статичная */}
      <div className="w-full md:w-1/2 bg-background-dark text-text-on-dark flex flex-col justify-between p-6 md:p-12 relative min-h-screen md:min-h-0">
        {/* Тонкая золотая линия-разделитель */}
        <div className="absolute top-0 right-0 w-px h-full bg-accent opacity-20"></div>
        
        {/* Header */}
        <motion.div 
          className="flex justify-between items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="font-serif text-2xl md:text-3xl font-bold tracking-wide">
            EscortHub
          </div>
          <Navigation variant="dark" />
        </motion.div>

        {/* Главный контент */}
        <div className="flex flex-col justify-center flex-grow text-center space-y-8">
          {/* Заголовок с анимацией по буквам */}
          <motion.h1
            className="font-serif text-4xl md:text-6xl font-bold leading-tight"
            variants={titleVariants}
            initial="hidden"
            animate="visible"
          >
            {title.split('').map((letter, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className="inline-block"
              >
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
          </motion.h1>

          {/* Подзаголовок */}
          <motion.p
            className="font-sans text-lg md:text-xl leading-relaxed max-w-md mx-auto text-gray-300 px-4 md:px-0"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Эксклюзивный сервис подбора спутниц для элитного досуга. 
            Конфиденциальность, стиль и безупречное качество.
          </motion.p>

          {/* CTA кнопка */}
          <motion.button
            className="font-sans text-base md:text-lg px-6 md:px-8 py-3 md:py-4 border-2 border-accent rounded-sm mx-auto transition-all duration-400 tracking-wide"
            variants={ctaVariants}
            initial="rest"
            whileHover="hover"
            whileTap={{ scale: 0.98 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
            onClick={openModal}
          >
            Подобрать модель
          </motion.button>
        </div>

        {/* Навигация */}
        <motion.div 
          className="flex justify-center space-x-8 text-sm tracking-wider"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          {['Галерея', 'Условия', 'О нас'].map((link) => (
            <motion.a
              key={link}
              href="#"
              className="relative cursor-pointer"
              variants={linkHoverVariants}
              initial="rest"
              whileHover="hover"
            >
              {link}
              <motion.div
                className="absolute bottom-0 left-0 w-full h-px bg-accent"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Правая часть: Белая, с динамичным слайдером */}
      <div className="w-full md:w-1/2 bg-background-light relative overflow-hidden h-64 md:h-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPhotoIndex}
            className="absolute inset-0"
            variants={photoVariants}
            initial="enter"
            animate="center"
            exit="exit"
          >
            <Image
              src={photos[currentPhotoIndex]}
              alt="Elite Model"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              priority={currentPhotoIndex === 0}
              sizes="50vw"
            />
          </motion.div>
        </AnimatePresence>

        {/* Индикаторы слайдера */}
        <div className="absolute bottom-8 right-8 flex space-x-2">
          {photos.map((_, index) => (
            <motion.button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentPhotoIndex 
                  ? 'bg-accent' 
                  : 'bg-white/50 hover:bg-white/80'
              }`}
              onClick={() => setCurrentPhotoIndex(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;