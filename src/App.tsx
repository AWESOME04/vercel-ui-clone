import Navbar from './components/Navbar';
import Hero from './components/Hero';
import './styles/globals.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  );
}

export default App;
