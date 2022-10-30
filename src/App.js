import './App.css';
import Navbar from "./component/Navbar/Navbar"
import Footer from "./component/Footer/Footer"
import Product from "./pages/Product"
// import Detail from "./pages/productDetail"
// import History from './pages/History';

function App() {
  return (
    <div>
    <div>
      <Navbar />
    </div>
    <div>
    <Product />
    </div>
    <div>
      <Footer/>
    </div>

    </div>

  );
}

export default App;
