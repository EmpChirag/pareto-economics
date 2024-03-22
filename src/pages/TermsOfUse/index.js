import React from 'react'
import Footer from "../../Layouts/Footer";
import Header from "../../Layouts/Header";


const TermsOfUse = () => {
  return (
    <div className="container mx-auto">
      <Header />
      <section className="mt-10">
        <div>
          <h1 className="pb-10 max-md:pb-1">
            Terms and Conditions of Website Use
          </h1>
          <h3 className="pb-5 mt-9 text-4xl">Introduction</h3>
          <p className="text-xl ">
            Welcome to Pareto Economics Ltd's website. These Terms and
            Conditions of Website Use ("Terms") govern your access to and use of
            our website. By accessing or using our website, you agree to be
            bound by these Terms. If you do not agree to these Terms, you should
            not use our website.
          </p>
          <h3 className="pb-5 mt-9 text-4xl">Website Content</h3>
          <p className="text-xl ">
            The content provided on our website is for general informational
            purposes only. We reserve the right to modify, update, or remove any
            content on our website at any time without prior notice. We do not
            guarantee the accuracy, completeness, or reliability of any content
            on our website, and you acknowledge that any reliance on such
            content is at your own risk.
          </p>
          <h3 className="pb-5 mt-9 text-4xl">Intellectual Property Rights</h3>
          <p className="text-xl pb-4">
            All intellectual property rights, including but not limited to
            copyrights, trademarks, and trade names, in the content and
            materials on our website are owned by or licensed to Pareto
            Economics Ltd. You may not use, reproduce, modify, or distribute any
            content from our website without our prior written consent.
          </p>
          <h3 className="pb-5 mt-9 text-4xl">User Conduct</h3>
          <p className="text-xl pb-4">
            When using our website, you agree to abide by the following rules of
            conduct:
          </p>
          <ul className="list-disc list-inside">
            <li className="pb-4">
              You will not use our website in any way that violates applicable
              laws or regulations.
            </li>
            <li className="pb-4">
              You will not engage in any conduct that could interfere with or
              disrupt the operation of our website.
            </li>
            <li className="pb-4">
              You will not attempt to gain unauthorized access to any part of
              our website or any systems or networks connected to our website.
            </li>
            <li className="pb-4">
              You will not use our website to transmit any viruses, malware, or
              other harmful code.
            </li>
          </ul>

          <h3 className="pb-5 mt-9 text-4xl">Links to Third-Party Websites</h3>
          <p className="text-xl pb-4">
            Our website may contain links to third-party websites or resources.
            These links are provided for your convenience only, and we are not
            responsible for the content or availability of any third-party
            websites. The inclusion of any link does not imply endorsement by
            Pareto Economics Ltd.
          </p>

          <h3 className="pb-5 mt-9 text-4xl">Limitation of Liability</h3>
          <p className="text-xl pb-4">
            To the fullest extent permitted by law, Pareto Economics Ltd shall
            not be liable for any direct, indirect, incidental, special,
            consequential, or punitive damages arising out of or in any way
            related to your use of our website or the content on our website.
            This includes, but is not limited to, damages for loss of profits,
            goodwill, use, data, or other intangible losses.
          </p>

          <h3 className="pb-5 mt-9 text-4xl">Indemnification</h3>
          <p className="text-xl ">
            You agree to indemnify and hold harmless Pareto Economics Ltd, its
            officers, directors, employees, and agents from and against any and
            all claims, liabilities, damages, losses, or expenses, including
            legal fees and costs, arising out of or in any way related to your
            use of our website or violation of these Terms.
          </p>
          <h3 className="pb-5 mt-9 text-4xl">Governing Law and Jurisdiction</h3>
          <p className="text-xl ">
            These Terms shall be governed by and construed in accordance with
            the laws of the United Kingdom. Any dispute arising out of or in
            connection with these Terms shall be subject to the exclusive
            jurisdiction of the courts of the United Kingdom.
          </p>
          <h3 className="pb-5 mt-9 text-4xl">Changes to Terms</h3>
          <p className="text-xl ">
            We reserve the right to modify or update these Terms at any time
            without prior notice. Any changes will be effective immediately upon
            posting on our website. Your continued use of our website after any
            such changes constitutes your acceptance of the revised Terms.
          </p>
          <h3 className="pb-5 mt-9 text-4xl">Contact Us</h3>
          <p className="text-xl ">
            If you have any questions or concerns about these Terms, please
            contact us at{" "}
            <a href="mailto:info@pareto-economics.com">
              info@pareto-economics.com
            </a>
          </p>
          <h3 className="pb-5 mt-9 text-4xl">Last Updated: March 5, 2024</h3>
          <p>
            This Terms and Conditions of Website Use has been designed to be
            accessible to people with disabilities. If you experience any
            difficulties accessing the information here, please contact us at
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

export default TermsOfUse