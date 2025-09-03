'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useModalStore } from '@/stores/useModalStore';
import { Button } from './ui/Button';
import Container from './ui/Container';

const Header = () => {
  const { openModal } = useModalStore();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <AnimatePresence>
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className={`transition-colors duration-300 ${scrolled ? 'bg-ui-background/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}
        >
          <Container className="flex items-center justify-between py-4">
            <div className="font-serif text-2xl font-bold text-text-heading">
              Elysian
            </div>
            <Button variant="secondary" size="sm" onClick={openModal}>
              Связаться
            </Button>
          </Container>
        </motion.div>
      </AnimatePresence>
    </header>
  );
};

export default Header;
