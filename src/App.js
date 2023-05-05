import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/header' element={<Header />} />
      </Routes>
    </div>
  );
}

export default App;
