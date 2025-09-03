// SMS сервис для уведомлений
// В реальном проекте используйте SMS.ru, Twilio, или другой SMS-провайдер

export interface SMSData {
  phone: string;
  message: string;
}

export interface NotificationData {
  clientName: string;
  clientEmail: string;
  clientPhone?: string;
  service?: string;
  message?: string;
}

// Заглушка для SMS API (в реальном проекте замените на реальный API)
const SMS_API_URL = 'https://sms.ru/sms/send';
const SMS_API_KEY = 'your_sms_api_key';

export const sendSMS = async (data: SMSData): Promise<boolean> => {
  try {
    // Пример для SMS.ru API
    const response = await fetch(SMS_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        api_id: SMS_API_KEY,
        to: data.phone,
        msg: data.message,
        json: 1,
      }),
    });

    const result = await response.json();
    console.log('SMS sent:', result);
    return result.status === 'OK';
  } catch (error) {
    console.error('Failed to send SMS:', error);
    return false;
  }
};

// Отправка уведомления менеджеру о новой заявке
export const sendManagerNotification = async (data: NotificationData): Promise<boolean> => {
  const managerPhone = '+79991234567'; // Номер менеджера
  
  const message = `🔔 Новая заявка на EscortHub
👤 Клиент: ${data.clientName}
📧 Email: ${data.clientEmail}
📱 Телефон: ${data.clientPhone || 'Не указан'}
💼 Услуга: ${data.service || 'Не указана'}
💬 Сообщение: ${data.message || 'Отсутствует'}

Свяжитесь с клиентом в ближайшее время!`;

  return await sendSMS({
    phone: managerPhone,
    message: message
  });
};

// Отправка подтверждения клиенту
export const sendClientConfirmation = async (clientPhone: string, clientName: string): Promise<boolean> => {
  const message = `Здравствуйте, ${clientName}! 

Ваша заявка на EscortHub принята. Наш менеджер свяжется с вами в течение 15 минут.

Спасибо за выбор наших услуг!
EscortHub Team`;

  return await sendSMS({
    phone: clientPhone,
    message: message
  });
};
