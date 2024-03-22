import React from 'react'
import Header from '../../Layouts/Header';
import Footer from '../../Layouts/Footer';

const PrivacySecurityStatement = () => {
  return (
    <div className="container mx-auto">
      <Header />
      <section className="mt-10">
        <div>
          <h1 className="pb-10 max-md:pb-1">Privacy and Security Statement</h1>
          <h3 className="pb-5 mt-9 text-4xl">Introduction</h3>
          <p className="text-xl ">
            Pareto Economics Ltd (referred to as "the Company" henceforth) is
            committed to protecting your privacy and ensuring the security of
            your personal information. This Privacy and Security Statement
            outlines how we collect, use, disclose, and protect your personal
            data in compliance with applicable laws and regulations, including
            the General Data Protection Regulation (GDPR) and other relevant UK
            laws.
          </p>
          <h3 className="pb-5 mt-9 text-4xl">
            Notice About How We Use and Protect Personal Information
          </h3>
          <p className="text-xl ">
            We respect your privacy and are committed to protecting it through
            our compliance with this Privacy and Security Statement. This
            statement describes the types of information we may collect from
            you, how we use and protect that information, and your rights
            regarding your personal data.
          </p>
          <h3 className="pb-5 mt-9 text-4xl">Information We Collect</h3>
          <p className="text-xl pb-4">
            We collect various types of information in order to operate our
            business effectively. This may include:
          </p>
          <ul className="list-disc list-inside">
            <li className="pb-4">
              Information you provide to us, such as your name, email address,
              phone number, and employer.
            </li>
            <li className="pb-4">
              Information collected automatically through our websites, such as
              your IP address, browsing actions, and patterns.
            </li>
            <li className="pb-4">
              Information collected from forms on our websites, such as when you
              register to use our products or services or attend events.
            </li>
            <li className="pb-4">
              Usage details, IP addresses, and cookies to improve our websites
              and provide personalized content and services.
            </li>
          </ul>

          <h3 className="pb-5 mt-9 text-4xl">How We Use Your Information</h3>
          <p className="text-xl pb-4">
            We use the information we collect for various purposes, including:
          </p>
          <ul className="list-disc list-inside">
            <li className="pb-4">
              Providing our products and services to you and improving upon
              them.
            </li>
            <li className="pb-4">
              Communicating with you about your account or transactions.
            </li>
            <li className="pb-4">
              Notifying you about changes to our products or services and
              promotions or events.
            </li>
            <li className="pb-4">
              Maintaining the integrity and security of our websites and
              services.
            </li>
            <li className="pb-4">
              Business operations, including human resources, recruiting, and
              business research.
            </li>
          </ul>

          <h3 className="pb-5 mt-9 text-4xl">Disclosure of Your Information</h3>
          <p className="text-xl pb-4">
            We may disclose your personal information to third parties in
            limited circumstances, such as:
          </p>

          <ul>
            <li className="pb-4">
              To our service providers and business partners who support our
              business operations.
            </li>
            <li className="pb-4">
              To comply with legal obligations or respond to lawful requests
              from government authorities.
            </li>
            <li className="pb-4">
              In connection with a merger, acquisition, or sale of all or a
              portion of our business.
            </li>
          </ul>
          <h3 className="pb-5 mt-9 text-4xl">
            Onward Transfer of Your Information
          </h3>
          <p className="text-xl ">
            We may transfer your personal information to our corporate offices,
            subsidiaries, and affiliates in various countries, including the
            United Kingdom and the European Economic Area (EEA). We ensure that
            such transfers comply with applicable data protection rules,
            including implementing suitable safeguards.
          </p>
          <h3 className="pb-5 mt-9 text-4xl">
            Choices About How We Use and Disclose Your Information
          </h3>
          <p className="text-xl ">
            We strive to provide you with choices regarding the personal
            information you provide to us. You can control your information
            through settings in your browser to manage cookies and through email
            preferences to opt-out of promotional emails.
          </p>
          <h3 className="pb-5 mt-9 text-4xl">Security</h3>
          <p className="text-xl ">
            We take the security of your personal information seriously and have
            implemented appropriate technical and organizational measures to
            protect it from unauthorized access, use, or disclosure. However, we
            cannot guarantee the security of information transmitted to us over
            the internet.
          </p>
          <h3 className="pb-5 mt-9 text-4xl">
            Data Integrity and Proportionality
          </h3>
          <p className="text-xl ">
            We only collect and retain personal information that is necessary
            for specific purposes described in this Privacy and Security
            Statement. We do not use it in any way that is incompatible with
            those purposes.
          </p>
          <h3 className="pb-5 mt-9 text-4xl">Your Rights</h3>
          <p className="text-xl ">
            You have the right to access, correct, or delete your personal
            information, as well as the right to object to or restrict its
            processing. You may also withdraw your consent for processing where
            applicable. To exercise your rights or raise any concerns, please
            contact us at [contact email/phone number].
          </p>
          <h3 className="pb-5 mt-9 text-4xl">
            Changes to Our Privacy and Security Statement
          </h3>
          <p className="text-xl ">
            We may update this Privacy and Security Statement from time to time.
            Any changes will be reflected on our website, and we encourage you
            to review this statement periodically for updates.
          </p>
          <h3 className="pb-5 mt-9 text-4xl">Contact Information</h3>
          <p className="text-xl ">
            If you have any questions or comments about this Privacy and
            Security Statement, please contact us at info@pareto-economics.com.
          </p>
          <h3 className="pb-5 mt-9 text-4xl">Last Updated: March 4, 2024</h3>
          <p className="text-xl ">
            This Privacy and Security Statement has been designed to be
            accessible to people with disabilities. If you experience any
            difficulties accessing the information here, please contact us at:
            <a href="mailto:info@pareto-economics.com">            
              info@pareto-economics.com
            </a>
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default PrivacySecurityStatement