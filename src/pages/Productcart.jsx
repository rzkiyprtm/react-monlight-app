import React, { Component } from 'react'
import css from '../style/Productcart.module.css'
import img1 from '../assets/images/product/1.png'

export default class Productcart extends Component {
  render() {
    return (
      <div className={css.bordercontainer}>
        <div className={css.maincontent}>
        <div className={css.contentBox}>
          <div className="leftContent">
          <div className={css.textLeft}>
            <h1>Checkout your item now!</h1>
          </div>
          <div className={css.mainbox}>
            <h1>Order Summary</h1>
            <div className={css.listBuy}>
              <img src={img1} alt="product" />
              <div className={css.namePrd}>
                <p>Hazelnut Latte</p>
                <p>x1</p>
                <p>Regular</p>
              </div>
              <div className={css.price}>
                <p>Rp. 24</p>
              </div>
            </div>
          </div>
          </div>
          <div className="rightContent">
            <div className="delivery">
            <p>
            Address details
            </p>
            <div className="box1" style={{height:'200px', width:'400px'}}>
              <input type="text" />
              <input type="text" />
              <input type="text" />
            </div>
            </div>
            <div className="payment">
              <p>
                Payment
              </p>
            <div className="box2">
              <input type="radio" name="" id="" />
              <label htmlFor="">Card</label>
              <input type="radio" name="" id="" />
              <label htmlFor="">Cash</label>
              <input type="radio" name="" id="" />
              <label htmlFor="">SHOPEE COD</label>
            </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    )
  }
}
