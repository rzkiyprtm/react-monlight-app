import { useState } from "react";
import css from "../style/Login.module.css";
import imgbg from "../assets/images/img-property.png";
import Footer from "../component/Footer/Footer";
import withNavigate from "../Helper/withNavigate";
import axios from "axios";
import { Link , useNavigate } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate()
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const submitHandler = (e) => {
		e.preventDefault();

		axios.post(`${process.env.REACT_APP_BACKEND}api/monlight-project/auth`, {
			email,
			password
		})
		.then((response) => {
			alert('Login Success');
			console.log(response.data.data.token);
			localStorage.setItem('token', response.data.data.token);
      navigate('/home')
		})
		.catch((err) => alert('password/email is wrong'));
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
                  <input
                    className={css.signlabel}
                    type='password'
										onChange={(e) => setPassword(e.target.value)}
                    placeholder='Enter your password'
                  />
                </div>
                {/* <div className={css.inputdiv}>
                            <label className={css.labelsign}>Phone Number:</label>
                           <input className={css.signlabel}  type="tel" placeholder="Enter your phone number" />
                        </div> */}
                <div
                  className={css.signcontainer}
                >
                  {/* <Link to={"/product"}> */}
                    <button
                      className={css.btnsignup}
											type='submit'
                    >
                      Sign In
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
    </div>
  );
};

export default withNavigate(Login);
