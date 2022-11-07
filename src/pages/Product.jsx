import React, { Component } from "react";
import css from "../style/Product.module.css";
import Card from "../component/Cardproduct/Cardproduct";
import imgSpagety from "../assets/images/product/29.png";
// import Navbar from "../component/Navbar/Navbar";
import Footer from "../component/Footer/Footer";
import withNavigate from "../Helper/withNavigate";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import CardPromo from '../component/CardPromo/CardPromo'
import axios from "axios";

class Product extends Component {
  state = {
    product: [],
    activeNav: "link1",
  };

  handleChange(event) {
    this.setState({
      searchValue: event.target.value,
    });
  }

  componentDidMount() {
    const url1 = `${process.env.REACT_APP_BACKEND_HOST}/api/monlight-project/products/get`;
    axios
      .get(url1)
      .then((res) =>
        this.setState(
          {
            product: res.data.result.result.data,
          },
          () => {
            console.log(
              res.data.result.result.data,
            );
          },
        ),
      )
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        {/* <Navbar /> */}
        <div className={css.maincontainer}>
          <div className='container-fluid d-flex p-0'>
            <div className='col-4 bg-clear border-top'>
              <div className={css.upleft}>
                <p className={css.txt1}>
                  Promo for you
                </p>
                <p className={css.txt2}>
                  Coupons will be updated every
                  weeks. Check them out!{" "}
                </p>
              </div>
              <div className={css.middleleft}>
                {/* <div className={css.insideleft}>
                  <img
                    src={imgSpagety}
                    alt=''
                    className={css.img}
                  />
                  <p className={css.txt3}>
                    Beef Spaghetti
                  </p>
                  <p className={css.txt4}>
                    20% OFF
                  </p>
                  <p className={css.txt5}>
                    Buy 1 Choco Oreo and get 20%
                    off for Beef Spaghetti
                  </p>
                </div>
                <p className={css.txt6}>
                  COUPON CODE
                </p>
                <h1>FNPR15RG</h1>
                <p className={css.txt7}>
                  Valid untill November 10th 2022
                </p> */}
                <div className={css["back-bar"]}></div>
              <div className={css["med-bar"]}></div>
                <CardPromo
                title="Spaghetty"
                discount="15%"
                code="PUTRAPARKER15"
              />
              </div>
              <div className={css.btnleft}>
                <button
                  className={css.buttonleft}
                >
                  Apply Coupon
                </button>
              </div>
              <div className={css.termleft}>
                <p className={css.tnc}>
                  Terms and Condition
                </p>
                <ol className={css.list}>
                  <li>
                    You can only apply 1 coupon
                    per day.
                  </li>
                  <li>It only for dine in.</li>
                  <li>
                    Buy 1 get 1 only for new user.
                  </li>
                  <li>
                    Should make member card to
                    apply coupon.
                  </li>
                </ol>
              </div>
            </div>

            <div className='col-8 bg-clear border-start border-top'>
              <div className={css.insidenav}>
                <div className={css.navitem}>
                  <ul className={css.ul}>
                    <li
                      style={{
                        color:
                          this.state.activeNav ===
                          "link1"
                            ? "#6A4029"
                            : "",
                      }}
                      onClick={() => {
                        this.setState({
                          activeNav: "link1",
                        });

                        const url = `${process.env.REACT_APP_BACKEND_HOST}/api/monlight-project/products/get`;
                        axios
                          .get(url)
                          .then((res) =>
                            this.setState(
                              {
                                product:
                                  res.data.result
                                    .result.data,
                              },
                              () => {
                                console.log(
                                  res.data.result
                                    .result.data,
                                );
                              },
                            ),
                          )
                          .catch((err) =>
                            console.log(err),
                          );
                      }}
                    >
                      Favorite Products
                    </li>

                    <li
                      style={{
                        color:
                          this.state.activeNav ===
                          "link2"
                            ? "#6A4029"
                            : "",
                      }}
                      onClick={() => {
                        this.setState({
                          activeNav: "link2",
                        });

                        const url = `${process.env.REACT_APP_BACKEND_HOST}/api/monlight-project/products/get?categories=coffee`;
                        axios
                          .get(url)
                          .then((res) =>
                            this.setState(
                              {
                                product:
                                  res.data.result
                                    .result.data,
                              },
                              () => {
                                console.log(
                                  res.data.result
                                    .result.data,
                                );
                              },
                            ),
                          )
                          .catch((err) =>
                            console.log(err),
                          );
                      }}
                    >
                      Coffee
                    </li>

                    <li
                      style={{
                        color:
                          this.state.activeNav ===
                          "link3"
                            ? "#6A4029"
                            : "",
                      }}
                      onClick={() => {
                        this.setState({
                          activeNav: "link3",
                        });

                        const url = `${process.env.REACT_APP_BACKEND_HOST}/api/monlight-project/products/get?categories=non-coffee`;
                        axios
                          .get(url)
                          .then((res) =>
                            this.setState(
                              {
                                product:
                                  res.data.result
                                    .result.data,
                              },
                              () => {
                                console.log(
                                  res.data.result
                                    .result.data,
                                );
                              },
                            ),
                          )
                          .catch((err) =>
                            console.log(err),
                          );
                      }}
                    >
                      Non Coffee
                    </li>

                    <li
                      style={{
                        color:
                          this.state.activeNav ===
                          "link4"
                            ? "#6A4029"
                            : "",
                      }}
                      onClick={() => {
                        this.setState({
                          activeNav: "link4",
                        });

                        const url2 = `${process.env.REACT_APP_BACKEND_HOST}/api/monlight-project/products/get?categories=food`;
                        axios
                          .get(url2)
                          .then((res) =>
                            this.setState(
                              {
                                product:
                                  res.data.result
                                    .result.data,
                              },
                              () => {
                                console.log(
                                  res.data.result
                                    .result.data,
                                );
                              },
                            ),
                          )
                          .catch((err) =>
                            console.log(err),
                          );
                      }}
                    >
                      Foods
                    </li>
                    <li>Add-on</li>
                    <DropdownButton
                      id='dropdown-basic-button'
                      title='Sort'
                    >
                      <Dropdown.Item
                        onClick={() => {
                          const urlSortMurah = `${process.env.REACT_APP_BACKEND_HOST}/api/monlight-project/products/get?sort=murah`;
                          axios
                            .get(urlSortMurah)
                            .then((res) =>
                              this.setState(
                                {
                                  product:
                                    res.data
                                      .result
                                      .result
                                      .data,
                                },
                                () => {
                                  console.log(
                                    res.data
                                      .result
                                      .result
                                      .data,
                                  );
                                },
                              ),
                            )
                            .catch((err) =>
                              console.log(err),
                            );
                        }}
                        href='#minprice'
                      >
                        Min-Max
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => {
                          const urlSortMahal = `${process.env.REACT_APP_BACKEND_HOST}/api/monlight-project/products/get?sort=mahal`;
                          axios
                            .get(urlSortMahal)
                            .then((res) =>
                              this.setState(
                                {
                                  product:
                                    res.data
                                      .result
                                      .result
                                      .data,
                                },
                                () => {
                                  console.log(
                                    res.data
                                      .result
                                      .result
                                      .data,
                                  );
                                },
                              ),
                            )
                            .catch((err) =>
                              console.log(err),
                            );
                        }}
                        href='#maxprice'
                      >
                        Max-Min
                      </Dropdown.Item>
                    </DropdownButton>
                  </ul>
                </div>
              </div>
              {/* <div className="btn-next">
                  <button className={css.nextbtn}
                  onClick={() => {
                    const url8 = `${process.env.REACT_APP_BACKEND_HOST}/api/monlight-project/products/get?page=3&limit=3`;
                    const url9 = `${process.env.REACT_APP_BACKEND_HOST}/api/monlight-project/products/get?page=4&limit=3`;
                        axios
                          .get(url8, url9)
                          .then((res) =>
                            this.setState(
                              {
                                product:
                                  res.data.result
                                    .result.data,
                              },
                              () => {
                                console.log(
                                  res.data.result
                                    .result.data,
                                );
                              },
                            ),
                          )
                          .catch((err) =>
                            console.log(err),
                          );
                  }}
                  >next</button>
                  <button className={css.prevbtn}
                  onClick={() => {
                    const url8 = `${process.env.REACT_APP_BACKEND_HOST}/api/monlight-project/products/get?page=2&limit=3`;
                        axios
                          .get(url8)
                          .then((res) =>
                            this.setState(
                              {
                                product:
                                  res.data.result
                                    .result.data,
                              },
                              () => {
                                console.log(
                                  res.data.result
                                    .result.data,
                                );
                              },
                            ),
                          )
                          .catch((err) =>
                            console.log(err),
                          );
                  }}
                  >prev</button>
              </div> */}

              <div className={css.productitem}>
                <div className={css.allbox1}>
                  {this.state.product.map(
                    (product) => {
                      return (
                        <Card
                        key={product.index}
                          img={product.image}
                          title={
                            product.product_name
                          }
                          price={product.price}
                          id={product.id}
                        />
                      );
                    },
                  )}
                </div>
                {/* <div className={css.allbox2}>
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
          </div> */}
                {/* <div className={css.allbox3}>
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
          </div> */}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withNavigate(Product);
