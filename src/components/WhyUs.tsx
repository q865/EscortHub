'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ShieldCheck, Clock, HeartHandshake } from 'lucide-react';
import Section from './Section';
import Heading from './ui/Heading';
import Text from './ui/Text';

const features = [
  {
    icon: <ShieldCheck className="w-10 h-10 text-brand-primary" />,
    title: '100% Конфиденциально',
    description: 'Общение через личного менеджера гарантирует вашу анонимность и защищает от любых рисков.',
  },
  {
    icon: <Clock className="w-10 h-10 text-brand-primary" />,
    title: 'Экономия Вашего Времени',
    description: 'Мы берем на себя все организационные моменты, от подбора до логистики встречи.',
  },
  {
    icon: <HeartHandshake className="w-10 h-10 text-brand-primary" />,
    title: 'Гарантия Качества',
    description: 'Все модели проходят строгий отбор. Вы получаете премиальный сервис и незабываемые впечатления.',
  },
];

const WhyUs = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <Section className="bg-ui-background-light">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div 
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants}>
            <Heading as="h2" size="3xl" color="dark" className="font-serif">
              Сервис, достойный вас
            </Heading>
          </motion.div>
          {features.map((feature, index) => (
            <motion.div key={index} className="flex items-start space-x-4" variants={itemVariants}>
              <div className="flex-shrink-0">{feature.icon}</div>
              <div>
                <Heading as="h3" size="xl" color="dark" className="mb-1">
                  {feature.title}
                </Heading>
                <Text color="muted-dark">{feature.description}</Text>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div 
          className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <Image src="/images/model-1.jpg" alt="Elegant model" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
        </motion.div>
      </div>
    </Section>
  );
};

export default WhyUs;
