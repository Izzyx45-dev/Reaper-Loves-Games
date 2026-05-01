import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Directory from './pages/Directory';
import GameInfo from './pages/GameInfo';
import Blog from './pages/Blog';
import Hardware from './pages/Hardware';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

import { GamesProvider } from './context/GamesContext';

export default function App() {
  return (
    <GamesProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/directory" element={<Directory />} />
          <Route path="/game/:id" element={<GameInfo />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/hardware" element={<Hardware />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </GamesProvider>
  );
}

