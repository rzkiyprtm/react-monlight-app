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

export const getProduct = (param) => {
  console.log(param);
  const queryParam = {
    categories: param.categories ?? "",
    sort: param.sort ?? "id",
  };
  const URL = `http://localhost:8181/api/monlight-project/products/get?categories=${queryParam.categories}&sort=${queryParam.sort}&limit=12&page=1`;
  return axios.get(URL);
};

export const getProductById = (id) => {
  const login = (localStorage.getItem("token"));
  const token = login;
  // console.log(token);
  const URL = `http://localhost:8181/api/monlight-project/products/${id}`;
  return axios.get(URL, {
    headers: {
      "access-token": token,
    },
  });
};

export const getPromoProduct = (id) => {
  const url = `http://localhost:8181/api/monlight-project/products/${id}`;
  return axios.get(url);
};

export const createProduct = (data, token) => {
  const url = `http://localhost:8181/api/monlight-project/products`;
  return axios.post(url, data, {
    headers: {
      "access-token": token,
    },
  });
};

export const editProduct = (data, token, id) => {
  const url = `http://localhost:8181/api/monlight-project/products/${id}`;
  return axios.patch(url, data, {
    headers: {
      "access-token": token,
    },
  });
};