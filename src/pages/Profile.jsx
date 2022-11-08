import React from "react";
import css from "../style/Profile.module.css";
import Navbar from "../component/Navbar/Navbar";
import Footer from "../component/Footer/Footer";
import withNavigate from "../Helper/withNavigate";
import { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { editProfile, getProfile } from "../Helper/Fetch";
import editIcon from '../assets/images/Icon/edit.png'
import avatar from '../assets/images/Icon/avatar.jpg'
import NavbarAdmin from '../component/Navbar/AdminNavbar'

const Profile = () => {
  const navigate = useNavigate();
  const target = useRef(null);
  const [profile, setProfile] = useState({});
  const [imgPrev, setImgPrev] = useState();
  const [isEdit, setIsEdit] = useState(true);
  const [body, setBody] = useState({});
  console.log(body);

  const [displayName, setDisplayName] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [Address, setAddress] = useState("");
  const [Phone, setPhone] = useState("");


  const handleAddress = (e) => {
    setBody({ ...body, address: e.target.value });
    setAddress(e.target.value);
  };

  const handleDisplayName = (e) => {
    setBody({ ...body, display_name: e.target.value });
    setDisplayName(e.target.value);
  };

  const handleFirstName = (e) => {
  setBody({ ...body, first_name: e.target.value });
  setFirstName(e.target.value);};

  const handleLastName = (e) => {
  setBody({ ...body, last_name: e.target.value });
  setLastName(e.target.value)};

  const handleDOB = (e) => {setBody({ ...body, birthday: e.target.value })};
  const handleGender = (e) => {setBody({ ...body, gender: e.target.value })};
  const handleImage = (e) => {setBody({ ...body, images: e.target.files[0] });
    setImgPrev(URL.createObjectURL(e.target.files[0]));
  };
  const handlePhone = (e) => {
  setBody({ ...body, phone: e.target.value });
  setPhone(e.target.value)};

  const handleCancel = () => {
    setDisplayName("");
    setFirstName("");
    setLastName("");
    setAddress("");
    setPhone("");
  }

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

  const handleSaveChange = async () => {
    const formData = new FormData();
    Object.keys(body).forEach((key, idx) => {
      formData.append(key, body[key]);
    });
    try {
      await editProfile(formData);
      setBody({});
      setIsEdit(true);
      await getDataProfile();
    } catch (error) {
      console.log(error);
    }
  };

  const changeHandler = (e) => [
    setBody({ ...body, [e.target.name]: e.target.value }),
  ];

  useEffect(() => {
    getDataProfile();
  }, []);

  const getBirthday = () => {
    const date = new Date(profile.birthday);
    const yyyy = date.getFullYear();
    let mm = date.getMonth() + 1; // Months start at 0!
    let dd = date.getDate();

    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;

    return dd + "/" + mm + "/" + yyyy;
  };

  const isAdmin = localStorage.getItem('role') === 'Admin'

  console.log(profile);

  return (
    <div>
     {isAdmin ? <NavbarAdmin/> : <Navbar/>}
      <main className={css.maincontent}>
        <div className={css.maincontentgrid}>
          <div className={css.backtopcontent}>
            <div className={css.textuser}></div>
            <div className={css.topcontent}>
              <div className={css.profilephoto}>
                <img
                onClick={(e) => {
                  e.preventDefault();
                  target.current.click();
                }}
                className={css.editIcon} src={editIcon} alt="editphoto" />
                <img
                  className={css.putra}
                  src={imgPrev ?? `${process.env.REACT_APP_BACKEND_HOST}/${profile.image}`}
                  alt='profile'
                />
                <input
                    type="file"
                    ref={target}
                    onChange={(e) => handleImage(e)}
                    style={{ display: "none" }}
                  />
                <h2>{profile.display_name}</h2>
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
                    <div className="ImgProfile">
                  <img onClick={(e) => {
                        e.preventDefault();
                        setIsEdit(!isEdit);
                      }}
                  className={css.editIcon} src={editIcon} alt="profile" />
                  {/* <i class="fa fa-pencil-square" aria-hidden="true"></i> */}
                    </div>
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
                          value={Address}
                          id="deliveryaddress"
                          onChange={handleAddress}
                          disabled={isEdit}
                          placeholder={profile.address}
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
                        className={css.inputprofile}
                        value={Phone}
                          id="phonenumber"
                            onChange={handlePhone}
                            disabled={isEdit}
                            placeholder={profile.phone}
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
                  <img 
                  onClick={(e) => {
                    e.preventDefault();
                    setIsEdit(!isEdit);
                  }}
                  className={css.editIcon} src={editIcon} alt="editprofile" />
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
                    type="text"
                    value={displayName}
                    id="displayname"
                    onChange={handleDisplayName}
                    disabled={isEdit}
                    placeholder={profile.display_name}
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
                    type="text"
                    value={FirstName}
                    id="firstname"
                    onChange={handleFirstName}
                    disabled={isEdit}
                    placeholder={profile.first_name}
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
                    type="text"
                    value={lastName}
                            id="lastname"
                            onChange={handleLastName}
                            disabled={isEdit}
                            placeholder={profile.last_name}
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
                  className={css.mail}
                  >
                    Birth Date
                  </label>
                  <input
                    className={css.inputprofile}
                    onChange={handleDOB}
                            disabled={isEdit}
                            name="birthday"
                            type={isEdit ? "text" : "date"}
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
                onClick={handleSaveChange}
                className={css.btnsave}>
                  Save Change
                </button>
                <button
                  onClick={handleCancel}
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
