import { useEffect, useState } from "react";
import arrow from "/home/icons/arrow blue.svg";
import arrowWhite from "/home/icons/arrowRight.png";
import axios from "axios";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    company_name: "",
    email: "",
    phone: "",
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
        "https://test-api.infolks.info/api/pricing",
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

      return () => clearTimeout(timer);
    }
  }, [responseMessage]);
  return (
    <section className="w-full mx-auto container p-4 pb-10 font-primary-regular text-[#37508A] text-lg flex flex-col justify-center items-center">
      <div className="w-full">
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
      </div>
      <h2 className="heading-h2 text-center mb-10 2xl:leading-[63px] lg:leading-[53px]">
        DATA OF ANY KIND,
        <br />
        GET YOUR UTMOST DATA ANNOTATION RESULT
      </h2>

      <div className="flex flex-col gap-5 w-full paragraph lg:mb-10 xl:px-20 2xl:px-28">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="flex flex-col">
              <input
                className="appearance-none block w-full border border-[#13B2F5] rounded-3xl py-4 xl:py-6 px-4 mb-3 leading-tight focus:outline-hidden bg-[#FFFBF0]"
                id="name"
                name="name"
                value={formData.name}
                onChange={valueChange}
                onFocus={handleFocus}
                type="text"
                placeholder="Name"
              />
              {errorMessages.name && (
                <p className="text-red-500">{errorMessages.name}</p>
              )}
            </div>

            <div className="flex flex-col">
              <input
                className="appearance-none block w-full border border-[#13B2F5] rounded-3xl py-4 xl:py-6 px-4 mb-3 leading-tight focus:outline-hidden bg-[#FFFBF0]"
                id="company"
                type="text"
                name="company_name"
                onChange={valueChange}
                onFocus={handleFocus}
                value={formData.company_name}
                placeholder="Company/ University/ Freelancer"
              />
              {errorMessages.company_name && (
                          <p className="text-red-500">{errorMessages.company_name}</p>
                        )}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5">
            <div className="flex flex-col">
              <input
                className="appearance-none block w-full border border-[#13B2F5] rounded-3xl py-4 xl:py-6 px-4 mb-3 leading-tight focus:outline-hidden bg-[#FFFBF0]"
                id="email"
                type="email"
                name="email"
                onChange={valueChange}
                onFocus={handleFocus}
                value={formData.email}
                placeholder="Email"
              />
              {errorMessages.email && (
                <p className="text-red-500">{errorMessages.email}</p>
              )}
            </div>

            <div className="flex flex-col">
              <input
                className="appearance-none block w-full border border-[#13B2F5] rounded-3xl py-4 xl:py-6 px-4 mb-3 leading-tight focus:outline-hidden bg-[#FFFBF0]"
                id="number"
                name="phone"
                onChange={valueChange}
                onFocus={handleFocus}
                value={formData.phone}
                type="text"
                placeholder="Contact Number"
              />
              {errorMessages.phone && (
                <p className="text-red-500">{errorMessages.phone}</p>
              )}
            </div>
          </div>

          <div className="flex justify-center mb-5 mt-5">
            <div className="flex justify-center items-center relative group cursor-pointer mt-2 gap-x-[.50rem]">
              <button
                type="submit"
                className="relative mx-auto px-10 py-3 uppercase tracking-wide text-white"
                disabled={isSubmitting}
              >
                <span className="relative z-10 cursor-pointer">
                  {" "}
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <span>Loading</span>
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
                    </div>
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
        </form>
      </div>
    </section>
  );
};

export default Form;
