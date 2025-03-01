import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CodeExamples from './components/CodeExamples';
import Analytics from './components/Analytics';
import CustomerShowcase from './components/CustomerShowcase';
import ScaleUp from './components/ScaleUp';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';
import './styles/globals.css';

function App() {
  return (
    <ThemeProvider>
      <div className="app transition-colors duration-300">
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
    </ThemeProvider>
  );
}

export default App;
