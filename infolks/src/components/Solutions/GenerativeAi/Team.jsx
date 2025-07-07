
import text_to_text from "/solutions/generative-ai/text-to-text.svg";
import image_to_text from "/solutions/generative-ai/image-to-text.svg";
import video_to_text from "/solutions/generative-ai/video-to-text.svg";
import audio_to_text from "/solutions/generative-ai/audio-to-text.svg";

// eslint-disable-next-line react/prop-types
const Team = ({ title, content, content2, image1, image2 }) => {
    return (
        <section>
      <div className="lg:px-20 2xl:px-56 lg:py-0 p-2 md:p-4 lg:pb-10 lg:mt-20 relative font-primary-regular text-[#37508A]">
        {content2 ? (
          <h2 className="heading-h2 text-[#37508A] text-center lg:pb-10 flex justify-center items-center uppercase">
            LARGE LANGUAGE <br/> MODELS (LLMs)
          </h2>
        ) : (
          <h2 className="heading-h2 lg:hidden text-[#37508A] text-center uppercase">
            LARGE LANGUAGE MODELS (LLMs)
          </h2>
        )}
        <div className="flex gap-5 lg:gap-10 xl:gap-36 2xl:gap-0 lg:flex-row flex-col-reverse">
          <div className="flex-1 flex flex-col justify-center">
            {content2 ? null : (
              <h2 className="heading-h2 mb-5 text-[#37508A] hidden lg:block lg:leading-[50px] 2xl:leading-[63px] uppercase">
                 LARGE LANGUAGE <br/> MODELS (LLMs)
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
                className="rounded-[16px]  md:h-80 w-full object-cover"
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
        </div>
        <div className="lg:px-20 2xl:px-24 lg:py-0 p-2 md:p-4 lg:pb-10 lg:mt-20 relative font-primary-regular text-[#37508A]">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 lg:mt-32 mt-5">
            <div className="relative group xl:h-80 h-auto 2xl:h-64">
              <div className="absolute top-0 ml-2 z-0 bg-[#FBF7ED] xl:h-80 h-auto 2xl:h-64 flex flex-col md:flex-row gap-5 p-4 md:p-8 rounded-2xl border border-[#5F82CC]">
                <div className="bg-[#e9e8e8] rounded-2xl py-3 px-8 flex justify-center items-center">
                  <img
                    src={text_to_text}
                    alt=""
                    className="md:w-full w-20"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="heading-h4 mb-1">Text to Text</h4>
                  <p className="paragraph">
                  Transform any AI-generated content into a more human-like style while ensuring correct grammar. The revised version maintains the original content&apos;s meaning but presents it in a manner that sounds more natural and is aligned with human expression. 
                  </p>
                </div>
              </div>
              <div className="bg-[#FBF7ED] xl:h-80 h-auto 2xl:h-64 z-10 ml-2 group-hover:ml-0 group-hover:mt-2 group-hover:mr-2 transition-all duration-300 ease-in-out flex flex-col md:flex-row gap-5 p-4 md:p-8 rounded-2xl border border-[#5F82CC]">
                <div className="bg-[#e9e8e8] rounded-2xl py-3 px-8 flex justify-center items-center">
                  <img
                    src={text_to_text}
                    alt="Text to Text"
                    className="md:w-full w-20"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="heading-h4 font-primary-medium mb-1">
                  Text to Text
                  </h4>
                  <p className="paragraph">
                  Transform any AI-generated content into a more human-like style while ensuring correct grammar. The revised version maintains the original content&apos;s meaning but presents it in a manner that sounds more natural and is aligned with human expression. 
                  </p>
                </div>
              </div>
            </div>
            <div className="relative group xl:h-80 h-auto 2xl:h-64">
              <div className="absolute top-0 ml-2 z-0 bg-[#FBF7ED] xl:h-80 h-auto 2xl:h-64 flex flex-col md:flex-row gap-5 p-4 md:p-8 rounded-2xl border border-[#5F82CC]">
                <div className="bg-[#e9e8e8] rounded-2xl p-5 px-8 flex justify-center items-center">
                  <img
                    src={image_to_text}
                    alt=""
                    className="md:w-full w-20"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="heading-h4 mb-1">Image to Text</h4>
                  <p className="paragraph">
                  The conversion of images into editable text has facilitated the digitization of handwritten notes. This process involves translating handwritten notes from images into a text format, enabling efficient digitalization. Once converted, these notes become editable, allowing for modifications and improvements.
                  </p>
                </div>
              </div>
              <div className="bg-[#FBF7ED] xl:h-80 h-auto 2xl:h-64 z-10 ml-2 group-hover:ml-0 group-hover:mt-2 group-hover:mr-2 transition-all duration-300 ease-in-out flex flex-col md:flex-row gap-5 p-4 md:p-8 rounded-2xl border border-[#5F82CC]">
                <div className="bg-[#e9e8e8] rounded-2xl p-5 px-8 flex justify-center items-center">
                  <img
                    src={image_to_text}
                    alt=""
                    className="md:w-full w-20"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="heading-h4 mb-1">Image to Text</h4>
                  <p className="paragraph">
                  The conversion of images into editable text has facilitated the digitization of handwritten notes. This process involves translating handwritten notes from images into a text format, enabling efficient digitalization. Once converted, these notes become editable, allowing for modifications and improvements.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative group xl:h-80 h-auto 2xl:h-64">
              <div className="absolute top-0 ml-2 z-0 bg-[#FBF7ED] xl:h-80 h-auto 2xl:h-64 flex flex-col md:flex-row gap-5 p-4 md:p-8 rounded-2xl border border-[#5F82CC]">
                <div className="bg-[#e9e8e8] rounded-2xl py-3 px-8 flex justify-center items-center">
                  <img
                    src={video_to_text}
                    alt=""
                    className="md:w-full w-20"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="heading-h4 mb-1">Video to Text</h4>
                  <p className="paragraph">
                  The largest language models are employed to convert video content into an easily accessible and editable text format. This system accurately transcribes spoken dialogue, captions, or narrations from videos into written text, providing a comprehensive and searchable archive of valuable information.
                  </p>
                </div>
              </div>
              <div className="bg-[#FBF7ED] xl:h-80 h-auto 2xl:h-64 z-10 ml-2 group-hover:ml-0 group-hover:mt-2 group-hover:mr-2 transition-all duration-300 ease-in-out flex flex-col md:flex-row gap-5 p-4 md:p-8 rounded-2xl border border-[#5F82CC]">
                <div className="bg-[#e9e8e8] rounded-2xl py-3 px-8 flex justify-center items-center">
                  <img
                    src={video_to_text}
                    alt=""
                    className="md:w-full w-20"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="heading-h4 font-primary-medium mb-1">
                  Video to Text
                  </h4>
                  <p className="paragraph">
                  The largest language models are employed to convert video content into an easily accessible and editable text format. This system accurately transcribes spoken dialogue, captions, or narrations from videos into written text, providing a comprehensive and searchable archive of valuable information.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative group xl:h-80 h-auto 2xl:h-64">
              <div className="absolute top-0 ml-2 z-0 bg-[#FBF7ED] xl:h-80 h-auto 2xl:h-64 flex flex-col md:flex-row gap-5 p-4 md:p-8 rounded-2xl border border-[#5F82CC]">
                <div className="bg-[#e9e8e8] rounded-2xl p-5 px-8 flex justify-center items-center">
                  <img
                    src={audio_to_text}
                    alt=""
                    className="md:w-full w-20"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="heading-h4 mb-1">Audio to Text</h4>
                  <p className="paragraph">
                  Our system converts audio to text seamlessly. It involves several steps: taking in audio, extracting features, integrating with LLMs, potentially fine-tuning the model, generating text, and refining for accuracy. This ensures accurate transcription, making spoken content easily accessible.
                  </p>
                </div>
              </div>
              <div className="bg-[#FBF7ED] xl:h-80 h-auto 2xl:h-64 z-10 ml-2 group-hover:ml-0 group-hover:mt-2 group-hover:mr-2 transition-all duration-300 ease-in-out flex flex-col md:flex-row gap-5 p-4 md:p-8 rounded-2xl border border-[#5F82CC]">
                <div className="bg-[#e9e8e8] rounded-2xl p-5 px-8 flex justify-center items-center">
                  <img
                    src={audio_to_text}
                    alt=""
                    className="md:w-full w-20"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="heading-h4 mb-1">Audio to Text</h4>
                  <p className="paragraph">
                  Our system converts audio to text seamlessly. It involves several steps: taking in audio, extracting features, integrating with LLMs, potentially fine-tuning the model, generating text, and refining for accuracy. This ensures accurate transcription, making spoken content easily accessible.
                  </p>
                </div>
              </div>
            </div>
            </div>
              <p className="text-center p-5 xl:p-10 paragraph">Infolks specialises in crafting exceptional solutions using large language models precisely tailored to address a diverse array of industry-specific needs. By attending to every detail and thoroughly comprehending the unique requirements of our clients, Infolks ensures the delivery of flawless Largest Language Model solutions.</p>
       </div>
      </section>
    );
  };
  
  export default Team;
  