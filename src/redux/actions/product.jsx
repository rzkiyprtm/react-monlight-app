import actionStrings from "./actionStrings";
import {
  createProduct, getData
} from "../../Helper/Fetch";

const getProductsAction = (params) => {
  return {
    type: actionStrings.getProducts,
    payload: getData("products/get", params),
  };
};

const createProductAction = (data, token) => {
  return {
    type: actionStrings.createProduct,
    payload: createProduct(data, token),
  };
};
const productAction = {

  createProductAction, getProductsAction
};

export default productAction;