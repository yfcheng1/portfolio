// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.js';
import Home from './components/Home.js';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/portfolio" element={< Layout />}>
          <Route index element={< Home />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
