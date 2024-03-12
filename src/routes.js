import React, { lazy } from "react";
import ThoughtLeadership from "./pages/ThoughtLeadership";
import InTheNews from "./pages/InTheNews";
import ContactUs from "./pages/ContactUs";

const Home = lazy(() => import("./pages/Home"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const GlobalPowerIndex = lazy(() => import("./pages/GlobalPowerIndex"));
const ClientsCorporations = lazy(() => import("./pages/ClientsCorporations"));

const routes = [
  {
    path: "/",
    component: <Home />,
    exact: true,
  },
  {
    path: "/about-us",
    component: <AboutUs />,
    exact: true,
  },

  {
    path: "/thought-leadership",
    component: <ThoughtLeadership />,
    exact: true,
  },

  {
    path: "/in-the-news",
    component: <InTheNews />,
    exact: true,
  },

  {
    path: "/contact-us",
    component: <ContactUs />,
    exact: true,
  },
  {
    path: "/global-power-index",
    component: <GlobalPowerIndex />,
    exact: true,
  },
  {
    path: "/clients-corporations",
    component: <ClientsCorporations />,
    exact: true,
  },
];

export default routes;
