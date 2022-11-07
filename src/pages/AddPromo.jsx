import React from "react";
import styles from "../style/AddPromo.module.css";
import Footer from "../component/Footer/Footer";
import NavBelumLogin from '../component/Navbar/Homenavbar'
import Header from "../component/Navbar/Navbar";

import Camera from "../assets/images/Icon/camera-promo.png";

function AddPromo() {
  const isLogin = localStorage.getItem('token')

  return (
    <>
  {isLogin ? <Header/> : <NavBelumLogin/>}
      <main>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className={styles.title}>
                <p>
                  Favorite & Promo
                  <span> &gt; Add new promo</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row ">
            <div className="col-lg-4 text-center">
              <section className={styles["left-content"]}>
                <div className={styles["photo-detail"]}>
                  <div className={styles["photo-promo"]}>
                    <img src={Camera} alt="default" />
                  </div>
                  <div className={styles["take-picture"]}>
                    <button className={styles.btn1}>Take A Picture</button>
                  </div>
                  <div className={styles["from-gallery"]}>
                    <button className={styles.btn2}>Choose From Galery</button>
                  </div>
                </div>
                <form action="">
                  <div className={`${styles["promo-details"]} `}>
                    <div
                      className={`${styles["enter-discount"]} ${styles["input-box"]}`}
                    >
                      <label className={styles["input-title"]}>
                        Enter the discount :
                      </label>
                      <input
                        type="text"
                        name="stock"
                        required
                        placeholder="Input stock"
                      />
                    </div>
                    <div
                      className={`${styles["expire-date"]} ${styles["input-box"]}`}
                    >
                      <label className={styles["input-title"]}>
                        Expire date :
                      </label>
                      <input
                        type="date"
                        name="start"
                        required
                        placeholder="Select start date"
                      />
                      <input
                        type="date"
                        name="end"
                        required
                        placeholder="Select end date"
                      />
                    </div>
                    <div
                      className={`${styles["coupon-code"]} ${styles["input-box"]}`}
                    >
                      <label className={styles["input-title"]}>
                        Input coupon code :
                      </label>
                      <input type="text" name="code" placeholder="Input code" />
                    </div>
                  </div>
                </form>
              </section>
            </div>
            <div className="col-lg-7 offset-lg-1">
              <section className={styles["right-content"]}>
                <form action="">
                  <div className={styles["promo-details"]}>
                    <div className={styles["input-box"]}>
                      <label className={styles["input-title"]}>Name :</label>
                      <input
                        type="text"
                        name="stock"
                        required
                        placeholder="Type promo name min. 50 characters"
                      />
                    </div>
                    <div className={styles["input-box"]}>
                      <label className={styles["input-title"]}>
                        Normal Price :
                      </label>
                      <input
                        type="text"
                        name="code"
                        placeholder="Type the normal price"
                      />
                    </div>
                    <div className={styles["input-box"]}>
                      <label className={styles["input-title"]}>
                        Description :
                      </label>
                      <input
                        type="text"
                        name="code"
                        placeholder="Describe your promo min. 150 characters"
                      />
                    </div>
                  </div>
                </form>
                <div className={styles["save-change"]}>
                  <button className={styles.btn3}>Save Promo</button>
                </div>
                <div className={styles.cancel}>
                  <button className={styles.btn4}>Cancel</button>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default AddPromo;