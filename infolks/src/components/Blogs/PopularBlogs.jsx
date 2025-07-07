import { useEffect, useState } from "react";
import blog from "/Blog/ai_in_review_blog.png";
import readIcon1 from "/home/icons/read-icon1.png";
import readIcon2 from "/home/icons/read-icon2.png";
import readIcon3 from "/home/icons/read-icon3.png";
import plus_icon from "/Blog/icons/plus_icon.png";
import Blog from "./Blog";
import read_icon_big from "/Blog/icons/read_icon_big.png";

const PopularBlogs = () => {
  const blogdata = [
    {
      id: 1,
      img: blog,
      title: "AI IN REVIEW: A BRIEF LOOK INTO THE AI SPACE IN 2024",
      date: "DEC 2023",
      color: "bg-[#FF8E90]",
      borderColor: "border-[#FF8E90]",
      borderBottomColor: "border-b-[#FF8E90]",
      icon: readIcon1,
    },
    {
      id: 2,
      img: blog,
      title: "A BRIEF ABOUT NLP AND ADVANCED HAND HESTURE RECOGNITION",
      date: "JAN 2024",
      color: "bg-[#04AFC6]",
      borderColor: "border-[#04AFC6]",
      borderBottomColor: "border-b-[#04AFC6]",
      icon: readIcon2,
    },
    {
      id: 3,
      img: blog,
      title: "A BRIEF ABOUT NLP : AND ADVANCED HAND HESTURE RECOGNITION",
      date: "DEC 2023",
      color: "bg-[#0C9DFC]",
      borderColor: "border-[#0C9DFC]",
      borderBottomColor: "border-b-[#0C9DFC]",
      icon: readIcon3,
    },
    {
      id: 4,
      img: blog,
      title: "A BRIEF ABOUT NLP : AND ADVANCED HAND HESTURE RECOGNITION",
      date: "DEC 2023",
      color: "bg-[#0C9DFC]",
      borderColor: "border-[#0C9DFC]",
      borderBottomColor: "border-b-[#0C9DFC]",
      icon: readIcon3,
    },
    {
      id: 5,
      img: blog,
      title: "A BRIEF ABOUT NLP : AND ADVANCED HAND HESTURE RECOGNITION",
      date: "DEC 2023",
      color: "bg-[#0C9DFC]",
      borderColor: "border-[#0C9DFC]",
      borderBottomColor: "border-b-[#0C9DFC]",
      icon: readIcon3,
    },
    {
      id: 6,
      img: blog,
      title: "A BRIEF ABOUT NLP : AND ADVANCED HAND HESTURE RECOGNITION",
      date: "DEC 2023",
      color: "bg-[#0C9DFC]",
      borderColor: "border-[#0C9DFC]",
      borderBottomColor: "border-b-[#0C9DFC]",
      icon: readIcon3,
    },
    {
      id: 7,
      img: blog,
      title: "A BRIEF ABOUT NLP : AND ADVANCED HAND HESTURE RECOGNITION",
      date: "DEC 2023",
      color: "bg-[#0C9DFC]",
      borderColor: "border-[#0C9DFC]",
      borderBottomColor: "border-b-[#0C9DFC]",
      icon: readIcon3,
    },
    {
      id: 8,
      img: blog,
      title: "A BRIEF ABOUT NLP : AND ADVANCED HAND HESTURE RECOGNITION",
      date: "DEC 2023",
      color: "bg-[#0C9DFC]",
      borderColor: "border-[#0C9DFC]",
      borderBottomColor: "border-b-[#0C9DFC]",
      icon: readIcon3,
    },
    {
      id: 9,
      img: blog,
      title: "A BRIEF ABOUT NLP : AND ADVANCED HAND HESTURE RECOGNITION",
      date: "DEC 2023",
      color: "bg-[#0C9DFC]",
      borderColor: "border-[#0C9DFC]",
      borderBottomColor: "border-b-[#0C9DFC]",
      icon: readIcon3,
    },
    {
      id: 10,
      img: blog,
      title: "A BRIEF ABOUT NLP : AND ADVANCED HAND HESTURE RECOGNITION",
      date: "DEC 2023",
      color: "bg-[#0C9DFC]",
      borderColor: "border-[#0C9DFC]",
      borderBottomColor: "border-b-[#0C9DFC]",
      icon: readIcon3,
    },
  ];
  const latestItem = blogdata[blogdata.length - 1];
  const [firstPart, secondPart] = latestItem.title.split(/(?<=:)/);
  const [lastFiveItems, setLastFiveItems] = useState([]);

  useEffect(() => {
    const lastFive = blogdata.slice(-4);
    setLastFiveItems(lastFive);
  });

  return (
    <section className="mx-auto w-[93%] relative">
      <div className="rounded-lg md:rounded-[35px] bg-[#FFFBF0] text-[#37508A] font-primary-regular rounded-t-[25px] md:rounded-t-[40px]">
        <div className="flex w-full justify-center flex-col -mt-[500px] -md:-mt-[650px] lg:-mt-[250px]">
          <div className="p-5 md:p-10 lg:p-20">
            <div className="flex flex-col lg:flex-row lg:gap-20">
              <div className="card-compact text-[#002147] bg-base-100 mb-10 border border-[#547ED8] rounded-2xl hover:border-spacing-2 w-full lg:w-[70%]">
                <div className="border-b border-b-[#547ED8] p-2 md:p-4">
                  <div className="flex gap-2 justify-between pt-4">
                    <p className="text-[14px] md:text-[18px] lg:text-[20px] font-primary-medium">
                      BLOG
                    </p>
                    <div
                      className={`w-[57%] md:w-[70%] mt-3 h-0.5 bg-[#547ED8]`}
                    ></div>
                    <p className="text-[14px] md:text-[18px] lg:text-[20px] font-primary-medium">
                      {latestItem.date}
                    </p>
                  </div>
                  <figure>
                    <img
                      src={latestItem.img}
                      alt="Shoes"
                      className="h-full w-full pt-4"
                    />
                  </figure>
                </div>

                <div className="p-2 md:p-5 flex lg:gap-20 justify-between items-center">
                  <h2 className="mb-5 text-[#002147] font-primary-medium text-[16px] md:text-[18px] lg:text-[20px]">
                    {firstPart && <span>{firstPart}</span>} <br />
                    {secondPart && (
                      <span className="block">{secondPart.trim()}</span>
                    )}
                  </h2>
                  <img src={read_icon_big} alt="" className="w-10 md:w-20" />
                </div>
              </div>

              <div className="text-[#002147]">
                <h3 className="text-[#002147] text-[20px] md:text-[30px] lg:text-[50px] font-primary-medium mb-4">
                  Most Polular
                </h3>
                {lastFiveItems.map(({ id, title, date }) => (
                  <div
                    key={id}
                    className="mb-5 leading-[50px] border-b-2 border-b-[#A8C0F3]"
                  >
                    <div className="flex justify-between items-center">
                      <p className="text-[20px]">Blog</p>
                      <img src={plus_icon} className="w-3 h-3" alt="" />
                    </div>
                    <h4 className="font-primary-medium text-[20px] leading-6">
                      {title}
                    </h4>
                    <div className="flex justify-between text-[#7383A9] text-[16px]">
                      <p>By Lavanya Habel</p>
                      <p>{date}</p>
                      <p>12 min read</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Blog />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularBlogs;
