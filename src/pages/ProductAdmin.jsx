import React, { useMemo } from "react";
import styles from "../style/ProductAdmin.module.css";
import Button from "../component/Button/Button";
import Card from "../component/Cardproduct/Cardproduct";
import CardPromo from "../component/CardPromo/CardPromo";
import { useState, useEffect } from "react";
import withNavigate from "../Helper/withNavigate";
import { getProduct, getPromo } from "../Helper/Fetch";
import axios from "axios";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Navbar from '../component/Navbar/Navbar'
import NavbarAdmin from '../component/Navbar/AdminNavbar'
import Footer from '../component/Footer/Footer'
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import productAction from "../redux/actions/product";

const useQuery = () => {
  const { search } = useLocation();

  return useMemo(() => new URLSearchParams(search), [search]);
};

function EditProduct({ navigate }) {
  const [promo, setPromo] = useState([])
  const [allProduct, setAllProduct] = useState([]);
  const products = useSelector(state => state.products.products)
  const dispatch = useDispatch();
  console.log(products);
  const [param, setParam] = useState({
    categories: "",
    sort: "",
  });
  const getQuery = useQuery();
  const [totalPage, setTotalPage] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const [query, setQuery] = useState({
    search: getQuery.get("search") ? getQuery.get("search") : "",
    page: getQuery.get("page") ? getQuery.get("page") : 1,
  });

  const getAllPromo = async () => {
    try {
      const result = await getPromo(param);
      setPromo(result.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllProduct = async () => {
    try {
      const result = await getProduct(param);
      setAllProduct(result.data.result.result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleNonCofee = async () => {
    try {
      const body = { ...param, categories: "non-coffee", sort: "" };
      setParam(body);
      const result = await getProduct(body);
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
    try {
      const body = { ...param, categories: "Coffee", sort: "" };
      setParam(body);
      const result = await getProduct(body);
      setAllProduct(result.data.result.result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const isAdmin = localStorage.getItem('role')

  useEffect(() => {
    getAllProduct();
    getAllPromo();
    dispatch(productAction.getProductsAction(query))
  }, []);

  return (
    <>
     {isAdmin ? <NavbarAdmin/> : <Navbar/>}
      <section className={styles["main-container"]}>
        <aside className={styles["left-content"]}>
          <div className={styles.promo}>
            <h1>Promo for you</h1>
            <p>Coupons will be updated every weeks. Check them out! </p>
            <div className={styles["promo-detail"]}>
              <div className={styles["back-bar"]}></div>
              <div className={styles["med-bar"]}></div>
              {promo?.map((e, index) => {
                return (
                  <CardPromo
                    title={e.promo_name}
                    discount={e.discount}
                    description={e.description}
                    code={e.code}
                    image={e.image}
                    duration={e.duration}
                  />
                );
              })}
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
          {isAdmin === 'Admin' && (
            <div
              className={styles["add-promo"]}
              onClick={() => {
                navigate("/addpromo");
              }}
            >
              <Button text="Add Promo" variant="color-4" font="style-1" />
            </div>
          )}
        </aside>
        <main className={styles["right-content"]}>
          <div className={styles["head-content"]}>
            <ul className={styles.ul}>
              <li style={{
                        color:
                        "link1"
                            ? "#6A4029"
                            : "",
                      }} onClick={handleFavorite}>Favorite Product</li>
              <li onClick={handleCoffee}>Coffee</li>
              <li onClick={handleNonCofee}>Non Coffee</li>
              <li onClick={handleFood}>Foods</li>
              <li>Add-on</li>
              <DropdownButton
                      id='dropdown-basic-button'
                      title='Sort by'
                    >
                      <Dropdown.Item
                        onClick={() => {
                          const urlSortMurah = `${process.env.REACT_APP_BACKEND_HOST}/api/monlight-project/products/get?sort=murah`;
                          axios
                            .get(urlSortMurah)
                            .then((res) =>
                              (
                                setAllProduct(res.data
                                .result
                                .result
                                .data)
                              ),
                            )
                            .catch((err) =>
                              console.log(err),
                            );
                        }}
                        href='#minprice'
                      >
                        Lower Price
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => {
                          const urlSortMahal = `${process.env.REACT_APP_BACKEND_HOST}/api/monlight-project/products/get?sort=mahal`;
                          axios
                            .get(urlSortMahal)
                            .then((res) =>
                              (
                              setAllProduct(res.data
                                .result
                                .result
                                .data)
                              ),
                            )
                            .catch((err) =>
                              console.log(err),
                            );
                        }}
                        href='#maxprice'
                      >
                        Max Price
                      </Dropdown.Item>
                    </DropdownButton>
            </ul>
          </div>
          <div className={styles["content-detail"]}>
            {allProduct?.map((e, index) => {
            
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
          {isAdmin === "Admin" && (
            <div
              className={styles["add-product"]}
              onClick={() => {
                navigate("/addproduct");
              }}
            >
              <Button text="Add Product" />
            </div>
          )}
        </main>
      </section>
      <Footer />
    </>
  );
}

export default withNavigate(EditProduct);