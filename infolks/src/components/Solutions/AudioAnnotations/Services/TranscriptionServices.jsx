import ai_excellence from "/solutions/common/second-view-bg.png";
import blue_img from "/About/blue_img.svg";
import audio_transcription_services from "/solutions/audio-annotations/audio transcription services/audio-transcription-services.jpg";
import audio_transcription_servicesTab from "/solutions/audio-annotations/audio transcription services/audio-transcription-services-tab.jpg";
import audio_transcription_servicesMobile from "/solutions/audio-annotations/audio transcription services/audio-transcription-services-mobile.jpg";

const AI_Excellence = () => {
  return (
    <section className="px-2 md:px-0">
      <div className="relative text-[#37508A] font-primary-regular lg:mb-10 md:-mt-5 mt-2 rounded-[10px] ">
        <img
          src={ai_excellence}
          className="w-full h-52 md:h-72 lg:h-[500px] xl:h-[450px] 2xl:h-[520px]"
          alt=""
        />

        <h2 className="heading-h2 absolute top-0 flex justify-center items-center text-center w-full pt-5 lg:pt-20 2xl:pt-28 uppercase">

          Audio Transcription Services
        </h2>

        <div className="lg:px-20 xl:flex justify-center items-center lg:py-0 p-2 md:p-4 lg:p-0">
          <div className="lg:bg-[#F9F5E9] 2xl:w-[1300px] 2xl:h-[543px] lg:shadow-[4px_4px_10px_rgba(150,150,150,0.2)] relative flex flex-col lg:flex-row gap-3 rounded-lg md:rounded-2xl lg:p-3 -mt-28 sm:-mt-32 md:-mt-52 lg:-mt-80 xl:-mt-[17rem]">
            <div>
              <img
                src={audio_transcription_services}
                className="hidden lg:block h-[523px] w-[445px] rounded-xl object-cover"
                alt=""
              />
              <img
                src={audio_transcription_servicesTab}
                className="hidden md:block lg:hidden h-full w-full rounded-xl object-cover"
                alt=""
              />
              <img
                src={audio_transcription_servicesMobile}
                className="block md:hidden lg:hidden h-full w-full rounded-xl object-cover"
                alt=""
              />
            </div>
            <div className="flex lg:flex-1 flex-col justify-center gap-8 lg:px-5 xl:px-10 2xl:px-32 items-center lg:items-start">
              <img src={blue_img} className="w-8 hidden lg:block" alt="" />
              <p className="w-full paragraph lg:leading-8 text-[#37508A] text-center lg:text-left p-1 py-5">
                Our audio transcription services offer accurate and reliable
                solutions to convert your spoken content into written text. With
                our team of skilled transcriptionists, we ensure precise
                transcriptions of interviews, podcasts, webinars, and any other
                audio material you may have. If you need transcriptions, we
                tailor our services to meet your specific needs and deadlines.
                By leveraging advanced technology and attention to detail, we
                guarantee high-quality transcriptions that capture every word
                and nuance of your audio content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI_Excellence;
