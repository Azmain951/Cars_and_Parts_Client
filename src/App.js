import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import PlaceOrder from './pages/Home/PlaceOrder';
import Navbar from './pages/Shared/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='placeOrder/:id' element={<PlaceOrder></PlaceOrder>}></Route>
      </Routes>
    </div>
  );
}

export default App;
