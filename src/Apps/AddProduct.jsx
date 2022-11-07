import AddProduct from '../pages/AddProduct1'
import NavbarAdmin from '../component/Navbar/AdminNavbar'
import Navbar from '../component/Navbar/Navbar'
import Footer from '../component/Footer/Footer'

function AddProductNew() {
  const isAdmin = localStorage.getItem('role') === 'Admin'

  return (
      <>
      <div>
      {isAdmin ? <NavbarAdmin/> : <Navbar/> }
      </div>

      <div>
      <AddProduct/>
      </div>

      <div>
        <Footer/>
      </div>
      </>
  )
}

export default AddProductNew