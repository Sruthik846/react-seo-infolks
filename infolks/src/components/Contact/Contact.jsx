import { useEffect, useState } from "react";
import arrow from "/home/icons/arrow blue.svg";
import arrowWhite from "/home/icons/arrowRight.png";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    company_name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState("");
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const valueChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const validateForm = () => {
    setResponseMessage("");
    const errors = {};

    if (!formData.name) {
      errors.name = "Name is required";
    }
    if (!formData.company_name) {
      errors.company_name = "Company Name is required";
    }
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.phone) {
      errors.phone = "Contact Number is required";
    }
    if (!formData.message) {
      errors.message = "Message is required";
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setErrorMessages(errors);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await axios.post(
        "https://test-api.infolks.info/api/contact",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            "x-contact-header": "3HQ*#CSa7xTp8(4x=Zu[79]7!S13bi",
          },
        }
      );

      setResponseMessage(response.data.msg);
      setErrorMessages({});
      setFormData({
        name: "",
        company_name: "",
        email: "",
        phone: "",
        message: "",
      });

      setTimeout(() => {
        setIsSubmitting(false);
      }, 5000);
    } catch (err) {
      console.error(err);
      alert("Failed to send message. Please try again later.");
    }
  };

  const handleFocus = (e) => {
    const { name } = e.target;
    setResponseMessage("");

    setErrorMessages((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };
  useEffect(() => {
    if (responseMessage) {
      const timer = setTimeout(() => {
        setResponseMessage(false);
      }, 10000); // 10000ms = 10 seconds

      return () => clearTimeout(timer); // cleanup on unmount or re-render
    }
  }, [responseMessage]);
  return (
    <section className="container mx-auto relative px-5 md:px-0">
      <div className="bg-[#FFFBF0] text-[#37508A] font-primary-regular rounded-[16px] lg:rounded-[35px]">
        <div className="flex justify-center lg:justify-end  pt-10 lg:pr-10 ">
          {responseMessage && (
            <div
              className=" w-60 p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50  dark:text-green-400 border border-green-400"
              role="alert"
            >
              We will Get Back To You Soon.
            </div>
          )}
        </div>
        <div className="flex w-full justify-center flex-col -mt-[70px] p-5 md:p-10 lg:p-28">
          <h2 className="heading-h2 text-[#37508A] py-5 lg:border-b lg:border-b-[#37508A] w-full lg:w-[50%]">
            SHARE YOUR DETAILS
          </h2>
          <div className="md:w-[50%] w-[90%]  lg:hidden border-b border-b-[#37508A]">
            <hr />
          </div>

          <div className="lg:hidden flex flex-col md:flex-row gap-5 md:justify-between pb-5 mt-5 border-b border-[#37508a80] text-[16px] md:text-[18px] lg:text-[20px]">
            <div>
              <h5 className="heading-h5">Call Us</h5>
              <p className="paragraph">+91 70258 89911</p>
            </div>

            <div className="paragraph">
              <p className="heading-h5">Mail Us</p>
              <p>customersupport@infolks.in</p>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="flex gap-10 pt-5 pb-5 lg:pt-20 font-primary-regular paragraph">
              <div className="w-full lg:w-[75%]">
                <div className="lg:border-r-[2px] border-r-gray-300  lg:pr-10 pt-8">
                  <div className="flex gap-10 flex-col lg:flex-row">
                    <div className="flex flex-col gap-10 w-full">
                      <div className="relative h-11 w-full min-w-[200px]">
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={valueChange}
                          onFocus={handleFocus}
                          className=" h-full w-full border-b border-[#37508A] bg-transparent pt-4 pb-1.5 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        />
                        <label className="opacity-70 after:content[' '] pointer-events-none absolute left-0 -top-2.5 flex h-full w-full select-none overflow-visible! truncate leading-tight text-[#37508A] transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300">
                          Name
                        </label>
                        {errorMessages.name && (
                          <p className="text-red-500">{errorMessages.name}</p>
                        )}
                      </div>
                      <div className="relative h-11 w-full min-w-[200px]">
                        <input
                          type="text"
                          name="email"
                          onChange={valueChange}
                          onFocus={handleFocus}
                          value={formData.email}
                          className=" h-full w-full border-b border-[#37508A] bg-transparent pt-4 pb-1.5 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        />
                        <label className="opacity-70 after:content[' '] pointer-events-none absolute left-0  -top-2.5 flex h-full w-full select-none overflow-visible! truncate leading-tight text-[#37508A] transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300">
                          Email
                        </label>
                        {errorMessages.email && (
                          <p className="text-red-500">{errorMessages.email}</p>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col gap-10 w-full">
                      <div className="relative h-11 w-full min-w-[200px]">
                        <input
                          type="text"
                          name="company_name"
                          onChange={valueChange}
                          onFocus={handleFocus}
                          value={formData.company_name}
                          className="peer h-full w-full border-b border-[#37508A] bg-transparent pt-4 pb-1.5 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        />
                        <label className="opacity-70 after:content[' '] pointer-events-none absolute left-0 -top-2.5 flex h-full w-full select-none overflow-visible! truncate leading-tight text-[#37508A] transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300">
                          Company Name
                        </label>
                        {errorMessages.company_name && (
                          <p className="text-red-500">
                            {errorMessages.company_name}
                          </p>
                        )}
                      </div>

                      <div className="relative h-11 w-full min-w-[200px]">
                        <input
                          type="number"
                          name="phone"
                          onChange={valueChange}
                          onFocus={handleFocus}
                          value={formData.phone}
                          className="peer h-full w-full border-b border-[#37508A] bg-transparent pt-4 pb-1.5 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        />
                        <label className="opacity-70 after:content[' '] pointer-events-none absolute left-0 -top-2.5 flex h-full w-full select-none overflow-visible! truncate leading-tight text-[#37508A] transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300">
                          Contact Number
                        </label>
                        {errorMessages.phone && (
                          <p className="text-red-500">{errorMessages.phone}</p>
                        )}
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="relative w-full mt-10 min-w-[200px]">
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={valueChange}
                        onFocus={handleFocus}
                        className="h-20 w-full border-b border-[#37508A] bg-transparent pt-4 pb-1.5 outline outline-0 "
                      />
                      <label className="opacity-70 pointer-events-none absolute left-0 -top-2.5 flex h-full w-full select-none overflow-visible! truncate leading-tight text-[#37508A] transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300">
                        Message
                      </label>
                      {errorMessages.message && (
                        <p className="text-red-500">{errorMessages.message}</p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex justify-center lg:justify-end  mt-5 lg:pr-10 ">
                  <div className="flex justify-center items-center relative group cursor-pointer lg:mt-8 mt-5 gap-x-[.8rem] md:gap-x-[.50rem] lg:translate-x-2">
                    <button
                      className="relative mx-auto px-4 md:px-8 uppercase tracking-wide text-white"
                      disabled={isSubmitting}
                    >
                      <span className="relative z-10 cursor-pointer flex items-center gap-2">
                        {isSubmitting ? (
                          <>
                            <span>Loading...</span>
                            <svg
                              version="1.1"
                              id="loader-1"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              x="0px"
                              y="0px"
                              width="20px"
                              height="20px"
                              viewBox="0 0 40 40"
                              xmlSpace="preserve"
                            >
                              <path
                                opacity="0.2"
                                fill="#000"
                                d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946
          s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634
          c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"
                              />
                              <path
                                fill="#000"
                                d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012v3.312
          C22.32,8.481,24.301,9.057,26.013,10.047z"
                              >
                                <animateTransform
                                  attributeType="xml"
                                  attributeName="transform"
                                  type="rotate"
                                  from="0 20 20"
                                  to="360 20 20"
                                  dur="0.5s"
                                  repeatCount="indefinite"
                                />
                              </path>
                            </svg>
                          </>
                        ) : (
                          "Submit"
                        )}
                      </span>
                    </button>
                    <button>
                      <span className="absolute inset-0 h-full w-full bg-[#13B2F5] transition-all duration-500 ease-out group-hover:w-[calc(100%-4rem)] md:group-hover:w-[calc(100%-3.9rem)] rounded-full"></span>
                      <div
                        className=" border-4 border-[#13B2F5] -translate-x-0.5 bg-white group-hover:border-4 group-hover:bg-[#13B2F5] delay-100 duration-100 group-hover:delay-0 rounded-full relative z-20 flex justify-center items-center"
                        style={{ width: "50px", height: "50px" }}
                      >
                        <img
                          src={arrow}
                          alt=""
                          className="group-hover:hidden"
                          style={{ width: "16px", height: "16px" }}
                        />
                        <img
                          src={arrowWhite}
                          alt=""
                          className="hidden group-hover:block"
                          style={{ width: "16px", height: "16px" }}
                        />
                      </div>
                    </button>
                  </div>
                </div>
                <div className="flex justify-center lg:justify-end lg:pr-10 "></div>
              </div>
              <div className="lg:flex hidden flex-col gap-5">
                <div className="paragraph">
                  <p className="font-medium text-[20px]">Call Us</p>
                  <p>+91 70258 89911</p>
                </div>
                <div className="paragraph">
                  <p className="font-medium text-[20px]">Mail Us</p>
                  <p>customersupport@infolks.in</p>
                </div>
              </div>
            </div>
          </form>

          <div className="relative w-full lg:h-[572px] h-[279px] md:h-[392px] lg:mt-24">
            <iframe
              className="rounded-2xl w-full h-full"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Infolks%20Pvt%20imited%20Mannarkkad+(My%20Business%20Name)&amp;t=&amp;z=11&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              title="Google Maps"
            >
              <a href="https://www.gps.ie/">gps tracker sport</a>
            </iframe>
            {/* <div className="absolute inset-0 bg-[#0d24a6a9] opacity-50 pointer-events-none rounded-2xl"></div> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-10 lg:divide-x mt-10 gap-y-5">
            <div className="hover:bg-[#37508A] p-5 hover:text-white flex justify-center items-center group md:border-r-[1px] md:border-[#37508aa1] ">
              <div>
                <h3 className="contact-heading-h3 font-primary-medium">01.</h3>
                <h4 className="contact-heading-h4 border-b border-b-[#37508A] group-hover:border-b-white font-primary-medium">
                  Head office
                </h4>
                <div className="paragraph mt-1">
                  <p>Infolks Tower</p>
                  <p>Mannarkkad, Kerala, India</p>
                  <p>678583</p>
                </div>
              </div>
            </div>

            <div className="hover:bg-[#37508A] p-5 hover:text-white flex justify-center items-center group  md:border-[#37508aa1] ">
              <div>
                <h3 className="contact-heading-h3 font-primary-medium">02.</h3>
                <h4 className="contact-heading-h4 border-b border-b-[#37508A] group-hover:border-b-white font-primary-medium">
                  Dataways
                </h4>
                <div className="paragraph mt-1">
                  <p>Infolks Tower</p>
                  <p>Mannarkkad, Kerala, India</p>
                  <p>678583</p>
                </div>
              </div>
            </div>

            <div className="hover:bg-[#37508A] p-5 hover:text-white flex justify-center items-center group md:border-r-[1px] md:border-[#37508aa1] ">
              <div>
                <h1 className="contact-heading-h3 font-primary-medium">03.</h1>
                <h4 className="contact-heading-h4 border-b border-b-[#37508A] group-hover:border-b-white font-primary-medium">
                  Medrays
                </h4>
                <div className="paragraph mt-1">
                  <p>Infolks Tower</p>
                  <p>Mannarkkad, Kerala, India</p>
                  <p>678583</p>
                </div>
              </div>
            </div>

            <div className="hover:bg-[#37508A] p-5 hover:text-white flex justify-center items-center group  md:border-[#37508aa1] ">
              <div>
                <h1 className="contact-heading-h3 font-primary-medium">04.</h1>
                <h4 className="contact-heading-h4 border-b border-b-[#37508A] group-hover:border-b-white font-primary-medium">
                  Webfolks
                </h4>
                <div className="paragraph mt-1">
                  <p>Infolks Tower</p>
                  <p>Mannarkkad, Kerala, India</p>
                  <p>678583</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
