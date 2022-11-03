import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Homepage';
import Profile from './pages/Profile';
import Product from './pages/Product';
import Forgot from './pages/Forgotpwd';
import Payment from './pages/Productcart';
import History from './pages/History';
import Detail from './pages/productDetail';

import PrivateElement from '../src/component/PrivateElement'

const router = createBrowserRouter ([
  { path: "/app", element: <App />, },
  { path: '/signup', element: <Signup /> },
  { path: '/', element: <Login /> },
  { path: "/home", element: <Home /> },
  { path: '/profile', element: <Profile /> },
  { path: '/product', element: <PrivateElement allowedRoles={['User']}> <Product/> </PrivateElement>  },
  { path: '/forgot', element: <Forgot/> },
  { path: '/payment', element: <Payment/> },
  { path: '/history', element: <History/> },
  { path: '/detail', element: <Detail/> },
]);

export default router