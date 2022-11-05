import React from "react";
import css from "../style/Profile.module.css";
import Navbar from "../component/Navbar/Navbar";
import Footer from "../component/Footer/Footer";
import withNavigate from "../Helper/withNavigate";
import { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { getProfile } from "../Helper/Fetch";
import editIcon from '../assets/images/Icon/edit.png'

const Profile = () => {
  const navigate = useNavigate();
  const target = useRef(null);
  const [profile, setProfile] = useState({});
  const [isEdit, setIsEdit] = useState(true);
  const [imgPrev, setImgPrev] = useState();
  const [body, setBody] = useState({});
  console.log(body);

  const handleAddress = (e) => {
    setBody({ ...body, delivery_address: e.target.value });
  };
  const handleDisplayName = (e) => {
    setBody({ ...body, display_name: e.target.value });
  };
  const handleFirstName = (e) => {
    setBody({ ...body, first_name: e.target.value });
  };
  const handleLastName = (e) => {
    setBody({ ...body, last_name: e.target.value });
  };
  const handleDOB = (e) => {
    setBody({ ...body, date_of_birth: e.target.value });
  };
  const handleGender = (e) => {
    setBody({ ...body, gender: e.target.value });
  };

  const getDataProfile = async () => {
    try {
      const result = await getProfile();
      console.log(result.data.result);
      setProfile(result.data.result[0]);
      console.log(result);
    } catch (error) {
      if (error.response.data.statusCode === 403) {
       ;
      }
    }
  };

  useEffect(() => {
    getDataProfile();
  }, []);

  const getBirthday = () => {
    return new Date(profile.birthday).toLocaleDateString();
  }

  console.log(profile);

  // useEffect(() => {
  //   if(!localStorage.getItem('token')) {
  //     navigate('/');
  //   }
  // });

  return (
    <div>
      <Navbar />
      <main className={css.maincontent}>
        <div className={css.maincontentgrid}>
          <div className={css.backtopcontent}>
            <div className={css.textuser}></div>
            <div className={css.topcontent}>
              <div className={css.profilephoto}>
                <img className={css.editIcon} src={editIcon} alt="editphoto" />
                <img
                  className={css.putra}
                  src={imgPrev ?? `${process.env.REACT_APP_BACKEND_HOST}/${profile.image}`}
                  alt='profile'
                />
                <h2>{profile.username}</h2>
                <p>{profile.email}</p>
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
                  <img className={css.editIcon} src={editIcon} alt="editphoto" />
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
                        // placeholder='Insert email here'
                        id="emailaddress"
                        disabled={isEdit}
                        value={profile.email}
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
                          id="deliveryaddress"
                            onChange={handleAddress}
                            disabled={isEdit}
                            value={profile.address}
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
                        // placeholder='Input phone number'
                        id="mobilenumber"
                        disabled={isEdit}
                        value={profile.mobile_phone}
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
                  <img className={css.editIcon} src={editIcon} alt="editphoto" />
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
                    // placeholder='Input name here'
                    id="displayname"
                            onChange={handleDisplayName}
                            disabled={isEdit}
                            value={profile.display_name}
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
                    id="firstname"
                            onChange={handleFirstName}
                            disabled={isEdit}
                            value={profile.first_name}
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
                    id="lastname"
                            onChange={handleLastName}
                            disabled={isEdit}
                            value={profile.last_name}
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
                    onChange={handleDOB}
                    name='birthday'
                            type="text"
                            disabled={isEdit}
                            value={profile.birthday}
                            placeholder={getBirthday()}
                  />
                </div>
                <div className={css.gender}>
                  <input
                    className={css.inputprofile}
                    type="radio"
                              name="choice"
                              id="male"
                              value="male"
                              onChange={handleGender}
                              defaultChecked={
                                profile.gender === "male" ? "true" : "false"
                              }
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
                    type="radio"
                              name="choice"
                              id="female"
                              value="female"
                              onChange={handleGender}
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
                <button
                // onClick={handleSaveChange}
                className={css.btnsave}>
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
                    navigate('/')
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

export default withNavigate(Profile);
