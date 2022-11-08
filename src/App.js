import './App.css';
// import AdminNavbar from "./component/Navbar/AdminNavbar"
// import UserNavbar from './component/Navbar/Navbar'
import Footer from "./component/Footer/Footer"
// import Dashboard from "./pages/Dashboard"
import AddPromo from './pages/ProductDetailNew'
// import ProductUser from './pages/Product'


function App() {

  const isAdmin = localStorage.getItem('role') === "Admin"
  const isAdminLogin = localStorage.getItem('role') === "Admin"

  return (
    <div>
    <div>
     {/* {isAdminLogin ?  <AdminNavbar /> : <UserNavbar/> } */}
    </div>
    <div>
    <AddPromo/>
    </div>
    <div>
      <Footer/>
    </div>

    </div>

  );
}

export default App;
