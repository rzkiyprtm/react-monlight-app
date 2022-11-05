// import React from 'react'
// import css from "../Navbar/Homenavbar.module.css"
// import withNavigate from "../../Helper/withNavigate";
// import { Link } from "react-router-dom";
// import { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom';
// import chat from "../../assets/images/chat.png";
// import srcIcon from "../../assets/images/search.png";


// const Homenavbar = () => {
//   const navigate = useNavigate();
//   const [profile, setProfile] = useState({});
//   const [imgPrev, setImgPrev] = useState();
//   const getDataProfile = async () => {
//     try {
//       const result = await getProfile();
//       console.log(result.data.result);
//       setProfile(result.data.result[0]);
//       console.log(result);
//     } catch (error) {
//       // console.log(error);
//       // console.log(error.response.data.statusCode);
//       if (error.response.data.statusCode === 403) {
//         navigate("/");
//       }
//     }
//   };

//   useEffect(() => {
//     getDataProfile();
//   }, []);


//   useEffect(() => {
//     if(!localStorage.getItem('token')) {
//       navigate('/')
//     }
//   });


//   return (
//     <div className='container-xxl p-0'>
//       <header className={css.navigationBar}>
//     <div className={css.navBar}>
//       <div className={css.leftContent}>
//         <p>Monlight</p>
//       </div>
//       <div className={css.midContent}>
//         <ol className={css.nav}>
//         <Link to = {'/home'}>
//           <li>Home</li>
//           </Link>
//           <Link to={'/product'}>
//           <li>Product</li>
//           </Link>
//           <Link to={'/payment'}>
//           <li>Your Cart</li>
//           </Link>
//           <Link to={'/history'}>
//           <li>History</li>
//           </Link>
//         </ol>
//       </div>

//       <div className={css.rightContent}>
//             <img
//               className={css.icon1}
//               src={srcIcon}
//               alt=''
//             />
//             {/* <div className="search">
//           <input type="text" className="src" />
//         </div> */}
//             <img
//               className={css.icon1}
//               src={chat}
//               alt=''
//             />
//             <Link to={"/profile"}>
//               <img
//                 className={css.putra}
//                 src={imgPrev ?? `${process.env.REACT_APP_BACKEND_HOST}/${profile.image}`}
//                 alt=''
//               />
//             </Link>
//           </div>

//     </div>
//   </header>
//     </div>
//   )
// }

// export default withNavigate(Homenavbar)