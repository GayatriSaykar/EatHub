import logo from './logo.svg';
import './App.css';
import CustRegister from './components/CustRegister';
import { Routes,Route } from 'react-router-dom';
import MessRegister from './components/MessRegister';
import CustHome from './components/CustHome';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Admin from './components/Admin';
import MessDetail from './components/MessDetail';
import Payment from './components/Payment'
import Footer from './components/Footer';
import CustPlan from './components/CustPlan';
import MessHome from './components/MessHome';
import AddMenu from './components/AddMenu';

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
      <Route path="/messdetail/:mess_id" element={<MessDetail/>}></Route>
      <Route path="/payment" element={<Payment />}></Route>
      <Route path='/footer' element={<Footer />}></Route>
      <Route path='/custplan/:mess_id' element={<CustPlan />}></Route>
      <Route path='/messhome' element={<MessHome />}></Route>
      <Route path='/addmenu/:mess_id' element={<AddMenu />}></Route>
    </Routes>
    </div>
  );
}

export default App;
