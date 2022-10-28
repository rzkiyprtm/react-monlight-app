import React, { Component } from 'react'
import css from '../style/Profile.module.css'

export default class Profile extends Component {
  render() {
    return (
      <div>
         <main className={css.maincontent}>
        <div className={css.maincontentgrid}>
          <div className={css.backtopcontent}>
            <div className={css.textuser}>
            </div>
            <div className={css.topcontent}>
              <div className={css.profilephoto}>
                <img className={css.putra} alt=''/>
                <h2>Putra Parker</h2>
                <p>pratamabusiness@gmail.com</p>
                <h3>Has been ordered 15 products</h3>
              </div>
              <div className={css.contact}>
                <div className={css.maincontact}>
                  <div className={css.leftcontact}>
                    <div className={css.contactleft}>
                      <h2 className={css.textcontact}>Contact</h2>
                      <label className={css.mail} for="email">Email address :</label>
                      <input type="text" placeholder="Insert email here"/>
                      <hr className={css.hr}/>
                      <div className={css.address}>
                        <label className={css.mail} for="address">Delivery address :</label>
                        <input type="text" placeholder="Input address here"/>
                        <hr className={css.hr}/>
                      </div>
                    </div>
                  </div>
                  <div className={css.rightcontact}>
                    <div className={css.contactright}>
                      <label className={css.mail}  for="number">Mobile number :</label>
                      <input type="tel" placeholder="Input phone number"/>
                      <hr className={css.hr}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section className={css.contentaside}>
            <div className={css.bottomcontent}>
              <div className={css.profiledetailleft}>
                <div className={css.textdetail}>
                  <h2>Details</h2>
                </div>
                <div className={css.display}>
                  <label for="displayname">Display name :</label>
                  <input type="text" placeholder="Input name here" />
                  <hr className={css.hr}/>
                </div>
                <div className={css.firstname}>
                  <label for="">First name :</label>
                  <input type="text" placeholder="Input first name" />
                  <hr className={css.hr}/>
                </div>
                <div className={css.lastname}>
                  <label for="">Last name :</label>
                  <input type="text" placeholder="last name here" />
                  <hr className={css.hr}/>
                </div>
              </div>
              <div className={css.profiledetailright}>
                <div className={css.birth}>
                  <label className={css.mail}  for="date">DD/MM/YY</label>
                  <input type="date" />
                </div>
                <div className={css.gender}>
                  <input type="radio" id="male" name="selectgender" value="male" />
                  <label for="male">Male</label><br />

                  <input type="radio" id="female" name="selectgender" value="female" />
                  <label for="female">Female</label>
                </div>
              </div>
            </div>

            <div className={css.buttoncontainer}>
              <div className={css.buttonup}>
                <p>Do you want to save the change?</p>
                <button className={css.btnsave}>Save Change</button>
                <button className={css.btncancel}>Cancel</button>
              </div>
              <div className={css.buttondown}>
                <button>Edit Password</button>
                <button>Log out</button>
              </div>
            </div>
          </section>
        </div>
    </main>
      </div>
    )
  }
}
