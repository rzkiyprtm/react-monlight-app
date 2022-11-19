import React, { Component } from 'react'
import css from '../Footer/Footer.module.css'
import fbicon from "../../assets/images/facebook.png"
import igicon from "../../assets/images/instagram.png"
import twicon from "../../assets/images/twitter.png"


class Footer extends Component {
  render() {
    return (
      <div className={css.container}>
    <footer className={css.footercontainer}>
      <div className={css.leftfootcontent}>
        <div className={css.logodetail}>
          <h2>Monlight Cafe</h2>
        </div>
        <div className={css.aboutetail}>
          <p>Coffee Shop</p>
        </div>
        <div className={css.sosmeddetail}>
          <div className="box">
            {/* <div className={css.backlogo}> </div> */}
            <img className="imglogo" src={fbicon} alt="" />
          </div>
          <div className="box">
            {/* <div className="back-logo"></div> */}
            <img className="img-logo" src={twicon} alt="" />
          </div>
          <div className="box">
            {/* <div className="back-logo"></div> */}
            <img className="img-logo" src={igicon}alt="" />
          </div>
        </div>
        <p className={css.copyright}>©2022 Pratama Putra</p>
      </div>
      <div className={css.rightfootcontent}>
        <div className={css.contentdetail}>
          <p className={css.product}>Product</p>
          <ol className={css.ol}>
            <li> Download</li>
            <li>Pricing</li>
            <li>Locations</li>
            <li>Contries</li>
            <li>Blog</li>
          </ol>
        </div>
        <div className={css.contentdetail}>
          <p>Engage</p>
          <ol className={css.ol}>
            <li>Coffee Shop ?</li>
            <li>FAQ</li>
            <li>About Us</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ol>
        </div>
      </div>
    </footer>
      </div>
    )
  }
}

export default Footer