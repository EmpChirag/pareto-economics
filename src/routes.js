import React, { lazy } from "react";
import ThoughtLeadership from "./pages/ThoughtLeadership";
import InTheNews from "./pages/InTheNews";
import ContactUs from "./pages/ContactUs";
// import ServiceSpeaking from './pages/ServiceSpeaking';

const Home = lazy(() => import("./pages/Home"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const GlobalPowerIndex = lazy(() => import("./pages/GlobalPowerIndex"));
const ClientsCorporations = lazy(() => import("./pages/ClientsCorporations"));
const FirstPrinciple = lazy(() => import("./pages/FirstPrinciple"));
const ServicesResearch = lazy(() => import("./pages/ServicesResearch"));
const ServicesLanding = lazy(() => import("./pages/ServicesLanding"));
const ClientLanding = lazy(() => import("./pages/ClientLanding"));

const ClientsGovernments = lazy(() => import("./pages/ClientsGovernments"));
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
    path: "/service",
    component: <ServicesLanding />,
    exact: true,
  },
  {
    path: "/client",
    component: <ClientLanding />,
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
  {
    path: "/first-principles",
    component: <FirstPrinciple />,
    exact: true,
  },
  {
    path: "/services-research",
    component: <ServicesResearch />,
    exact: true,
  },
  {
    path: "/clients-governments",
    component: <ClientsGovernments />,
    exact: true,
  },
];

export default routes;
