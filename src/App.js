import './App.css';
import AdminNavbar from "./component/Navbar/AdminNavbar"
import UserNavbar from './component/Navbar/Navbar'
import Footer from "./component/Footer/Footer"
// import Dashboard from "./pages/Dashboard"
import ProductAdmin from './pages/ProductAdmin'
import ProductUser from './pages/Product'


function App() {

  const isAdmin = localStorage.getItem('role') === "Admin"
  const isAdminLogin = localStorage.getItem('role') === "Admin"

  return (
    <div>
    <div>
     {isAdminLogin ?  <AdminNavbar /> : <UserNavbar/> }
    </div>
    <div>
    {isAdmin ? <ProductAdmin/> : <ProductUser/>}
    </div>
    <div>
      <Footer/>
    </div>

    </div>

  );
}

export default App;
