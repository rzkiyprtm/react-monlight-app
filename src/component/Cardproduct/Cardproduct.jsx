import React, { Component } from 'react'
import css from '../../component/Cardproduct/Cardprd.module.css'

class Cardproduct extends Component {
  render() {
    const {title, price, img} = this.props
    console.log(img);
    return (
      <div className={css.box1}>
              <div className={css.overimg}>
                <img src={`${process.env.REACT_APP_BACKEND_HOST}/${img}`} alt=""/>
              </div>
              <div className={css.title}>
                 <p className={css.name}>{title}</p>
                <p className={css.price}>{price}</p>
              </div>
            </div>
    )
  }
}

export default Cardproduct