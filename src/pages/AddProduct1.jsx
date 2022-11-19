import React from "react";
import css from "../style/AddProduct1.module.css";
import { connect } from "react-redux";
import withNavigate from "../Helper/withNavigate";
import { createProductAction } from "../redux/actions/product";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Camera from "../assets/images/Icon/camera-promo.png";
import Navbar from '../component/NavbarResponsive/Navbar'
import Footer from '../component/Footer/Footer'

class AddProduct extends React.Component {
  state = {
    selectCategory: false,
    category: "Choose Category",
    ctg_id: null,
    nameProduct: null,
    priceProduct: null,
    description: null,
    newPicture: null,
    errProduct: null,
    errPrice: null,
    errDescription: null,
    errPicture: null,
    errCategory: null,
    error: 0,
  };
  sendCreate = () => {
    this.setState({
      errProduct: null,
      errPrice: null,
      errDescription: null,
      errPicture: null,
      errCategory: null,
      error: 0,
    });
    const token = (localStorage.getItem("token"));
    if (!this.state.nameProduct)
      this.setState({
        errProduct: "*** Product name is required! ***",
        error: 1,
      });
    if (!this.state.priceProduct)
      this.setState({
        errPrice: "*** Product price is required! ***",
        error: 2,
      });
    if (!this.state.description)
      this.setState({
        errDescription: "*** Product description is required! ***",
        error: 3,
      });
    if (!this.state.newPicture)
      this.setState({
        errPicture: "*** Product picture is required! ***",
        error: 4,
      });
    if (!this.state.ctg_id)
      this.setState({
        errCategory: "*** Product Category is required! ***",
        error: 5,
      });
    setTimeout(() => {
      if (this.state.error !== 0) return;
      let body = new FormData();
      body.append("product_name", this.state.nameProduct);
      body.append("price", this.state.priceProduct);
      body.append("category_id", this.state.ctg_id);
      body.append("description", this.state.description);
      body.append("images", this.state.newPicture);
      for (const pair of body.entries()) {
        console.log(pair);
      }
      this.props.dispatch(
        createProductAction(body, token)
        );
        this.successToastMessage()
    }, 10);
  };

  successToastMessage = () => {
    toast.success('Add Product Success !', {
        position: toast.POSITION.TOP_CENTER
    });
};

