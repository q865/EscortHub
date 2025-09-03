'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useModalStore } from '@/stores/useModalStore';
import { Button } from './ui/Button';
import Container from './ui/Container';
import Heading from './ui/Heading';
import Text from './ui/Text';

const Hero = () => {
  const { openModal } = useModalStore();

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <video
        src="/videos/hero-bg.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none object-cover"
      />
      <div className="absolute inset-0 bg-black/60 z-10" />
      
      <Container className="relative z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <Heading as="h1" size="4xl" color="light" className="font-serif mb-4">
            Искусство Идеального Досуга
          </Heading>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <Text size="lg" color="light" className="max-w-2xl mx-auto mb-8">
            Откройте для себя мир, где каждая деталь вашего отдыха продумана до мелочей. Элитные спутницы для самых взыскательных.
          </Text>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <Button size="lg" onClick={openModal}>Оставить заявку</Button>
        </motion.div>
      </Container>
    </div>
  );
};

export default Hero;