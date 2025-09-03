'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Plus, Edit3, Trash2, Eye, EyeOff, Upload, Save, X } from 'lucide-react';
import Image from 'next/image';

// Интерфейс модели
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
  price?: string;
  languages?: string[];
  education?: string;
  interests?: string[];
  createdAt: Date;
  updatedAt: Date;
}

// Моковые данные (в реальном проекте будут из API/базы данных)
const initialModels: Model[] = [
  {
    id: '1',
    name: 'Анастасия',
    age: 23,
    height: '175 см',
    city: 'Москва',
    images: ['/images/model-1.jpg'],
    category: 'elite',
    available: true,
    description: 'Элегантная модель с высшим образованием. Свободно владеет английским и французским языками.',
    price: 'от 50 000 ₽',
    languages: ['Русский', 'Английский', 'Французский'],
    education: 'МГУ, Международные отношения',
    interests: ['Искусство', 'Путешествия', 'Литература'],
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-20')
  },
  // Добавьте другие модели...
];

const AdminPage = () => {
  const [models, setModels] = useState<Model[]>(initialModels);
  const [isEditing, setIsEditing] = useState(false);
  const [editingModel, setEditingModel] = useState<Partial<Model> | null>(null);
  const [filter, setFilter] = useState<'all' | 'elite' | 'premium' | 'exclusive'>('all');

  // Фильтрация моделей
  const filteredModels = models.filter(model => 
    filter === 'all' || model.category === filter
  );

  // Создание новой модели
  const createNewModel = () => {
    const newModel: Partial<Model> = {
      id: Date.now().toString(),
      name: '',
      age: 18,
      height: '',
      city: '',
      images: [],
      category: 'elite',
      available: true,
      description: '',
      price: '',
      languages: [],
      education: '',
      interests: [],
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    setEditingModel(newModel);
    setIsEditing(true);
  };

  // Редактирование модели
  const editModel = (model: Model) => {
    setEditingModel({ ...model });
    setIsEditing(true);
  };

  // Сохранение модели
  const saveModel = () => {
    if (!editingModel || !editingModel.name) return;

    const modelToSave = {
      ...editingModel,
      updatedAt: new Date()
    } as Model;

    if (models.find(m => m.id === editingModel.id)) {
      // Обновление существующей модели
      setModels(prev => prev.map(m => m.id === editingModel.id ? modelToSave : m));
    } else {
      // Добавление новой модели
      setModels(prev => [...prev, modelToSave]);
    }

    setIsEditing(false);
    setEditingModel(null);
  };

  // Удаление модели
  const deleteModel = (id: string) => {
    if (confirm('Вы уверены, что хотите удалить эту модель?')) {
      setModels(prev => prev.filter(m => m.id !== id));
    }
  };

  // Переключение доступности
  const toggleAvailability = (id: string) => {
    setModels(prev => prev.map(m => 
      m.id === id ? { ...m, available: !m.available, updatedAt: new Date() } : m
    ));
  };

  return (
    <div className="min-h-screen bg-background-dark text-text-on-dark p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-serif text-3xl md:text-4xl font-bold mb-2">
              Управление моделями
            </h1>
            <p className="text-gray-400">
              Всего моделей: {models.length} | Активных: {models.filter(m => m.available).length}
            </p>
          </div>
          <button
            onClick={createNewModel}
            className="flex items-center space-x-2 bg-accent text-black px-6 py-3 rounded-xl font-medium hover:bg-accent/90 transition-colors"
          >
            <Plus size={20} />
            <span>Добавить модель</span>
          </button>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-6">
          {[
            { value: 'all', label: 'Все' },
            { value: 'elite', label: 'Элит' },
            { value: 'premium', label: 'Премиум' },
            { value: 'exclusive', label: 'Эксклюзив' }
          ].map((filterOption) => (
            <button
              key={filterOption.value}
              onClick={() => setFilter(filterOption.value as any)}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                filter === filterOption.value
                  ? 'bg-accent text-black'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10'
              }`}
            >
              {filterOption.label}
            </button>
          ))}
        </div>

        {/* Models Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredModels.map((model) => (
            <motion.div
              key={model.id}
              className="bg-white/5 rounded-2xl overflow-hidden border border-white/10"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              {/* Image */}
              <div className="relative aspect-[3/4]">
                {model.images[0] ? (
                  <Image
                    src={model.images[0]}
                    alt={model.name}
                    fill
                    className="object-cover"
                    sizes="300px"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                    <span className="text-gray-400">Нет фото</span>
                  </div>
                )}
                
                {/* Status Badge */}
                <div className={`absolute top-2 left-2 px-2 py-1 rounded-full text-xs font-medium ${
                  model.available ? 'bg-green-500' : 'bg-red-500'
                }`}>
                  {model.available ? 'Активна' : 'Неактивна'}
                </div>

                {/* Category Badge */}
                <div className="absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-medium bg-accent text-black">
                  {model.category}
                </div>
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 className="font-serif text-lg font-bold mb-1">{model.name}</h3>
                <div className="text-sm text-gray-400 mb-2">
                  {model.age} лет • {model.height} • {model.city}
                </div>
                <p className="text-sm text-gray-300 line-clamp-2 mb-4">
                  {model.description}
                </p>

                {/* Actions */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => editModel(model)}
                      className="p-2 rounded-lg bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 transition-colors"
                    >
                      <Edit3 size={16} />
                    </button>
                    <button
                      onClick={() => toggleAvailability(model.id)}
                      className={`p-2 rounded-lg transition-colors ${
                        model.available
                          ? 'bg-red-500/20 text-red-400 hover:bg-red-500/30'
                          : 'bg-green-500/20 text-green-400 hover:bg-green-500/30'
                      }`}
                    >
                      {model.available ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                    <button
                      onClick={() => deleteModel(model.id)}
                      className="p-2 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-colors"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                  <span className="text-xs text-gray-500">
                    {model.updatedAt.toLocaleDateString()}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Edit Modal */}
        {isEditing && editingModel && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div
              className="bg-background-dark border border-white/10 rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-serif text-2xl font-bold">
                  {editingModel.id && models.find(m => m.id === editingModel.id) ? 'Редактировать модель' : 'Новая модель'}
                </h2>
                <button
                  onClick={() => setIsEditing(false)}
                  className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="space-y-4">
                {/* Основная информация */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Имя *</label>
                    <input
                      type="text"
                      value={editingModel.name || ''}
                      onChange={(e) => setEditingModel(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full p-3 bg-white/5 border border-white/10 rounded-xl focus:border-accent focus:outline-none"
                      placeholder="Имя модели"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Возраст *</label>
                    <input
                      type="number"
                      min="18"
                      max="50"
                      value={editingModel.age || 18}
                      onChange={(e) => setEditingModel(prev => ({ ...prev, age: parseInt(e.target.value) }))}
                      className="w-full p-3 bg-white/5 border border-white/10 rounded-xl focus:border-accent focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Рост</label>
                    <input
                      type="text"
                      value={editingModel.height || ''}
                      onChange={(e) => setEditingModel(prev => ({ ...prev, height: e.target.value }))}
                      className="w-full p-3 bg-white/5 border border-white/10 rounded-xl focus:border-accent focus:outline-none"
                      placeholder="175 см"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Город</label>
                    <input
                      type="text"
                      value={editingModel.city || ''}
                      onChange={(e) => setEditingModel(prev => ({ ...prev, city: e.target.value }))}
                      className="w-full p-3 bg-white/5 border border-white/10 rounded-xl focus:border-accent focus:outline-none"
                      placeholder="Москва"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Категория</label>
                    <select
                      value={editingModel.category || 'elite'}
                      onChange={(e) => setEditingModel(prev => ({ ...prev, category: e.target.value as any }))}
                      className="w-full p-3 bg-white/5 border border-white/10 rounded-xl focus:border-accent focus:outline-none"
                    >
                      <option value="elite">Элит</option>
                      <option value="premium">Премиум</option>
                      <option value="exclusive">Эксклюзив</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Цена</label>
                    <input
                      type="text"
                      value={editingModel.price || ''}
                      onChange={(e) => setEditingModel(prev => ({ ...prev, price: e.target.value }))}
                      className="w-full p-3 bg-white/5 border border-white/10 rounded-xl focus:border-accent focus:outline-none"
                      placeholder="от 50 000 ₽"
                    />
                  </div>
                </div>

                {/* Описание */}
                <div>
                  <label className="block text-sm font-medium mb-2">Описание</label>
                  <textarea
                    value={editingModel.description || ''}
                    onChange={(e) => setEditingModel(prev => ({ ...prev, description: e.target.value }))}
                    rows={4}
                    className="w-full p-3 bg-white/5 border border-white/10 rounded-xl focus:border-accent focus:outline-none resize-none"
                    placeholder="Краткое описание модели..."
                  />
                </div>

                {/* Дополнительная информация */}
                <div>
                  <label className="block text-sm font-medium mb-2">Образование</label>
                  <input
                    type="text"
                    value={editingModel.education || ''}
                    onChange={(e) => setEditingModel(prev => ({ ...prev, education: e.target.value }))}
                    className="w-full p-3 bg-white/5 border border-white/10 rounded-xl focus:border-accent focus:outline-none"
                    placeholder="МГУ, Международные отношения"
                  />
                </div>

                {/* Статус */}
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="available"
                    checked={editingModel.available || false}
                    onChange={(e) => setEditingModel(prev => ({ ...prev, available: e.target.checked }))}
                    className="rounded"
                  />
                  <label htmlFor="available" className="text-sm font-medium">
                    Модель активна и доступна для бронирования
                  </label>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-end space-x-4 mt-8">
                <button
                  onClick={() => setIsEditing(false)}
                  className="px-6 py-3 border border-white/20 rounded-xl hover:bg-white/5 transition-colors"
                >
                  Отмена
                </button>
                <button
                  onClick={saveModel}
                  className="flex items-center space-x-2 bg-accent text-black px-6 py-3 rounded-xl font-medium hover:bg-accent/90 transition-colors"
                >
                  <Save size={18} />
                  <span>Сохранить</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPage;
