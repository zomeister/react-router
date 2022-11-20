import { StrictMode, } from "react";
import { createRoot, } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route, } from "react-router-dom";
import './index.css';

import Root from "./routes/root";
import ErrorPage from "./error-page";

const router = createBrowserRouter([{ 
  path: "/",                   // root path; path to Root
  element: <Root />,           // SearchForm and NavigationBar
  errorElement: <ErrorPage />, // for RouteError

  /** Child components represented as ReactNode
   * objects. Children will be defined in the
   * "./routes/{name}" module. */
  children: [/* array */ {/* object */
    path: "contacts/:contactId",
    element: <Contact />
  },], /* end _router.children_ */

},]); /* end _router_ */

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
);
