import React from "react";
import css from "../Navbar/AdminNavbar.module.css";
import chat from "../../assets/images/chat.png";
import withNavigate from "../../Helper/withNavigate";
import { Link } from "react-router-dom";
import { getProfile } from "../../Helper/Fetch";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import avatar from '../../assets/images/Icon/avatar.jpg'


const Navbar = () => {
  const navigate = useNavigate()
  const [state, setState] = useState("");
  const text = state.text;
  const title = state.title;
  const [profile, setProfile] = useState({});
  const [search, setSearch] = useState(() => "");

  const setValue = (event) => {
    console.log(event);
    setSearch(event.target.value);
  };
  const getSearch = () => {
    return navigate(`/product/get?search=${search}`);
  };

  const getDataProfile = async () => {
    try {
      const result = await getProfile();
      console.log(result.data.result);
      setProfile(result.data.result[0]);
      console.log(result);
    } catch (error) {
      if (
        error.response.data.statusCode === 403
      ) {
        navigate("/");
      }
    }
  };

  useEffect(() => {
    getDataProfile();
  }, []);

  return (
    <div className={css.maincontainer}>
      <header className={css.navigationBar}>
        <div className={css.navBar}>
          <div className={css.leftContent}>
            <p>Monlight</p>
          </div>
          <div className={css.midContent}>
            <ol className={css.nav}>
              <Link to={"/"}>
                <li>Home</li>
              </Link>
              <Link to={"/product"}>
                <li>Product</li>
              </Link>
              <Link to={"/payment"}>
                <li>Your Cart</li>
              </Link>
              <Link to={"/dashboard"}>
                <li>Dashboard</li>
              </Link>
            </ol>
          </div>
          <div className={css.rightContent}>
            <div class={css.searchBox}>
              <input
                class={css.searchTxt}
                type="text"
              placeholder="let search something"
              onChange={setValue}
              onSubmit={getSearch}
              />
              <a class={css.searchBtn} href='#'>
                <i class='fas fa-search'></i>
              </a>
            </div>

            <img
              className={css.icon1}
              src={chat}
              alt=''
            />
            <Link to={"/profile"}>
              <img
                className={css.putra}
                src={
                  !profile.image ? avatar : `${process.env.REACT_APP_BACKEND_HOST}/${profile.image}`
                }
                alt=''
              />
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default withNavigate(Navbar);
