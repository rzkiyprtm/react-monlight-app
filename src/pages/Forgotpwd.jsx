import React, { Component } from 'react'
import css from '../style/Forgotpwd.module.css'


export default class Forgotpwd extends Component {
  render() {
    return (
      <div>
      <div className={css.container}>
        <div className={css.box}>
        <div className={css.bigtitle}>
          <h1 className={css.h1font}>Forgot your password</h1>
          <p>Forgot your password? Don't worry, we got your back!</p>
        </div>
        <div className={css.label}>
          <input type="text" placeholder='Enter your email adress to get link' />
          <button className={css.btn}>Send</button>
        </div>
        <div className={css.bottom}>
          <p className={css.txtbottom}>Click here if you didn’t receive any link in 2 minutes</p>
          <button className={css.btn1}>Resend Link</button>
          <p className={css.timer}>01:15</p>
        </div>
        </div>
      </div>
      </div>
    )
  }
}
