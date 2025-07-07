import contact_information from "/privacy and policy/contact-information.png";
import usage_information from "/privacy and policy/usage-information.png";
import providing_services from "/privacy and policy/providing-services.png";
import improving_services from "/privacy and policy/improving-services.png";
import communication from "/privacy and policy/communication.png";
import legal_compliance from "/privacy and policy/legal-compliance.png";

const Privacy_Cookies_page = () => {
  return (
    <section className="container mx-auto relative px-5 md:px-0">
      <div className="rounded-lg md:rounded-[35px] bg-[#FFFBF0] text-[#37508A] font-primary-regular rounded-t-[25px] md:rounded-t-[40px]">
        <div className="flex w-full justify-center flex-col">
          <div className="p-5 md:p-10 lg:p-20">
            <h3 className="heading-h4 mb-2">Introduction</h3>
            <div className="paragraph border-b border-b-[#02b4e58a] pb-5 font-primary-regular">
              Welcome to Infolks. We are committed to protecting your privacy
              and safeguarding your personal information. This Privacy Policy
              explains how we collect, use, disclose, and protect your personal
              information when you interact with our website, products, and
              services. By using our website and services, you consent to the
              practices described in this Privacy Policy.
            </div>

            <div className="mt-5 font-primary-regular">
              <h3 className="heading-h4 mb-2">Information We Collect</h3>
              <p className="paragraph">
                We may collect and process the following types of personal
                information:
              </p>
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mt-5 xl:h-48">
                <div className="relative group">
                  <div className="absolute top-0 ml-2 z-0 bg-[#FBF7ED] 2xl:h-60 lg:h-64 flex flex-col md:flex-row gap-5 p-4 md:p-8 rounded-2xl border border-[#67C0F8]">
                    <div className="hidden lg:flex bg-[#e9e8e8] rounded-2xl py-3 px-8  justify-center items-center">
                      <img
                        src={contact_information}
                        alt=""
                        className="lg:max-w-[112px]"
                      />
                    </div>

                    <div className="lg:hidden flex justify-center items-center">
                      <div className="bg-[#e9e8e8] rounded-2xl lg:p-8 p-6">
                        <img
                          src={contact_information}
                          alt=""
                          className="xl:w-[200px] lg:w-[200px] md:w-[150px] w-auto"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col justify-center">
                      <h4 className="heading-h4 mb-1">Contact Information</h4>
                      <p className="paragraph">
                        This includes your name, company name, phone number,
                        business mail, and industry name, which we collect when
                        you communicate with us or use our services.
                      </p>
                    </div>
                  </div>
                  <div className="bg-[#FBF7ED] 2xl:h-60 lg:h-64 z-10 ml-2 group-hover:ml-0 group-hover:mt-2 group-hover:mr-2 transition-all duration-300 ease-in-out flex flex-col md:flex-row gap-5 p-4 md:p-8 rounded-2xl border border-[#67C0F8]">
                    <div className="bg-[#e9e8e8] rounded-2xl py-3 px-8 hidden lg:flex justify-center items-center">
                      <img
                        src={contact_information}
                        alt=""
                        className="lg:max-w-[112px]"
                      />
                    </div>
                    <div className="lg:hidden flex justify-center items-center">
                      <div className="bg-[#e9e8e8] rounded-2xl lg:p-8 p-6">
                        <img
                          src={contact_information}
                          alt=""
                          className="xl:w-[200px] lg:w-[200px] md:w-[150px] w-auto"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col justify-center">
                      <h4 className="heading-h4 font-primary-medium mb-1">
                        Contact Information
                      </h4>
                      <p className="paragraph">
                        This includes your name, company name, phone number,
                        business mail, and industry name, which we collect when
                        you communicate with us or use our services.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative group">
                  <div className="absolute top-0 ml-2 z-0 bg-[#FBF7ED] 2xl:h-60 lg:h-64 flex flex-col md:flex-row gap-5 p-4 md:p-8 rounded-2xl border border-[#67C0F8]">
                    <div className="hidden lg:flex bg-[#e9e8e8] rounded-2xl py-3 px-8  justify-center items-center">
                      <img
                        src={usage_information}
                        alt=""
                        className="lg:max-w-[112px]"
                      />
                    </div>

                    <div className="lg:hidden flex justify-center items-center">
                      <div className="bg-[#e9e8e8] rounded-2xl lg:p-8 p-6">
                        <img
                          src={usage_information}
                          alt=""
                          className="xl:w-[200px] lg:w-[200px] md:w-[150px] w-auto"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col justify-center">
                      <h4 className="heading-h4 mb-1">Usage Information</h4>
                      <p className="paragraph">
                        We may collect information about how you interact with
                        our website and services, such as IP addresses, device
                        information, browser type, and pages visited. This data
                        helps us improve our services and customise your user
                        experience.
                      </p>
                    </div>
                  </div>
                  <div className="bg-[#FBF7ED] 2xl:h-60 lg:h-64 z-10 ml-2 group-hover:ml-0 group-hover:mt-2 group-hover:mr-2 transition-all duration-300 ease-in-out flex flex-col md:flex-row gap-5 p-4 md:p-8 rounded-2xl border border-[#67C0F8]">
                    <div className="bg-[#e9e8e8] rounded-2xl py-3 px-8 hidden lg:flex justify-center items-center">
                      <img
                        src={usage_information}
                        alt=""
                        className="lg:max-w-[112px]"
                      />
                    </div>
                    <div className="lg:hidden flex justify-center items-center">
                      <div className="bg-[#e9e8e8] rounded-2xl lg:p-8 p-6">
                        <img
                          src={usage_information}
                          alt=""
                          className="xl:w-[200px] lg:w-[200px] md:w-[150px] w-auto"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col justify-center">
                      <h4 className="heading-h4 font-primary-medium mb-1">
                        Usage Information
                      </h4>
                      <p className="paragraph">
                        We may collect information about how you interact with
                        our website and services, such as IP addresses, device
                        information, browser type, and pages visited. This data
                        helps us improve our services and customise your user
                        experience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 lg:mt-20 lg:h-[750px]">
              <h3 className="heading-h4 mb-2">How We Use Your Information</h3>
              <p className="paragraph">
                We use your personal information for the following purposes:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-4 mt-5 2xl:h-96">
                <div className="relative group md:h-80 2xl:h-96">
                  <div className="bg-[#FBF7ED] md:h-80 2xl:h-96 absolute top-0 ml-2 z-0 flex flex-col gap-5 p-4 md:p-8 rounded-3xl border border-[#67C0F8]">
                    <div className="bg-[#e9e8e8] rounded-md p-3 w-20 flex justify-center items-center">
                      <img src={providing_services} alt="" />
                    </div>
                    <div>
                      <h4 className="heading-h4 mb-1">Providing Services</h4>
                      <p className="paragraph">
                        We use your information to deliver the products and
                        services you request, including processing orders and
                        providing customer support.
                      </p>
                    </div>
                  </div>

                  <div className="bg-[#FBF7ED] md:h-80 2xl:h-96 z-10 ml-2 group-hover:ml-0 group-hover:mt-2 group-hover:mr-2 transition-all duration-300 ease-in-out flex flex-col gap-5 p-4 md:p-8 rounded-3xl border border-[#67C0F8]">
                    <div className="bg-[#e9e8e8] rounded-md p-3 w-20 flex justify-center items-center">
                      <img src={providing_services} alt="" />
                    </div>
                    <div>
                      <h4 className="heading-h4 mb-1">Providing Services</h4>
                      <p className="paragraph">
                        We use your information to deliver the products and
                        services you request, including processing orders and
                        providing customer support.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative group md:h-80 2xl:h-96">
                  <div className="bg-[#FBF7ED] md:h-80 2xl:h-96 absolute top-0 ml-2 z-0 flex flex-col gap-5 p-4 md:p-8 rounded-3xl border border-[#67C0F8]">
                    <div className="bg-[#e9e8e8] rounded-md p-3 w-20 flex justify-center items-center">
                      <img src={improving_services} alt="" />
                    </div>
                    <div>
                      <h4 className="heading-h4 mb-1">Improving Services</h4>
                      <p className="paragraph">
                        We may analyse usage data to enhance our website and
                        services, tailor content to your preferences, and
                        develop new features.
                      </p>
                    </div>
                  </div>

                  <div className="bg-[#FBF7ED] md:h-80 2xl:h-96 z-10 ml-2 group-hover:ml-0 group-hover:mt-2 group-hover:mr-2 transition-all duration-300 ease-in-out flex flex-col gap-5 p-4 md:p-8 rounded-3xl border border-[#67C0F8]">
                    <div className="bg-[#e9e8e8] rounded-md p-3 w-20 flex justify-center items-center">
                      <img src={improving_services} alt="" />
                    </div>
                    <div>
                      <h4 className="heading-h4 mb-1">Improving Services</h4>
                      <p className="paragraph">
                        We may analyse usage data to enhance our website and
                        services, tailor content to your preferences, and
                        develop new features.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative group">
                  <div className="bg-[#FBF7ED] md:h-80 2xl:h-96 absolute top-0 ml-2 z-0 flex flex-col gap-5 p-4 md:p-8 rounded-3xl border border-[#67C0F8]">
                    <div className="bg-[#e9e8e8] rounded-md p-3 w-20 flex justify-center items-center">
                      <img src={communication} alt="" />
                    </div>
                    <div>
                      <h4 className="heading-h4 mb-1">Communication</h4>
                      <p className="paragraph">
                        We may use your contact information to send you updates,
                        promotional offers, newsletters, and important
                        announcements. You can opt-out of these communications
                        at any time.
                      </p>
                    </div>
                  </div>

                  <div className="bg-[#FBF7ED] md:h-80 2xl:h-96 z-10 ml-2 group-hover:ml-0 group-hover:mt-2 group-hover:mr-2 transition-all duration-300 ease-in-out flex flex-col gap-5 p-4 md:p-8 rounded-3xl border border-[#67C0F8]">
                    <div className="bg-[#e9e8e8] rounded-md p-3 w-20 flex justify-center items-center">
                      <img src={communication} alt="" />
                    </div>
                    <div>
                      <h4 className="heading-h4 mb-1">Communication</h4>
                      <p className="paragraph">
                        We may use your contact information to send you updates,
                        promotional offers, newsletters, and important
                        announcements. You can opt-out of these communications
                        at any time.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative group">
                  <div className="bg-[#FBF7ED] md:h-80 2xl:h-96 absolute top-0 ml-2 z-0 flex flex-col gap-5 p-4 md:p-8 rounded-3xl border border-[#67C0F8]">
                    <div className="bg-[#e9e8e8] rounded-md p-3 w-20 flex justify-center items-center">
                      <img src={legal_compliance} alt="" />
                    </div>
                    <div>
                      <h4 className="heading-h4 mb-1">Legal Compliance</h4>
                      <p className="paragraph">
                        We may process your data to comply with legal
                        obligations and respond to lawful requests from
                        government authorities.
                      </p>
                    </div>
                  </div>

                  <div className="bg-[#FBF7ED] md:h-80 2xl:h-96 z-10 ml-2 group-hover:ml-0 group-hover:mt-2 group-hover:mr-2 transition-all duration-300 ease-in-out flex flex-col gap-5 p-4 md:p-8 rounded-3xl border border-[#67C0F8]">
                    <div className="bg-[#e9e8e8] rounded-md p-3 w-20 flex justify-center items-center">
                      <img src={legal_compliance} alt="" />
                    </div>
                    <div>
                      <h4 className="heading-h4 mb-1">Legal Compliance</h4>
                      <p className="paragraph">
                        We may process your data to comply with legal
                        obligations and respond to lawful requests from
                        government authorities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:border-b lg:border-b-[#02b4e58a] pb-2 pt-10 text-[19px]">
              <h3 className="heading-h4 mb-2">Data Security</h3>
              <p className="paragraph">
                We are committed to protecting your personal information. We
                employ industry-standard security measures to safeguard your
                data against unauthorised access, disclosure, alteration, and
                destruction. However, please be aware that no method of data
                transmission over the internet is entirely secure, and we cannot
                guarantee the absolute security of your information.
              </p>
            </div>

            <div className="mt-5 text-[19px]">
              <h3 className="heading-h4 mb-2">Sharing Your Information</h3>
              <p className="paragraph">
                We do not sell your personal information to third parties.
                However, we may share your data with trusted third parties for
                the following purposes:
              </p>
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mt-5 xl:h-48">
                <div className="relative group">
                  <div className="bg-[#FBF7ED] absolute top-0 ml-2 z-0 p-4 md:p-10 rounded-2xl border border-[#67C0F8] lg:h-48">
                    <div>
                      <h4 className="heading-h4">Service Providers</h4>
                      <p className="paragraph">
                        We may share information with trusted third-party
                        service providers who assist us in operating our website
                        and providing our services.
                      </p>
                    </div>
                  </div>

                  <div className="bg-[#FBF7ED] z-10 ml-2 group-hover:ml-0 group-hover:mt-2 group-hover:mr-2 transition-all duration-300 ease-in-out p-4 md:p-10 rounded-2xl border border-[#67C0F8] lg:h-48">
                    <div>
                      <h4 className="heading-h4">Service Providers</h4>
                      <p className="paragraph">
                        We may share information with trusted third-party
                        service providers who assist us in operating our website
                        and providing our services.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative group">
                  <div className="bg-[#FBF7ED] absolute top-0 ml-2 z-0 p-4 md:p-10 rounded-2xl border border-[#67C0F8] lg:h-48">
                    <div>
                      <h4 className="heading-h4">Legal requirements</h4>
                      <p className="paragraph">
                        We may disclose your information to comply with legal
                        obligations or to protect our rights, privacy, safety,
                        or property, as well as those of our customers and the
                        public.
                      </p>
                    </div>
                  </div>
                  <div className="bg-[#FBF7ED] z-10 ml-2 group-hover:ml-0 group-hover:mt-2 group-hover:mr-2 transition-all duration-300 ease-in-out p-4 md:p-10 rounded-2xl border border-[#67C0F8] lg:h-48">
                    <div>
                      <h4 className="heading-h4">Legal requirements</h4>
                      <p className="paragraph">
                        We may disclose your information to comply with legal
                        obligations or to protect our rights, privacy, safety,
                        or property, as well as those of our customers and the
                        public.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:border-b lg:border-b-[#02b4e58a] pb-2 mt-10 text-[19px]">
              <h3 className="heading-h4 mb-2">
                Changes to This Privacy Policy
              </h3>
              <p className="paragraph">
                We may update this Privacy Policy from time to time to reflect
                changes in our practices or for legal reasons. We recommend that
                you review this policy periodically.
              </p>
            </div>

            <div className="lg:border-b lg:border-b-[#02b4e58a] pb-2 mt-5 text-[19px]">
              <h3 className="heading-h4 mb-2">Contact Us</h3>
              <p className="paragraph">
                If you have any questions, concerns, or requests related to your
                personal information or this Privacy Policy, please contact us
                at info@infolks.in.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Privacy_Cookies_page;
