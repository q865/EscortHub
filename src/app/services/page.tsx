import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Наши услуги | EscortHub - VIP сопровождение и премиум эскорт',
  description: 'Полный спектр премиальных услуг сопровождения: VIP эскорт, светские мероприятия, travel companion, частные встречи. Цены от 30,000₽. Конфиденциальность гарантирована.',
  keywords: 'VIP сопровождение, эскорт услуги, светские мероприятия, travel companion, частные встречи, премиум эскорт',
  openGraph: {
    title: 'Премиальные услуги сопровождения | EscortHub',
    description: 'VIP эскорт, светские мероприятия, путешествия, частные встречи. Полный спектр элитных услуг сопровождения.',
    url: 'https://escorthub.ru/services',
  },
};

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import { useModalStore } from '@/stores/useModalStore';
import { ArrowLeft, Clock, Shield, Star, Users, Globe, Crown } from 'lucide-react';

const ServicesPage = () => {
  const { openModal } = useModalStore();

  const services = [
    {
      icon: <Crown className="w-8 h-8" />,
      title: 'VIP Сопровождение',
      description: 'Элитные спутницы для деловых встреч, светских мероприятий и частных вечеров',
      features: ['Высшее образование', 'Знание этикета', 'Владение языками', 'Безупречный стиль'],
      price: 'от 50 000 ₽',
      category: 'premium'
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Светские мероприятия',
      description: 'Профессиональные модели для презентаций, выставок и корпоративных событий',
      features: ['Опыт работы с медиа', 'Фотогеничность', 'Коммуникабельность', 'Пунктуальность'],
      price: 'от 30 000 ₽',
      category: 'business'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Travel Companion',
      description: 'Спутницы для путешествий и деловых поездок по России и за рубежом',
      features: ['Загранпаспорт', 'Гибкий график', 'Культурная осведомленность', 'Адаптивность'],
      price: 'от 80 000 ₽',
      category: 'travel'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Частные встречи',
      description: 'Индивидуальные встречи в комфортной и конфиденциальной обстановке',
      features: ['Полная конфиденциальность', 'Индивидуальный подход', 'Гибкое время', 'Личный менеджер'],
      price: 'от 40 000 ₽',
      category: 'private'
    }
  ];

  const advantages = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Конфиденциальность',
      description: '100% анонимность и защита личных данных клиентов'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: '24/7 Поддержка',
      description: 'Круглосуточная поддержка и оперативное решение вопросов'
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: 'Премиум качество',
      description: 'Строгий отбор моделей и высокие стандарты сервиса'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <div className="min-h-screen bg-background-dark text-text-on-dark">
      {/* Header */}
      <header className="border-b border-white/10 sticky top-0 z-30 backdrop-blur-md bg-background-dark/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <Link 
                href="/" 
                className="flex items-center space-x-2 text-accent hover:text-accent/80 transition-colors"
              >
                <ArrowLeft size={20} />
                <span className="hidden sm:inline">Назад</span>
              </Link>
              <div className="font-serif text-xl md:text-2xl font-bold tracking-wide">
                Наши услуги
              </div>
            </div>
            <Navigation variant="dark" />
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">
            Премиальные услуги
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Мы предлагаем эксклюзивные услуги сопровождения для самых взыскательных клиентов. 
            Каждая услуга адаптирована под ваши индивидуальные потребности.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] rounded-3xl p-8 border border-white/10 hover:border-accent/30 transition-all duration-500"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              {/* Icon */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 rounded-2xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-black transition-all duration-500">
                  {service.icon}
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold">{service.title}</h3>
                  <p className="text-accent font-semibold">{service.price}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                onClick={openModal}
                className="w-full bg-accent/10 text-accent py-3 px-6 rounded-xl font-medium hover:bg-accent hover:text-black transition-all duration-300 border border-accent/20 hover:border-accent"
              >
                Узнать подробнее
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Advantages */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">
            Наши преимущества
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                className="text-center p-6 rounded-2xl bg-white/5 border border-white/10"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="inline-flex p-3 rounded-full bg-accent/10 text-accent mb-4">
                  {advantage.icon}
                </div>
                <h3 className="font-serif text-xl font-bold mb-2">{advantage.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center bg-gradient-to-r from-accent/10 to-accent/5 rounded-3xl p-12 border border-accent/20"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Готовы к незабываемому опыту?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами для индивидуальной консультации и подбора идеальной спутницы
          </p>
          <button
            onClick={openModal}
            className="bg-accent text-black py-4 px-8 rounded-xl font-bold text-lg hover:bg-accent/90 transition-colors"
          >
            Оставить заявку
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesPage;
