import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Homepage } from './pages/Homepage';
import { Groupspage } from './pages/Groupspage';

export default function App() {
  return (
    <Router>
      <div className="w-screen min-h-screen text-white flex flex-col">
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/grupos" element={<Groupspage />} />
          </Routes>
        </main>
        <footer className="footer py-4 text-white">
          <div className="container mx-auto flex justify-start items-center">
            <span>
              Desenvolvido por
              <a href="https://www.linkedin.com/in/elen-damares/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-destaque-amarelo hover:underline"> @elenndev
              </a>
            </span>
          </div>
        </footer>
      </div>
    </Router>
  );
}
