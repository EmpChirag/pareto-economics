import React, { lazy } from "react";

const Abeginner = lazy(() => import("./pages/Abeginnerpdf"));
const ModernSlavery = lazy(() => import("./pages/ModernSlavery"));
const Cookies = lazy(() => import("./pages/Cookies"));
const PrivacySecurityStatement = lazy(() => import("./pages/PrivacySecurityStatement"));
const TermsOfUse = lazy(() => import("./pages/TermsOfUse"));
const Sitemap = lazy(() => import("./pages/Sitemap"));
const ThoughtLeadership = lazy(() => import("./pages/ThoughtLeadership"));
const InTheNews =  lazy(() => import("./pages/InTheNews"));
const ContactUs =  lazy(() => import("./pages/ContactUs"));
const ServiceSpeaking =  lazy(() => import('./pages/ServiceSpeaking'));

const Home = lazy(() => import("./pages/Home"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const GlobalPowerIndex = lazy(() => import("./pages/GlobalPowerIndex"));
const ClientsCorporations = lazy(() => import("./pages/ClientsCorporations"));
const FirstPrinciple = lazy(() => import("./pages/FirstPrinciple"));
const ServicesResearch = lazy(() => import("./pages/ServicesResearch"));
const ServicesExecutiveWorkshops = lazy(() => import("./pages/ServicesExecutiveWorkshops"));
const ServicesLanding = lazy(() => import("./pages/ServicesLanding"));
const ClientLanding = lazy(() => import("./pages/ClientLanding"));
const ClientsGovernments = lazy(() => import("./pages/ClientsGovernments"));
const ClientsInvestors = lazy(() => import("./pages/ClientsInvestors"));
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
    path: "/thought-leadership",
    component: <ThoughtLeadership />,
    exact: true
  },

  {
    path: "/in-the-news",
    component: <InTheNews />,
    exact: true
  },

  {
    path: "/contact-us",
    component: <ContactUs />,
    exact: true
  },
  {
    path: "/services",
    component: <ServicesLanding />,
    exact: true
  },
  {
    path: "/services-speaking",
    component: <ServiceSpeaking />,
    exact: true
  },
  {
    path: "/clients",
    component: <ClientLanding />,
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
  },
  {
    path: "/first-principles",
    component: <FirstPrinciple />,
    exact: true
  },
  {
    path: "/services-research",
    component: <ServicesResearch />,
    exact: true
  },
  {
    path: "/clients-governments",
    component: <ClientsGovernments />,
    exact: true
  },
  {
    path: "/services-executive-workshops",
    component: <ServicesExecutiveWorkshops />,
    exact: true
  },
  {
    path: "/clients-investors",
    component: <ClientsInvestors />,
    exact: true
  },
  {
    path: "/services-speaking",
    component: <ServiceSpeaking />,
    exact: true
  },
  {
    path: "/modern-slavery-statement",
    component: <ModernSlavery />,
    exact: true
  },
  {
    path: "/cookies",
    component: <Cookies />,
    exact: true
  },
  {
    path: "/privacy-security-statement",
    component: <PrivacySecurityStatement />,
    exact: true
  },
  {
    path: "/terms-of-use",
    component: <TermsOfUse />,
    exact: true
  },
  {
    path: "/sitemap",
    component: <Sitemap />,
    exact: true
  },
  {
    path: "/abeginner",
    component: <Abeginner />,
    exact: true
  }
  
];

export default routes;
