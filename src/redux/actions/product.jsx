import actionStrings from "./actionStrings";
import {
  createProduct, getProduct, editProduct, getPromoProduct
} from "../../Helper/Fetch";

export const getProductsAction = (params) => {
  return {
    type: actionStrings.getProducts,
    payload: getProduct(params)
  };
};

export const getProductID = (id) => {
  return {
    type: actionStrings.getProductsPromo,
    payload: getPromoProduct(id)
  }
}

export const createProductAction = (data, token) => {
  return {
    type: actionStrings.createProduct,
    payload: createProduct(data, token),
  };
};

export const editProductAction = (data, token, id) => {
  return {
    type: actionStrings.editProduct,
    payload: editProduct(data, token, id),
  };
};

