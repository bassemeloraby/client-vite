import { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
  AddDrug,
  Calc,
  Cosmotics,
  Courses,
  Drugs,
  Error,
  HomeLayout,
  Indication,
  Insurance,
  Landing,
  Login,
  ScientificName,
  SingleDrug,
  UpdateDrug,
} from "./pages";
import { ErrorElement} from "./components";

// actions
// import { action as addDrugAction } from './pages/AddDrug';
import { action as addDrugAction } from './pages/AddDrug';



const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
      },
      {
        path: "drugs/*",
        element: <Drugs />,
        errorElement: <ErrorElement />,
        // loader: ScientificNameLoader,
      },
      {
        path: "drugs/:ScientificName",
        element: <ScientificName />,
        errorElement: <ErrorElement />,
        // loader: ScientificNameLoader,
      },
      {
        path: "indication/:ScientificName",
        element: <Indication />,
        errorElement: <ErrorElement />,
        // loader: ScientificNameLoader,
      },
      {
        path: "cosmtics",
        element: <Cosmotics />,
        errorElement: <ErrorElement />,
        // loader: ScientificNameLoader,
      },
      {
        path: "insurance",
        element: <Insurance />,
        errorElement: <ErrorElement />,
        // loader: ScientificNameLoader,
      },
      {
        path: "courses",
        element: <Courses />,
        errorElement: <ErrorElement />,
        // loader: ScientificNameLoader,
      },
      {
        path: "calc",
        element: <Calc />,
        errorElement: <ErrorElement />,
        // loader: ScientificNameLoader,
      },
      {
        path: "singleDrug/:id",
        element: <SingleDrug />,
        errorElement: <ErrorElement />,
        // loader: ScientificNameLoader,
      },
      {
        path: "updateDrug/:id",
        element: <UpdateDrug />,
        errorElement: <ErrorElement />,
        // loader: ScientificNameLoader,
      },
      {
        path: "addDrug",
        element: <AddDrug />,
        errorElement: <ErrorElement />,
        // loader: ScientificNameLoader,
        action: addDrugAction,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
