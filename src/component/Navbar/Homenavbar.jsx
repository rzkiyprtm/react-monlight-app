import React from 'react'
import css from "../Navbar/Homenavbar.module.css"

class Homenavbar extends React.Component {
  render() {
    return (
      <div className='container-xxl p-0'>
        <header className={css.navigationBar}>
      <div className={css.navBar}>
        <div className={css.leftContent}>
          <p>Monlight</p>
        </div>
        <div className="midContent">
          <ol className={css.nav}>
            <li>Home</li>
            <li>Product</li>
            <li>Your Cart</li>
            <li>History</li>
          </ol>
        </div>
        <div className={css.rightcontent}>
        <button>Sign In</button>
        <button>Sign Up</button>
        </div>
      </div>
    </header>
      </div>
    )
  }
}

export default Homenavbar