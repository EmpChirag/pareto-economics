import React from 'react'
import Header from '../../../Layouts/Header';
import Footer from '../../../Layouts/Footer';

const PangaeaWireGroup = () => {
  return (
    <div className="container mx-auto px-5">
      <Header />
      <h1 className="text-[24px] md:text-[40px] leading-[1.2] mb-10  mt-10">
        Pangaea Wire Group Announces Company Name Change to Pareto Economics
      </h1>
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
        immediately. This rebranding strategy reflects both the evolution of the
        company as well as its vision for the future. Along with this change, a
        newly redesigned company logo has been revealed and a new website has
        also been launched, which will prominently feature the company’s focus
        on serving investors and policy makers in established and emerging
        financial capitals. The company’s ownership and staff have not changed.
        CEO, Klisman Murati stated “As part of our focus on helping our clients
        better understand the challenges they face in the global marketplace, we
        believe this rebrand is the best way to increase awareness of our
        concepts, thinking and solutions to a wider audience who are struggling
        to gain better insights into how the world is changing in an era of
        misinformation and global transformation.”
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
      <Footer />
    </div>
  );
}

export default PangaeaWireGroup