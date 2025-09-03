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
    <div className="bg-black text-white min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Stats />
        <About />
        <ContactForm />
        <ModelsGallery />
        <HowItWorks />
        <ImportantInfo />
      </main>
      <Footer />
    </div>
  )
}

export default App
