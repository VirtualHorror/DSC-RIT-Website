import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Events from './pages/Events';
import Team from './pages/Team';
import Gallery from './pages/Gallery';
import Alumni from './pages/Alumni';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dsc-dark text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/events" element={<Events />} />
          <Route path="/team" element={<Team />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/alumni" element={<Alumni />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;