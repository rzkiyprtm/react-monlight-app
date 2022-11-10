import React from "react";
import { useState, useEffect } from "react";
import styles from "../../component/NavbarResponsive/NavbarResp.module.css";
import withNavigate from "../../Helper/withNavigate";
import sakaLogo from "../../assets/images/product/1.png";
import chat from "../../assets/images/product/3.png";
import { getProfile } from "../../Helper/Fetch";
import avatar from '../../assets/images/Icon/avatar.jpg'

function Header({ navigate }) {
  const [state, setState] = useState("");
  const text = state.text;
  const [profile, setProfile] = useState({});
  const [search, setSearch] = useState(() => "");
  // console.log(element);

  const isLogin = (localStorage.getItem("token"))
  const isAdmin = (localStorage.getItem("role"))

  function slide() {
    setState((state) => ({
      text:
        state.text === `${styles["slide-bar"]}` ? "" : `${styles["slide-bar"]}`,
    }));
  }

  const setValue = (event) => {
    console.log(event);
    setSearch(event.target.value);
  };
  const getSearch = () => {
    return navigate(`/product?search=${search}`);
  };

  const getDataProfile = async () => {
    try {
      const result = await getProfile();
      setProfile(result.data.result[0]);
      console.log(result);
    } catch (error) {
      if (error.response.data.statusCode === 403) {
        navigate("/login");
      }
    }
  };

  useEffect(() => {
    getDataProfile();
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={styles["left-bar"]}>
        <div className={styles.logo}>
          <div
            className={styles["logo-img"]}
            onClick={() => {
              navigate("/");
            }}
          >
            <img src={sakaLogo} alt="logo" />
          </div>
          <p
            className={styles["logo-title"]}
            onClick={() => {
              navigate("/");
            }}
          >
            MONLIGHT
          </p>
        </div>
        {isAdmin === "Admin" ? (
          <ol className={text}>
            <li
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </li>
            <li
              onClick={() => {
                navigate("/product");
              }}
            >
              Product
            </li>
            <li
              onClick={() => {
                navigate("/payment");
              }}
            >
              Orders
            </li>
            <li
              onClick={() => {
                navigate("/dashboard");
              }}
            >
              Dashboard
            </li>
          </ol>
        ) : (
          <ol className={text}>
            <li
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </li>
            <li
              onClick={() => {
                navigate("/product");
              }}
            >
              Product
            </li>
            <li
              onClick={() => {
                navigate("/payment");
              }}
            >
              Your Cart
            </li>
            <li
              onClick={() => {
                navigate("/history");
              }}
            >
              History
            </li>
          </ol>
        )}
      </div>

      {isLogin ? (
        <section className={text}>
          <div class={styles.searchBox}>
              <input
                class={styles.searchTxt}
                type="text"
              placeholder="search here ..."
              onChange={setValue}
              onSubmit={getSearch}
              />
              <a class={styles.searchBtn} href='#'>
                <i class='fas fa-search'></i>
              </a>
            </div>
          <div className={styles.chat}>
            <div className={styles.notif}>1</div>
            <img src={chat} alt="" />
          </div>
          <div
            className={styles.profile}
            onClick={() => {
              navigate("/profile");
            }}
          >
            {isAdmin === 'Admin' ? (
              <button 
              className={styles["btn-logout"]}
              onClick={() => {
                localStorage.removeItem('token')
                navigate('/')
              }}>LOGOUT</button>
              ) : (
              <img src={
                    !profile.image
                      ? avatar
                      : `${process.env.REACT_APP_BACKEND_HOST}/${profile.image}`
                  } alt="profile" />
            )} 
          </div>
        </section>
      ) : (
        <section className={text}>
          <div className={styles["right-bar"]}>
            <div className={styles.input}>
              <p
                className={styles["btn-login"]}
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </p>
              <button
                className={styles["btn-sign"]}
                type="submit"
                onClick={() => {
                  navigate("/signup");
                }}
              >
                Sign up
              </button>
            </div>
          </div>
        </section>
      )}
      <div className={styles["menu-toggle"]} onClick={slide}>
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default withNavigate(Header);