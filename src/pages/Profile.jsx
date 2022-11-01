import React, { Component } from "react";
import css from "../style/Profile.module.css";
import Navbar from "../component/Navbar/Navbar";
import Footer from "../component/Footer/Footer";
import withNavigate from "../Helper/withNavigate";
import { Link } from "react-router-dom";
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
  const navigate = useNavigate();


  useEffect(() => {
    if(!localStorage.getItem('token')) {
      navigate('/');
    }
  }, []);

  return (
    <div>
      <Navbar />
      <main className={css.maincontent}>
        <div className={css.maincontentgrid}>
          <div className={css.backtopcontent}>
            <div className={css.textuser}></div>
            <div className={css.topcontent}>
              <div className={css.profilephoto}>
                <img
                  className={css.putra}
                  alt=''
                />
                <h2>Putra Parker</h2>
                <p>pratamabusiness@gmail.com</p>
                <h3>
                  Has been ordered 15 products
                </h3>
              </div>
              <div className={css.contact}>
                <div
                  className={css.maincontact}
                >
                  <div
                    className={css.leftcontact}
                  >
                    <div
                      className={
                        css.contactleft
                      }
                    >
                      <h2
                        className={
                          css.textcontact
                        }
                      >
                        Contact
                      </h2>
                      <label
                        className={css.mail}
                        for='email'
                      >
                        Email address :
                      </label>
                      <input
                        className={
                          css.inputprofile
                        }
                        type='text'
                        placeholder='Insert email here'
                      />
                      <hr className={css.hr} />
                      <div
                        className={css.address}
                      >
                        <label
                          className={css.mail}
                          for='address'
                        >
                          Delivery address :
                        </label>
                        <input
                          className={
                            css.inputprofile
                          }
                          type='text'
                          placeholder='Input address here'
                        />
                        <hr
                          className={css.hr}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className={css.rightcontact}
                  >
                    <div
                      className={
                        css.contactright
                      }
                    >
                      <label
                        className={css.mail}
                        for='number'
                      >
                        Mobile number :
                      </label>
                      <input
                        className={
                          css.inputprofile
                        }
                        type='tel'
                        placeholder='Input phone number'
                      />
                      <hr className={css.hr} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section className={css.contentaside}>
            <div className={css.bottomcontent}>
              <div
                className={
                  css.profiledetailleft
                }
              >
                <div className={css.textdetail}>
                  <h2>Details</h2>
                </div>
                <div className={css.display}>
                  <label
                    className={css.inputprofile}
                    for='displayname'
                  >
                    Display name :
                  </label>
                  <input
                    className={css.mail}
                    type='text'
                    placeholder='Input name here'
                  />
                  <hr className={css.hr} />
                </div>
                <div className={css.firstname}>
                  <label
                    className={css.inputprofile}
                    for=''
                  >
                    First name :
                  </label>
                  <input
                    className={css.mail}
                    type='text'
                    placeholder='Input first name'
                  />
                  <hr className={css.hr} />
                </div>
                <div className={css.lastname}>
                  <label
                    className={css.inputprofile}
                    for=''
                  >
                    Last name :
                  </label>
                  <input
                    className={css.mail}
                    type='text'
                    placeholder='last name here'
                  />
                  <hr className={css.hr} />
                </div>
              </div>
              <div
                className={
                  css.profiledetailright
                }
              >
                <div className={css.birth}>
                  <label
                    className={css.inputprofile}
                    for='date'
                  >
                    Birth Date
                  </label>
                  <input
                    className={css.mail}
                    type='date'
                  />
                </div>
                <div className={css.gender}>
                  <input
                    className={css.inputprofile}
                    type='radio'
                    id='male'
                    name='selectgender'
                    value='male'
                  />
                  <label
                    className={css.mail}
                    for='male'
                  >
                    Male
                  </label>
                  <br />

                  <input
                    className={css.inputprofile}
                    type='radio'
                    id='female'
                    name='selectgender'
                    value='female'
                  />
                  <label
                    className={css.mail}
                    for='female'
                  >
                    Female
                  </label>
                </div>
              </div>
            </div>

            <div
              className={css.buttoncontainer}
            >
              <div className={css.buttonup}>
                <p>
                  Do you want to save the
                  change?
                </p>
                <button className={css.btnsave}>
                  Save Change
                </button>
                <button
                  className={css.btncancel}
                >
                  Cancel
                </button>
              </div>
              <div className={css.buttondown}>
                <button className={css.editbtn}>
                  Edit Password
                </button>
               
                  <button
                  onClick={() => {
                    localStorage.removeItem('token')
                  }}
                    className={css.editbtn}
                  >
                    Log out
                  </button>
                
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
// class Profile extends Component {
//   render() {
//     return (
//       <div>
//         <Navbar />
//         <main className={css.maincontent}>
//           <div className={css.maincontentgrid}>
//             <div className={css.backtopcontent}>
//               <div className={css.textuser}></div>
//               <div className={css.topcontent}>
//                 <div className={css.profilephoto}>
//                   <img
//                     className={css.putra}
//                     alt=''
//                   />
//                   <h2>Putra Parker</h2>
//                   <p>pratamabusiness@gmail.com</p>
//                   <h3>
//                     Has been ordered 15 products
//                   </h3>
//                 </div>
//                 <div className={css.contact}>
//                   <div
//                     className={css.maincontact}
//                   >
//                     <div
//                       className={css.leftcontact}
//                     >
//                       <div
//                         className={
//                           css.contactleft
//                         }
//                       >
//                         <h2
//                           className={
//                             css.textcontact
//                           }
//                         >
//                           Contact
//                         </h2>
//                         <label
//                           className={css.mail}
//                           for='email'
//                         >
//                           Email address :
//                         </label>
//                         <input
//                           className={
//                             css.inputprofile
//                           }
//                           type='text'
//                           placeholder='Insert email here'
//                         />
//                         <hr className={css.hr} />
//                         <div
//                           className={css.address}
//                         >
//                           <label
//                             className={css.mail}
//                             for='address'
//                           >
//                             Delivery address :
//                           </label>
//                           <input
//                             className={
//                               css.inputprofile
//                             }
//                             type='text'
//                             placeholder='Input address here'
//                           />
//                           <hr
//                             className={css.hr}
//                           />
//                         </div>
//                       </div>
//                     </div>
//                     <div
//                       className={css.rightcontact}
//                     >
//                       <div
//                         className={
//                           css.contactright
//                         }
//                       >
//                         <label
//                           className={css.mail}
//                           for='number'
//                         >
//                           Mobile number :
//                         </label>
//                         <input
//                           className={
//                             css.inputprofile
//                           }
//                           type='tel'
//                           placeholder='Input phone number'
//                         />
//                         <hr className={css.hr} />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <section className={css.contentaside}>
//               <div className={css.bottomcontent}>
//                 <div
//                   className={
//                     css.profiledetailleft
//                   }
//                 >
//                   <div className={css.textdetail}>
//                     <h2>Details</h2>
//                   </div>
//                   <div className={css.display}>
//                     <label
//                       className={css.inputprofile}
//                       for='displayname'
//                     >
//                       Display name :
//                     </label>
//                     <input
//                       className={css.mail}
//                       type='text'
//                       placeholder='Input name here'
//                     />
//                     <hr className={css.hr} />
//                   </div>
//                   <div className={css.firstname}>
//                     <label
//                       className={css.inputprofile}
//                       for=''
//                     >
//                       First name :
//                     </label>
//                     <input
//                       className={css.mail}
//                       type='text'
//                       placeholder='Input first name'
//                     />
//                     <hr className={css.hr} />
//                   </div>
//                   <div className={css.lastname}>
//                     <label
//                       className={css.inputprofile}
//                       for=''
//                     >
//                       Last name :
//                     </label>
//                     <input
//                       className={css.mail}
//                       type='text'
//                       placeholder='last name here'
//                     />
//                     <hr className={css.hr} />
//                   </div>
//                 </div>
//                 <div
//                   className={
//                     css.profiledetailright
//                   }
//                 >
//                   <div className={css.birth}>
//                     <label
//                       className={css.inputprofile}
//                       for='date'
//                     >
//                       Birth Date
//                     </label>
//                     <input
//                       className={css.mail}
//                       type='date'
//                     />
//                   </div>
//                   <div className={css.gender}>
//                     <input
//                       className={css.inputprofile}
//                       type='radio'
//                       id='male'
//                       name='selectgender'
//                       value='male'
//                     />
//                     <label
//                       className={css.mail}
//                       for='male'
//                     >
//                       Male
//                     </label>
//                     <br />

//                     <input
//                       className={css.inputprofile}
//                       type='radio'
//                       id='female'
//                       name='selectgender'
//                       value='female'
//                     />
//                     <label
//                       className={css.mail}
//                       for='female'
//                     >
//                       Female
//                     </label>
//                   </div>
//                 </div>
//               </div>

//               <div
//                 className={css.buttoncontainer}
//               >
//                 <div className={css.buttonup}>
//                   <p>
//                     Do you want to save the
//                     change?
//                   </p>
//                   <button className={css.btnsave}>
//                     Save Change
//                   </button>
//                   <button
//                     className={css.btncancel}
//                   >
//                     Cancel
//                   </button>
//                 </div>
//                 <div className={css.buttondown}>
//                   <button className={css.editbtn}>
//                     Edit Password
//                   </button>
//                   <Link to={"/login"}>
//                     <button
//                       className={css.editbtn}
//                     >
//                       Log out
//                     </button>
//                   </Link>
//                 </div>
//               </div>
//             </section>
//           </div>
//         </main>
//         <Footer />
//       </div>
//     );
//   }
// }

export default withNavigate(Profile);
