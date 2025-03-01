import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CodeExamples from './components/CodeExamples';
import Analytics from './components/Analytics';
import CustomerShowcase from './components/CustomerShowcase';
import ScaleUp from './components/ScaleUp';
import Footer from './components/Footer';
import './styles/globals.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <CodeExamples />
        <CustomerShowcase />
        <Analytics />
        <ScaleUp />
      </main>
      <Footer />
    </div>
  );
}

export default App;
