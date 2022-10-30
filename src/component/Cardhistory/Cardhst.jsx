import React, { Component } from 'react'
import img from '../../assets/images/product/2.png'
import css from '../Cardhistory/Cardhst.module.css'

export default class Cardhst extends Component {
  render() {
    return (
      <div className={css.mainBox1}>
            <img src={img} alt="product"/>
            <div className={css.name}>
              <p className={css.txt}>Veggie Tomato Mix</p>
              <p className={css.txt1}>Price</p>
              <p className={css.txt1}>Status</p>
            </div>
          </div>
    )
  }
}
