/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react";
import Footer from "../component/Footer/Footer";
import Navbar from '../component/NavbarResponsive/Navbar'
import Button from "../component/Button/Button";
import styles from "../style/ProductDetailNew.module.css";
import withNavigate from "../Helper/withNavigate";
import { useParams } from "react-router-dom";
import { getProductById } from "../Helper/Fetch";
import {useSelector, useDispatch} from "react-redux";
import Loading from '../component/Loading/Loading';

function ProductDetails({ navigate }) {

  const isLoading = useSelector(state => state.products.isLoading)
  const products = useSelector(state => state.products.data)
  console.log(products);
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const currency = (price) => {
    return (
      "IDR " +
      parseFloat(price)
        .toFixed()
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
    );
  };
  const getDetail = async () => {
    try {
      const result = await getProductById(id);
      setProduct(result.data.result.data);
    } catch (error) {
      console.log(error);
      if (error.response.data.statusCode === 403) {
        navigate("/login");
      }
    }
  };

  const [linkActive, setLinkActive] = useState('');
  const [linkActiveSize, setLinkActiveSize] = useState('');

  useEffect(() => {
    getDetail();
  }, []);

  const [count, setCount] = useState(1);
  const [size, setSize] = useState("Size");

  const [ukuran, setUkuran] = useState('');
  const [deliveryMethod, setDeliveryMethod] = useState('');
  const [qty, setQty] = useState(0);


  const handleSizeChange = (event) => {
    setUkuran(event.target.value);
  };

  const handleDeliveryMethodChange = (e) => {
    setDeliveryMethod(e.target.value);
  };

  const handleQtyChange = (e) => {
    setQty(e);
  };

  function reguler() {
    setSize(() => "Reguler");
  }

  function large() {
    setSize(() => "Large");
  }

  function xtra() {
    setSize(() => "Extra Large");
  }

  function decreamentCount() {
    setCount((prevCount) => {
      if (prevCount === 0) return 0;
      return prevCount - 1;
    });
  }

  const isAdmin = localStorage.getItem("role");

  function increamentCount() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <>
      <Navbar/>
      <main className={styles.content}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className={styles.title}>
                <p>
                  {product.category_name}
                  <span>&gt; {product.product_name}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-12 pb-5">
              <div className={styles["left-content"]}>
                <div className={styles["product-img"]}>
                  <img
                    src={`${process.env.REACT_APP_BACKEND_HOST}/${product.image}`}
                    alt="cold-brew"
                  />
                </div>
                <h3>{product.product_name}</h3>
                <h4> {currency(product.price * count)}</h4>
                {isAdmin === 'User' ? (
                  <>
                <Button text="Add to Cart" />
                <Button text="Ask to Staff" variant="color-1" font="style-1" />
                  </>
                ) : (
                  <>
                  <div className={styles.buttonHome} onClick={() => {
                navigate(`/product/edit/${id}`);
              }} >
                  <Button text="Edit Product"/>
              </div>
                  <div className={styles.buttonHome} onClick={() => {
                navigate("/product");
              }} >
                <Button text="Home" variant="color-1" font="style-1"/>
              </div>
                  </>
                )}
              </div>
            </div>
            <div className="col-lg-6 offset-lg-1 pt-md-2">
              <div className={styles["right-content"]}>
                <div className={styles.title}>
                  <p className={styles.top}>
                    Delivery only on <span>Monday to friday</span> at
                    <span> 1 - 7 pm</span>
                  </p>
                  <p className={styles.bottom}>{product.description}</p>
                </div>
                {isAdmin === 'User' ? (
                  <div className={styles.size}>
                  <div className={styles.title}>
                    <h2>Choose a size</h2>
                  </div>
                  <div className={styles.choice}>
                    <div 
                    style={{ "background-color": linkActiveSize === "size-r" ? "#6A4029" : "" }}
                    className={styles.circle} onClick={() => {
                      reguler()
                      setLinkActiveSize("size-r");
                      setUkuran("size-r");
                    }}>
                      <p className={styles.reg}>R</p>
                    </div>
                    <div  
                    style={{ "background-color": linkActiveSize === "size-large" ? "#6A4029" : "" }}
                    className={styles.circle} 
                    onClick={() => {
                      large()
                      setLinkActiveSize("size-large");
                      setUkuran("size-large");
                    }}>
                      <p className={styles.lar}>L</p>
                    </div>
                    <div
                    style={{ "background-color": linkActiveSize === "size-xtra" ? "#6A4029" : "" }}
                    className={styles.circle} 
                    onClick={() => {
                      xtra()
                      setLinkActiveSize("size-xtra");
                      setUkuran("size-xtra");
                    }}>
                      <p className={styles.xl}>XL</p>
                    </div>
                  </div>
                </div>
                ) : (
                <div className={styles.sizeAdmin}>
                  <div className={styles.title}>
                    <h2>Choose a size</h2>
                  </div>
                  <div className={styles.choice}>
                    <div 
                    style={{ "background-color": linkActiveSize === "size-r" ? "#6A4029" : "" }}
                    className={styles.circle} onClick={() => {
                      reguler()
                      setLinkActiveSize("size-r");
                      setUkuran("size-r");
                    }}>
                      <p className={styles.reg}>R</p>
                    </div>
                    <div  
                    style={{ "background-color": linkActiveSize === "size-large" ? "#6A4029" : "" }}
                    className={styles.circle} 
                    onClick={() => {
                      large()
                      setLinkActiveSize("size-large");
                      setUkuran("size-large");
                    }}>
                      <p className={styles.lar}>L</p>
                    </div>
                    <div
                    style={{ "background-color": linkActiveSize === "size-xtra" ? "#6A4029" : "" }}
                    className={styles.circle} 
                    onClick={() => {
                      xtra()
                      setLinkActiveSize("size-xtra");
                      setUkuran("size-xtra");
                    }}>
                      <p className={styles.xl}>XL</p>
                    </div>
                  </div>
                </div>
                )}
              </div>
              {isAdmin === 'User' ? (
                <div className={styles["deliv-method"]}>
                <div className={styles.title}>
                  <h3>Choose Delivery Methods</h3>
                </div>
                <div className={styles.methods}>
                  <div 
                  onClick={() =>{
                    setLinkActive("dine-in");
                    setDeliveryMethod("dine-in");
                  }}
                  className={styles.bar}
                  style={{ "background-color": linkActive === "dine-in" ? "#6A4029" : "" }}>
                    <p>Dine in</p>
                  </div>
                  <div onClick={() =>{
                    setLinkActive("delivery");
                    setDeliveryMethod("delivery");
                  }}
                  className={styles.bar}
                  style={{ "background-color": linkActive === "delivery" ? "#6A4029" : "" }}>
                    <p>Door Delivery</p>
                  </div>
                  <div onClick={() =>{
                    setLinkActive("pick-up");
                    setDeliveryMethod("pick-up")
                  }}
                  className={styles.bar}
                  style={{ "background-color": linkActive === "pick-up" ? "#6A4029" : "" }}>
                    <p>Pick up</p>
                  </div>
                </div>
                <div className={styles["set-time"]}>
                  <label>Set time :</label>
                  <input
                    type="text"
                    placeholder="Enter the time reservation"
                  ></input>
                </div>
              </div>
              ) : (
              <div className={styles["deliv-method-admin"]}>
                <div className={styles.title}>
                  <h3>Choose Delivery Methods</h3>
                </div>
                <div className={styles.methods}>
                  <div 
                  onClick={() =>{
                    setLinkActive("dine-in");
                    setDeliveryMethod("dine-in");
                  }}
                  className={styles.bar}
                  style={{ "background-color": linkActive === "dine-in" ? "#6A4029" : "" }}>
                    <p>Dine in</p>
                  </div>
                  <div onClick={() =>{
                    setLinkActive("delivery");
                    setDeliveryMethod("delivery");
                  }}
                  className={styles.bar}
                  style={{ "background-color": linkActive === "delivery" ? "#6A4029" : "" }}>
                    <p>Door Delivery</p>
                  </div>
                  <div onClick={() =>{
                    setLinkActive("pick-up");
                    setDeliveryMethod("pick-up")
                  }}
                  className={styles.bar}
                  style={{ "background-color": linkActive === "pick-up" ? "#6A4029" : "" }}>
                    <p>Pick up</p>
                  </div>
                </div>
                <div className={styles["set-time"]}>
                  <label>Set time :</label>
                  <input
                    type="text"
                    placeholder="Enter the time reservation"
                  ></input>
                </div>
              </div>
              )}
            </div>
          </div>
        </div>
        <div className="container">
          <div className={`${styles.cta} row text-center`}>
            <div className="col-lg-8 offset-lg-1">
            {isAdmin === "User" ? (
              <div className={styles["checkout-bar"]}>
              {isLoading ? (
                <Loading/>
              ) : (
                <div className={styles.left}>
                  <div className={styles["checkout-img"]}>
                    <img
                      src={`${process.env.REACT_APP_BACKEND_HOST}/${product.image}`}
                      alt="image"
                    ></img>
                  </div>
                  <div className={styles["checkout-detail"]}>
                    <h5>{product.product_name}</h5>
                    <p>
                      x{count}
                      <span> {size}</span>
                    </p>
                  </div>
                </div>
              )}
                <div className={styles["check-count"]}>
                  <div className={styles.btn} onClick={decreamentCount}>
                    <div className={styles.circle}></div>
                    <p>-</p>
                  </div>
                  <div className={styles.qty}>
                    <p>{count}</p>
                  </div>
                  <div className={styles.btn} onClick={increamentCount}>
                    <div className={styles.circle}></div>
                    <p>+</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className={styles["checkout-bar-admin"]}>
              {isLoading ? (
                <Loading/>
              ) : (
                <div className={styles.left}>
                  <div className={styles["checkout-img"]}>
                    <img
                      src={`${process.env.REACT_APP_BACKEND_HOST}/${product.image}`}
                      alt="image"
                    ></img>
                  </div>
                  <div className={styles["checkout-detail"]}>
                    <h5>{product.product_name}</h5>
                    <p>
                      x{count}
                      <span> {size}</span>
                    </p>
                  </div>
                </div>
              )}
                <div className={styles["check-count"]}>
                  <div className={styles.btn} onClick={decreamentCount}>
                    <div className={styles.circle}></div>
                    <p>-</p>
                  </div>
                  <div className={styles.qty}>
                    <p>{count}</p>
                  </div>
                  <div className={styles.btn} onClick={increamentCount}>
                    <div className={styles.circle}></div>
                    <p>+</p>
                  </div>
                </div>
              </div>
            )}
            </div>
            {isAdmin === 'User' ? (
            <div className="col-lg-2">
              <div
                onClick={() => {
                  localStorage.setItem("qty", count);
                  localStorage.setItem("productName", product.product_name);
                  localStorage.setItem("size", ukuran);
                  localStorage.setItem("deliveryMethod", deliveryMethod);
                  localStorage.setItem("productId", id);
                  localStorage.setItem("price", product.price * count);
                  localStorage.setItem("image", `${process.env.REACT_APP_BACKEND_HOST}/${product.image}`);
                  navigate("/payment");
                }}
              >
                <Button
                  text="CHECKOUT"
                  variant="color-4"
                  font="style-3"
                  route="/payment"
                />
              </div>
            </div>
            ) : (
              <div className={styles.checkoutAdmin}>
              <div className="col-lg-2">
              <div
                onClick={() => {
                  localStorage.setItem("qty", count);
                  localStorage.setItem("productName", product.product_name);
                  localStorage.setItem("size", ukuran);
                  localStorage.setItem("deliveryMethod", deliveryMethod);
                  localStorage.setItem("productId", id);
                  localStorage.setItem("price", product.price * count);
                  localStorage.setItem("image", `${process.env.REACT_APP_BACKEND_HOST}/${product.image}`);
                  navigate("/payment");
                }}
              >
                <Button
                  text="CHECKOUT"
                  variant="color-4"
                  font="style-3"
                  route="/payment"
                />
              </div>
            </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default withNavigate(ProductDetails);