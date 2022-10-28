import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import App from "./src/App";

const router = createBrowserRouter ([{
  path: "/",
  element: <App />,
  errorElement: <Err />
},{
  path: "/login",
  element: <Login />
}
]);

export default 