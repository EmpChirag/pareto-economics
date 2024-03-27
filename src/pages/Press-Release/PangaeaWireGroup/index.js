import React, { useState } from 'react'
import Header from '../../../Layouts/Header';
import Footer from '../../../Layouts/Footer';

const PangaeaWireGroup = () => {
  const [showCopiedMessage, setShowCopiedMessage] = useState(false);
  const handleSharePageLink = (shareTo) => {
    if (window?.location?.href && shareTo) {
      switch (shareTo) {
        case "FACEBOOK":
          window.open(
            `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`,
            "_blank"
          );
          break;
        case "WHATSAPP":
          window.open(`https://wa.me/?text=${window.location.href}`, "_blank");
          break;
        case "TWITTER":
          window.open(
            `https://twitter.com/intent/tweet?url=${window.location.href}`,
            "_blank"
          );
          break;
        case "LINKEDIN":
          window.open(
            `https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`,
            "_blank"
          );
          break;
        case "EMAIL":
          window.open(`mailto:?body=${window.location.href}`, "_blank");
          break;
        case "COPY":
          navigator.clipboard
            .writeText(window.location.href)
            .then(() => {
              setShowCopiedMessage(true);
              setTimeout(() => {
                setShowCopiedMessage(false);
              }, 2000); // Hide the message after 5 seconds
            })
            .catch((error) => {
              console.error("Error copying text: ", error);
            });
          break;
        default:
          return;
      }
    }
  };
  return (
    <>
      <div className="container mx-auto px-5 ">
        <Header />
      </div>
      <div className="max-w-[1180px] mx-auto px-5">
        <h1 className="text-[24px] md:text-[60px] leading-[1.2] mb-10  mt-10">
          Pangaea Wire Group Announces Company Name Change to Pareto Economics
        </h1>
        <div className="md:flex block  items-center justify-between">
          <div>
            <p>September.24th, 2021</p>
          </div>
          <div className="flex items-center md:mt-0 mt-4">
            <img src="images/icons/share.svg" className="w-[20px] mr-2" />:{" "}
            <div className="social flex gap-1 pl-2 relative">
              <a
                className="cursor-pointer"
                onClick={() => handleSharePageLink("FACEBOOK")}
              >
                <img
                  src="/images/icons/facebook.svg"
                  alt="youtube"
                  height="30"
                  width="30"
                  className="h-[30px] w-[30px]"
                />
              </a>
              <a
                className="cursor-pointer"
                onClick={() => handleSharePageLink("WHATSAPP")}
              >
                <img
                  src="/images/icons/whatsapp.svg"
                  alt="youtube"
                  height="30"
                  width="30"
                  className="h-[30px] w-[30px]"
                />
              </a>
              <a
                className="cursor-pointer"
                onClick={() => handleSharePageLink("TWITTER")}
              >
                <img
                  src="/images/icons/twitter.svg"
                  alt="X"
                  height="30"
                  width="30"
                  className="h-[30px] w-[30px]"
                />
              </a>
              <a
                className="cursor-pointer"
                onClick={() => handleSharePageLink("LINKEDIN")}
              >
                <img
                  src="/images/icons/linkedin.svg"
                  alt="Linkedin"
                  height="30"
                  width="30"
                  className="h-[30px] w-[30px]"
                />
              </a>
              <a
                className="cursor-pointer"
                onClick={() => handleSharePageLink("EMAIL")}
              >
                <img
                  src="/images/icons/email.svg"
                  alt="youtube"
                  height="30"
                  width="30"
                  className="h-[30px] w-[30px]"
                />
              </a>
              <a
                className="cursor-pointer copytext"
                onClick={() => handleSharePageLink("COPY")}
              >
                <img
                  src="/images/icons/copy.svg"
                  alt="youtube"
                  height="30"
                  width="30"
                  className="h-[30px] w-[30px]"
                />
              </a>
              {showCopiedMessage && (
                <div className="absolute right-0 top-[110%] text-sm w-1/2 rounded-lg p-2 bg-black shadow-lg text-white">
                  Link copied successfully!
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="text-center italic my-10">
          New corporate name reflects the firms focus on providing empirical
          insights into the factors impacting foreign direct investment and
          changing global power dynamics.
        </div>
        <div>
          <span className="font-bold">LONDON, UK. September. 24th, 2021</span> –
          Pangaea Wire Group the London based research house and world affairs
          consultancy has announced today that the company will begin operating
          under a new name and will be known as Pareto Economics, effective
          immediately. This rebranding strategy reflects both the evolution of
          the company as well as its vision for the future. Along with this
          change, a newly redesigned company logo has been revealed and a new
          website has also been launched, which will prominently feature the
          company’s focus on serving investors and policy makers in established
          and emerging financial capitals. The company’s ownership and staff
          have not changed. CEO, Klisman Murati stated “As part of our focus on
          helping our clients better understand the challenges they face in the
          global marketplace, we believe this rebrand is the best way to
          increase awareness of our concepts, thinking and solutions to a wider
          audience who are struggling to gain better insights into how the world
          is changing in an era of misinformation and global transformation.”
          <div className="mt-10">
            <img src="/images/pdf/klisman.png" className="w-[300px] " />
            <h4 className="my-4">Klisman Murati, CEO-Pareto Economics</h4>
            <p>
              For more information about the name change or to learn more about
              Pareto Economics, please visit:{" "}
              <a href="https://pareto-economics.com/">
                https://pareto-economics.com/
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-5">
        {" "}
        <Footer />
      </div>
    </>
  );
}

export default PangaeaWireGroup