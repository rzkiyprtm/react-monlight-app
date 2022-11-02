// import React from "react";
// import { useNavigate } from "react-router-dom";

// function PrivateElement({Children, allowedRole = [] }) {
  
//   const navigate = useNavigate
//   // kondisi 1 apakah udah login
//   const userInfo = json.parse(localStorage["user-info"]) || "{}"
//   if(userInfo.token) 
//     navigate('/', {
//     replace: true,
//     state: {
//       // bisa diganti modal disini
//       msg: "Please Login",
//       isRedirected: true,
//     }
//   });

//   // kondisi 2 apakah role udah sesuai
//   if(allowedRole.length > 0){
//     if(!allowedRole.includes(userInfo.role))
//       navigate('/', {
//       replace: true,
//       state: {
//         // bisa diganti modal disini
//         msg: "Forbidden",
//         isRedirected: true,
//       }
//     });
//     return Children;
//   }

//   return <div>PrivateElement</div>
// }

// export default PrivateElement