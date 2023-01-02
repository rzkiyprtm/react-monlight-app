import React from "react";
import { useState} from "react";
import styles from "../../component/NavbarResponsive/NavbarResp.module.css";
import monlightlogo from "../../assets/images/logo.png";
import avatar from "../../assets/images/Icon/avatar.jpg";

function Header() {
  const [state, setState] = useState("");
  const text = state.text;
 
  function slide() {
    setState((state) => ({
      text:
        state.text === `${styles["slide-bar"]}`
          ? ""
          : `${styles["slide-bar"]}`,
    }));
  }

  return (
    <main>
    <nav className={styles.navbar}>
      <div className={styles["left-bar"]}>
        <div className={styles.logo}>
          <div className={styles["logo-img"]}>
            <img src={monlightlogo} alt='logo' />
          </div>
          <p className={styles["logo-title"]}>
            MONLIGHT
          </p>
          <ol className={text}>
            <li> Home </li>
            <li> Product </li>
            <li> Orders </li>
            <li> Dashboard </li>
          </ol>
        </div>
      </div>

      {/* {isLogin ? ( */}
        <section className={text}>
          <form>
          <div class={styles.searchBox} >
            <input
              class={styles.searchTxt}
              type='text'
              placeholder='let search something'/>
            <a className={styles.searchBtn} href=''>
              <i class='fas fa-search'></i>
            </a>
          </div>
          </form>
            <div className={styles.profile}>
              <img
                src={avatar}
                alt='profile'
              />
            </div>
        </section>
      {/* ) : (
        <section className={text}>
          <div className={styles["right-bar"]}>
            <div className={styles.input}>
              <button className={styles["btn-sign"]} type='submit'>
                Sign up
              </button>
            </div>
          </div>
        </section>
      )} */}
      <div
        className={styles["menu-toggle"]}
        onClick={slide}
      >
        <input type='checkbox' />
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
    </main>
  );
}

export default Header;
