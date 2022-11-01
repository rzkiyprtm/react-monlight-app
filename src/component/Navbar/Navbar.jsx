import React from "react";
import css from "../Navbar/Navbar.module.css";
import avatar from "../../assets/images/parker.jpeg";
import chat from "../../assets/images/chat.png";
import srcIcon from "../../assets/images/search.png";
import withNavigate from "../../Helper/withNavigate";
import { Link } from "react-router-dom";

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
                <Link to={"/home"}>
                  <li>Home</li>
                </Link>
                <Link to={"/product"}>
                  <li>Product</li>
                </Link>
                <Link to={"/payment"}>
                  <li>Your Cart</li>
                </Link>
                <Link to={"/history"}>
                  <li>History</li>
                </Link>
              </ol>
            </div>
            <div className={css.rightContent}>
              <img
                className={css.icon1}
                src={srcIcon}
                alt=''
              />
              {/* <div className="search">
            <input type="text" className="src" />
          </div> */}
              <img
                className={css.icon1}
                src={chat}
                alt=''
              />
              <Link to={"/profile"}>
                <img
                  className={css.putra}
                  src={avatar}
                  alt=''
                />
              </Link>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default withNavigate(Navbar);
