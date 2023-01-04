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
import EditProduct from "./pages/EditProduct";
import EditPromo from "./pages/EditPromo";
import CardAdmin from "./pages/manageOrder";

import PrivateElement from '../src/component/PrivateElement'

const router = createBrowserRouter ([
  { path: "/app", element: <App />, },
  { path: "/product/edit/:id", element: <PrivateElement allowedRoles={['Admin']}><EditProduct/> </PrivateElement> },
  { path: "/product/promos/edit/:id", element: <PrivateElement allowedRoles={['Admin']}><EditPromo/> </PrivateElement> },
  { path: '/signup', element: <Signup /> },
  { path: '/login', element: <Login /> },
  { path: "/", element: <Home /> },
  { path: '/profile', element: <Profile />},
  { path: '/forgot', element: <Forgot/> },
  { path: '/payment', element: <PrivateElement allowedRoles={['User', 'Admin']}><Payment/></PrivateElement> },
  { path: '/history', element: <PrivateElement allowedRoles={['User', 'Admin']}><History/></PrivateElement> },
  { path: '/detail/:id', element: <Detail/> },
  { path: '/product', element: <ProductAdmin/>},
  { path: '/product/promos/new', element: <PrivateElement allowedRoles={['Admin']}><AddPromo/> </PrivateElement> },
  { path: '/product/new', element: <PrivateElement allowedRoles={['Admin']}><AddProduct/> </PrivateElement>},
  { path: '/dashboard', element: <PrivateElement allowedRoles={['Admin']}><Dashboard/></PrivateElement> },
  { path: '/manageorder', element: <PrivateElement allowedRoles={['Admin']}><CardAdmin/></PrivateElement> },
]);

export default router