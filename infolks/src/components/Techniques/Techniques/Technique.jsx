import AnnotationTechniques from "../Techniques/AnnotationTechniques";
import bgImage from "/techniques/blogbg.png";
import Blogs from "../../Common/Blog/Blog";
import ContactTeam from "../../Common/Contact/ContactTeam";

const Technique = () => {
  return (
    <section className="container relative px-5 mx-auto md:px-0">
      <div className="rounded-[35px] bg-[#FFFBF0] text-[#37508A] font-primary-regular">
        <div className="flex flex-col justify-center w-full -mt-16">
          <AnnotationTechniques />
          <div
            className="w-full pt-5 md:pt-10"
            style={{
              backgroundImage: `url(${bgImage})`,
              backgroundPosition: "center",
              width: "100%",
              height: "100%",
            }}
          >
            <Blogs title="RELATED BLOGS" />
            <ContactTeam
              title="Step Up with Our Annotation Techniques"
              buttonText="CONTACT US NOW"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technique;
