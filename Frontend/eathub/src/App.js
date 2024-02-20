import logo from './logo.svg';
import './App.css';
import CustRegister from './components/CustRegister';
import { Routes,Route } from 'react-router-dom';
import MessRegister from './components/MessRegister';
import CustHome from './components/CustHome';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Admin from './components/Admin';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/"  element={<Navbar/>}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path="/messregister"  element={<MessRegister/>}></Route>
      <Route path="/custregister"  element={<CustRegister/>}></Route>
      <Route path="/custhome"  element={<CustHome />}></Route>
      <Route path="/admin"  element={<Admin/>}></Route>
  
    </Routes>
    </div>
  );
}

export default App;
