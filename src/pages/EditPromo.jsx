import React from "react";
import styles from "../style/EditPromo.module.css";
import Header from "../component/NavbarResponsive/Navbar";
import Footer from "../component/Footer/Footer";
import Camera from "../assets/images/Icon/edit.png";
import withNavigate from "../Helper/withNavigate";
import withRouteParams from "../Helper/withRouteParams";
import Axios from "axios"
import { ToastContainer, toast } from 'react-toastify';

class AddPromo extends React.Component {
  state = {
    selectProduct : false,
    isLoading: true,
    product: null,
    select_id: null,
    newPicture: null,
    newName: null,
    newDesc: null,
    newDiscount: null,
    newColor: null,
    newStart: null,
    newEnd: null,
    newCode: null,
    errMsg: null,
    dataPromo: {},
    dataProduct: {},
  }
  componentDidMount(){
    Axios.get(`${process.env.REACT_APP_BACKEND_HOST}/api/monlight-project/promos/${this.props.params.id}`).then((result) => {
      this.setState({
        dataPromo: result.data.data,
      }, () => {console.log(this.state.dataPromo)})
    }).catch((err)=>{ this.setState({errMsg: "*** under developement ***", isLoading:false})})
    Axios.get(`${process.env.REACT_APP_BACKEND_HOST}/api/monlight-project/products/get`).then((result) => {
        this.setState({
            dataProduct: result.data.data.data,
            isLoading: false
        })
      }).catch((err)=>{ this.setState({errMsg: "", isLoading:false})})
  }

  // toast message
  successToastMessage = () => {
    toast.success('Edit Product Success !', {
        position: toast.POSITION.TOP_CENTER
    });
};

  failedMessage = () => {
    toast.error('Edit Product Failed !', {
      position: toast.POSITION.TOP_CENTER
  });
  }

