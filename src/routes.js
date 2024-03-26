import React, { lazy } from "react";
const USATop = lazy(()=> import('./pages/Press-Release/USATop'));
const IndexLaunch = lazy(()=> import('./pages/Press-Release/IndexLaunch'));
const PangaeaWireGroup = lazy(()=> import('./pages/Press-Release/PangaeaWireGroup'));
const ParetoEconomicsRanking = lazy(()=> import('./pages/Press-Release/ParetoEconomicsRanking'));
const TheUSACrown = lazy(()=> import('./pages/Press-Release/TheUSACrown'));

const Abeginner = lazy(() => import("./pages/Pdf/Abeginnerpdf"));
const IsBubble = lazy(() =>
  import("./pages/Pdf/Is-ESG-a-Bubble-or-Paradigm-Shift")
);
const KillingESG = lazy(() => import("./pages/Pdf/KillingESG"));
const HowIsMandA = lazy(() => import("./pages/Pdf/HowIsMandA"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));

const ModernSlavery = lazy(() => import("./pages/ModernSlavery"));
const Cookies = lazy(() => import("./pages/Cookies"));
const PrivacySecurityStatement = lazy(() =>
  import("./pages/PrivacySecurityStatement")
);
const TermsOfUse = lazy(() => import("./pages/TermsOfUse"));
const Sitemap = lazy(() => import("./pages/Sitemap"));


const ThoughtLeadership = lazy(() => import("./pages/ThoughtLeadership"));
const InTheNews = lazy(() => import("./pages/InTheNews"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const ServiceSpeaking = lazy(() => import("./pages/ServiceSpeaking"));

const Home = lazy(() => import("./pages/Home"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const GlobalPowerIndex = lazy(() => import("./pages/GlobalPowerIndex"));
const ClientsCorporations = lazy(() => import("./pages/ClientsCorporations"));
const FirstPrinciple = lazy(() => import("./pages/FirstPrinciple"));
const ServicesResearch = lazy(() => import("./pages/ServicesResearch"));
const ServicesExecutiveWorkshops = lazy(() =>
  import("./pages/ServicesExecutiveWorkshops")
);
const ServicesLanding = lazy(() => import("./pages/ServicesLanding"));
const ClientLanding = lazy(() => import("./pages/ClientLanding"));
const ClientsGovernments = lazy(() => import("./pages/ClientsGovernments"));
const ClientsInvestors = lazy(() => import("./pages/ClientsInvestors"));
const routes = [
  {
    path: "*",
    component: <ErrorPage />,
    exact: true
  },
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
    path: "/a-beginners-guide",
    component: <Abeginner />,
    exact: true
  },
  {
    path: "/is-esg-a-bubble-or-paradigm",
    component: <IsBubble />,
    exact: true
  },
  {
    path: "/how-is-ma-impacted",
    component: <HowIsMandA />,
    exact: true
  },
  {
    path: "/is-passive-investing-killing-esg",
    component: <KillingESG />,
    exact: true
  },
  {
    path: "/global-power-index-2022-launch-press-release",
    component: <IndexLaunch />,
    exact: true
  },
  {
    path: "/pangaea-wire-group-announces-company-name-change-to-pareto-economics",
    component: <PangaeaWireGroup />,
    exact: true
  },
  {
    path: "/pareto-economics-to-unveil-ranking-of-the-most-powerful-countries-in-2023",
    component: <ParetoEconomicsRanking />,
    exact: true
  },
  {
    path: "/usa-top-the-global-power-index-in-2023",
    component: <USATop />,
    exact: true
  },
  {
    path: "/the-usa-is-crowned-most-powerful-country-in-the-world",
    component: <TheUSACrown />,
    exact: true
  }
];

export default routes;
