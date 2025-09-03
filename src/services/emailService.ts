import emailjs from '@emailjs/browser';

// EmailJS конфигурация (в реальном проекте эти данные должны быть в .env)
const EMAILJS_SERVICE_ID = 'your_service_id';
const EMAILJS_TEMPLATE_ID = 'your_template_id';
const EMAILJS_PUBLIC_KEY = 'your_public_key';

export interface EmailData {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message?: string;
  preferredContact?: string;
}

export const sendEmail = async (data: EmailData): Promise<boolean> => {
  try {
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      phone: data.phone || 'Не указан',
      service: data.service || 'Не указана',
      message: data.message || 'Сообщение отсутствует',
      preferred_contact: data.preferredContact || 'email',
      to_name: 'EscortHub Support',
      reply_to: data.email,
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    console.log('Email sent successfully:', response.status, response.text);
    return response.status === 200;
  } catch (error) {
    console.error('Failed to send email:', error);
    return false;
  }
};

// Инициализация EmailJS (вызывать один раз при запуске приложения)
export const initEmailJS = () => {
  emailjs.init(EMAILJS_PUBLIC_KEY);
};
