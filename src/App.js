import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import PlaceOrder from './pages/Home/PlaceOrder';
import Login from './pages/Login/Login';
import Register from './pages/Login/Register';
import Navbar from './pages/Shared/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='place-order/:id' element={<PlaceOrder></PlaceOrder>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='register' element={<Register></Register>}></Route>
      </Routes>
    </div>
  );
}

export default App;
