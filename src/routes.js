import React, { lazy } from "react";


const Home = lazy(() => import("./pages/Home")
);
const AboutUs = lazy(()=>import("./pages/AboutUs"));

const routes = [
  {
    path: "/",
    component: <Home />,
    exact: true
  },
  {
    path: "/about-us",
    component: <AboutUs/>,
    exact: true
  },
];

export default routes;
