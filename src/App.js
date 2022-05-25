import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddProduct from './pages/Dashboard/AddProduct';
import AddReview from './pages/Dashboard/AddReview';
import Dashboard from './pages/Dashboard/Dashboard';
import MakeAdmin from './pages/Dashboard/MakeAdmin';
import ManageOrders from './pages/Dashboard/ManageOrders';
import ManageProducts from './pages/Dashboard/ManageProducts';
import MyOrders from './pages/Dashboard/MyOrders';
import MyProfile from './pages/Dashboard/MyProfile';
import Payment from './pages/Dashboard/Payment';
import Home from './pages/Home/Home';
import PlaceOrder from './pages/Home/PlaceOrder';
import Login from './pages/Login/Login';
import Register from './pages/Login/Register';
import RequireAdmin from './pages/Login/RequireAdmin';
import RequireAuth from './pages/Login/RequireAuth';
import Blogs from './pages/Public/Blogs';
import Portfolio from './pages/Public/Portfolio';
import Navbar from './pages/Shared/Navbar';
import NotFound from './pages/Shared/NotFound';

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
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path='myOrders' element={<MyOrders></MyOrders>}></Route>
          <Route path='add-review' element={<AddReview></AddReview>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
          <Route path='manage-products' element={<RequireAdmin><ManageProducts></ManageProducts></RequireAdmin>}></Route>
          <Route path='add-products' element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>}></Route>
          <Route path='manage-orders' element={<RequireAdmin><ManageOrders></ManageOrders></RequireAdmin>}></Route>
          <Route path='make-admin' element={<RequireAdmin><MakeAdmin></MakeAdmin></RequireAdmin>}></Route>
        </Route>

        <Route path='blogs' element={<Blogs></Blogs>}></Route>
        <Route path='portfolio' element={<Portfolio></Portfolio>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
