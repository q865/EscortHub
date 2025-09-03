import { Header } from './components/header/Header';
import { Hero } from './components/hero/Hero';
import { Footer } from './components/footer/Footer';

function App() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        <Hero />
        {/* New components will be added here */}
      </main>
      <Footer />
    </div>
  )
}

export default App