  failedMessage = () => {
    toast.error('Add Product Failed !', {
      position: toast.POSITION.TOP_CENTER
  });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.product.dataCreate !== this.props.product.dataCreate)
    return this.props.navigate(``);
  }
  imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      this.setState({ newPicture: e.target.files[0] });
    }
  };

  render() {
    return (
      <>
      <Navbar/>
        {this.props.product.isLoading && (
          <div className={css["loader-container"]}>
            <div className={css.spinner}></div>
          </div>
        )}
        <main>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div
                  className={css.title}
                  onClick={() => {
                    this.props.navigate("/product");
                  }}
                >
                  <p>
                    Favorite & Promo
                    <span className={css.product}> &gt; Add new product </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row ">
              <div className="col-lg-4 text-center">
                <section className={css["left-content"]}>
                  <div className={css["photo-detail"]}>
                    <div className={css.imagecontainer}>
                    {this.state.newPicture ? 
                    <img
                      src={
                        URL.createObjectURL(this.state.newPicture)
                      }
                      alt="img"
                      className={css["photo-promo"]}
                      /> : 
                      <img
                   src={Camera}
                   alt="img"
                   className={css["photo-gummy"]}
                 />
                  }
                    </div>
                    {this.state.errPicture && (
                      <p className={css.err}>{this.state.errPicture}</p>
                    )}
                    <div className={css["take-picture"]}>
                      <p className={`${css.btn} ${css["take-img"]}`}>
                        Take a picture
                      </p>
                    </div>
                    <div className={css["from-gallery"]}>
                      <label
                        className={`${css.btn} ${css["choose-img"]}`}
                      >
                        <input
                          type="file"
                          onChange={(e) => {
                            this.imageChange(e);
                          }}
                          style={{display:'none'}}
                        />
                        Choose from gallery
                      </label>
                    </div>
                  </div>
                  <form action="">
                    <div className={`${css["promo-details"]} `}>
                      <div
                        className={`${css["coupon-code"]} ${css["input-box"]}`}
                      >
                        <label className={css["input-title"]}>
                          Select Category :
                        </label>
                        <div
                          className={css["box-dropdown"]}
                          onClick={() => {
                            this.setState((prevState) => ({
                              selectCategory: prevState.selectCategory
                                ? false
                                : true,
                            }));
                          }}
                        >
                          <p>{this.state.category}</p>
                        </div>
                        <div
                          className={
                            this.state.selectCategory
                              ? css["list-dropdown"]
                              : css.none
                          }
                        >
                          <p
                            onClick={() => {
                              this.setState({
                                category: "Foods",
                                ctg_id: 1,
                                selectCategory: false,
                              });
                            }}
                          >
                            Foods
                          </p>
                          <p
                            onClick={() => {
                              this.setState({
                                category: "Coffee",
                                ctg_id: 2,
                                selectCategory: false,
                              });
                            }}
                          >
                            Coffee
                          </p>
                          <p
                            onClick={() => {
                              this.setState({
                                category: "Non Coffee",
                                ctg_id: 3,
                                selectCategory: false,
                              });
                            }}
                          >
                            Non Coffe
                          </p>
                          <p
                            onClick={() => {
                              this.setState({
                                category: "Add Ons",
                                ctg_id: 4,
                                selectCategory: false,
                              });
                            }}
                          >
                            Add Ons
                          </p>
                        </div>
                      </div>
                      {this.state.errCategory && (
                        <p className={css.err}>{this.state.errCategory}</p>
                      )}
                    </div>
                  </form>
                </section>
              </div>
              <div className="col-lg-7 offset-lg-1">
                <section className={css["right-content"]}>
                  <form action="">
                    <div className={css["promo-details"]}>
                      <div className={css["input-box"]}>
                        <label className={css["input-title"]}>Name :</label>
                        <input
                          type="text"
                          name="stock"
                          required
                          placeholder="Type product name"
                          onChange={(e) => {
                            this.setState({ nameProduct: e.target.value });
                          }}
                        />
                      </div>
                      {this.state.errProduct && (
                        <p className={css.err}>{this.state.errProduct}</p>
                      )}
                      <div className={css["input-box"]}>
                        <label className={css["input-title"]}>
                          Normal Price :
                        </label>
                        <input
                          type="number"
                          name="code"
                          placeholder="Type the normal price"
                          onChange={(e) => {
                            this.setState({ priceProduct: e.target.value });
                          }}
                        />
                      </div>
                      {this.state.errPrice && (
                        <p className={css.err}>{this.state.errPrice}</p>
                      )}
                      <div className={css["input-box"]}>
                        <label className={css["input-title"]}>
                          Description :
                        </label>
                        <input
                          type="text"
                          name="code"
                          placeholder="Describe your product"
                          onChange={(e) => {
                            this.setState({ description: e.target.value });
                          }}
                        />
                      </div>
                      {this.state.errDescription && (
                        <p className={css.err}>
                          {this.state.errDescription}
                        </p>
                      )}
                      {/* <div>
                                <div className={css["input-box"]}>
                                    <p className={css["input-title"]}>Input product size :</p>
                                    <p className={css["select-title"]}>Click size you want to use for this product</p>
                                    <div className={css["box-btn-methods"]}>
                                        <div className={`${css.sizes} ${css.nonSelect}`}><p>R</p></div>
                                        <div className={`${css.sizes} ${css.nonSelect}`}><p>L</p></div>
                                        <div className={`${css.sizes} ${css.nonSelect}`}><p>XL</p></div>
                                        <div className={css.gram}><p>250 gr</p></div>
                                        <div className={css.gram}><p>300 gr</p></div>
                                        <div className={css.gram}><p>500 gr</p></div>
            
                                    </div>
                                </div>
                                <div className={css["input-box"]}>
                                    <p className={css["input-title"]}>Input delivery methods :</p>
                                    <p className={css["select-title"]}>Click methods you want to use for this product</p>
                                    <div className={css["box-btn-methods"]}>
                                        <p className={`${css["btn-methods"]}  ${css.select}`}>Home Delivery</p>
                                        <p className={`${css["btn-methods"]}  ${css.select}`}>Dine in</p>
                                        <p className={`${css["btn-methods"]}  ${css.select}`}>Take away</p>
                                    </div>
                                </div>
                            </div> */}
                    </div>
                  </form>
                  <div
                    className={css["save-change"]}
                    onClick={() => {
                      this.sendCreate();
                    }}
                  >
                    <p className={`${css.btn} ${css["save-btn"]}`}>
                      Save Product
                    </p>
                  </div>
                  <div className={css.cancel}>
                    <p
                      className={`${css.btn} ${css["cancel-btn"]}`}
                      onClick={() => {
                        this.setState({
                          selectCategory: false,
                          category: "Choose Category",
                          nameProduct: null,
                          priceProduct: null,
                          description: null,
                          newPicture: null,
                          errProduct: null,
                          errPrice: null,
                          errDescription: null,
                          errPicture: null,
                          errCategory: null,
                        });
                      }}
                    >
                      Cancel
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </main>
        <ToastContainer/>
        <Footer/>
      </>
    );
  }
}

const mapStateToProps = (reduxState) => {
  return {
    product: reduxState.products,
  };
};

export default connect(mapStateToProps)(withNavigate(AddProduct));