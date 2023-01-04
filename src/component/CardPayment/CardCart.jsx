import React from 'react'
import css from '../../component/CardPayment/CardCart.module.css'

function CardCart(props) {

  return (
   <>
   <div className={css.listBuy}>
            <img src={props.image} alt="product" />
            <div className={css.namePrd}>
              <p>{props.title}</p>
              <p>x{props.qty}</p>
              <p>{props.size}</p>
            </div>
            <div className={css.price}>
              <p>IDR {props.price}</p>
            </div>
          </div>
   </>
  )
}

export default CardCart