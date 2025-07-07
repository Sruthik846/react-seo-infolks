import WhatIsCategorization from "./WhatIsCategorization";
import GetInTouchWithUs from "../../Common/Contact/GetInTouchWithUs";
import OtherIndustries from "./Industries/OtherIndustries";
import Team from "./Team";
import important_categorization_role from "/solutions/product-categorization/roll-in-retail/important-categorization-role2.jpg";
import important_categorization_role2 from "/solutions/product-categorization/roll-in-retail/important-categorization-role.jpg";
import important_categorization_roleTab from "/solutions/product-categorization/roll-in-retail/important-categorization-role-tab.jpg";
import important_categorization_roleMobile from "/solutions/product-categorization/roll-in-retail/important-categorization-role-mobile.jpg";
import product_categorization_services from "/solutions/product-categorization/services/product-categorization-services.jpg";
import product_categorization_services2 from "/solutions/product-categorization/services/product-categorization-services2.jpg";
import product_categorization_servicesTab from "/solutions/product-categorization/services/product-categorization-services-tab.jpg";
import product_categorization_servicesMobile from "/solutions/product-categorization/services/product-categorization-services-mobile.jpg";
import ConnectUs from "../../Common/Contact/ConnectUs";

const ProductPage = () => {
  return (
    <section className="mx-auto container px-5 md:px-0 relative">
      <div className="rounded-[35px] bg-[#FFFBF0] text-[#37508A] font-primary-regular rounded-t-[25px] md:rounded-t-[40px]">
        <div className="flex w-full justify-center flex-col -mt-16">
          <ConnectUs
            title="DO YOU HAVE ANY PROJECT NEEDS?"
            buttonText="TALK TO OUR EXPERTS"
          />
          <WhatIsCategorization />
           <div className="py-10 lg:py-0">
          <Team
            title="IMPORTANT PRODUCT CATEGORISATION ROLE IN RETAIL"
            content="The AI-powered categorization system is designed to streamline
              retail operations by sorting and organising vast product
              inventories. Leveraging advanced algorithms, our system
              efficiently categorises products based on various attributes,
              ensuring accuracy and relevance in cataloging. By organising
              products according to their attributes, retailers enhance the
              in-store shopping journey for customers. Strategic categorization
              simplifies the stock replenishment process, minimising the risk of
              excess or insufficient inventory levels."
            content2="Effective categorization simplifies the customer journey, ensuring
              swift and intuitive navigation through diverse product offerings.
              By strategically organising items into clear and easily accessible
              categories, retailers empower customers to effortlessly find what
              they need, even when they're exploring new options."
            image1={important_categorization_role}
            image2={important_categorization_role2}
            imageTab={important_categorization_roleTab}
            imageMobile={important_categorization_roleMobile}
          /></div>
          <GetInTouchWithUs buttonText="Connect our experts" />
          <OtherIndustries />
           <div className="py-10 lg:py-0">
          <Team
            title2="INFOLKS PRODUCT CATEGORISATION SERVICES"
            content="Infolks boasts an exceptional team of professionals dedicated to
              product categorization. With profound expertise and advanced
              technologies, we expertly organise diverse products across
              industries. Employing cutting-edge algorithms, we ensure precise
              classification, empowering businesses with enhanced customer
              experience and operational efficiency. With a commitment to
              excellence, our professional team at Infolks empowers businesses
              with optimised product categorization solutions to enable enhanced
              customer experiences and improved operational efficiency."
            content2="Our service goes beyond traditional categorization methods,
              employing advanced algorithms and industry expertise. This ensures
              that your product is accurately classified, enhancing
              searchability and streamlining the overall user experience. With a
              focus on precision organisation, we offer a cutting-edge solution
              to meet the dynamic demands in various industries and provide your
              business with a competitive edge in the digital marketplace."
            image1={product_categorization_services}
            image2={product_categorization_services2}
            imageTab={product_categorization_servicesTab}
            imageMobile={product_categorization_servicesMobile}
          /></div>
          <GetInTouchWithUs
            title="EXPLORE TAILORED CATEGORISATION SERVICES"
            buttonText="Talk to our experts"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
