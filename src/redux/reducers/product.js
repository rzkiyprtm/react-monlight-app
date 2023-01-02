import actionStrings from "../actions/actionStrings";
import styles from "../../style/Product.module.css";

const initialState = {
  data: [],
  promo: [],
  dataCreate: [],
  dataEdit: [],
  id: "",
  name: "",
  price: "",
  image: "",
  desc: "",
  ctg: "",
  meta: { totalPage: null },
  tglnext: styles.hide,
  tglprev: styles.hide,
  next: null,
  prev: null,
  isLoading: false,
  isError: false,
  err: null,
  errCreate: null,
  errEdit: null,
};

const productsReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case actionStrings.getProducts + actionStrings.pending:
      return {
        ...prevState,
        isLoading: true,
        isError: false,
      };
    case actionStrings.getProductsPromo + actionStrings.pending:
      return {
        ...prevState,
        isLoading: true,
        isError: false,
      };
    case actionStrings.createProduct + actionStrings.pending:
      return {
        ...prevState,
        isLoading: true,
        isError: false,
      };
    case actionStrings.editProduct + actionStrings.pending:
      return {
        ...prevState,
        isLoading: true,
        isError: false,
      };
    case actionStrings.getDetail + actionStrings.pending:
      return {
        ...prevState,
        isLoading: true,
        isError: false,
      };
    case actionStrings.getDetail + actionStrings.rejected:
        const errorResponseDetail = action.payload;
        const errorMessageDetail = errorResponseDetail.response.data.message;
        return {
          ...prevState,
          isError: true,
          isLoading: false,
          err: errorMessageDetail,
        };
    case actionStrings.getProducts + actionStrings.rejected:
      const errorResponse = action.payload;
      const errorMessage = errorResponse.response.data.message;
      return {
        ...prevState,
        isError: true,
        isLoading: false,
        err: errorMessage,
      };
    case actionStrings.getProductsPromo + actionStrings.rejected:
      const errorResponsePromo = action.payload;
      const errorMessagePromo = errorResponsePromo.data.data.message;
      return {
        ...prevState,
        isError: true,
        isLoading: false,
        err: errorMessagePromo,
      };
    case actionStrings.createProduct + actionStrings.rejected:
      const errorResponseCreate = action.payload;
      const errorMessageCreate = errorResponseCreate.response.data.message;
      return {
        ...prevState,
        isError: true,
        isLoading: false,
        errCreate: errorMessageCreate,
      };
    case actionStrings.editProduct + actionStrings.rejected:
      const errorResponseEdit = action.payload;
      // const errorMessageEdit = errorResponseEdit.response;
      console.log(errorResponseEdit);
      return {
        ...prevState,
        isError: true,
        isLoading: false,
        errEdit: errorResponseEdit,
      };
      case actionStrings.getDetail + actionStrings.fulfilled:
        const responseDetail = action.payload;
        const resultDetail = responseDetail.data.result.result.data[0];
        return {
          ...prevState,
          isLoading: false,
          data: resultDetail,
          // meta: { totalPage: response.data.result.result.meta.totalPage },
        };
    case actionStrings.getProducts + actionStrings.fulfilled:
      const response = action.payload;
      const result = response.data.result.result.data;
      return {
        ...prevState,
        isLoading: false,
        data: result,
        meta: { totalPage: response.data.result.result.meta.totalPage },
      };
    case actionStrings.getProductsPromo + actionStrings.fulfilled:
      const responsePromo = action.payload;
      console.log(responsePromo)
      const resultPromo = responsePromo.data.result.data;
      return {
        ...prevState,
        isLoading: false,
        id: resultPromo.id,
        name: resultPromo.product_name,
        price: resultPromo.price,
        image: resultPromo.image,
        desc: resultPromo.description,
        ctg: resultPromo.category_name,
        // promo: resultPromo.dataPromo,
      };
    case actionStrings.createProduct + actionStrings.fulfilled:
      const responseCreate = action.payload;
      const resultCreate = responseCreate.data.data;
      // console.log(responseCreate);
      // console.log(resultCreate);
      return {
        ...prevState,
        isLoading: false,
        dataCreate: resultCreate,
      };
    case actionStrings.editProduct + actionStrings.fulfilled:
      const responseEdits = action.payload;
      const resultEdits = responseEdits.data.data;
      return {
        ...prevState,
        isLoading: false,
        dataEdit: resultEdits,
      };
    default:
      return prevState;
  }
};

