import React from "react";
import styles from "../../component/Cardhistory/Cardhst.module.css";

import bean from "../../assets/images/Icon/bean.png";

function CardHistory(props) {
  return (
    <div className={styles.card}>
      <div className="side-bar">
        <div className={`{styles.delete} {styles.deleteImg}`}>
          <img className={styles.deleteImg} src={bean} alt="bean"></img>
        </div>
        <div className={`${styles.close} ${props.display}`}>
          <span>x</span>
        </div>
      </div>
      <div className={styles["card-bar"]}>
        <div className={styles["card-image"]}>
          <img src={`http://localhost:8181/${props.image}`} alt="product"></img>
        </div>
        <div className={styles["card-content"]}>
          <h2 className={styles["card-title"]}>{props.productName}</h2>
          <p className={styles["card-price"]}>{props.price}</p>
          <p className={styles["deliv-method"]}>{props.status}</p>
        </div>
      </div>
    </div>
  );
}

export default CardHistory;