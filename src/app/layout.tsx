import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import './globals.css';
import Modal from '@/components/ui/Modal';
import ContactForm from '@/components/ContactForm';
import StructuredData from '@/components/StructuredData';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: 'EscortHub | Искусство Компании - Премиальные услуги сопровождения',
  description: 'Эксклюзивный сервис подбора элитных спутниц в Москве и СПб. VIP эскорт услуги высочайшего класса. Конфиденциальность, стиль и безупречное качество. ⭐ 500+ довольных клиентов.',
  keywords: 'эскорт услуги, элитные спутницы, VIP сопровождение, премиум эскорт, Москва, Санкт-Петербург',
  authors: [{ name: 'EscortHub Team' }],
  creator: 'EscortHub',
  publisher: 'EscortHub',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://escorthub.ru',
    title: 'EscortHub | Премиальные услуги сопровождения',
    description: 'Эксклюзивный сервис подбора элитных спутниц. VIP эскорт услуги высочайшего класса в Москве и СПб.',
    siteName: 'EscortHub',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'EscortHub - Премиальные услуги сопровождения',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EscortHub | Премиальные услуги сопровождения',
    description: 'Эксклюзивный сервис подбора элитных спутниц. VIP эскорт услуги высочайшего класса.',
    images: ['/og-image.jpg'],
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-background-dark text-text-on-dark antialiased`}>
        {/* Structured Data */}
        <StructuredData type="website" />
        <StructuredData type="organization" />
        <StructuredData type="service" />
        
        <main>{children}</main>
        <Modal>
          <ContactForm />
        </Modal>
        
        {/* Google Analytics */}
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
        
        {/* Yandex Metrica */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
              (window, document, "script", "https://mc.yandex.ru/metrika/watch.js", "ym");
              
              ym(12345678, "init", {
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true,
                webvisor:true
              });
            `,
          }}
        />
        <noscript>
          <div>
            <img src="https://mc.yandex.ru/watch/12345678" style={{ position: 'absolute', left: '-9999px' }} alt="" />
          </div>
        </noscript>
      </body>
    </html>
  );
}
