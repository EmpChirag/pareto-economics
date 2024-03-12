import React, { lazy } from "react";


const Home = lazy(() => import("./pages/Home")
);
const AboutUs = lazy(()=>import("./pages/AboutUs"));
const GlobalPowerIndex = lazy(() => import("./pages/GlobalPowerIndex"));
const ClientsCorporations = lazy(() => import("./pages/ClientsCorporations"));

const routes = [
  {
    path: "/",
    component: <Home />,
    exact: true
  },
  {
    path: "/about-us",
    component: <AboutUs />,
    exact: true
  },
  {
    path: "/global-power-index",
    component: <GlobalPowerIndex />,
    exact: true
  },
  {
    path: "/clients-corporations",
    component: <ClientsCorporations />,
    exact: true
  }
];

export default routes;
