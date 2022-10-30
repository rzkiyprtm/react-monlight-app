import React from 'react'
import css from "../Navbar/Navbar.module.css"
import avatar from "../../assets/images/parker.jpeg"
import chat from "../../assets/images/chat.png"
import srcIcon from "../../assets/images/search.png"

class Navbar extends React.Component {
  render() {
    return (
      <div className={css.maincontainer}>
        <header className={css.navigationBar}>
      <div className={css.navBar}>
        <div className={css.leftContent}>
          <p>Monlight</p>
        </div>
        <div className={css.midContent}>
          <ol className={css.nav}>
            <li>Home</li>
            <li>Product</li>
            <li>Your Cart</li>
            <li>History</li>
          </ol>
        </div>
        <div className={css.rightContent}>
          
          <img className={css.icon1} src={srcIcon} alt="" />
         
          <img className={css.icon1} src={chat} alt="" />
       
          <img className={css.putra} src={avatar} alt="" />
        </div>
      </div>
    </header>
      </div>
    )
  }
}

export default Navbar