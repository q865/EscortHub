# EscortHub - Премиальный сервис элитного сопровождения

Современный веб-сайт для премиального сервиса сопровождения, построенный на Next.js 15 с использованием TypeScript, Tailwind CSS и Framer Motion.

## 🚀 Особенности

### ✨ Дизайн и UX
- **Split-screen дизайн** главной страницы в стиле Vogue/GQ
- **Премиальные анимации** с Framer Motion
- **Мобильная адаптация** для всех устройств
- **Элегантная типографика** (Playfair Display + Inter)
- **Минималистичная цветовая палитра** (черный/белый + золотой акцент)

### 📱 Страницы
- **Главная** - Split-screen с автослайдером
- **Галерея** - Каталог моделей с фильтрами и избранным
- **Услуги** - Подробное описание всех услуг
- **О компании** - История, команда, ценности
- **Контакты** - Форма обратной связи + контактная информация
- **Админ-панель** - CMS для управления анкетами моделей

### 🛠 Технологии
- **Next.js 15** - App Router, Server Components
- **TypeScript** - Полная типизация
- **Tailwind CSS** - Утилитарные стили
- **Framer Motion** - Продвинутые анимации
- **React Hook Form** - Управление формами
- **Zustand** - Состояние приложения

### 🔧 Интеграции
- **EmailJS** - Отправка форм на email
- **SMS API** - SMS уведомления менеджерам
- **Google Analytics** - Веб-аналитика
- **Yandex Metrica** - Российская аналитика

### 🎯 SEO Оптимизация
- **Метатеги** для всех страниц
- **Open Graph** и Twitter Cards
- **Структурированные данные** JSON-LD
- **Sitemap.xml** и robots.txt
- **Семантическая разметка**

## 🚀 Быстрый старт

### Установка зависимостей
```bash
npm install
```

### Запуск в режиме разработки
```bash
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000) в браузере.

### Сборка для продакшена
```bash
npm run build
npm start
```

## ⚙️ Конфигурация

### 1. EmailJS
Обновите настройки в `src/services/emailService.ts`:
```typescript
const EMAILJS_SERVICE_ID = 'your_service_id';
const EMAILJS_TEMPLATE_ID = 'your_template_id';
const EMAILJS_PUBLIC_KEY = 'your_public_key';
```

### 2. SMS API
Настройте SMS сервис в `src/services/smsService.ts`:
```typescript
const SMS_API_URL = 'https://sms.ru/sms/send';
const SMS_API_KEY = 'your_sms_api_key';
```

### 3. Google Analytics
Замените ID в `src/app/layout.tsx`:
```tsx
<GoogleAnalytics gaId="G-YOUR-GA-ID" />
```

### 4. Yandex Metrica
Обновите счетчик в `src/app/layout.tsx`:
```javascript
ym(YOUR_COUNTER_ID, "init", {
  // настройки
});
```

### 5. SEO метатеги
Обновите домен и верификационные коды в `src/app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  // ваши настройки
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
};
```

## 📁 Структура проекта

```
src/
├── app/                    # Next.js App Router
│   ├── gallery/           # Галерея моделей
│   ├── services/          # Страница услуг
│   ├── about/             # О компании
│   ├── contact/           # Контакты
│   ├── admin/             # CMS панель
│   ├── layout.tsx         # Основной layout
│   ├── page.tsx           # Главная страница
│   ├── sitemap.ts         # XML sitemap
│   └── robots.ts          # robots.txt
├── components/            # React компоненты
│   ├── ui/               # UI компоненты
│   ├── Navigation.tsx    # Навигация
│   └── StructuredData.tsx # SEO разметка
├── services/             # API сервисы
│   ├── emailService.ts   # EmailJS интеграция
│   ├── smsService.ts     # SMS уведомления
│   └── analyticsService.ts # Аналитика
└── stores/               # Zustand хранилища
    └── useModalStore.ts  # Состояние модалей
```

## 🎨 Дизайн-система

### Цвета
- **background-dark**: #000000 - Основной фон
- **background-light**: #FFFFFF - Светлый фон
- **accent**: #D4AF37 - Золотой акцент
- **text-on-dark**: #FFFFFF - Текст на темном
- **text-on-light**: #000000 - Текст на светлом

### Типографика
- **Заголовки**: Playfair Display (serif)
- **Основной текст**: Inter (sans-serif)
- **Адаптивные размеры**: clamp() для всех заголовков

### Компоненты
- **Button** - Pill-стиль с hover эффектами
- **Container** - max-w-7xl с адаптивными отступами
- **Navigation** - Десктоп + мобильное меню
- **Modal** - Glass-эффект с backdrop blur

## 📊 Аналитика

Настроены события для отслеживания:
- Переходы по страницам
- Отправка форм
- Клики по кнопкам
- Просмотр галереи
- Контакты с моделями
- Время на сайте

## 🔒 Безопасность

- Валидация всех форм
- Защита от XSS атак
- Конфиденциальность данных клиентов
- Безопасные API интеграции

## 🚀 Деплой

### Vercel (рекомендуется)
```bash
npm install -g vercel
vercel
```

### Другие платформы
- **Netlify**: Поддерживает Next.js
- **Railway**: Простой деплой
- **VPS**: Docker + Nginx

## 📝 TODO для продакшена

1. **Настроить реальные API ключи**
2. **Добавить SSL сертификат**
3. **Настроить CDN для изображений**
4. **Подключить реальную базу данных**
5. **Настроить мониторинг ошибок (Sentry)**
6. **Добавить тесты (Jest + Testing Library)**
7. **Настроить CI/CD pipeline**

## 📞 Поддержка

Для вопросов по настройке и кастомизации:
- Email: dev@escorthub.ru
- Telegram: @escorthub_dev

## 📄 Лицензия

Частная лицензия. Все права защищены © 2024 EscortHub