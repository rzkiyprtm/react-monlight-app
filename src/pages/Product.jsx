import React, { Component } from 'react'
import css from '../style/Product.module.css'
import Card from '../component/Cardproduct/Cardproduct'
import imgSpagety from '../assets/images/product/29.png'
import img1 from '../assets/images/product/1.png'
import img2 from '../assets/images/product/2.png'
import img3 from '../assets/images/product/3.png'
import img4 from '../assets/images/product/4.png'
import img5 from '../assets/images/product/5.png'
import img6 from '../assets/images/product/6.png'
import Navbar from '../component/Navbar/Navbar'
import Footer from '../component/Footer/Footer'


export default class Product extends Component {
  render() {
    return (
      <div>
<Navbar />
<div className={css.maincontainer}>
<div className="container-fluid d-flex p-0">
      <div className="col-4 bg-clear border-top">
        <div className={css.upleft}>
          <p className={css.txt1}>Promo for you</p>
          <p className={css.txt2}>Coupons will be updated every weeks. Check them out! </p>
        </div>
        <div className={css.middleleft}>
          <div className={css.insideleft}>
            <img src={imgSpagety} alt='' className={css.img}/>
            <p className={css.txt3}>Beef Spaghetti</p>
            <p className={css.txt4}>20% OFF</p>
            <p className={css.txt5}>Buy 1 Choco Oreo and get 20% off for Beef Spaghetti</p>
          </div>
          <p className={css.txt6}>COUPON CODE</p>
          <h1>FNPR15RG</h1>
          <p className={css.txt7}>Valid untill November 10th 2022</p>
        </div>
        <div className={css.btnleft}>
          <button className={css.buttonleft} >Apply Coupon</button>
        </div>
        <div className={css.termleft}>
          <p className={css.tnc}>Terms and Condition</p>
          <ol className={css.list}>
            <li>You can only apply 1 coupon per day.</li>
            <li>It only for dine in.</li>
            <li>Buy 1 get 1 only for new user.</li>
            <li>Should make member card to apply coupon.</li>
          </ol>
        </div>
      </div>

      <div className="col-8 bg-clear border-start border-top">

        <div className={css.insidenav}>
          <div className={css.navitem}>
            <ul>
              <li className={css.fav}>Favorite Products</li>
              <li>Coffee</li>
              <li>Non Coffee</li>
              <li>Foods</li>
              <li>Add-on</li>
            </ul>
          </div>
        </div>

        <div className={css.productitem}>
          <div className={css.allbox1}>
            <Card/>
            <div className={css.box1}>
              <div className={css.overimg}>
                <img src={img2} alt=""/>
              </div>
              <div className={css.title}>
                 <p className={css.name}>Veggie Tomato Mix</p>
                <p className={css.price}>IDR 34.000</p>
              </div>
            </div>
            <div className={css.box1}>
              <div className={css.overimg}>
                <img src={img3} alt=""/>
              </div>
              <div className={css.title}>
                 <p className={css.name}>Veggie Tomato Mix</p>
                <p className={css.price}>IDR 34.000</p>
              </div>
            </div>
            <div className={css.box1}>
              <div className={css.overimg}>
                <img src={img4} alt=""/>
              </div>
              <div className={css.title}>
                 <p className={css.name}>Veggie Tomato Mix</p>
                <p className={css.price}>IDR 34.000</p>
              </div>
            </div>
          </div>
          <div className={css.allbox2}>
            <div className={css.box1}>
              <div className={css.overimg}>
                <img src={img5} alt=""/>
              </div>
              <div className={css.title}>
                 <p className={css.name}>Veggie Tomato Mix</p>
                <p className={css.price}>IDR 34.000</p>
              </div>
            </div>
            <div className={css.box1}>
              <div className={css.overimg}>
                <img src={img6} alt=""/>
              </div>
              <div className={css.title}>
                 <p className={css.name}>Veggie Tomato Mix</p>
                <p className={css.price}>IDR 34.000</p>
              </div>
            </div>
            <div className={css.box1}>
              <div className={css.overimg}>
                <img src={img3} alt=""/>
              </div>
              <div className={css.title}>
                 <p className={css.name}>Veggie Tomato Mix</p>
                <p className={css.price}>IDR 34.000</p>
              </div>
            </div>
            <div className={css.box1}>
              <div className={css.overimg}>
                <img src={img4} alt=""/>
              </div>
              <div className={css.title}>
                 <p className={css.name}>Veggie Tomato Mix</p>
                <p className={css.price}>IDR 34.000</p>
              </div>
            </div>
          </div>
          <div className={css.allbox3}>
            <div className={css.box1}>
              <div className={css.overimg}>
                <img src={img1} alt=""/>
              </div>
              <div className={css.title}>
                 <p className={css.name}>Veggie Tomato Mix</p>
                <p className={css.price}>IDR 34.000</p>
              </div>
            </div>
            <div className={css.box1}>
              <div className={css.overimg}>
                <img src={img2} alt=""/>
              </div>
              <div className={css.title}>
                 <p className={css.name}>Veggie Tomato Mix</p>
                <p className={css.price}>IDR 34.000</p>
              </div>
            </div>
            <div className={css.box1}>
              <div className={css.overimg}>
                <img src={img3} alt=""/>
              </div>
              <div className={css.title}>
                 <p className={css.name}>Veggie Tomato Mix</p>
                <p className={css.price}>IDR 34.000</p>
              </div>
            </div>
            <div className={css.box1}>
              <div className={css.overimg}>
                <img src={img4} alt=""/>
              </div>
              <div className={css.title}>
                 <p className={css.name}>Veggie Tomato Mix</p>
                <p className={css.price}>IDR 34.000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</div>
  <Footer/>
  </div>
    )
  }
}
