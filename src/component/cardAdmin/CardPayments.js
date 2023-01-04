import React from "react";
import styles from "./Card-Payments.module.css";

class CardPayments extends React.Component {
  render() {
    const { title, price, image, size, qty, status } = this.props;
    return (
      <>
        <div className={styles["card-payment"]}>
          <img src={`http://localhost:8181/${image}`} alt="food1" />
          <div className={styles["menu-item"]}>
            <p className={styles["detail-item"]}>{title}</p>
            <p className={styles["detail-item"]}>x {qty}</p>
            <p className={styles["detail-item"]}>{size}</p>
            <p className={styles["detail-item"]}>{status}</p>
          </div>
          <p className={styles.price}>{price}</p>
        </div>
      </>
    );
  }
}

export default CardPayments;
