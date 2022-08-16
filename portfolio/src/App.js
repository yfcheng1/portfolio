// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/portfolio" element={< Layout />}>

        </Route>
      </Routes>
    </div>
  );
}

export default App;
