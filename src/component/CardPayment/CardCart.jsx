import React from 'react'
import css from '../../component/CardPayment/CardCart.module.css'
import img1 from '../../assets/images/product/2.png'

function CardCart(props) {

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
   <div className={css.listBuy}>
            <img src={img1} alt="product" />
            <div className={css.namePrd}>
              <p>{props.title}</p>
              <p>x{props.qty}</p>
              <p>{props.size}</p>
            </div>
            <div className={css.price}>
              <p>{currency(props.price)}</p>
            </div>
          </div>
   </>
  )
}

export default CardCart