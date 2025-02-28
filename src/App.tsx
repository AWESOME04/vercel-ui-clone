import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CodeExamples from './components/CodeExamples';
import Analytics from './components/Analytics';
import './styles/globals.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <CodeExamples />
        <Analytics />
      </main>
    </div>
  );
}

export default App;
