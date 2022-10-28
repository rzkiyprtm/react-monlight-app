import React, { Component } from 'react'
import css from '../style/Signup.module.css'
import imgbg from '../assets/images/img-property.png'


export default class Signup extends Component {
  render() {
    return (
      <div className={css.container}>
        <main className={css.mainctg}>
            <aside className={css.sidecontent}>
                <img src={imgbg} alt=''/>
            </aside>
            <section className={css.formcontent}>
                <div className={css.headcontent}>
                    <div className={css.logodetail}>
                        <h2>Monlight</h2>
                    </div>
                    <div className={css.rightheadcontent}>
                        <a href="/signup/index.html"><p>Login</p></a>
                    </div>
                </div>
                <div className={css.signupcontent}>
                    <h1>Sign Up</h1>
                    <form className={css.fullwidth}>
                        <div className={css.inputdiv}>
                            <label>Email Address:</label>
                            <input type="text" placeholder="Enter your email address" />
                        </div>
                        <div className={css.inputdiv}>
                            <label>Password:</label>
                           <input type="password" placeholder="Enter your password" />
                        </div>
                        <div className={css.inputdiv}>
                            <label>Phone Number:</label>
                           <input type="tel" placeholder="Enter your phone number" />
                        </div>
                        <div className={css.signcontainer}>
                            <button className={css.btnsignup}><a href="/profile/index.html">Sign Up</a></button>
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
    )
  }
}
