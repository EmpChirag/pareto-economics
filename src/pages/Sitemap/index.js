import React from "react";
import Header from "../../Layouts/Header";
import Footer from "../../Layouts/Footer";

const Sitemap = () => {
  return (
    <div className="container mx-auto px-5">
      <Header />
      <h1 className="md:mt-10 mt-5">Sitemap</h1>
      <div className="mt-10 ">
        <ul className="list-disc pl-5 grid gap-3 md:grid-cols-3 mt-5">
          <li>
            <a href="/about-us">About Us</a>
          </li>
          <li>
            <a href="/thought-leadership">Thought Leadership</a>
          </li>
          <li>
            <a href="/global-power-index">Global Power Index</a>
          </li>
          <li>
            <a href="/first-principles">First Principles</a>
          </li>
          <li>
            <a href="/in-the-news">In The News</a>
          </li>
          <li>
            <a href="/contact-us">Contact Us</a>
          </li>
        </ul>
        <h3 className="mt-10">Services</h3>
        <ul className="list-disc pl-5 grid gap-3 md:grid-cols-3 mt-5">
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/services-speaking">Services Speaking</a>
          </li>
          <li>
            <a href="/services-research">Services Research</a>
          </li>
          <li>
            <a href="/services-executive-workshops">
              Services Executive Workshops
            </a>
          </li>
        </ul>
        <h3 className="mt-10">Clients</h3>
        <ul className="list-disc pl-5 grid gap-3 md:grid-cols-3 mt-5">
          <li>
            <a href="/clients">Clients</a>
          </li>
          <li>
            <a href="/clients-corporations">Clients Corporations</a>
          </li>
          <li>
            <a href="/clients-investors">Clients Investors</a>
          </li>
          <li>
            <a href="/clients-governments">Clients Governments</a>
          </li>
        </ul>
        <h3 className="mt-10">Legal</h3>
        <ul className="list-disc pl-5 grid gap-3 md:grid-cols-3 mt-5">
          <li>
            <a href="/modern-slavery-statement">Modern Slavery Statement</a>
          </li>
          <li>
            <a href="/cookies">Cookies</a>
          </li>
          <li>
            <a href="/privacy-security-statement">Privacy Security Statement</a>
          </li>
          <li>
            <a href="/terms-of-use">Terms of Use</a>
          </li>
        </ul>
        <h3 className="mt-10">Insights</h3>
        <ul className="list-disc pl-5 grid gap-3 md:grid-cols-3 mt-5">
          <li>
            <a href="/a-beginners-guide">A Beginner's Guide</a>
          </li>
          <li>
            <a href="/is-esg-a-bubble-or-paradigm">
              Is ESG a Bubble or Paradigm
            </a>
          </li>
          <li>
            <a href="/how-is-ma-impacted">How is M&A Impacted</a>
          </li>
          <li>
            <a href="/is-passive-investing-killing-esg">
              Is Passive Investing Killing ESG
            </a>
          </li>
        </ul>
        <h3 className="mt-10">Press Releases</h3>
        <ul className="list-disc pl-5 grid gap-3 md:grid-cols-3 mt-5">
          <li>
            <a href="/global-power-index-2022-launch-press-release">
              Global Power Index 2022 Launch Press Release
            </a>
          </li>
          <li>
            <a href="/pangaea-wire-group-announces-company-name-change-to-pareto-economics">
              Pangaea Wire Group Announces Company Name Change To Pareto
              Economics
            </a>
          </li>
          <li>
            <a href="/pareto-economics-to-unveil-ranking-of-the-most-powerful-countries-in-2023">
              Pareto Economics To Unveil Ranking Of The Most Powerful Countries
              In 2023
            </a>
          </li>
          <li>
            <a href="/usa-top-the-global-power-index-in-2023">
              Usa Top The Global Power Index In 2023
            </a>
          </li>
          <li>
            <a href="/the-usa-is-crowned-most-powerful-country-in-the-world">
              The Usa Is Crowned Most Powerful Country In The World
            </a>
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default Sitemap;
