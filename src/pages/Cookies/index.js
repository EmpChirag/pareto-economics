import React from 'react'
import Footer from '../../Layouts/Footer';
import Header from '../../Layouts/Header';

const Cookies = () => {
  return (
    <div className="container mx-auto">
      <Header />
      <section className="mt-10">
        <div>
          <h1 className="pb-10 max-md:pb-1">Cookie Statement</h1>
          <h3 className="pb-5 mt-9 text-4xl">Introduction</h3>
          <p className="text-xl ">
            This Cookie Statement applies to the website of Pareto Economics Ltd
            (referred to as "the Company" henceforth), a UK headquartered
            company. This statement outlines how we use cookies and similar
            tracking technologies on our website in compliance with the General
            Data Protection Regulation (GDPR) and other relevant UK and EU laws.
          </p>
          <h3 className="pb-5 mt-9 text-4xl">What are Cookies?</h3>
          <p className="text-xl ">
            Cookies are small text files that are stored on your device when you
            visit a website. They are widely used to make websites work more
            efficiently and to provide information to website owners.
          </p>
          <h3 className="pb-5 mt-9 text-4xl">Types of Cookies We Use</h3>
          <ul className="list-decimal list-inside">
            <li className="pb-4">
              <span className="font-bold">Necessary Cookies: </span>These
              cookies are essential for the operation of our website. They
              enable basic functions like page navigation and access to secure
              areas of the website. The website cannot function properly without
              these cookies.
            </li>
            <li className="pb-4">
              <span className="font-bold">
                {" "}
                Analytical/Performance Cookies:{" "}
              </span>
              These cookies allow us to recognize and count the number of
              visitors to our website and to see how visitors move around the
              website when they are using it. This helps us to improve the way
              our website works, for example, by ensuring that users are finding
              what they are looking for easily.
            </li>
            <li className="pb-4">
              <span className="font-bold"> Functionality Cookies: </span>
              These cookies are used to recognize you when you return to our
              website. This enables us to personalize our content for you, greet
              you by name, and remember your preferences (for example, your
              choice of language or region).
            </li>
            <li className="pb-4">
              <span className="font-bold">
                {" "}
                Targeting/Advertising Cookies:{" "}
              </span>
              These cookies are used to deliver advertisements more relevant to
              you and your interests. They are also used to limit the number of
              times you see an advertisement and to help measure the
              effectiveness of advertising campaigns.
            </li>
          </ul>
          <h3 className="pb-5 mt-9 text-4xl">Your Consent</h3>
          <p className="text-xl ">
            By using our website, you consent to the use of cookies and similar
            technologies as described in this Cookie Statement. You can withdraw
            your consent at any time by adjusting your browser settings to
            disable cookies or by clearing your browsing history.
          </p>

          <h3 className="pb-5 mt-9 text-4xl">Managing Cookies</h3>
          <p className="text-xl">
            Most web browsers allow you to manage your cookie preferences. You
            can set your browser to refuse cookies or to alert you when cookies
            are being sent. However, please note that if you choose to disable
            cookies, some parts of our website may not function properly.
          </p>
          <h3 className="pb-5 mt-9 text-4xl">Data Protection</h3>
          <p className="text-xl">
            We are committed to protecting your personal data in accordance with
            the GDPR and other applicable data protection laws. For more
            information about how we process your personal data, please refer to
            our Privacy Policy.
          </p>
          <h3 className="pb-5 mt-9 text-4xl">Contact Us</h3>
          <p className="text-xl">
            If you have any questions or concerns about our use of cookies,
            please contact us at info@pareto-economics.com
          </p>
          <h3 className="pb-5 mt-9 text-4xl">Conclusion</h3>
          <p className="text-xl">
            This Cookie Statement is intended to provide you with transparent
            information about how we use cookies and similar tracking
            technologies on our website in compliance with applicable UK and EU
            laws, including the GDPR.
          </p>
          <h3 className="pb-5 mt-9 text-4xl ">Last Updated: [Date]</h3>
          <h3 className="pb-5 mt-9 text-4xl ">References</h3>
          <ul className="list-decimal list-inside">
            <li className="pb-4">General Data Protection Regulation (GDPR)</li>
            <li className="pb-4">
              Information Commissioner's Office (ICO) Guidance on Cookies and
              Similar Technologies
            </li>
            <li className="pb-4"> EU ePrivacy Directive</li>
            <li className="pb-4"> UK Data Protection Act 2018</li>
          </ul>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Cookies