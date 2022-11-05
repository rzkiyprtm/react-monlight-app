import React from 'react'
import css from '../style/Productcart.module.css'
import img1 from '../assets/images/product/2.png'
import img2 from '../assets/images/product/30.png'
import card from '../assets/images/Icon/card.webp'
import bank from '../assets/images/Icon/bank.webp'
import cod from '../assets/images/Icon/cod.webp'
import Navbar from '../component/Navbar/Navbar'
import Footer from '../component/Footer/Footer'
// import { useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'

const Productcart = () => {
  // const navigate = useNavigate();


  // useEffect(() => {
  //   if(!localStorage.getItem('token')) {
  //     navigate('/')
  //   }
  // });


  return (
    <div>
      <Navbar/>
    <div className={css.bordercontainer}>
      <div className={css.maincontent}>
      <div className={css.contentBox}>
        <div className={css.leftContent}>
        <div className={css.textLeft}>
          <h1 className={css.bigtitle}>Checkout your item now!</h1>
        </div>
        <div className={css.mainbox}>
          <h1 className={css.txt1}>Order Summary</h1>
          <div className={css.listBuy}>
            <img src={img1} alt="product" />
            <div className={css.namePrd}>
              <p>Hazelnut Latte</p>
              <p>x 1</p>
              <p>Regular</p>
            </div>
            <div className={css.price}>
              <p>Rp. 24</p>
            </div>
          </div>
          <div className={css.listBuy2}>
            <img src={img2} alt="product" />
            <div className={css.namePrd}>
              <p>Chicken Wings</p>
              <p>x 2</p>
              <p></p>
            </div>
            <div className={css.price}>
              <p>Rp. 30</p>
            </div>
          </div>
          <hr className={css.hr1}/>
          <div className={css.sub}>
            <p>SUBTOTAL</p>
            <p>IDR 120.000</p>
          </div>
          <div className={css.tax}>
          <p>TAX & FEES</p>
          <p>IDR 20.000</p>
          </div>
          <div className={css.ship}>
          <p>SHIPPING</p>
          <p>IDR 10.000</p>
          </div>
          <div className={css.total}>
          <p>TOTAL</p>
          <p>IDR 150.000</p>
          </div>
        </div>
        </div>
        <div className={css.rightContent}>
          <div className="delivery">
            <div className={css.txt}>
          <p className={css.txt2}>
          Address details
          </p>
          <p className={css.edt}>edit</p>
            </div>
          <div className={css.box1}>
            <input className={css.input} type="text" />
            <hr className={css.hr2} />
            <input className={css.input}  type="text" />
            <hr className={css.hr2} />
            <input className={css.input}  type="text" />
            <hr className={css.hr2} />
          </div>
          </div>
          <div className={css.payment}>
            <p className={css.txt2}>
              Payment
            </p>
          <div className={css.box2}>
            <div className={css.pay}>
            <input className={css.input}  type="radio" name="pay" id="" />
            <label htmlFor=""><img src={card} alt="" />Card</label>
            </div>
            <hr className={css.hr}/>
            <div className={css.pay}>
            <input className={css.input}  type="radio" name="pay" id="" />
            <label htmlFor=""><img src={bank} alt="" />Bank Account</label>
            </div>
            <hr className={css.hr} />
            <div className={css.pay}>
            <input className={css.input}  type="radio" name="pay" id="" />
            <label htmlFor=""><img src={cod} alt="" />Cash on Delivery</label>
            </div>
          </div>
          <div className={css.btn}>
            <button>Confirm and Pay</button>
          </div>
          </div>
        </div>
      </div>
      </div>
    </div>
    <Footer />
    </div>
  )
}
// class Productcart extends Component {
//   render() {
//     return (
//       <div>
//         <Navbar/>
//       <div className={css.bordercontainer}>
//         <div className={css.maincontent}>
//         <div className={css.contentBox}>
//           <div className={css.leftContent}>
//           <div className={css.textLeft}>
//             <h1 className={css.bigtitle}>Checkout your item now!</h1>
//           </div>
//           <div className={css.mainbox}>
//             <h1 className={css.txt1}>Order Summary</h1>
//             <div className={css.listBuy}>
//               <img src={img1} alt="product" />
//               <div className={css.namePrd}>
//                 <p>Hazelnut Latte</p>
//                 <p>x 1</p>
//                 <p>Regular</p>
//               </div>
//               <div className={css.price}>
//                 <p>Rp. 24</p>
//               </div>
//             </div>
//             <div className={css.listBuy2}>
//               <img src={img2} alt="product" />
//               <div className={css.namePrd}>
//                 <p>Chicken Wings</p>
//                 <p>x 2</p>
//                 <p></p>
//               </div>
//               <div className={css.price}>
//                 <p>Rp. 30</p>
//               </div>
//             </div>
//             <hr className={css.hr1}/>
//             <div className={css.sub}>
//               <p>SUBTOTAL</p>
//               <p>IDR 120.000</p>
//             </div>
//             <div className={css.tax}>
//             <p>TAX & FEES</p>
//             <p>IDR 20.000</p>
//             </div>
//             <div className={css.ship}>
//             <p>SHIPPING</p>
//             <p>IDR 10.000</p>
//             </div>
//             <div className={css.total}>
//             <p>TOTAL</p>
//             <p>IDR 150.000</p>
//             </div>
//           </div>
//           </div>
//           <div className={css.rightContent}>
//             <div className="delivery">
//               <div className={css.txt}>
//             <p className={css.txt2}>
//             Address details
//             </p>
//             <p className={css.edt}>edit</p>
//               </div>
//             <div className={css.box1}>
//               <input className={css.input} type="text" />
//               <hr className={css.hr2} />
//               <input className={css.input}  type="text" />
//               <hr className={css.hr2} />
//               <input className={css.input}  type="text" />
//               <hr className={css.hr2} />
//             </div>
//             </div>
//             <div className={css.payment}>
//               <p className={css.txt2}>
//                 Payment
//               </p>
//             <div className={css.box2}>
//               <div className={css.pay}>
//               <input className={css.input}  type="radio" name="pay" id="" />
//               <label htmlFor=""><img src={card} alt="" />Card</label>
//               </div>
//               <hr className={css.hr}/>
//               <div className={css.pay}>
//               <input className={css.input}  type="radio" name="pay" id="" />
//               <label htmlFor=""><img src={bank} alt="" />Bank Account</label>
//               </div>
//               <hr className={css.hr} />
//               <div className={css.pay}>
//               <input className={css.input}  type="radio" name="pay" id="" />
//               <label htmlFor=""><img src={cod} alt="" />Cash on Delivery</label>
//               </div>
//             </div>
//             <div className={css.btn}>
//               <button>Confirm and Pay</button>
//             </div>
//             </div>
//           </div>
//         </div>
//         </div>
//       </div>
//       <Footer />
//       </div>
//     )
//   }
// }

export default Productcart