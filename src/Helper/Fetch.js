import axios from 'axios'

const axiosRequest = (method, url, data) => {
  return axios({
    method,
    url: `${"http://localhost:8181/api/monlight-project/"}${url}`,
    data,
  });
};

export const getProfile = () => {
  const login = (localStorage.getItem("token"));
  const token = login;
  const URL =
    // process.env.REACT_APP_BACKEND_HOST +
    "http://localhost:8181/api/monlight-project/users";
  return axios.get(URL, {
    headers: {
      "access-token": token,
    },
  });
};

// export const editProfile = () => {
//   const login = (localStorage.getItem('token'));
//   const token = login;
//   console.log(token);
//   const URL = 'http://localhost:8181/api/monlight-project/users/profile';
//   return axios.patch(URL, {
//     headers: {
//       'access-token': token,
//     }
//   })
// }

export const editProfile = (body) => {
  const login = (localStorage.getItem("token"));
  const token = login;
  console.log(token);
  const URL = "http://localhost:8181/api/monlight-project/users/profile";
  for (const pair of body.entries()) {
    console.log(pair);
  }
  return axios.patch(URL, body, {
    headers: {
      "access-token": token,
    },
  });
};

export const login = (data) => {
  return axiosRequest("POST", "auths/login", data);
};