// eslint-disable-next-line react/prop-types
const Team = ({ title, content, content2, image1, image2 }) => {
  return (
    <section className="lg:px-20 2xl:px-56 lg:py-0 p-2 md:p-4 lg:pb-48 lg:mt-20 relative font-primary-regular text-[#37508A]">
      {content2 ? (
        <h2 className="heading-h2 text-[#37508A] text-center lg:pb-10 py-5 flex justify-center items-center uppercase lg:leading-[50px] 2xl:leading-[63px]">
          {title}
        </h2>
      ) : (
        <h2 className="heading-h2 lg:hidden text-[#37508A] text-center uppercase">
          {title}
        </h2>
      )}
      <div className="flex gap-5 lg:gap-10 xl:gap-36 2xl:gap-0 lg:flex-row flex-col-reverse">
        <div className="flex-1 flex flex-col justify-center">
          {content2 ? null : (
            <h2 className="heading-h2 mb-5 text-[#37508A] hidden lg:block lg:leading-[50px] 2xl:leading-[63px] uppercase">
              {title}
            </h2>
          )}
          <div className="hidden lg:block font-primary-regular">
            <p className="paragraph">{content}</p>
            {content2 && (
              <>
                <br />
                <p className="paragraph">{content2}</p>
              </>
            )}
          </div>
          <p className="block text-center lg:hidden paragraph lg:text-[19px] lg:leading-8">
            {content}
          </p>
        </div>

        <div className="flex-1 flex items-center 2xl:justify-center">
          <div className="lg:hidden w-full mt-5">
            <img
              src={image1}
              className="rounded-[16px] h-60 md:h-80 w-full object-cover"
              alt=""
            />
          </div>
          <div className="relative hidden lg:block">
            <img
              src={image1}
              alt=""
              className="rounded-[20px] lg:h-[300px] lg:w-[250px] xl:h-[351px] xl:w-[297px] object-cover shadow-lg"
            />
            <img
              src={image2}
              className="absolute top-24 left-40 lg:h-[280px] lg:w-[250px] xl:h-[331px] xl:w-[297px] object-cover rounded-[20px]"
              alt=""
            />
            <div className="absolute top-10 left-56 flex flex-col gap-3">
              <svg
                width="144"
                height="10"
                viewBox="0 0 144 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L18.69 8.49L36.39 1L54.09 8.49L71.78 1L89.48 8.49L107.18 1L124.88 8.49L142.58 1"
                  stroke="#37508A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <svg
                width="144"
                height="10"
                viewBox="0 0 144 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L18.69 8.49L36.39 1L54.09 8.49L71.78 1L89.48 8.49L107.18 1L124.88 8.49L142.58 1"
                  stroke="#37508A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
