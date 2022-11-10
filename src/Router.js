import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Homepage';
import Profile from './pages/Profile';
import Forgot from './pages/Forgotpwd';
import Payment from './pages/Productcart';
import History from './pages/History';
import Detail from './pages/ProductDetailNew';
import ProductAdmin from "./pages/ProductAdmin";
import AddPromo from './pages/AddPromo'
import AddProduct from './pages/AddProduct1'
import Dashboard from './pages/Dashboard'

import PrivateElement from '../src/component/PrivateElement'

const router = createBrowserRouter ([
  { path: "/app", element: <App />, },
  { path: '/signup', element: <Signup /> },
  { path: '/login', element: <Login /> },
  { path: "/", element: <Home /> },
  { path: '/profile', element: <PrivateElement allowedRoles={['User', 'Admin']}><Profile /></PrivateElement> },
  { path: '/forgot', element: <Forgot/> },
  { path: '/payment', element: <PrivateElement allowedRoles={['User', 'Admin']}><Payment/></PrivateElement> },
  { path: '/history', element: <PrivateElement allowedRoles={['User', 'Admin']}><History/></PrivateElement> },
  { path: '/detail/:id', element: <Detail/> },
  { path: '/product', element: <PrivateElement allowedRoles={['Admin', 'User']}> <ProductAdmin/> </PrivateElement> },
  { path: '/addpromo', element: <PrivateElement allowedRoles={['Admin']}><AddPromo/> </PrivateElement> },
  { path: '/addproduct', element: <PrivateElement allowedRoles={['Admin']}><AddProduct/> </PrivateElement>},
  { path: '/dashboard', element: <PrivateElement allowedRoles={['Admin']}><Dashboard/></PrivateElement> },
]);

export default router