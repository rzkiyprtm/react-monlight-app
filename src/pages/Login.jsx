import { useState } from "react";
import css from "../style/Login.module.css";
import eyeIcon from '../assets/images/Icon/eye.svg'
import imgbg from "../assets/images/img-property.png";
import Footer from "../component/Footer/Footer";
import withNavigate from "../Helper/withNavigate";
import axios from "axios";
import { Link , useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
  const navigate = useNavigate()
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  const successToastMessage = () => {
    toast.success('Login Success !', {
        position: toast.POSITION.TOP_CENTER
    });
};
  const failedMessage = () => {
    toast.error('Password or Email Wrong !', {
      position: toast.POSITION.TOP_CENTER
  });
  }
 
	const submitHandler = (e) => {
		e.preventDefault();
// console.log(e);
    setLoading(true);
    try {
      
      axios.post(`${process.env.REACT_APP_BACKEND_HOST}/api/monlight-project/auth`, {
        email,
        password
      })
      .then((response) => {
        // alert('Login Success');
        
        successToastMessage();
        localStorage.setItem('token', response.data.data.token);
        localStorage.setItem('role', response.data.data.payload.role);
        localStorage.setItem('id', response.data.data.payload.id);
        setLoading(false);
        setTimeout(() => {
          navigate('/product');
        }, 3000);
      })
      .catch((err) => {
        failedMessage();
      });
    } catch (error) {
      setLoading(false);
      console.log(error);
    }

	};
  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };

  return (
    <div>
      <div className={css.container}>
        <main className={css.mainctg}>
          <aside className={css.sidecontent}>
            <img
              className={css.imgbg}
              src={imgbg}
              alt=''
            />
          </aside>
          <section className={css.formcontent}>
            <div className={css.headcontent}>
              <div className={css.logodetail}>
                <h2 className={css.title}>
                  Monlight
                </h2>
              </div>
              <div
                className={css.rightheadcontent}
              >
                <Link to = {'/signup'}>
                  <p>Sign Up</p>
                </Link>
              </div>
            </div>
            <div className={css.signupcontent}>
              <h1 className={css.h1}>Login</h1>
              <form className={css.fullwidth} onSubmit={submitHandler}>
                <div className={css.inputdiv}>
                  <label
                    className={css.labelsign}
                  >
                    Email Address:
                  </label>
                  <input
                    className={css.signlabel}
                    type='text'
										onChange={(e) => setEmail(e.target.value)}
                    placeholder='Enter your email address'
                  />
                </div>
                <div className={css.inputdiv}>
                  <label
                    className={css.labelsign}
                  >
                    Password:
                  </label>
                  <img className={css.showpwd} src={eyeIcon} alt="show-password" onClick={togglePassword} />
                  {/* <i class="fa-regular fa-eye"></i> */}
                  <input
                    className={css.signlabel}
                    type={passwordShown ? "text" : "password"}
										onChange={(e) => setPassword(e.target.value)}
                    placeholder='Enter your password'
                  />
                </div>
                <div class="forget">
                  <Link to={'/forgot'}>
                        <p>Forgot Password?</p>
                  </Link>
                       </div>
                <div
                  className={css.signcontainer}
                >
                  {/* <Link to={"/product"}> */}
                    <button
                      className={css.btnsignup}
											type='submit'
                    >
                      {loading ? "Authenticating..." : "Sign In"}
                    </button>
                  {/* </Link> */}
                  <button className={css.signup}>
                    Sign In with Google
                  </button>
                </div>
              </form>
            </div>
          </section>
        </main>

        <section className={css.getmember}>
          <div className={css.infomember}>
            <h2>Get your member card now!</h2>
            <p>
              Let's join with our member and enjoy
              the deals.
            </p>
          </div>
          <div>
            <button className={css.btncreate}>
              Create Now
            </button>
          </div>
        </section>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default withNavigate(Login);