  setDisplay = () => {
    if (this.state.isLoading && this.state.dataPromo === {} && !this.state.newPicture) return Camera
    if (!this.state.isLoading && this.state.dataPromo.image && !this.state.newPicture) return `http://localhost:8181/${this.state.dataPromo.image}`
    if (!this.state.isLoading && this.state.dataPromo.image && this.state.newPicture) return URL.createObjectURL(this.state.newPicture)
}
  imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      this.setState({ newPicture:  e.target.files[0]});
    }
  };
  sendData = () => {
    const {newPicture, newName, newDesc, newDiscount, newStart, newCode} = this.state
    let body = new FormData();
    console.log(newPicture)
    if (newPicture) body.append('images', newPicture)
    if (newName) body.append('promo_name', newName)
    if (newDesc) body.append('description', newDesc)
    if (newDiscount) body.append('discount', newDiscount)
    // if (newColor) body.append('bgcolor', newColor)
    if (newStart) body.append('duration', newStart)
    if (newCode) body.append('code', newCode)
    this.setState({isLoading:true})
    const token = (localStorage.getItem("token"));
    Axios.patch(`${process.env.REACT_APP_BACKEND_HOST}/api/monlight-project/promos/${this.props.params.id}`, body, {
      headers: {
        "access-token": token,
      },
    }).then(()=>{
      this.setState({isLoading: false})
      this.successToastMessage()
      setTimeout(() => {
      this.props.navigate("/product")
    }, 2000);
    }).catch((err)=>{
      this.setState({errMsg: "*** sistem error, try again later ***", isLoading:false})
    })
  }
  getBorn = (dates) => {
    const date = new Date(dates)
    const yyyy = date.getFullYear();
    let mm = date.getMonth() + 1; // Months start at 0!
    let dd = date.getDate();
    
    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
    
    const formattedToday = dd + '/' + mm + '/' + yyyy;
    return formattedToday
  }
  getCategory = () => {
    if (!this.state.isLoading){
        if(this.state.dataPromo !== {}) return `${this.state.dataPromo.promo_name}`
        return "Loading...."
    } return "Loading...."
}
  render () {
    const { dataPromo, isLoading,dateType } = this.state
    return (
      <>
        <Header />
        {this.state.isLoading && 
            <div className={styles["loader-container"]}>
                <div className={styles.spinner}></div>
            </div>}
        <main>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className={styles.title} onClick={() => {this.props.navigate("/product")}}>
                  <p>
                    Favorite & Promo
                    <span> &gt; Edit Promo</span>
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
                    <img src={this.state.isLoading ? Camera :  this.setDisplay()} alt="img"className={styles["photo-promo"]}>

                          </img>
                    <div className={styles["take-picture"]}>
                      <p className={`${styles.btn} ${styles["take-img"]}`}>Take a picture</p>
                    </div>
                    <div className={styles["from-gallery"]}>
                        <label className={`${styles.btn} ${styles["choose-img"]}`}>
                            <input style={{display:'none'}} type="file" onChange={(e) => {this.imageChange(e)}}/>Choose from gallery
                        </label>
                    </div>
                  </div>
                  <form action="">
                    <div className={`${styles["promo-details"]} `}>
                    <div className={styles["input-box"]}>
                        <label className={styles["input-title"]}>Name :</label>
                        <input
                          type="text"
                          name="stock"
                          required
                          placeholder={isLoading ? "Loading...." :dataPromo.promo_name}
                          onChange={(e)=>{this.setState({newName: e.target.value})}}
                        />
                      </div> 
                     
                      <div
                        className={`${styles["coupon-code"]} ${styles["input-box"]}`}
                      >
                        <label className={styles["input-title"]}>
                          Input coupon code :
                        </label>
                        <input type="text" name="code" placeholder={isLoading ? "Loading..." : dataPromo.code} onChange={(e)=>{this.setState({newCode: e.target.value})}} />
                      </div>
                    </div>
                  </form>
                </section>
              </div>
              <div className="col-lg-7 offset-lg-1">
                <section className={styles["right-content"]}>
                  <form action="">
                    <div className={styles["promo-details"]}>
                    <div
                        className={`${styles["expire-date"]} ${styles["input-box"]}`}
                      >
                        <label className={styles["input-title"]}>
                          Expire date :
                        </label>
                        <input
                          type={dateType}
                          name="duration"
                          required
                          placeholder={isLoading ? "Loading..." : this.state.dataPromo.duration}
                          onClick={()=>{this.setState({dateType:"text"})}}
                          onChange={(e)=>{this.setState({newStart: e.target.value})}}
                        />
                      </div>
                      <div className={styles["input-box"]}>
                        <label className={styles["input-title"]}>
                          Description :
                        </label>
                        <input
                          type="text"
                          name="code"
                          placeholder={isLoading ? "Loading...." :dataPromo.description}
                          onChange={(e)=>{this.setState({newDesc: e.target.value})}}
                        />
                      </div>
                      <div className={styles["input-box"]}>
                        <label className={styles["input-title"]}>
                          Discount Product :
                        </label>
                        <input
                          type="number"
                          name="code"
                          placeholder={isLoading ? "Loading...." :dataPromo.discount}
                          onChange={(e)=>{this.setState({newDiscount: e.target.value})}}
                        />
                      </div>
                    </div>
                  </form>
                  <div className={styles["save-change"]} onClick={() => {this.sendData()}}>
                  {this.state.errMsg && <p className={styles.err}>{this.state.errMsg}</p>}
                  <p className={`${styles.btn} ${styles["save-btn"]}`}>Save Promo</p>
                  </div>
                  <div className={styles.cancel}>
                  <p className={`${styles.btn} ${styles["cancel-btn"]}`} onClick={() => {
                    this.setState({
                      product: null,
                      select_id: null,
                      newPicture: null,
                      newName: null,
                      newDesc: null,
                      newDiscount: null,
                      newColor: null,
                      newStart: null,
                      newEnd: null,
                      newCode: null,
                    })
                  }}>Cancel</p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </main>
        <Footer />
        <ToastContainer/>
      </>
    );
  }
}

export default withRouteParams(withNavigate(AddPromo));