import { useMemo } from "react";
import styles from "../style/ProductAdmin.module.css";
import Button from "../component/Button/Button";
import Card from "../component/Cardproduct/Cardproduct";
import CardPromo from "../component/CardPromo/CardPromo";
import { useState, useEffect } from "react";
import withNavigate from "../Helper/withNavigate";
import { getPromo } from "../Helper/Fetch";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Navbar from '../component/NavbarResponsive/Navbar'
import Footer from '../component/Footer/Footer'
import { useDispatch, useSelector } from "react-redux";
import { useLocation, createSearchParams } from "react-router-dom";
import { getProductsAction } from "../redux/actions/product";
import withSearchParams from "../Helper/withSearchParams";
import Loading from '../component/Loading/Loading'


const useQuery = () => {
  const { search } = useLocation();

  return useMemo(() => new URLSearchParams(search), [search]);
};

function Products({ navigate, setSearchParams }) {
  const [promo, setPromo] = useState([])
  const products = useSelector(state => state.products.data)
  const isLoading = useSelector(state => state.products.isLoading)
  const totalPage = useSelector((state) => state.products.meta.totalPage);
  const dispatch = useDispatch();
  const [param, setParam] = useState({
    categories: "",
    sort: "",
  });
  const getQuery = useQuery();

  const [query, setQuery] = useState({
    search: getQuery.get("search") ? getQuery.get("search") : "",
    sort: getQuery.get("sort") ? getQuery.get("sort") : "popular",
    page: getQuery.get("page") ? getQuery.get("page") : 1,
  });

  const [linkActive, setLinkActive] = useState('favorite');
  // const isLoading = useSelector((state) => state.product.isLoading);

  const getAllPromo = async () => {
    try {
      const result = await getPromo(param);
      setPromo(result.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  const searchValue = (search) => {
    console.log(search);
    navigate(`?search=${search}&sort=popular&page=1`);
    window.location.reload();
  }

   useEffect(() => {
    getAllPromo();
    dispatch(getProductsAction(query));
    const urlSearchParams = createSearchParams({ ...query });
    setSearchParams(urlSearchParams);
  }, [query]);


  const isAdmin = localStorage.getItem('role')


  return (
    <>
     <Navbar onSearch={searchValue}/>
      <section className={styles["main-container"]}>
        <aside className={styles["left-content"]}>
          <div className={styles.promo}>
            <h1>Promo for you</h1>
            <p>Coupons will be updated every weeks. Check them out! </p>
            {isLoading? (
              <Loading/>
            ) : (
            <div className={styles["promo-detail"]}>
              <div className={styles["back-bar"]}></div>
              <div className={styles["med-bar"]}></div>
              {promo?.map((e, index) => {
                return (
                  <CardPromo
                    key={index}
                    title={e.promo_name}
                    discount={e.discount}
                    description={e.description}
                    code={e.code}
                    image={e.image}
                    duration={e.duration}
                    id={e.id}
                  />
                );
              })}
              <Button text="Apply Coupon" />
            </div>
            )}
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
                navigate("/product/promos/new");
              }}
            >
              <Button text="Add Promo" variant="color-4" font="style-1" />
            </div>
          )}
        </aside>
        <main className={styles["right-content"]}>
          <div className={styles["head-content"]}>
            <ul className={styles.ul}>
              <li 
              onClick={() => {
                setLinkActive("favorite")
                setQuery({
                  sort:"popular",
                  page: 1,
                });
              }}
              style={{ color: linkActive === "favorite" ? "#333" : "" }}>Favorite Product</li>
              <li 
              onClick={() => {
                setLinkActive("coffee")
                setQuery({
                  categories: "coffee",
                  page: 1,
                });
                const urlSearchParams = createSearchParams({ ...query });
                  setSearchParams(urlSearchParams);
              }}
              style={{ color: linkActive === "coffee" ? "#6A4029" : "" }}>Coffee</li>
              <li 
              onClick={() => {
                setLinkActive("non-coffee")
                setQuery({
                  categories: "non-coffee",
                  page: 1,
                });
                const urlSearchParams = createSearchParams({ ...query });
                  setSearchParams(urlSearchParams);
              }}
              style={{ color: linkActive === "non-coffee" ? "#6A4029" : "" }}>Non Coffee</li>
              <li 
              onClick={() => {
                setLinkActive("food")
                setQuery({
                  categories: "food",
                  page: 1,
                });
              }}
              style={{ color: linkActive === "food" ? "#6A4029" : "" }}>Foods</li>
              <li>Add-on</li>
            </ul>
          <div className="dropdown-btn">
          <DropdownButton
                      id='dropdown-basic-button'
                      title='Sort by'
                      className={styles.dropdown}
                    >
                      <Dropdown.Item 
                        onClick={() => {
                          setQuery({...query,sort:"cheapest"})
                        }}
                        href='#minprice'
                      >
                        Lower Price
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => {
                          setQuery({...query,sort:"priciest"})
                        }}
                        href='#maxprice'
                      >
                        Max Price
                      </Dropdown.Item>
                    </DropdownButton>
          </div>
          </div>
          {isLoading ? (
            <Loading />
          ) : (
            <div className={styles["product-box"]}>
          <div className={styles["content-detail"]}>
            {products?.map((e, index) => {
            
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
          </div>
          )}
        <div className={`${styles["paginate-container"]}`}>
            <div className={styles["title-paginate"]}>
              <p className={styles.p}>{`Showing page ${query.page} of ${totalPage}`}</p>
            </div>
            <div className={styles["btn-paginate"]}>
              <button
                onClick={() => {
                  setQuery({ ...query, page: query.page - 1 });
                }}
                disabled={query.page === 1 ? true : false}
                className={`${styles["btn-prev"]}`}
              >
                prev
              </button>
              <button
                onClick={() => {
                  setQuery({ ...query, page: query.page + 1 });
                }}
                disabled={query.page === totalPage ? true : false}
                className={`${styles["btn-next"]}`}
              >
                next
              </button>
            </div>
          </div>
          {isAdmin === "Admin" && (
            <div
              className={styles["add-product"]}
              onClick={() => {
                navigate("/product/new");
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

export default withNavigate(withSearchParams(Products));