import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CodeExamples from './components/CodeExamples';
import './styles/globals.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <CodeExamples />
      </main>
    </div>
  );
}

export default App;
