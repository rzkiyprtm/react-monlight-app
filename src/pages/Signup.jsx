import React, { Component } from 'react'
import css from '../style/Signup.module.css'
import imgbg from '../assets/images/img-property.png'
import Footer from '../component/Footer/Footer'
import { Link } from "react-router-dom";
import withNavigate from "../Helper/withNavigate";
import Axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import eyeIcon from '../assets/images/Icon/eye-icon.png'



class Signup extends Component {
    

    componentDidMount() {
        document.title = "Sign Up";
      }
      
      constructor(props) {
        super(props);
        this.state = {
          email: "",
          password: "",
          phone: "",
          pwdShown : false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      showPassword = () => {
        if (!this.state.pwdShown) return "password"
        return "text" 
      }
    
      iconShow = () => {
        if (this.state.pwdShown) return "fa-regular fa-eye"
        return "fa-regular fa-eye-slash"
      }
    
      handleChange(event, field) {
        this.setState({ [field]: event.target.value });
      }

      successToastMessage = () => {
        toast.success('Sign Up Success !', {
            position: toast.POSITION.TOP_CENTER
        });
    };
    
      failedMessage = () => {
        toast.error('Password or Email Wrong !', {
          position: toast.POSITION.TOP_CENTER
      });
      }
    
      handleSubmit(event) {
        const url = `${process.env.REACT_APP_BACKEND_HOST}/api/monlight-project/users/register`;
        const data = {
          phone_number: this.state.phone,
          email: this.state.email,
          password: this.state.password,
        };
        Axios.post(url, data)
          .then((res) => {
            this.successToastMessage()
            setTimeout(() => {
              this.props.navigate(`/login`)
            }, 3000)
            // successToastMessage();
            console.log(res.data.msg);
          })
          .catch((err) => {
          this.failedMessage()
          console.log(err)});
        event.preventDefault();
      }
    

  render() {
    return (
        <div>
      <div className={css.container}>
        <main className={css.mainctg}>
            <aside className={css.sidecontent}>
                <img className={css.imgbg} src={imgbg} alt=''/>
            </aside>
            <section className={css.formcontent}>
                <div className={css.headcontent}>
                    <div className={css.logodetail}>
                        <h2 className={css.title}>Monlight</h2>
                    </div>
                    <div className={css.rightheadcontent}>
                        <Link to={'/login'}>
                        <p>Login</p>
                        </Link>
                    </div>
                </div>
                <div className={css.signupcontent}>
                    <h1 className={css.h1}>Sign Up</h1>
                    <form className={css.fullwidth}
                    onSubmit={this.handleSubmit}>

                        <div className={css.inputdiv}>
                            <label className={css.labelsign}>Email Address:</label>
                            <input className={css.signlabel} type="text" placeholder="Enter your email address"
                            value={this.state.email}
                            onChange={(event) => this.handleChange(event, "email")}/>
                        </div>

                        <div className={css.inputdiv}>
                            <label className={css.labelsign}>Password:</ label>
                           <input className={css.signlabel1} type={this.showPassword()} placeholder="Enter your password"
                            value={this.state.password}
                            onChange={(event) => this.handleChange(event, "password")} />
                          <i class={`${this.iconShow()} ${css.password}`} onClick={() => {
             this.setState((prevState) => ({
               pwdShown: prevState.pwdShown ? false : true,
             }));
         }}></i>
                        </div>

                        <div className={css.inputdiv1}>
                            <label className={css.labelsign}>Phone Number:</label>
                           <input className={css.signlabel}  type="tel" placeholder="Enter your phone number"
                           value={this.state.phone}
                      onChange={(event) => this.handleChange(event, "phone")} />
                        </div>
                        <div className={css.signcontainer}>
                            <button className={css.btnsignup}>Sign Up</button>
                            <button className={css.signup}>Sign Up with Google</button>
                        </div>
                    </form>
                </div>
               
            </section>
        </main>
    
        <section className={css.getmember}>
            <div className={css.infomember}>
                <h2>Get your member card now!</h2>
                <p>Let's join with our member and enjoy the deals.</p>
            </div>
            <div >
                <button className={css.btncreate}>Create Now</button>
            </div>
        </section>
      </div>
        <Footer />
        <ToastContainer/>
        </div>
    )
  }
}

export default withNavigate(Signup)