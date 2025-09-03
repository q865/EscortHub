// Сервис для работы с аналитикой
// Google Analytics 4 и Yandex Metrica

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    ym: (id: number, method: string, ...args: any[]) => void;
  }
}

// Google Analytics Events
export interface GAEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

// Yandex Metrica Goals
export interface YMGoal {
  target: string;
  params?: Record<string, any>;
}

// Google Analytics
export const trackGAEvent = (event: GAEvent) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', event.action, {
      event_category: event.category,
      event_label: event.label,
      value: event.value,
    });
  }
};

// Yandex Metrica
export const trackYMGoal = (counterId: number, goal: YMGoal) => {
  if (typeof window !== 'undefined' && window.ym) {
    window.ym(counterId, 'reachGoal', goal.target, goal.params);
  }
};

// Предустановленные события
export const Analytics = {
  // Переходы по страницам
  pageView: (pageName: string) => {
    trackGAEvent({
      action: 'page_view',
      category: 'navigation',
      label: pageName
    });
  },

  // Отправка форм
  formSubmit: (formType: string) => {
    trackGAEvent({
      action: 'form_submit',
      category: 'engagement',
      label: formType
    });
    
    trackYMGoal(12345678, { // Замените на ваш ID счетчика Yandex Metrica
      target: 'form_submit',
      params: { form_type: formType }
    });
  },

  // Клики по кнопкам
  buttonClick: (buttonName: string) => {
    trackGAEvent({
      action: 'button_click',
      category: 'engagement',
      label: buttonName
    });
  },

  // Просмотр галереи
  galleryView: (category?: string) => {
    trackGAEvent({
      action: 'gallery_view',
      category: 'content',
      label: category || 'all'
    });
  },

  // Контакт с моделью
  modelContact: (modelId: string) => {
    trackGAEvent({
      action: 'model_contact',
      category: 'conversion',
      label: modelId
    });
    
    trackYMGoal(12345678, {
      target: 'model_contact',
      params: { model_id: modelId }
    });
  },

  // Просмотр услуг
  serviceView: (serviceName: string) => {
    trackGAEvent({
      action: 'service_view',
      category: 'content',
      label: serviceName
    });
  },

  // Добавление в избранное
  addToFavorites: (modelId: string) => {
    trackGAEvent({
      action: 'add_to_favorites',
      category: 'engagement',
      label: modelId
    });
  },

  // Время на сайте (для длительных сессий)
  engagementTime: (timeSpent: number) => {
    trackGAEvent({
      action: 'engagement_time',
      category: 'engagement',
      value: timeSpent
    });
  }
};
