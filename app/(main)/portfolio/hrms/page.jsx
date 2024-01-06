import React from 'react';
import Image from 'next/image';
import Texting from '@/components/Portfolio/Texting';
import ImageSetup from '@/components/Portfolio/ImageSetup';
import PortfolioFooter from '@/components/Portfolio/PortfolioFooter';
// import PortfolioHeading from '../../../../components/Heading/PortfolioHeading';
const Hpage = () => {
  return (
    <>
      <div className="mx-20   mt-20 mb-10 ">
        <div className="flex ml-40  gap-20 items-center">
          <div className=" flex   gap-8 flex-col w-[28rem]">
            <h2 className=" [font-family:'Montserrat-Bold',Helvetica]  text-[#212B36]   text-[60px] font-bold underline underline-offset-[20px] ">
              Texla Culture
            </h2>
            <p className="text-[#c85a74] font-normal text-[24px] ">
              Simplifying HR Management with <br /> Innovative Solutions
            </p>
          </div>
          <div className="">
            <img src="/assets/hrms-1.png" className=" w-[903px] h-[445px]" />
          </div>
        </div>

        <div className=" text-center mt-40 mx-40 flex justify-center">
          <div>
            <Texting title="Problem Statement" />
            <div className="mt-10">
              <p className="text-[#637381]   text-xl text-left [font-family:'Public Sans',Helvetica] ">
                How can we redesign an Human Resource Management System platform
                to address usability issues, streamline HR processes, and
                enhance the overall user experience for HR professionals and
                employees?
              </p>
            </div>
          </div>
        </div>

        <div className="  mt-40 mx-40 ">
          <div className="flex justify-center">
            <Texting title="User Research" />
          </div>
          <div className="mt-10 flex flex-col gap-2">
            <p className="text-[#637381]   text-xl text-left [font-family:'Public Sans',Helvetica] ">
              Q - Walk me through a typical day in your HR tasks.
            </p>
            <p className="text-[#637381]   text-xl text-left [font-family:'Public Sans',Helvetica] ">
              Q - How do you currently manage employee records, attendance, and
              leave?
            </p>
            <p className="text-[#637381]   text-xl text-left [font-family:'Public Sans',Helvetica] ">
              Q - Can you describe your role and responsibilities in HR?{' '}
            </p>
            <p className="text-[#637381]   text-xl text-left [font-family:'Public Sans',Helvetica] ">
              Q - What tasks do you find most time-consuming or challenging in
              your HR role?{' '}
            </p>
            <p className="text-[#637381]   text-xl text-left [font-family:'Public Sans',Helvetica] ">
              Q - What features do you think would significantly improve your HR
              processes?{' '}
            </p>
            <p className="text-[#637381]   text-xl text-left [font-family:'Public Sans',Helvetica] ">
              Q - Would mobile accessibility be valuable in your HR tasks?
            </p>
          </div>
        </div>
        <div className=" text-center mt-40 mx-40 flex justify-center">
          <div>
            <Texting title="Affinity Mapping" />
            <div className="mt-10">
              <p className="text-[#637381]   text-xl text-left [font-family:'Public Sans',Helvetica] ">
                By putting together all the ideas from the interviews, I sorted
                them out using affinity mapping. This helped me see the patterns
                and figure out what's important for users. Now, these clusters
                of ideas are guiding me to create an HRMS that really fits what
                users need.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-14">
          {/* <img src="/assets/hrms-2.png" /> */}
          <Image src="/assets/hrms-2.png" width={900} alt="hrms" height={626} />
        </div>
        <div className=" text-center mt-40 mx-40 flex justify-center">
          <div>
            <Texting title="User Persona" />
            <div className="mt-10">
              <p className="text-[#637381]   text-xl text-left [font-family:'Public Sans',Helvetica] ">
                I turned the traits from my empathy map into a User Persona to
                stay connected with the user during development. Keeping Priya's
                and Kunal’s goals and challenges in mind, the focus was on
                creating a product for them to overcome their challenges. The
                aim is to make the product meet Priya's needs and make her
                experience better.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-20 flex flex-col gap-20">
          <img src="/assets/user-persona-1.svg" />
          <img src="/assets/user-persona.svg" />
        </div>
        <div className=" text-center mt-40 mx-40 flex justify-center">
          <div>
            <Texting title="Empathy Mapping" />
            <div className="mt-10">
              <p className="text-[#637381]   text-xl text-left [font-family:'Public Sans',Helvetica] ">
                By visually charting their thoughts, emotions, and challenges, I
                gained invaluable insights into their unique perspectives. This
                empathetic exploration serves as the foundation, guiding the
                development of HR solutions that resonate with their distinct
                needs and aspirations, fostering a truly user-centered approach.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <img src="/assets/persona.svg" />
        </div>
        <div className=" text-center mt-40 mx-40 flex justify-center">
          <div>
            <Texting title="Site Map" />
            <div className="mt-10">
              <p className="text-[#637381]   text-xl text-left [font-family:'Public Sans',Helvetica] ">
                Drawing inspiration from the wealth of insights gathered through
                extensive research, I meticulously crafted a sitemap that serves
                as the architectural blueprint for our upcoming project. Each
                page and element is thoughtfully placed, informed by the nuanced
                understanding of user needs, challenges, and aspirations
                acquired through interviews, affinity mapping, and empathy
                mapping.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <img src="/assets/site-map.svg" />
        </div>
      </div>
      <ImageSetup />
      <div className="bg-white mb-24">
        <div className="  mt-28 mx-40 ">
          <div className="text-center flex justify-center">
            <Texting title="Conclusion" />
          </div>
          <div className=" grid grid-cols-2 items-center  gap-10 mt-12">
            <div className="grid gap-14">
              <p className="text-[#637381]  leading-10  text-xl text-left [font-family:'Public Sans',Helvetica] ">
                In conclusion, the journey of developing our HRMS solution has
                been a collaborative exploration into the intricate needs and
                challenges faced by HR professionals. From empathetic mapping to
                the creation of wireframes and the final visual design, every
                step has been guided by a commitment to user-centricity. The
                insights gathered from user research have not only shaped the
                architecture of our HRMS but have become the heartbeat of its
                functionality.
              </p>
              <p className="text-[#637381] leading-10   text-xl text-left [font-family:'Public Sans',Helvetica] ">
                Through iterative processes and an unwavering focus on enhancing
                the HR experience, our HRMS is poised to revolutionize the way
                HR tasks are managed. It stands as a testament to the power of
                thorough research, thoughtful design, and a genuine
                understanding of user needs. As we usher in this innovative
                solution, we look forward to empowering HR professionals like
                Priya and Kunal, making their roles more efficient, enjoyable,
                and impactful.
              </p>
            </div>
            <div>
              <img
                className="w-[561px] h-[374px] object-contain"
                src="/assets/conclusion.png"
              />
            </div>
          </div>
        </div>
      </div>
      <PortfolioFooter />
    </>
  );
};

export default Hpage;
