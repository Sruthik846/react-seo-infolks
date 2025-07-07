import { useMemo, useState } from "react";
import readIcon3 from "/home/icons/read-icon3.png";
import waste_management_blog from "/Blog/waste_management_blog.png";
import ecommerce_blog from "/Blog/ecommerce_blog.png";
import food_blog from "/Blog/food_blog.png";
import labelled_data_blog from "/Blog/labelled-data_blog.png";
import llms_blog from "/Blog/llms_blog.png";
import data_privacy_blog from "/Blog/data_privacy_blog.png";
import ai_in_reviews_blog from "/Blog/ai_in_reviews_blog.png";
import ai_in_review_blog2 from "/Blog/ai_in_review_blog2.png";
import Pagination from "./Pagination";
import "./Hero/banner.css";

let PageSize = 10;

const Blog = () => {
  const blogdata = [
    {
      id: 1,
      img: waste_management_blog,
      title: `THE INFLUENCE OF AI ON
            SUSTAINABLE WASTE MANAGEMENT`,
      content:
        "Sustainable waste management is a vital part of a broader economy.....",
      date: "DEC 2023",
      color: "bg-[#0C9DFC]",
      borderColor: "border-[#0C9DFC]",
      borderBottomColor: "border-b-[#0C9DFC]",
      icon: readIcon3,
    },
    {
      id: 2,
      img: ecommerce_blog,
      title: `E-COMMERCE IN THE AGE OF AI DOMINANCE: ENTERING 2024`,
      content:
        "Sustainable waste management is a vital part of a broader economy.....",
      date: "DEC 2023",
      color: "bg-[#0C9DFC]",
      borderColor: "border-[#0C9DFC]",
      borderBottomColor: "border-b-[#0C9DFC]",
      icon: readIcon3,
    },
    {
      id: 3,
      img: food_blog,
      title: `AI’S IMPACT ON THE FOOD & BEVERAGES INDUSTRY: PRESENT
            AND FUTURE`,
      content:
        "Sustainable waste management is a vital part of a broader economy.....",
      date: "DEC 2023",
      color: "bg-[#0C9DFC]",
      borderColor: "border-[#0C9DFC]",
      borderBottomColor: "border-b-[#0C9DFC]",
      icon: readIcon3,
    },
    {
      id: 4,
      img: labelled_data_blog,
      title: `RISING DEMAND FOR HIGH-QUALITY LABELED DATA IN AI TRAINING`,
      content:
        "Sustainable waste management is a vital part of a broader economy.....",
      date: "DEC 2023",
      color: "bg-[#0C9DFC]",
      borderColor: "border-[#0C9DFC]",
      borderBottomColor: "border-b-[#0C9DFC]",
      icon: readIcon3,
    },
    {
      id: 5,
      img: llms_blog,
      title: `LLMs IN THE WORKFORCE`,
      content:
        "Sustainable waste management is a vital part of a broader economy.....",
      date: "DEC 2023",
      color: "bg-[#0C9DFC]",
      borderColor: "border-[#0C9DFC]",
      borderBottomColor: "border-b-[#0C9DFC]",
      icon: readIcon3,
    },
    {
      id: 6,
      img: data_privacy_blog,
      title: `DATA PRIVACY IN THE AGE OF AI`,
      content:
        "Sustainable waste management is a vital part of a broader economy.....",
      date: "DEC 2023",
      color: "bg-[#0C9DFC]",
      borderColor: "border-[#0C9DFC]",
      borderBottomColor: "border-b-[#0C9DFC]",
      icon: readIcon3,
    },
    {
      id: 7,
      img: ai_in_reviews_blog,
      title: `AI IN REVIEW: A BRIEF LOOK INTO THE AI SPACE IN 2023`,
      content:
        "Sustainable waste management is a vital part of a broader economy.....",
      date: "DEC 2023",
      color: "bg-[#0C9DFC]",
      borderColor: "border-[#0C9DFC]",
      borderBottomColor: "border-b-[#0C9DFC]",
      icon: readIcon3,
    },
    {
      id: 8,
      img: ai_in_review_blog2,
      title: `AI: A GUARDIAN FOR CONSERVING WILDLIFE`,
      content:
        "Sustainable waste management is a vital part of a broader economy.....",
      date: "DEC 2023",
      color: "bg-[#0C9DFC]",
      borderColor: "border-[#0C9DFC]",
      borderBottomColor: "border-b-[#0C9DFC]",
      icon: readIcon3,
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return blogdata.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  const chunks = (array, size) =>
    array.reduce(
      (acc, _, i) => (i % size ? acc : [...acc, array.slice(i, i + size)]),
      []
    );
  const groupedImages = chunks(currentTableData, 2); // Adjust the size for grouping

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 font-primary-regular mt-5">
        {groupedImages.map((group, groupIndex) => (
          <div key={groupIndex} className="grid gap-8">
            {group.map((item, index) => (
              <div
                key={index}
                className={`border ${item.borderColor} rounded-2xl hover:border-spacing-2`}
              >
                <div className={`border-b ${item.borderBottomColor} p-3`}>
                  <div className="flex gap-2 justify-between">
                    <p className="text-[10px]">BLOG</p>
                    <div className={`w-48 mt-2 h-0.5 ${item.color} `}></div>
                    <p className="text-[10px]">{item.date}</p>
                  </div>
                  <figure>
                    <img
                      src={item.img}
                      alt="Shoes"
                      className="h-auto w-full object-cover object-center rounded-xl"
                    />
                  </figure>
                  <div className="p-2">
                    <h3 className=" text-[#002147] font-primary-medium text-[18px] leading-5">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#37508A] mt-2">
                      {item.content}
                    </p>
                  </div>
                </div>

                <div className="p-4 flex justify-between">
                  <p className="text-[#7383A9] font-primary-regular text-sm">
                    12 mins read{" "}
                  </p>
                  <img src={item.icon} className="w-6" alt="" />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={blogdata.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default Blog;
