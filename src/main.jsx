import { StrictMode, } from "react";
import { createRoot, } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route, } from "react-router-dom";

import './index.css';
import ErrorPage from "./error-page";

import Root, {
  loader as rootLoader,
  action as rootAction,
 } from "./routes/root";

const router = createBrowserRouter([{ 
  path: "/",                   /* root path; path to Root */
  element: <Root {/* SearchForm and NavigationBar */}/>,
  errorElement: <ErrorPage {/* for RouteError */}/>,
  loader: rootLoader,
  action: rootAction,

  /** 
  /** Child components represented as ReactNode
   * objects. Children will be defined in the
   * "./routes/{name}" module. */
  children: [ {
    path: "contacts/:contactId",
    element: <Contact />,
    loader: contactLoader,
  },], /* end _router.children_ */


},]); /* end _router_ */

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
);
