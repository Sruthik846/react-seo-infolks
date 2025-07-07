import retail_graph from "/industries/retail/retail-graph.png";

const Video = () => {
  return (
    <section className="lg:pt-8 mx-auto xl:container md:pl-4 md:pr-4 pl-2 pr-2">
      <div className="bg-linear-to-b from-[#e5ecfa] to-[#fefaf1] rounded-[35px] w-full">
        <img src={retail_graph} alt="" className="w-full" />
      </div>
    </section>
  );
};

export default Video;
