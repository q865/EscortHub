import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Галерея моделей | EscortHub - Элитные спутницы Москвы и СПб',
  description: 'Просмотрите галерею наших элитных моделей. Более 50 профессиональных спутниц различных категорий: Элит, Премиум, Эксклюзив. Выберите идеальную спутницу для любого мероприятия.',
  keywords: 'галерея моделей, элитные спутницы, каталог эскорт, VIP модели, премиум эскорт',
  openGraph: {
    title: 'Галерея элитных моделей | EscortHub',
    description: 'Эксклюзивная коллекция элитных спутниц. Более 50 профессиональных моделей высочайшего класса.',
    url: 'https://escorthub.ru/gallery',
  },
};

'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import { useModalStore } from '@/stores/useModalStore';
import { ArrowLeft, Filter, Heart } from 'lucide-react';

// Типы для модели
interface Model {
  id: string;
  name: string;
  age: number;
  height: string;
  city: string;
  images: string[];
  category: 'elite' | 'premium' | 'exclusive';
  available: boolean;
  description: string;
}

// Моковые данные моделей (в реальном проекте будут из CMS/API)
const models: Model[] = [
  {
    id: '1',
    name: 'Анастасия',
    age: 23,
    height: '175 см',
    city: 'Москва',
    images: ['/images/model-1.jpg'],
    category: 'elite',
    available: true,
    description: 'Элегантная модель с высшим образованием. Свободно владеет английским и французским языками.'
  },
  {
    id: '2',
    name: 'Екатерина',
    age: 25,
    height: '168 см',
    city: 'Санкт-Петербург',
    images: ['/images/model-2.jpg'],
    category: 'premium',
    available: true,
    description: 'Профессиональная модель и актриса. Идеальная спутница для светских мероприятий.'
  },
  {
    id: '3',
    name: 'Изабелла',
    age: 24,
    height: '172 см',
    city: 'Москва',
    images: ['/images/model-3.jpg'],
    category: 'exclusive',
    available: false,
    description: 'Эксклюзивная модель международного уровня. Опыт работы с VIP-клиентами.'
  },
  {
    id: '4',
    name: 'Вероника',
    age: 22,
    height: '170 см',
    city: 'Москва',
    images: ['/images/model-4.jpg'],
    category: 'elite',
    available: true,
    description: 'Молодая и амбициозная модель с безупречным стилем и манерами.'
  },
  {
    id: '5',
    name: 'Елизавета',
    age: 26,
    height: '178 см',
    city: 'Сочи',
    images: ['/images/model-5.jpg'],
    category: 'premium',
    available: true,
    description: 'Опытная модель с аристократичными манерами и утонченным вкусом.'
  },
];

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [favorites, setFavorites] = useState<string[]>([]);
  const { openModal } = useModalStore();

  const categories = [
    { value: 'all', label: 'Все модели' },
    { value: 'elite', label: 'Элит' },
    { value: 'premium', label: 'Премиум' },
    { value: 'exclusive', label: 'Эксклюзив' },
  ];

  const filteredModels = models.filter(model => 
    selectedCategory === 'all' || model.category === selectedCategory
  );

  const toggleFavorite = (modelId: string) => {
    setFavorites(prev => 
      prev.includes(modelId) 
        ? prev.filter(id => id !== modelId)
        : [...prev, modelId]
    );
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'elite': return 'text-yellow-400';
      case 'premium': return 'text-purple-400';
      case 'exclusive': return 'text-accent';
      default: return 'text-gray-400';
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
                Галерея моделей
              </div>
            </div>
            <Navigation variant="dark" />
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <div className="flex flex-wrap items-center gap-4 mb-8">
          <div className="flex items-center space-x-2 text-gray-400">
            <Filter size={18} />
            <span className="text-sm">Категория:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                  selectedCategory === category.value
                    ? 'bg-accent text-black'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Models Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {filteredModels.map((model, index) => (
              <motion.div
                key={model.id}
                className="group relative bg-white/5 rounded-2xl overflow-hidden backdrop-blur-sm border border-white/10 hover:border-accent/30 transition-all duration-500"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* Image */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={model.images[0]}
                    alt={model.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Status Badge */}
                  <div className={`absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-medium ${
                    model.available ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                  }`}>
                    {model.available ? 'Доступна' : 'Занята'}
                  </div>

                  {/* Favorite Button */}
                  <button
                    onClick={() => toggleFavorite(model.id)}
                    className="absolute top-3 right-3 p-2 rounded-full bg-black/50 backdrop-blur-sm hover:bg-black/70 transition-colors"
                  >
                    <Heart 
                      size={16} 
                      className={favorites.includes(model.id) ? 'fill-red-500 text-red-500' : 'text-white'} 
                    />
                  </button>

                  {/* Action Button */}
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <button
                      onClick={openModal}
                      className="w-full bg-accent text-black py-2 px-4 rounded-lg font-medium hover:bg-accent/90 transition-colors"
                    >
                      Связаться
                    </button>
                  </div>
                </div>

                {/* Info */}
                <div className="p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-lg font-semibold">{model.name}</h3>
                    <span className={`text-sm font-medium ${getCategoryColor(model.category)}`}>
                      {categories.find(c => c.value === model.category)?.label}
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <span>{model.age} лет</span>
                    <span>{model.height}</span>
                    <span>{model.city}</span>
                  </div>

                  <p className="text-sm text-gray-300 line-clamp-2 leading-relaxed">
                    {model.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredModels.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">В данной категории пока нет доступных моделей</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryPage;
