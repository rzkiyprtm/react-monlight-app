import './App.css';
import Navbar from "./component/Navbar/Navbar"
import Footer from "./component/Footer/Footer"
import Cart from "./pages/Productcart"
// import Detail from "./pages/productDetail"

function App() {
  return (
    <div>
    <div>
      <Navbar />
    </div>
    <div>
    <Cart />
    </div>
    <div>
      <Footer/>
    </div>

    </div>

  );
}

export default App;
