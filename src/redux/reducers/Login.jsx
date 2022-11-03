import actionStrings from "../actions/actionString";
// buat reducers
// (prevState, action) => {}

// const initialState = {
//   // default value
//   number: 0,
// };

// const counterReducer = (prevState = initialState, action) => {
//   // lakukan pengondisian untuk masing masing action
//   switch (action.type) {
//     case actionStrings.counterUp:
//       //   const newCounter = prevState.number + 1;
//       return {
//         ...prevState,
//         number: prevState.number + 1,
//       };
//     case actionStrings.counterDown:
//       //   const newCounter = prevState.number - 1;
//       return {
//         ...prevState,
//         number: prevState.number === 0 ? 0 : prevState.number - 1,
//       };
//     case actionStrings.counterReset:
//       return {
//         ...prevState,
//         number: initialState.number,
//       };
//     default:
//       return prevState;
//   }
// };

// export default counterReducer;

const isLogin = {
  initialState : false
}

// if(!localStorage.setItem ('token'))

const isLoginReducer = (prevState = isLogin.initialState , action) => {

  switch (action.type) {
    case actionStrings.Login:
    return {
      prevState: true,
    };
    case actionStrings.Logout:
    return {
      prevState: false,
    }
    default:
      return prevState
  }

  
}

export default isLoginReducer