import axios from 'axios'
const baseURL = `${process.env.REACT_APP_BACKEND_HOST}/api/monlight-project}`

const axiosRequest = (method, url, data) => {
  return axios({
    method,
    url: `${process.env.REACT_APP_BACKEND_HOST}/api/monlight-project/${url}`,
    data,
  });
};

export const getProfile = () => {
  const login = (localStorage.getItem("token"));
  const token = login;
  const URL =
    `${process.env.REACT_APP_BACKEND_HOST}/api/monlight-project/users`;
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
  const URL = `${process.env.REACT_APP_BACKEND_HOST}/api/monlight-project/users/profile`;
  for (const pair of body.entries()) {
    console.log(pair);
  }
  return axios.patch(URL, body, {
    headers: {
      "access-token": token,
    },
  });
};


export const getData = (url, params, data) => {
  return axiosRequest("GET", url, data, params);
};

export const getProduct = (params) => {
  return axios({
    method:'get',
    url: `${process.env.REACT_APP_BACKEND_HOST}/api/monlight-project/products/get`,
    params,
  })
};

export const getProductById = (id) => {
  const login = (localStorage.getItem("token"));
  const token = login;
  // console.log(token);
  const URL = `${process.env.REACT_APP_BACKEND_HOST}/api/monlight-project/products/${id}`;
  return axios.get(URL, {
    headers: {
      "access-token": token,
    },
  });
};


export const getPromoProduct = (id) => {
  const url = `${process.env.REACT_APP_BACKEND_HOST}/api/monlight-project/products/${id}`;
  return axios.get(url);
};

export const createProduct = (data, token) => {
  const url = `${process.env.REACT_APP_BACKEND_HOST}/api/monlight-project/products`;
  return axios.post(url, data, {
    headers: {
      "access-token": token,
    },
  });
};

export const editProduct = (data, token, id) => {
  const url = `${process.env.REACT_APP_BACKEND_HOST}/api/monlight-project/products/${id}`;
  return axios.patch(url, data, {
    headers: {
      "access-token": token,
    },
  });
};

export const postPromo = (token, data) => {
  return axios({
    method: "POST",
    url: `${process.env.REACT_APP_BACKEND_HOST}/api/monlight-project/promos`,
    data,
    headers: { "access-token": token },
  });
};

export const getPromos = (id) => {
  const url = `${process.env.REACT_APP_BACKEND_HOST}/api/monlight-project/promos/${id}`;
  return axios.get(url);
};

export const getPromo = (token, data) => {
  const url = `${process.env.REACT_APP_BACKEND_HOST}/api/monlight-project/promos/get`
  return axios.get(url, data, {
    headers: {
      "access-token": token,
    }
  })
}

export const logout = (token, data) => {
  const url = `${process.env.REACT_APP_BACKEND_HOST}/api/monlight-project/auth/delete`
  return axios.delete(url, data, {
    headers: {
      'access-token': token,
    }
  })
}

export const getHistory = () => {
  const login = (localStorage.getItem("token"));
  const token = login;
  console.log(token);
  const URL =
    `${process.env.REACT_APP_BACKEND_HOST}/api/monlight-project/transactions`;
  return axios.get(URL, {
    headers: {
      "access-token": token,
    },
  });
};

export const createTrans = (data, token) => {
  const url = `${process.env.REACT_APP_BACKEND_HOST}/api/monlight-project/transactions`;
  return axios.post(url, data, {
    headers: {
      "access-token": token,
    },
  });
};