import React, { Component } from 'react'
import css from '../../component/Cardproduct/Cardprd.module.css'
import img5 from '../../assets/images/product/1.png'

export default class Cardproduct extends Component {
  render() {
    return (
      <div className={css.box1}>
              <div className={css.overimg}>
                <img src={img5} alt=""/>
              </div>
              <div className={css.title}>
                 <p className={css.name}>Veggie Tomato Mix</p>
                <p className={css.price}>IDR 34.000</p>
              </div>
            </div>
    )
  }
}
