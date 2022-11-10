import React, { Fragment, useRef, useState } from "react";
import Header from '../component/NavbarResponsive/Navbar';
import Footer from "../component/Footer/Footer";
import styles from "../style/AddPromo.module.css";
import camera from "../assets/images/Icon/camera-promo.png";
import { useNavigate } from "react-router-dom";
import { postPromo } from "../Helper/Fetch";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddPromo = () => {
  const token = (localStorage.getItem("token")) || "";
  const refTarget = useRef(null);
  const navigate = useNavigate();
  const [body, setBody] = useState({});
  const [imgPrev, setImgPrev] = useState(null);

  const successToastMessage = () => {
    toast.success('New Promo Added !', {
        position: toast.POSITION.TOP_CENTER
    });
};
  const failedMessage = () => {
    toast.error('Something Wrong, Try Again !', {
      position: toast.POSITION.TOP_CENTER
  });
  }
  const failedImages = () => {
    toast.error('File too big, try at least 2mb !', {
      position: toast.POSITION.TOP_CENTER
  });
  }
  const failedType = () => {
    toast.error('Extension file wrong! Only .jpeg, .jpg, .png are allowed.', {
      position: toast.POSITION.TOP_CENTER
  });
  }
  const bodyChecked = () => {
    toast.error('All input must be fulfilled !', {
      position: toast.POSITION.TOP_CENTER
  });
  }

  const changeHandler = (e) =>
    setBody({ ...body, [e.target.name]: e.target.value });

  const imageHandler = (e) => {
    const photo = e.target.files[0];
    const defaultSize = 2 * 1024 * 1024;
    if (
      photo.type !== "image/jpeg" &&
      photo.type !== "image/jpg" &&
      photo.type !== "image/png"
    )
      return failedType();

    if (photo.size > defaultSize)
      return failedImages();
    setBody({ ...body, images: photo });
    setImgPrev(URL.createObjectURL(photo));
  };
  const submitHandler = async () => {
    if (
      !body.code ||
      !body.description ||
      !body.discount ||
      !body.duration ||
      !body.images ||
      !body.min_price ||
      !body.promo_name
    ) {
      return bodyChecked();
    }
    const formData = new FormData();
    Object.keys(body).forEach((e) => {
      formData.append(e, body[e]);
    });
    try {
      const response = await postPromo(token, formData);
      successToastMessage();
      console.log(response);
    } catch (error) {
      console.log(error)
      failedMessage();
      ;
    }
  };
  console.log(token, body);
  return (
    <Fragment>
      <Header />
      <main className={styles["main-add-product"]}>
        <p className={styles["category-text"]}>
          Favorites and Promos{" "}
          <span className={styles["add-title"]}> &#62; Add new promos</span>
        </p>
        <section className={styles["main-section"]}>
          <section className={`${styles["content"]} ${styles["left"]}`}>
            <form action="submit">
              <div
                className={`${styles["image-container"]} `}
                onClick={(e) => {
                  e.preventDefault();
                  refTarget.current.click();
                }}
              >
                <img
                  src={camera}
                  className={imgPrev ? styles.none : "image-dummy"}
                  alt="promo"
                />
                <img
                  className={styles[!imgPrev ? "none" : "image-preview"]}
                  src={imgPrev}
                  alt="preview"
                />
              </div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  refTarget.current.click();
                }}
                className={`${styles["btn"]} ${styles["btn-take-pic"]}`}
              >
                Take Picture
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  refTarget.current.click();
                }}
                className={`${styles["btn"]} ${styles["btn-choose-gallery"]}`}
              >
                Choose From Gallery
              </button>
              <input
                onChange={(e) => imageHandler(e)}
                ref={refTarget}
                type="file"
                style={{ display: "none" }}
              />
            </form>
            <form action="" className={styles["form-discount"]}>
              <label htmlFor="discount">Enter Discount:</label>
              <input onChange={changeHandler} name="discount" type="text" placeholder="Ex: 20%" />
              <label htmlFor="durations">Expire Date:</label>
              <input onChange={changeHandler} name="duration" type="text" placeholder="Ex: 25 Desember 2022" />
              <label htmlFor="code">Input Coupon Code:</label>
              <input onChange={changeHandler} name="code" type="text" placeholder="Ex: MAMAMUDA20"/>
            </form>
          </section>
          <section className={`${styles["content"]} ${styles["right"]}`}>
            <form action="">
              <label htmlFor="name">Product Name:</label>
              <input
                onChange={changeHandler}
                name="promo_name"
                type="text"
                placeholder="Input promo name"
              />
              <label htmlFor="price">Price:</label>
              <input
                onChange={changeHandler}
                name="min_price"
                placeholder="Input price"
                type="text"
              />
              <label htmlFor="description">Description:</label>
              <input
                name="description"
                onChange={changeHandler}
                placeholder="Input description"
                type="text"
              />
            </form>
            <div className={styles["btn-container"]}>
              <button
                onClick={() => {
                  submitHandler();
                }}
                className={`${styles["btn"]} ${styles["btn-save"]}`}
              >
                Save Product
              </button>
              <button 
              onClick={() => {
                navigate('/productadmin')
              }}
              className={`${styles["btn"]} ${styles["btn-cancel"]}`}>
                Cancel
              </button>
            </div>
          </section>
        </section>
      </main>
      <Footer />
      <ToastContainer />
    </Fragment>
  );
};

export default AddPromo;