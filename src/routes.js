import React, { lazy } from "react";

const Home = lazy(() => import("./pages/Home"));

const routes = [
  {
    path: "/",
    component: <Home />,
    exact: true
  },
];

export default routes;
