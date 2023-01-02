import { ACTION_STRING } from "../actions/actionString";
import { ActionType } from "redux-promise-middleware";
const initialState = {
  userData: {
    id: null,
    token: null,
    role: null,
    image: null,
  },
  isError: false,
  isLoading: false,
  isFulfilled: false,
  error: null,
};
const authsReducer = (prevState = initialState, action) => {
  const { authLogin, authLogout } = ACTION_STRING;
  const { Pending, Rejected, Fulfilled } = ActionType;

  switch (action.type) {
    case authLogin.concat("_", Pending):
      return {
        ...prevState,
        isLoading: true,
        isError: false,
      };
    case authLogin.concat("_", Rejected):
      const errorRes = action.payload.response.data.msg;
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        error: errorRes,
        isFulfilled: false,
      };
    case authLogin.concat("_", Fulfilled):
      const response = action.payload;
      return {
        ...prevState,
        isLoading: false,
        isFulfilled: true,
        userData: {
          id: response.data.data.payload.id,
          image: response.data.data.payload.image,
          role: response.data.data.payload.role,
          token: response.data.data.token,
        },
      };
    case authLogout.concat("_", Pending):
      return {
        ...prevState,
        isLoading: true,
        isError: false,
      };
    case authLogout.concat("_", Rejected):
      const errorLogout = action.payload.response.data.msg;
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        error: errorLogout,
      };
    case authLogout.concat("_", Fulfilled):
      return {
        initialState,
      };
    default:
      return prevState;
  }
};

export default authsReducer;

// import ACTION_STRING from '../actions/actionStrings';

// const initialState = {
//   userData: {
//     id: '',
//     token: '',
//     role: '',
//   },
//   isLoading: false,
//   isError: false,
//   isFulfilled: false,
//   error: '',
// };

// const authReducer = (prevState = initialState, { type, payload }) => {
//   const { register, login, forgot, reset, logout, authReset, pending, rejected, fulfilled } = ACTION_STRING;
//   switch (type) {
//     case register + pending:
//       return {
//         ...prevState,
//         isLoading: true,
//         isError: false,
//         isFulfilled: false,
//       };
//     case register + rejected:
//       return {
//         ...prevState,
//         isError: true,
//         isLoading: false,
//         error: payload.error.response.data.msg,
//       };
//     case register + fulfilled:
//       return {
//         ...prevState,
//         isLoading: false,
//       };

//     case login + pending:
//       return {
//         ...prevState,
//         isLoading: true,
//         isError: false,
//         isFulfilled: false,
//       };
//     case login + rejected:
//       return {
//         ...prevState,
//         isError: true,
//         isLoading: false,
//         isFulfilled: false,
//         userData: {
//           id: null,
//           token: null,
//         },
//         error: payload.error.response.data.msg,
//       };
//     case login + fulfilled:
//       return {
//         ...prevState,
//         isError: false,
//         isLoading: false,
//         isFulfilled: true,
//         userData: {
//           id: payload.data.data.payload.id,
//           token: payload.data.data.token,
//           role: payload.data.data.payload.role,
//         },
//       };

//     case forgot + pending:
//       return {
//         ...prevState,
//         isLoading: true,
//         isError: false,
//         isFulfilled: false,
//       };
//     case forgot + rejected:
//       return {
//         ...prevState,
//         isError: true,
//         isLoading: false,
//         isFulfilled: false,
//         error: payload.error.response.data.msg,
//       };
//     case forgot + fulfilled:
//       return {
//         ...prevState,
//         isError: false,
//         isLoading: false,
//         isFulfilled: true,
//       };

//     case reset + pending:
//       return {
//         ...prevState,
//         isLoading: true,
//         isError: false,
//         isFulfilled: false,
//       };
//     case reset + rejected:
//       return {
//         ...prevState,
//         isError: true,
//         isLoading: false,
//         isFulfilled: false,
//         error: payload.error.response.data.msg,
//       };
//     case reset + fulfilled:
//       return {
//         ...prevState,
//         isError: false,
//         isLoading: false,
//         isFulfilled: true,
//       };

//     case logout + pending:
//       return {
//         ...prevState,
//         isLoading: true,
//         isError: false,
//         isFulfilled: false,
//       };
//     case logout + rejected:
//       return {
//         ...prevState,
//         isError: true,
//         isLoading: false,
//         isFulfilled: false,
//         error: payload.error,
//       };
//     case logout + fulfilled:
//       return initialState;

//     default:
//       return prevState;
//   }

// }

// export default authReducer;