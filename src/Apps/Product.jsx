import Product from '../pages/Product'
import ProductAdmin from '../pages/ProductAdmin'
import NavbarAdmin from '../component/Navbar/AdminNavbar'
import Navbar from '../component/Navbar/Navbar'
import Footer from '../component/Footer/Footer'

function ProductNew() {
  const isAdmin = localStorage.getItem('role') === 'Admin'

  return (
      <>
      <div>
      {isAdmin ? <NavbarAdmin/> : <Navbar/> }
      </div>

      <div>
      {/* {isAdmin ? <ProductAdmin/> : <Product/> } */}
      </div>

      <div>
        <Footer/>
      </div>
      </>
  )
}

export default ProductNew