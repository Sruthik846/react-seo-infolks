import workflow from "/home/work-flow/workflow.svg";
import React from 'react';


const Workflow = () => {
  return (
    <section className="flex flex-col justify-center items-center pt-5 md:pt-10 lg:pt-20 pb-10 container mx-auto">
      <h2 className="text-[#37508A] heading-h2 lg:pb-10 font-primary-regular">
        WORKFLOW
      </h2>
      <img src={workflow} alt="" className="w-[95%] lg:w-[75%] objectcover" />
    </section>
  );
};

export default Workflow;
