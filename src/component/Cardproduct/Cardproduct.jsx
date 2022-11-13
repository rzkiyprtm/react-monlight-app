import React from "react";
import withNavigate from '../../Helper/withNavigate';
import styles from '../../component/Cardproduct/Cardprd.module.css'
import pencil from '../../assets/images/Icon/edit.png'

// import veggieImage from "../assets/img/image1.png";

function CardProduct(props) {
  // const userinfo = JSON.parse(localStorage.getItem("userInfo"));
  // let admin = null;

  // if (userinfo && userinfo.payload.role === "Admin")
  //   admin = userinfo.payload.role;
  // console.log(admin);
  // console.log(userinfo.payload);
  const isAdmin = (localStorage.getItem("role"))

  const currency = (price) => {
    return (
      "IDR " +
      parseFloat(price)
        .toFixed()
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
    );
  };

  return (
    <>
      <div className={styles["content-bar"]}>
        <img
          className={styles["product-image"]}
          src={`http://localhost:8181/${props.img}`}
          alt=""
          onClick={() => {
            props.navigate(`/detail/${props.id}`);
          }}
        />
        <h2>{props.title}</h2>
        <h3>{currency(props.price)}</h3>
        {isAdmin === "Admin" && (
          <div className={`${styles["edit-pencil"]}`}>
            <img
              src={pencil}
              alt="edit"
              onClick={() => {
                props.navigate(`/product/edit/${props.id}`);
              }}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default withNavigate(CardProduct);