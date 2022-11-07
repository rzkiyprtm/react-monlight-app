import React from "react";
import styles from "../style/EditProduct.module.css";
import Header from "../component/Navbar/Navbar";
import Footer from "../component/Footer/Footer";
import Button from "../component/Button/Button";
import Card from "../component/Cardproduct/Cardproduct";
import CardPromo from "../component/CardPromo/CardPromo";

import { useState, useEffect } from "react";
import withNavigate from "../Helper/withNavigate";
import { getProduct } from "../Helper/Fetch";
// import { useLocation } from "react-router-dom";

// const useQuery = () => {
//   const { search } = useLocation();

//   return useMemo(() => new URLSearchParams(search), [search]);
// };

function EditProduct({ navigate }) {
  // const getQuery = useQuery();
  // const [product, setProduct] = useState([]);
  // const [query, setQuery] = useState({
  //   search: getQuery.get("search") ? getQuery.get("search") : "",
  //   categories: getQuery.get("categories") ? getQuery.get("categories") : "",
  //   sort: getQuery.get("sort") ? getQuery.get("sort") : "",
  // });

  // const fetchData = async (query) => {
  //   try {
  //     const products = await getData(`/products`, query);
  //     setProduct(products.data.result.result.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchData(query);
  //   console.log(query);
  //   console.log(product);
  // }, [query]);

  const [allProduct, setAllProduct] = useState([]);
  const [param, setParam] = useState({
    categories: "",
    sort: "",
  });

  const getAllProduct = async () => {
    try {
      const result = await getProduct(param);
      console.log(result);
      setAllProduct(result.data.result.result.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleNonCofee = async () => {
    try {
      const body = { ...param, categories: "non-coffee", sort: "" };
      console.log(body);
      setParam(body);
      const result = await getProduct(body);
      console.log(result.data.result.result.data);
      setAllProduct(result.data.result.result.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleFavorite = async () => {
    try {
      const body = {
        ...param,
        sort: "",
        categories: "",
      };
      setParam(body);
      const result = await getProduct(body);
      setAllProduct(result.data.result.result.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleFood = async () => {
    console.log("handleFood");
    try {
      const body = { ...param, categories: "Food", sort: "" };
      setParam(body);
      const result = await getProduct(body);
      setAllProduct(result.data.result.result.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleCoffee = async () => {
    //   setParam({...param,category:'Non Coffe'})
    // getProduct()
    try {
      const body = { ...param, categories: "Coffee", sort: "" };
      setParam(body);
      const result = await getProduct(body);
      setAllProduct(result.data.result.result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProduct();
  }, []);

  return (
    <>
      <Header />
      <section className={styles["main-container"]}>
        <aside className={styles["left-content"]}>
          <div className={styles.promo}>
            <h1>Promo for you</h1>
            <p>Coupons will be updated every weeks. Check them out! </p>
            <div className={styles["promo-detail"]}>
              <div className={styles["back-bar"]}></div>
              <div className={styles["med-bar"]}></div>
              <CardPromo
                title="Chocolate Croissant"
                discount="15%"
                code="PUTRAPARKER15"
              />
              {/* <button type="submit">Apply Coupon</button> */}
              <Button text="Apply Coupon" />
            </div>
          </div>
          <ol>
            <h3>Terms and Condition</h3>
            <li>1. You can only apply 1 coupon per day</li>
            <li>2. It only for dine in</li>
            <li>3. Buy 1 get 1 only for new user</li>
            <li>4. Should make member card to apply coupon</li>
          </ol>
          <div
            className={styles["add-promo"]}
            onClick={() => {
              navigate("/addpromo");
            }}
          >
            <Button text="Add Promo" variant="color-4" font="style-1" />
          </div>
        </aside>
        <main className={styles["right-content"]}>
          <div className={styles["head-content"]}>
            <ul className={styles.ul}>
              <li onClick={handleFavorite}>Favorite Product</li>
              <li onClick={handleCoffee}>Coffee</li>
              <li onClick={handleNonCofee}>Non Coffee</li>
              <li onClick={handleFood}>Foods</li>
              <li>Add-on</li>
            </ul>
          </div>
          <div className={styles["content-detail"]}>
            {allProduct?.map((e, index) => {
              console.log();
              return (
                <Card
                  key={index}
                  img={e.image}
                  title={e.product_name}
                  price={e.price}
                  id={e.id}
                />
              );
            })}
          </div>
          <div className={styles["add-product"]}>
            <Button text="Add Product" />
          </div>
        </main>
      </section>
      <Footer />
    </>
  );
}

export default withNavigate(EditProduct);