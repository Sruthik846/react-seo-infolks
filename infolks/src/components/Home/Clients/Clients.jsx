import client from "/home/client.png";

const Clients = () => {
  return (
    <div className="h-screen overflow-hidden">
      <h1 className="text-[#37508A] text-3xl mb-8 text-center font-tthoves">
        WHAT OUR CLIENTS HAVE TO SAY
      </h1>
      <section className="slider-section bottom-0 w-[100%] flex justify-center items-center">
        <div className="flex justify-center items-center gap-5 relative">
          <div className="absolute -left-[51rem] top-[11rem]">
            <img src={client} alt="" style={{ transform: "rotate(-24deg)"}}/>
          </div>

          <div className="absolute top-[3rem] -left-[26rem]">
            <img src={client} alt="" style={{ transform: "rotate(-11deg)"}}/>
          </div>

          <div>
            <img src={client} alt="" style={{ transform: "rotate(0deg)"}}/>
          </div>

          <div className="absolute top-[3rem] -right-[26rem]">
            <img src={client} alt="" style={{ transform: "rotate(11deg)"}}/>
          </div>

          <div className="absolute -right-[51rem] top-[11rem]">
            <img src={client} alt="" style={{ transform: "rotate(24deg)"}}/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clients;
