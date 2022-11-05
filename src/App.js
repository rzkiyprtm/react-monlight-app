import './App.css';
import Navbar from "./component/Navbar/Homenavbar"
import Footer from "./component/Footer/Footer"
import Dashboard from "./pages/Dashboard"

function App() {
  return (
    <div>
    <div>
      <Navbar />
    </div>
    <div>
    <Dashboard />
    </div>
    <div>
      <Footer/>
    </div>

    </div>

  );
}

export default App;
