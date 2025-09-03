import { Header } from './components/header/Header';
import { Hero } from './components/hero/Hero';
import { Stats } from './components/Stats';
import { About } from './components/About';
import { ContactForm } from './components/ContactForm';
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
      </main>
      <Footer />
    </div>
  )
}

export default App