export default productsReducer;

// import ACTION_STRING from '../actions/actionStrings';

// const initialState = {
//     product: [],
//     data: [],
//     detail: [],
//     promo: [],
//     pagination: {},
//     isLoading: false,
//     isError: false,
//     isFulfilled: false,
//     error: null,
// };

// const productReducer = (prevState = initialState, { type, payload }) => {
//     const { getProduct, getDetail, getAll, getPromo, createProduct, createPromo, pending, rejected, fulfilled } = ACTION_STRING;
//     switch (type) {
//         case getProduct + pending:
//             return {
//                 ...prevState,
//                 isLoading: true,
//                 isError: false,
//                 isFulfilled: false,
//             };
//         case getProduct + rejected:
//             return {
//                 ...prevState,
//                 isError: true,
//                 isLoading: false,
//                 isFulfilled: false,
//                 error: payload.error.response.data.msg,
//                 product: [],
//             };
//         case getProduct + fulfilled:
//             return {
//                 ...prevState,
//                 isLoading: false,
//                 isError: false,
//                 isFulfilled: true,
//                 product: payload.data.data,
//             };

//         case getAll + pending:
//             return {
//                 ...prevState,
//                 isLoading: true,
//                 isError: false,
//                 isFulfilled: false,
//             };
//         case getAll + rejected:
//             return {
//                 ...prevState,
//                 isError: true,
//                 isLoading: false,
//                 isFulfilled: false,
//                 error: payload.error.response.data.msg,
//                 data: [],
//             };
//         case getAll + fulfilled:
//             const newProduct = payload.data.data;
//             const page = payload.data.meta.page;
//             return {
//                 ...prevState,
//                 isLoading: false,
//                 isError: false,
//                 isFulfilled: true,
//                 data:
//                     page > 1 ? [...prevState.product, ...newProduct] : newProduct,
//                 pagination: payload.data.meta,
//             };

//         case getDetail + pending:
//             return {
//                 ...prevState,
//                 isLoading: true,
//                 isError: false,
//                 isFulfilled: false,
//             };
//         case getDetail + rejected:
//             return {
//                 ...prevState,
//                 isError: true,
//                 isLoading: false,
//                 isFulfilled: false,
//                 error: payload.error.response.data.msg,
//                 detail: [],
//             };
//         case getDetail + fulfilled:
//             return {
//                 ...prevState,
//                 isLoading: false,
//                 isError: false,
//                 isFulfilled: true,
//                 detail: payload.data.data,
//             };
//             case getPromo + pending:
//                 return {
//                     ...prevState,
//                     isLoading: true,
//                     isError: false,
//                     isFulfilled: false,
//                 };
//             case getPromo + rejected:
//                 return {
//                     ...prevState,
//                     isError: true,
//                     isLoading: false,
//                     isFulfilled: false,
//                     error: payload.error.response.data.msg,
//                 };
//             case getPromo + fulfilled:
//             const newPromo = payload.data.data;
//             const pagePromo = payload.data.meta.page;
//                 return {
//                     ...prevState,
//                     isLoading: false,
//                     isError: false,
//                     isFulfilled: true,
//                     promo: pagePromo > 1 ? [...prevState.promo, ...newPromo] : newPromo,
//                 };
//                 case createProduct + pending:
//                 return {
//         ...prevState,
//         isLoading: true,
//         isError: false,
//       };

//     case createProduct + rejected:
//       return {
//         ...prevState,
//         isLoading: false,
//         isError: true,
//         error: payload.error.response.data.msg,
//       };

//     case createProduct + fulfilled:
//       return {
//         ...prevState,
//         isLoading: false,
//       };
//       case createPromo + pending:
//                 return {
//         ...prevState,
//         isLoading: true,
//         isError: false,
//       };

//     case createPromo + rejected:
//       return {
//         ...prevState,
//         isLoading: false,
//         isError: true,
//         error: payload.error.response.data.msg,
//       };

//     case createPromo + fulfilled:
//       return {
//         ...prevState,
//         isLoading: false,
//       };

//         default:
//             return prevState;
//     }
// };

// export default productReducer;