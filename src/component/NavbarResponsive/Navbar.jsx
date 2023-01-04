/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useState, useEffect } from "react";
import styles from "../../component/NavbarResponsive/NavbarResp.module.css";
import withNavigate from "../../Helper/withNavigate";
import monlightlogo from "../../assets/images/logo.png";
import chat from "../../assets/images/chat.png";
import { getProfile } from "../../Helper/Fetch";
import avatar from "../../assets/images/Icon/avatar.jpg";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function Header({ navigate, onSearch }) {
  const [state, setState] = useState("");
  const text = state.text;
  const [profile, setProfile] = useState({});
  const [search, setSearch] = useState(() => "");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const logoutShow = () => setShow(true);
  // const [LinkNav, setLinkNav] = useState("home");
  // const [LinkNavAdmin, setLinkNavAdmin] = useState("home-admin");
  
  const isLogin = localStorage.getItem("token");
  const isAdmin = localStorage.getItem("role");
  const isUser = localStorage.getItem("role");
  
  function slide() {
    setState((state) => ({
      text:
        state.text === `${styles["slide-bar"]}`
          ? ""
          : `${styles["slide-bar"]}`,
    }));
  }

  const setValue = (event) => {
    setSearch(event.target.value);
  };
  const getSearch = (e) => {
    e.preventDefault();
    onSearch(search)
  };

  const getDataProfile = async () => {
    try {
      const result = await getProfile();
      setProfile(result.data.result[0]);
    } catch (error) {
      if (
        error.response.data.statusCode === 403
      ) {
        navigate("/login");
      }
    }
  };

  useEffect(() => {
    getDataProfile();
  }, []);

  return (
    <main>
    <nav className={styles.navbar}>
      <div className={styles["left-bar"]}>
        <div className={styles.logo}>
          <div
            className={styles["logo-img"]}
            onClick={() => {
              navigate("/");
            }}
          >
            <img src={monlightlogo} alt='logo' />
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
                navigate("/manageorder");
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
          <form onSubmit={getSearch}>
          <div class={styles.searchBox} >
            <input
              class={styles.searchTxt}
              type='text'
              placeholder='let search something'
              onChange={setValue}
              // onChange={(e) => onSearch(e.target.value)}
            />
            <a class={styles.searchBtn} href='#'>
              <i class='fas fa-search'></i>
            </a>
          </div>
          </form>
          <div className={styles.chat}>
            <div className={styles.notif}>1</div>
            <img src={chat} alt='' />
          </div>
          {isAdmin === "Admin" ? (
            <button
              className={styles["btn-logout"]}
              onClick={logoutShow}
            >
              LOGOUT
            </button>
          ) : (
            <div
              className={styles.profile}
              onClick={() => {
                navigate("/profile");
              }}
            >
              <img
                src={
                  !profile.image
                    ? avatar
                    : `${process.env.REACT_APP_BACKEND_HOST}/${profile.image}`
                }
                alt='profile'
              />
            </div>
          )}
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
                type='submit'
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
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Monlight</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure to logout?
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant='secondary'
            onClick={handleClose}
          >
            Close
          </Button>
          <Button
            variant='danger'
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/login");
            }}
          >
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
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

export default withNavigate(Header);
