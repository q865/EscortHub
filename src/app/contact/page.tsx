'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import { ArrowLeft, Phone, Mail, MessageCircle, MapPin, Clock, Send } from 'lucide-react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { sendEmail, EmailData } from '@/services/emailService';
import { sendManagerNotification, sendClientConfirmation } from '@/services/smsService';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  preferredContact: 'phone' | 'email' | 'telegram' | 'whatsapp';
}

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>();

  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Телефон',
      value: '+7 (495) 123-45-67',
      description: 'Круглосуточная поддержка',
      href: 'tel:+74951234567'
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: 'Telegram',
      value: '@escorthub_support',
      description: 'Быстрые ответы 24/7',
      href: 'https://t.me/escorthub_support'
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: 'WhatsApp',
      value: '+7 (495) 123-45-67',
      description: 'Мгновенная связь',
      href: 'https://wa.me/74951234567'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      value: 'info@escorthub.ru',
      description: 'Подробные консультации',
      href: 'mailto:info@escorthub.ru'
    }
  ];

  const offices = [
    {
      city: 'Москва',
      address: 'ул. Тверская, 15, офис 501',
      hours: 'Пн-Вс: 10:00 - 02:00',
      phone: '+7 (495) 123-45-67'
    },
    {
      city: 'Санкт-Петербург',
      address: 'Невский пр., 28, офис 301',
      hours: 'Пн-Вс: 10:00 - 02:00',
      phone: '+7 (812) 987-65-43'
    }
  ];

  const serviceOptions = [
    'VIP Сопровождение',
    'Светские мероприятия',
    'Travel Companion',
    'Частные встречи',
    'Консультация',
    'Другое'
  ];

  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    setIsSubmitting(true);
    
    try {
      // Отправка email через EmailJS
      const emailData: EmailData = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        service: data.service,
        message: data.message,
        preferredContact: data.preferredContact
      };
      
      const emailSent = await sendEmail(emailData);
      
      if (emailSent) {
        // Отправка SMS уведомления менеджеру
        await sendManagerNotification({
          clientName: data.name,
          clientEmail: data.email,
          clientPhone: data.phone,
          service: data.service,
          message: data.message
        });
        
        // Отправка подтверждения клиенту (если указан телефон)
        if (data.phone) {
          await sendClientConfirmation(data.phone, data.name);
        }
        
        setSubmitStatus('success');
        reset();
      } else {
        throw new Error('Failed to send email');
      }
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
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
                Контакты
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
            Свяжитесь с нами
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Мы всегда готовы ответить на ваши вопросы и предоставить индивидуальную консультацию. 
            Выберите удобный способ связи.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] rounded-3xl p-8 border border-white/10">
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-6">
                Оставить заявку
              </h2>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium mb-2">Имя *</label>
                  <input
                    type="text"
                    {...register('name', { required: 'Имя обязательно' })}
                    className="w-full p-3 bg-white/5 border border-white/10 rounded-xl focus:border-accent focus:outline-none transition-colors text-white placeholder-gray-400"
                    placeholder="Ваше имя"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    {...register('email', { 
                      required: 'Email обязателен',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Некорректный email'
                      }
                    })}
                    className="w-full p-3 bg-white/5 border border-white/10 rounded-xl focus:border-accent focus:outline-none transition-colors text-white placeholder-gray-400"
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium mb-2">Телефон</label>
                  <input
                    type="tel"
                    {...register('phone')}
                    className="w-full p-3 bg-white/5 border border-white/10 rounded-xl focus:border-accent focus:outline-none transition-colors text-white placeholder-gray-400"
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>

                {/* Service */}
                <div>
                  <label className="block text-sm font-medium mb-2">Интересующая услуга</label>
                  <select
                    {...register('service')}
                    className="w-full p-3 bg-white/5 border border-white/10 rounded-xl focus:border-accent focus:outline-none transition-colors text-white"
                  >
                    <option value="">Выберите услугу</option>
                    {serviceOptions.map((service) => (
                      <option key={service} value={service} className="bg-background-dark">
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Preferred Contact */}
                <div>
                  <label className="block text-sm font-medium mb-2">Предпочтительный способ связи</label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { value: 'phone', label: 'Телефон' },
                      { value: 'email', label: 'Email' },
                      { value: 'telegram', label: 'Telegram' },
                      { value: 'whatsapp', label: 'WhatsApp' }
                    ].map((option) => (
                      <label key={option.value} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          {...register('preferredContact')}
                          value={option.value}
                          className="text-accent focus:ring-accent"
                        />
                        <span className="text-sm">{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <textarea
                    {...register('message')}
                    rows={4}
                    className="w-full p-3 bg-white/5 border border-white/10 rounded-xl focus:border-accent focus:outline-none transition-colors text-white placeholder-gray-400 resize-none"
                    placeholder="Расскажите о ваших предпочтениях и требованиях..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-2 ${
                    isSubmitting 
                      ? 'bg-gray-600 cursor-not-allowed' 
                      : submitStatus === 'success'
                      ? 'bg-green-600 hover:bg-green-700'
                      : submitStatus === 'error'
                      ? 'bg-red-600 hover:bg-red-700'
                      : 'bg-accent text-black hover:bg-accent/90'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                      <span>Отправка...</span>
                    </>
                  ) : submitStatus === 'success' ? (
                    <span>Заявка отправлена!</span>
                  ) : submitStatus === 'error' ? (
                    <span>Ошибка отправки</span>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Отправить заявку</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Methods */}
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-6">
                Способы связи
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={index}
                    href={method.href}
                    className="block p-4 bg-white/5 rounded-2xl border border-white/10 hover:border-accent/30 transition-all duration-300 group"
                    whileHover={{ y: -2 }}
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="text-accent group-hover:scale-110 transition-transform">
                        {method.icon}
                      </div>
                      <span className="font-semibold">{method.title}</span>
                    </div>
                    <p className="text-accent font-medium mb-1">{method.value}</p>
                    <p className="text-gray-400 text-sm">{method.description}</p>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Offices */}
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-6">
                Наши офисы
              </h2>
              <div className="space-y-4">
                {offices.map((office, index) => (
                  <div
                    key={index}
                    className="p-6 bg-white/5 rounded-2xl border border-white/10"
                  >
                    <div className="flex items-start space-x-3 mb-3">
                      <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold text-lg">{office.city}</h3>
                        <p className="text-gray-300">{office.address}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-400 ml-8">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{office.hours}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Phone className="w-4 h-4" />
                        <span>{office.phone}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Privacy Notice */}
            <div className="p-6 bg-accent/10 rounded-2xl border border-accent/20">
              <h3 className="font-bold mb-2 text-accent">Конфиденциальность</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Вся информация, переданная нам, строго конфиденциальна и не передается третьим лицам. 
                Мы гарантируем полную анонимность и защиту ваших персональных данных.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
