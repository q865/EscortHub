'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import { ArrowLeft, Award, Users, Clock, Shield, Heart, Star } from 'lucide-react';

const AboutPage = () => {
  const stats = [
    { number: '500+', label: 'Довольных клиентов', icon: <Users className="w-6 h-6" /> },
    { number: '50+', label: 'Профессиональных моделей', icon: <Star className="w-6 h-6" /> },
    { number: '5', label: 'Лет на рынке', icon: <Award className="w-6 h-6" /> },
    { number: '24/7', label: 'Поддержка клиентов', icon: <Clock className="w-6 h-6" /> },
  ];

  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Конфиденциальность',
      description: 'Мы гарантируем полную анонимность и защиту личных данных каждого клиента. Ваша приватность - наш главный приоритет.'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Индивидуальный подход',
      description: 'Каждый клиент уникален, поэтому мы тщательно подбираем спутницу согласно вашим предпочтениям и требованиям.'
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Премиум качество',
      description: 'Строгий отбор моделей, высокие стандарты сервиса и внимание к каждой детали - основа нашей репутации.'
    }
  ];

  const team = [
    {
      name: 'Анна Волкова',
      position: 'Основатель и CEO',
      image: '/images/model-1.jpg',
      description: 'Опыт в индустрии премиальных услуг более 8 лет'
    },
    {
      name: 'Михаил Петров',
      position: 'Директор по развитию',
      image: '/images/model-2.jpg',
      description: 'Эксперт в области VIP-сервиса и клиентского опыта'
    },
    {
      name: 'Елена Смирнова',
      position: 'Менеджер по работе с моделями',
      image: '/images/model-3.jpg',
      description: 'Специалист по подбору и обучению персонала'
    }
  ];

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
                О компании
              </div>
            </div>
            <Navigation variant="dark" />
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">
            EscortHub
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Премиальный сервис элитного сопровождения, где искусство общения встречается 
            с безупречным сервисом и абсолютной конфиденциальностью.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 rounded-2xl bg-white/5 border border-white/10"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="inline-flex p-3 rounded-full bg-accent/10 text-accent mb-4">
                {stat.icon}
              </div>
              <div className="font-serif text-3xl md:text-4xl font-bold text-accent mb-2">
                {stat.number}
              </div>
              <p className="text-gray-300 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Story Section */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Наша история
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                EscortHub был основан в 2019 году с единственной целью — предоставить 
                клиентам доступ к самым изысканным и профессиональным спутницам в России.
              </p>
              <p>
                Мы понимали, что рынок элитного сопровождения нуждается в новых стандартах 
                качества, безопасности и конфиденциальности. Именно поэтому мы создали 
                платформу, которая объединяет только лучших специалистов индустрии.
              </p>
              <p>
                Сегодня мы гордимся тем, что стали эталоном качества в сфере премиальных 
                услуг сопровождения, обслуживая VIP-клиентов по всему миру.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden">
              <Image
                src="/images/model-4.jpg"
                alt="EscortHub"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">
            Наши ценности
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="text-center p-8 rounded-3xl bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="inline-flex p-4 rounded-2xl bg-accent/10 text-accent mb-6">
                  {value.icon}
                </div>
                <h3 className="font-serif text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">
            Наша команда
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="text-center group"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative aspect-square rounded-3xl overflow-hidden mb-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h3 className="font-serif text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-accent font-medium mb-2">{member.position}</p>
                <p className="text-gray-300 text-sm">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mission */}
        <motion.div
          className="text-center bg-gradient-to-r from-accent/10 to-accent/5 rounded-3xl p-12 border border-accent/20"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            Наша миссия
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Создавать незабываемые моменты и предоставлять нашим клиентам доступ к миру 
            элегантности, утонченности и безупречного сервиса. Мы стремимся превзойти 
            ожидания каждого клиента, обеспечивая высочайший уровень конфиденциальности 
            и профессионализма.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
