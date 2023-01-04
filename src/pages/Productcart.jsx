/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import css from '../style/Productcart.module.css'
import img2 from '../assets/images/product/30.png'
import card from '../assets/images/Icon/card.webp'
import bank from '../assets/images/Icon/bank.webp'
import cod from '../assets/images/Icon/cod.webp'
import Navbar from '../component/NavbarResponsive/Navbar'
import Footer from '../component/Footer/Footer'
import CardCart from '../component/CardPayment/CardCart';
import { Link , useNavigate, useParams } from "react-router-dom";
import {getProfile} from "../Helper/Fetch";
import axios from 'axios'
import { createTrans } from "../Helper/Fetch";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Productcart = () => {
  const navigate = useNavigate()
  const [profile, setProfile] = useState({});
  const { id } = useParams();
  const [Address, setAddress] = useState("");
  const [body, setBody] = useState({});
  const [payment, setPayment] = useState("");

  const successToastMessage = () => {
    toast.success('Transaction Created !', {
        position: toast.POSITION.TOP_CENTER
    });
};
  const failedMessage = () => {
    toast.error('Password or Email Wrong !', {
      position: toast.POSITION.TOP_CENTER
  });
  }

  const productId = localStorage.getItem("productId");
  const size = localStorage.getItem("size");
  const deliveryMethod = localStorage.getItem("deliveryMethod");
  const qty = localStorage.getItem("qty");
  const price = localStorage.getItem("price");
  const imageUrl = localStorage.getItem("image");
  const productName = localStorage.getItem("productName");

  const handleAddress = (e) => {
    setBody({ ...body, address: e.target.value });
    setAddress(e.target.value);
  };

  const getDataProfile = async () => {
    try {
      const result = await getProfile();
      setProfile(result.data.result[0]);
      console.log(result);
    } catch (error) {
      if (error.result.data.result.statusCode === 403) {
       ;
      }
    }
  };

  useEffect(() => {
    getDataProfile();
  }, []);

  const onSubmit = async () => {
    const url = `${process.env.REACT_APP_BACKEND_HOST}/api/monlight-project/transactions`;

    const data = {
      product_id: productId,
      qty,
      subtotal: price,
      user_id: localStorage.getItem("id"),
      status_id: 1,
      promo_id: 6,
      size_id: 1,
      delivery_id: 1,
      tax: 1,
      payment_id: 1,
    }
    const token = localStorage.getItem("token")
    try {
      const result = await createTrans(data, token);
      successToastMessage();
      setTimeout(() => {
        navigate('/history');
      }, 2000);

    } catch (error) {
      console.log(error);
    }
  };

  const isAdmin = localStorage.getItem('role')
  const isUser = localStorage.getItem('role')
  return (
    <div>
<Navbar/>
    <div className={css.bordercontainer}>
      <div className={css.maincontent}>
      <div className={css.contentBox}>
        <div className={css.leftContent}>
          {isAdmin === 'Admin' && (
        <div className={css.textLeft}>
          <h1 className={css.bigtitle}>Finish your customer order now.</h1>
        </div>
          )}
          {isUser === 'User' && (
            <div className={css.textLeft}>
            <h1 className={css.bigtitle}>Checkout your item now!</h1>
          </div>
          )}
        <div className={css.mainbox}>
          {isUser === "User" &&(
            <h1 className={css.txt1}>Order Summary</h1>
          )}
          {isUser === "Admin" &&(
            <h1 className={css.txt1}>Delivery Order</h1>
          )}
          <div>
            <CardCart
            title={productName}
            image={imageUrl}
            qty={qty}
            size={size}
            price={price}
            />
          </div>

          <hr className={css.hr1}/>
          <div className={css.sub}>
            <p>SUBTOTAL</p>
            <p>IDR {price}</p>
          </div>
          <div className={css.tax}>
          <p>TAX & FEES</p>
          <p>IDR 0</p>
          </div>
          <div className={css.ship}>
          <p>SHIPPING</p>
          <p>IDR 0</p>
          </div>
          <div className={css.total}>
          <p>TOTAL</p>
          <p>IDR {price}</p>
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
            <input className={css.input} 
            type="text"
            onChange={handleAddress} 
            value={profile.address} />
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
            <input className={css.input}  type="radio" name="pay" id="" onClick={() => setPayment("card")} />
            <label htmlFor=""><img src={card} alt="" />Card</label>
            </div>
            <hr className={css.hr}/>
            <div className={css.pay}>
            <input className={css.input}  type="radio" name="pay" id="" onClick={() => setPayment("bank")} />
            <label htmlFor=""><img src={bank} alt="" />Bank Account</label>
            </div>
            <hr className={css.hr} />
            <div className={css.pay}>
            <input className={css.input}  type="radio" name="pay" id="" onClick={() => setPayment("cod")} />
            <label htmlFor=""><img src={cod} alt="" />Cash on Delivery</label>
            </div>
          </div>
          {isAdmin === "Admin" && (
          <div className={css.btn}>
            <button>Mark as done</button>
          </div>
          )}
          {isUser === "User" && (
            <div className={css.btn}>
            {/* <button onClick={onSubmit}>Confirm and Pay</button> */}
            <button   onClick={() => {
                  localStorage.removeItem("qty");
                  localStorage.removeItem("productName");
                  localStorage.removeItem("size");
                  localStorage.removeItem("deliveryMethod");
                  localStorage.removeItem("productId");
                  localStorage.removeItem("price");
                  localStorage.removeItem("image");
                  onSubmit();
                  // navigate("/history");
                }}>Confirm and Pay</button>
          </div>
          )}
          </div>
        </div>
      </div>
      </div>
    </div>
    <Footer />
    <ToastContainer />
    </div>
  )
}

export default Productcart