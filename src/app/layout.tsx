import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Modal from '@/components/ui/Modal';
import ContactForm from '@/components/ContactForm';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: 'EscortHub | Искусство Компании',
  description: 'Эксклюзивный сервис подбора спутниц для элитного досуга. Конфиденциальность, стиль и безупречное качество.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-background-dark text-text-on-dark antialiased`}>
        <main>{children}</main>
        <Modal>
          <ContactForm />
        </Modal>
      </body>
    </html>
  );
}
