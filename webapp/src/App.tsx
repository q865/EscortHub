import { Header } from './components/header/Header';
import { Hero } from './components/hero/Hero';
import { Stats } from './components/Stats';
import { Footer } from './components/footer/Footer';

function App() {
  return (
    <div className="bg-white text-gray-900 min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Stats />
      </main>
      <Footer />
    </div>
  )
}

export default App