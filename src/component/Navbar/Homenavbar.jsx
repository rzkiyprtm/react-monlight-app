import React from 'react'
import css from "../Navbar/Homenavbar.module.css"
import withNavigate from "../../Helper/withNavigate";
import { Link } from "react-router-dom";
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


const Homenavbar = () => {
  const navigate = useNavigate();


  useEffect(() => {
    if(!localStorage.getItem('token')) {
      navigate('/')
    }
  }, []);


  return (
    <div className='container-xxl p-0'>
      <header className={css.navigationBar}>
    <div className={css.navBar}>
      <div className={css.leftContent}>
        <p>Monlight</p>
      </div>
      <div className={css.midContent}>
        <ol className={css.nav}>
        <Link to = {'/home'}>
          <li>Home</li>
          </Link>
          <Link to={'/product'}>
          <li>Product</li>
          </Link>
          <Link to={'/payment'}>
          <li>Your Cart</li>
          </Link>
          <Link to={'/history'}>
          <li>History</li>
          </Link>
        </ol>
      </div>
      <div className={css.rightcontent}>
        <Link to={'/sigin'}>
      {/* <button className={css.signin}>Sign In</button> */}
        </Link>
      <button 
      onClick={() => {
        localStorage.removeItem('token')
      }}
      className={css.signup}>Logout</button>
      </div>
    </div>
  </header>
    </div>
  )
}

// class Homenavbar extends React.Component {
//   render() {
//     return (
//       <div className='container-xxl p-0'>
//         <header className={css.navigationBar}>
//       <div className={css.navBar}>
//         <div className={css.leftContent}>
//           <p>Monlight</p>
//         </div>
//         <div className={css.midContent}>
//           <ol className={css.nav}>
//           <Link to = {'/'}>
//             <li>Home</li>
//             </Link>
//             <Link to={'/product'}>
//             <li>Product</li>
//             </Link>
//             <Link to={'/payment'}>
//             <li>Your Cart</li>
//             </Link>
//             <Link to={'/history'}>
//             <li>History</li>
//             </Link>
//           </ol>
//         </div>
//         <div className={css.rightcontent}>
//           <Link to={'/sigin'}>
//         {/* <button className={css.signin}>Sign In</button> */}
//           </Link>
//           <Link to={'/signup'}>
//         <button 
//         onClick={() => {
//           localStorage.removeItem('token')
//         }}
//         className={css.signup}>Logout</button>
//           </Link>
//         </div>
//       </div>
//     </header>
//       </div>
//     )
//   }
// }

export default withNavigate(Homenavbar)