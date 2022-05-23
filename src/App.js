import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddProduct from './pages/Dashboard/AddProduct';
import Dashboard from './pages/Dashboard/Dashboard';
import ManageOrders from './pages/Dashboard/ManageOrders';
import ManageProducts from './pages/Dashboard/ManageProducts';
import MyOrders from './pages/Dashboard/MyOrders';
import MyProfile from './pages/Dashboard/MyProfile';
import MyReviews from './pages/Dashboard/MyReviews';
import Home from './pages/Home/Home';
import PlaceOrder from './pages/Home/PlaceOrder';
import Login from './pages/Login/Login';
import Register from './pages/Login/Register';
import RequireAuth from './pages/Login/RequireAuth';
import Navbar from './pages/Shared/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='place-order/:id' element={
          <RequireAuth><PlaceOrder></PlaceOrder></RequireAuth>
        }></Route>

        <Route path='dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path='reviews' element={<MyReviews></MyReviews>}></Route>
          <Route path='profile' element={<MyProfile></MyProfile>}></Route>
          <Route path='manage-products' element={<ManageProducts></ManageProducts>}></Route>
          <Route path='add-products' element={<AddProduct></AddProduct>}></Route>
          <Route path='manage-orders' element={<ManageOrders></ManageOrders>}></Route>
        </Route>

        <Route path='login' element={<Login></Login>}></Route>
        <Route path='register' element={<Register></Register>}></Route>
      </Routes>
    </div>
  );
}

export default App;
