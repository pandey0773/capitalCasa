import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from 'react-router-dom';
import About from './components/About/About';
import MainSection from './components/Card/Card';
import BreakFast from './components/BreakFast/BreakFast';
import Food from './components/Food/Food';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<MainSection />} />
          <Route path="/food" element={<Food />} />
          <Route path="/breakFast" element={<BreakFast />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
