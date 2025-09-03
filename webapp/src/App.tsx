import { Header } from './components/header/Header';
import { Hero } from './components/hero/Hero';
import { Stats } from './components/Stats';
import { About } from './components/About';
import { ContactForm } from './components/ContactForm';
import { ModelsGallery } from './components/ModelsGallery';
import { HowItWorks } from './components/HowItWorks';
import { ImportantInfo } from './components/ImportantInfo';
import { Footer } from './components/footer/Footer';

function App() {
  return (
    <div className="bg-white text-gray-900 min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Stats />
        <About />
        <ContactForm />
        {/* Banner placeholder */}
        <div className="py-12 bg-gray-100 text-center text-gray-500">Баннер</div>
        <ModelsGallery />
        <HowItWorks />
        <ImportantInfo />
      </main>
      <Footer />
    </div>
  )
}

export default App
