// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.js';
import Home from './components/Home.js';
import About from './components/About.js';
import Contact from './components/Contact.js';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/portfolio" element={< Layout />}>
          <Route index element={< Home />}></Route>
          <Route path="/portfolio/about" element={< About />}></Route>
          <Route path="/portfolio/contact" element={< Contact />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
