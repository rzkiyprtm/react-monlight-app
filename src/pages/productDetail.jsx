import React, { Component } from 'react'
import css from '../style/Productdetail.module.css'
import imgbg from '../assets/images/product/25.png'
import icon1 from '../assets/images/Icon/location.png'
import Navbar from '../component/Navbar/Navbar'
import Footer from '../component/Footer/Footer'
import withNavigate from "../Helper/withNavigate";
import { Link } from "react-router-dom";

class productDetail extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <section className={css.main}>
      <div className="row align-items-center">
        <div className="col-12 bg-light d-flex p-0">
         <div className="left-main col-5 m-0">
           <div className={css.boxleft}>
            <div className={css.titleup}>
              <Link to={'/product'}>
              <p className={css.txt1}>Favorite & Promo </p> 
              </Link>
              <p className={css.txt2}> > Cold Brew</p>
            </div>
            <div className={css.imgleft}>
              <img src={imgbg} alt=""/>
            </div>
            <div className={css.titledown}>
              <p className={css.bgtext}>COLD BREW</p>
              <p className={css.txt}>IDR 30.000</p>
            </div>
            <div className={css.btnleft}>
              <button className={css.btn1}>Add to Cart</button>
              <button className={css.btn2}>Ask a Staff</button>
            </div>
          </div>
         </div>
         <div className="col-7">
          <div className={css.rightmain}>
          <div className={css.rightbox}>
            <div className={css.corebox}>
              <div className={css.arcup}>
                <p>Delivery only on Monday to friday at  1 - 7 pm</p>
              </div>
              <div className={css.arcdown}>
                Cold brewing is a method of brewing that combines ground coffee and cool water and uses time instead of heat to extract the flavor. It is brewed in small batches and steeped for as long as 48 hours.
              </div>
              <div className={css.sizetitle}>
                <p>Choose a size</p>
                <div className={css.iconright}>
                  <img src={icon1} alt=""/>
                  <img src={icon1} alt=""/>
                  <img src={icon1} alt=""/>
                </div>
              </div>
            </div>
            <div className={css.downcontent}>
              <div className={css.btntitle}>
                <p>Choose Delivery Methods</p>
              </div>
              <div className={css.btnright}>
                <button className={css.dine}>Dine in</button>
                <button className={css.door}>Door delivery</button>
                <button className={css.pick}>Pick up</button>
              </div>
              <div className={css.label}>
                <label className={css.labeldetail} for="">Set time</label>
                <input className={css.inputdetail} type="text" placeholder="timeeee"/>
              </div>
            </div>
          </div>
          </div>
         </div>
        </div>
      </div>
      <div>
        <div className={css.middlebox}>
        <div className={css.firstbox}>
          <img className={css.imgcard} src={imgbg} alt="" />
          <div className={css.title1}>
            <p className={css.txt3}>COLD BREW</p>
            <p className={css.txt4}>x1 (Large)</p>
            <p className={css.txt4}>x1 (Regular)</p>
          </div>
          <div class={css.number}>
	          <p>+</p>
            <p className={css.numb}>2</p>
            <p>-</p>
          </div>
        <div className={css.secondbox}>
          <button className={css.triplebox}>CHECKOUT</button>
        </div>
        </div>
        </div>
      </div>
    </section>
    <Footer />
      </div>
    )
  }
}

export default withNavigate(productDetail)