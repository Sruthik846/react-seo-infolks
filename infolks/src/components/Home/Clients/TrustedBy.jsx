import "./style.css";
import React from 'react';
// Import all client logos
import AVI_Systems_GmBH from "/home/clients/avi-systems-gmbh.svg";
import Aware_Group from "/home/clients/aware-group.svg";
import Carnegie_mellon_university from "/home/clients/carnegie-mellon-university.svg";
// import Carsome from "/home/clients/carsome.svg";
import CMS_Computers_LTD from "/home/clients/cms-computers-ltd.svg";
import ETH_Zurich from "/home/clients/eth-zurich.svg";
import Gentex_Corporation from "/home/clients/gentex-corporation.svg";
import Gong from "/home/clients/gong.svg";
import JCI from "/home/clients/jcl-new.svg";
import Rapiscan_Systems from "/home/clients/rapiscan-systems.svg";
import Schwarz from "/home/clients/schwarz.svg";
import Siemens_Gamesa from "/home/clients/siemens-gamesa.svg";
import Sony from "/home/clients/sony.svg";
import Stryker from "/home/clients/stryker.svg";
import university_of_Auckland from "/home/clients/university-of-auckland.svg";
import University_of_California_Berkeley from "/home/clients/university-of-california-berkeley.svg";
import University_of_Ottawa from "/home/clients/university-of-ottawa.svg";
import zuehlke from "/home/clients/zuehlke.svg";
import srijan from "/home/clients/srijin-new.svg";
import quantiphi from "/home/clients/quantiphi-new.svg";
import ifmElectronic from "/home/clients/ifm-electronic-new.png";
import godrej from "/home/clients/godrej_new.svg";

const clients = [
  University_of_California_Berkeley,
  Carnegie_mellon_university,
  ETH_Zurich,
  godrej,
  Gentex_Corporation,
  ifmElectronic,
  JCI,
  Siemens_Gamesa,
  Sony,
  Stryker,
  University_of_Ottawa,
];

const clients_opposite = [
  Schwarz,
  AVI_Systems_GmBH,
  Aware_Group,
  // Carsome,
  university_of_Auckland,
  zuehlke,
  CMS_Computers_LTD,
  Gong,
  Rapiscan_Systems,
  quantiphi,
  srijan,
];

const TrustedBy = () => {
  return (
    <section className="container pt-10 mx-auto lg:pt-32 font-primary-regular">
      <div className="container mx-auto p-2 md:p-4 md:max-w-[90%]">
        <h2 className="heading-h2 text-[#37508A]">TRUSTED BY</h2>
        <hr className="bg-[#04AFC6] mt-2 mb-2 lg:mt-5 lg:mb-5 h-0.5" />
        <p className="paragraph text-[#37508A] w-full text-center lg:text-left lg:w-[60%]">
          We support our clients in achieving their goals and maintaining a
          competitive edge. Infolks is trusted by several companies across
          various industries.
        </p>
      </div>
      <div className="mx-auto">
        <div className="overflow-hidden">
          <div className="flex items-center gap-10 py-5 img-ticker">
            {clients.concat(clients).map((client, index) => (
              <img
                key={index}
                src={client}
                className="object-contain w-32 h-32 transition duration-300 grayscale md:w-40 md:aspect-3/2"
                alt={`Client ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="container mx-auto px-2 md:px-4 md:max-w-[90%]">
        <hr className="bg-[#04AFC640] h-0.5" />
      </div>
      <div className="mx-auto">
        <div className="overflow-hidden">
          <div className="flex items-center gap-10 py-5 img-ticker-opposite">
            {clients_opposite
              .concat(clients_opposite)
              .map((clients_opposite, index2) => (
                <img
                  key={index2}
                  src={clients_opposite}
                  className="object-contain w-32 h-32 transition duration-300 grayscale md:w-40 md:aspect-3/2"
                  alt={`Client ${index2 + 1}`}
                />
              ))}
          </div>
        </div>
      </div>
      <div className="container mx-auto px-2 md:px-4 md:max-w-[90%]">
        <hr className="bg-[#04AFC640] h-0.5" />
      </div>
    </section>
  );
};

export default TrustedBy;
