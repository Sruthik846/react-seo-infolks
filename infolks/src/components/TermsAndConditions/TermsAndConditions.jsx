import prohibited_activities1 from "/terms and conditions/prohibited_activities1.svg";
import prohibited_activities2 from "/terms and conditions/prohibited_activities2.png";
import prohibited_activities3 from "/terms and conditions/prohibited_activities3.png";
import prohibited_activities4 from "/terms and conditions/prohibited_activities4.png";

const Terms_Conditions_Page = () => {
  return (
    <section className="container mx-auto relative px-5 md:px-0">
      <div className="rounded-lg md:rounded-[35px] bg-[#FFFBF0] text-[#37508A] font-primary-regular rounded-t-[25px] md:rounded-t-[40px]">
        <div className="flex w-full justify-center flex-col">
          <div className="p-5 md:p-10 lg:p-20">
            <div className="border-b border-b-[#02b4e58a] pb-2">
              <h4 className="heading-h4 mb-2">Acceptance of Terms</h4>
              <p className="paragraph">
                By accessing and using our website (infolks.info), you agree to
                comply with and be bound by these Terms and Conditions. If you
                do not agree to these terms, please do not use the website
              </p>
            </div>

            <div className="mt-5">
              <h4 className="heading-h4 mb-2">Use of the Website</h4>
              <p className="paragraph">
                <span className="font-primary-medium">License:</span> Infolks
                grants you a limited, non-exclusive, and revocable license to
                access and use the website for informational and non-commercial
                purposes.
              </p>
              <p className="paragraph lg:pt-0 pt-3">
                <span className="font-primary-medium">
                  Prohibited Activities:
                </span>
                You agree not to engage in any of the following activities:
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-5 mt-5 paragraph lg:h-60 md:h-[30rem] h-[33rem] md:place-items-center">
                <div className="relative group h-24 md:w-[70%] lg:w-full">
                  <div className="absolute top-0 z-0 h-24 bg-[#FBF7ED] items-center w-full flex gap-5 p-5 rounded-[20px] border border-[#67C0F8]">
                    <div className="bg-[#EDEDED] rounded-[12px] p-3 py-4 flex justify-center items-center">
                      <img src={prohibited_activities1} alt="" />
                    </div>
                    <p>Violating any applicable laws or regulations.</p>
                  </div>

                  <div className="z-10 h-24 group-hover:-ml-2 group-hover:mt-2 group-hover:mr-2 transition-all duration-300 ease-in-out w-full bg-[#FBF7ED] flex gap-5 p-5 rounded-[20px] border border-[#67C0F8]">
                    <div className="bg-[#EDEDED] rounded-[12px] p-3 py-4 flex justify-center items-center">
                      <img src={prohibited_activities1} alt="" />
                    </div>
                    <p>Violating any applicable laws or regulations.</p>
                  </div>
                </div>
                <div className="relative group h-24  md:w-[70%] lg:w-full">
                  <div className="absolute top-0 z-0 h-24 bg-[#FBF7ED] items-center w-full flex gap-5 p-5 rounded-[20px] border border-[#5F82CC]">
                    <div className="bg-[#EDEDED] rounded-[12px] p-3 py-4 flex justify-center items-center">
                      <img src={prohibited_activities2} alt="" />
                    </div>
                    <p>
                      Attempting to gain unauthorised access to the website or
                      its servers.
                    </p>
                  </div>

                  <div className="z-10 h-24 group-hover:-ml-2 group-hover:mt-2 group-hover:mr-2 transition-all duration-300 ease-in-out w-full bg-[#FBF7ED] flex gap-5 p-5 rounded-[20px] border border-[#5F82CC]">
                    <div className="bg-[#EDEDED] rounded-[12px] p-3 py-4 flex justify-center items-center">
                      <img src={prohibited_activities2} alt="" />
                    </div>
                    <p>
                      Attempting to gain unauthorised access to the website or
                      its servers.
                    </p>
                  </div>
                </div>

                <div className="relative group h-24  md:w-[70%] lg:w-full">
                  <div className="absolute h-24 top-0 z-0 bg-[#FBF7ED] items-center w-full flex gap-5 p-5 rounded-[20px] border border-[#67C0F8]">
                    <div className="bg-[#EDEDED] rounded-[12px] p-3 py-4 flex justify-center items-center">
                      <img src={prohibited_activities3} alt="" />
                    </div>
                    <p>
                      Using the website for any illegal or unethical purposes.
                    </p>
                  </div>

                  <div className="z-10 h-24 mr-3 group-hover:-ml-2 group-hover:mt-2 group-hover:mr-5 transition-all duration-300 ease-in-out w-full bg-[#FBF7ED] flex gap-5 p-5 rounded-[20px] border border-[#67C0F8]">
                    <div className="bg-[#EDEDED] rounded-[12px] p-3 py-4 flex justify-center items-center">
                      <img src={prohibited_activities3} alt="" />
                    </div>
                    <p>
                      Using the website for any illegal or unethical purposes.
                    </p>
                  </div>
                </div>

                <div className="relative group h-24  md:w-[70%] lg:w-full">
                  <div className="h-24 absolute top-0 z-0 bg-[#FBF7ED] items-center w-full flex gap-5 p-5 rounded-[20px] border border-[#AABDE7]">
                    <div className="bg-[#EDEDED] rounded-[12px] p-3 py-4 flex justify-center items-center">
                      <img src={prohibited_activities4} alt="" />
                    </div>
                    <p>Transmitting harmful code or malware.</p>
                  </div>

                  <div className="h-24 z-10 group-hover:-ml-2 group-hover:mt-2 group-hover:mr-2 transition-all duration-300 ease-in-out bg-[#FBF7ED] flex gap-5 p-5 rounded-[20px] border border-[#AABDE7]">
                    <div className="bg-[#EDEDED] rounded-[12px] p-3 py-4 flex justify-center items-center">
                      <img src={prohibited_activities4} alt="" />
                    </div>
                    <p>Transmitting harmful code or malware.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-b border-b-[#02b4e58a] pb-5 mt-5">
              <h4 className="heading-h4 mb-2">Intellectual Property</h4>
              <p className="paragraph flex gap-2">
                <span className="font-primary-medium">1.</span>
                <div>
                  <span className="font-primary-medium">Copyright: </span>
                  All content on the website, including text, graphics, logos,
                  and software, is the property of Infolks and is protected by
                  copyright laws.
                </div>
              </p>
              <p className="paragraph flex gap-2">
                <span className="font-primary-medium">2.</span>
                <div>
                  <span className="font-primary-medium">Trademarks: </span>
                  Any trademarks or logos used on the website are the property
                  of Infolks or their respective owners.
                </div>
              </p>
            </div>

            <div className="border-b border-b-[#02b4e58a] pb-5 mt-5">
              <h4 className="heading-h4 mb-2">Privacy Policy</h4>
              <p className="paragraph">
                Your use of the website is also governed by our Privacy Policy.
              </p>
            </div>

            <div className="border-b border-b-[#02b4e58a] pb-5 mt-5">
              <h4 className="heading-h4 mb-2">Links to Third-Party Websites</h4>
              <p className="paragraph">
                The website may contain links to third-party websites. Infolks
                is not responsible for the content or practices of these
                websites. You access them at your own risk.
              </p>
            </div>

            <div className="border-b border-b-[#02b4e58a] pb-5 mt-5">
              <h4 className="heading-h4 mb-2">Disclaimer of Warranties</h4>
              <div className="paragraph flex gap-2">
                <div>1.</div>
                <div>
                  The website is provided &quot;as is&quot; and &quot;as
                  available&quot; without warranties of any kind, including, but
                  not limited to, the implied warranties of merchantability,
                  fitness for a particular purpose, or non-infringement.
                </div>
              </div>
              <div className="paragraph flex gap-2">
                <div>2.</div>
                <div>
                  Infolks does not guarantee the accuracy, completeness, or
                  reliability of any information on the website.
                </div>
              </div>
            </div>

            <div className="border-b border-b-[#02b4e58a] pb-5 mt-5">
              <h4 className="heading-h4 mb-2">Limitation of Liability</h4>
              <p className="paragraph">
                In no event shall Infolks be liable for any direct, indirect,
                special, incidental, or consequential damages arising out of or
                in connection with your use or inability to use the website.
              </p>
            </div>

            <div className="border-b border-b-[#02b4e58a] pb-5 mt-5">
              <h4 className="heading-h4 mb-2">
                Changes to Terms and Conditions
              </h4>
              <p className="paragraph">
                Infolks reserves the right to modify these Terms and Conditions
                at any time. It is your responsibility to check for updates
                periodically.
              </p>
            </div>

            <div className="border-b border-b-[#02b4e58a] pb-5 mt-5">
              <h4 className="heading-h4 mb-2">Contact Information</h4>
              <p className="paragraph">
                If you have any questions or concerns about these Terms and
                Conditions, please contact us at info@infolks.in.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Terms_Conditions_Page;
