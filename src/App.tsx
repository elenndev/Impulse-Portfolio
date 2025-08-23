import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Homepage } from './pages/Homepage';
import { Groupspage } from './pages/Groupspage';

export default function App() {
  return (
    <Router>
      <div className="bg-tema-escuro min-h-screen text-white">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/grupos" element={<Groupspage />} />
        </Routes>
      </div>
    </Router>
  );
}
