// import logo from './logo.svg';
import './App.css';
import { createBrowserHistory } from 'history';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import VacationSpotCard from './components/VacationSpotCard';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/:cityId" element={<VacationSpotCard />} />
    </Routes>
  );
}

export default App;
