import React from 'react';

interface StructuredDataProps {
  type: 'website' | 'organization' | 'service' | 'breadcrumb';
  data?: any;
}

const StructuredData: React.FC<StructuredDataProps> = ({ type, data }) => {
  const getStructuredData = () => {
    switch (type) {
      case 'website':
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "EscortHub",
          "url": "https://escorthub.ru",
          "description": "Эксклюзивный сервис подбора элитных спутниц для VIP клиентов",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://escorthub.ru/gallery?search={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        };

      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "EscortHub",
          "url": "https://escorthub.ru",
          "logo": "https://escorthub.ru/logo.png",
          "description": "Премиальный сервис элитного сопровождения с 5-летним опытом работы",
          "foundingDate": "2019",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "ул. Тверская, 15, офис 501",
            "addressLocality": "Москва",
            "addressCountry": "RU"
          },
          "contactPoint": [
            {
              "@type": "ContactPoint",
              "telephone": "+7-495-123-45-67",
              "contactType": "customer service",
              "availableLanguage": ["Russian", "English"]
            }
          ],
          "sameAs": [
            "https://t.me/escorthub_support"
          ]
        };

      case 'service':
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "VIP Сопровождение",
          "description": "Элитные услуги сопровождения для деловых встреч и светских мероприятий",
          "provider": {
            "@type": "Organization",
            "name": "EscortHub"
          },
          "areaServed": [
            {
              "@type": "City",
              "name": "Москва"
            },
            {
              "@type": "City", 
              "name": "Санкт-Петербург"
            }
          ],
          "serviceType": "Escort Service",
          "offers": {
            "@type": "Offer",
            "priceRange": "50000-200000 RUB",
            "priceCurrency": "RUB"
          }
        };

      case 'breadcrumb':
        return data ? {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": data.map((item: any, index: number) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.url
          }))
        } : null;

      default:
        return null;
    }
  };

  const structuredData = getStructuredData();

  if (!structuredData) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default StructuredData;
