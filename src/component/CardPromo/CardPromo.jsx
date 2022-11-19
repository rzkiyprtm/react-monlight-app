import React from "react";
import styles from "../../component/CardPromo/CardPromo.module.css";
import pencil from '../../assets/images/Icon/edit.png'
import withNavigate from '../../Helper/withNavigate';


function CardPromo(props) {

  const isAdmin = (localStorage.getItem("role"))

  return (
    <div className={styles["front-bar"]}>
      <div className={styles.top}>
        {/* <img className={styles.image} src={product} alt="menu-promo" /> */}
        <img className={styles.image} src={`${process.env.REACT_APP_BACKEND_HOST}/${props.image}`} alt="menu-promo" />
        <h2>{props.title}</h2>
        <h2>{props.discount} OFF</h2>
        <p>Buy 1 Choco Oreo and get 20% off for {props.title}</p>
      </div>
      <div className={styles.bottom}>
        <h4>COUPON CODE</h4>
        <h3>{props.code}</h3>
        <p>Valid untill {props.duration}</p>
        {isAdmin === "Admin" && (
          <div className={`${styles["edit-pencil"]}`}>
            <img
              src={pencil}
              alt="edit"
              onClick={() => {
                props.navigate(`/product/promos/edit/${props.id}`);
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default withNavigate(CardPromo);