import React from 'react';

const ImageSetup = () => {
  return (
    <div className="bg-[#212B36]  py-20">
      <div className=" text-center  mx-40 flex flex-col gap-24 justify-center">
        <div>
          <h4 className="text-[#fff] [font-family:'Times New Roman',Helvetica] text-4xl font-semibold">
            Wireframes
          </h4>
          <div className="mt-10">
            <p className="text-[#F9F9F9]   text-xl text-left [font-family:'Public Sans',Helvetica] ">
              I turned the traits from my empathy map into a User Persona to
              stay connected with the user during development. Keeping Priya's
              and Kunal’s goals and challenges in mind, the focus was on
              creating a product for them to overcome their challenges. The aim
              is to make the product meet Priya's needs and make her experience
              better.
            </p>
          </div>
        </div>
        <div>
          <img src="/assets/wireframe.svg" />
        </div>
      </div>
      <div className=" text-center  mx-40 flex flex-col gap-24 justify-center">
        <div>
          <h4 className="text-[#fff] [font-family:'Times New Roman',Helvetica] text-4xl font-semibold">
            Visual Design
          </h4>
          <div className="mt-10">
            <p className="text-[#F9F9F9]   text-xl text-left [font-family:'Public Sans',Helvetica] ">
              From the foundational low-fidelity wireframes, I've sculpted a
              cohesive and visually captivating design that breathes life into
              our HRMS solution.
            </p>
          </div>
        </div>
        <div>
          <div className="flex justify-center">
            <img src="/assets/vd-1.svg" />
          </div>

          <div className="flex gap-14 my-16 items-center justify-around">
            <div className="w-50%">
              <img src="/assets/vd-2.svg" />
            </div>
            <div className="w-50%">
              <img src="/assets/vd-3.svg" />
            </div>
          </div>
          <div className="flex gap-14 my-16 items-center justify-around">
            <div className="w-50%">
              <img src="/assets/vd-4.svg" />
            </div>
            <div className="w-50%">
              <img src="/assets/vd-5.svg" />
            </div>
          </div>
          <div className="flex gap-14 my-16 items-center justify-around">
            <div className="w-50% mb-20">
              <img src="/assets/vd-6.svg" />
            </div>
            <div className="w-50%">
              <img src="/assets/vd-7.svg" className="h-[100%] object-contain" />
            </div>
          </div>
          <div className="flex gap-14 my-16 items-center justify-around">
            <div className="w-50%">
              <img src="/assets/vd-9.svg" className="h-[100%] object-contain" />
            </div>
          </div>
          <div className="flex gap-14 my-16 items-center justify-around">
            <div className="w-50%">
              <img
                src="/assets/vd-10.svg"
                className="h-[100%] object-contain"
              />
            </div>
          </div>
        </div>
        <div className=" text-center  mx-40 flex flex-col gap-24 justify-center">
          <div>
            <h4 className="text-[#fff] [font-family:'Times New Roman',Helvetica] text-4xl font-semibold">
              Mobile UI
            </h4>
            <div className="mt-10">
              <p className="text-[#F9F9F9]   text-xl text-left [font-family:'Public Sans',Helvetica] ">
                Building upon the foundational concepts of user-centric design,
                I've meticulously crafted the visual design of our mobile
                application.
              </p>
            </div>
          </div>
          <img src="/assets/mobile-ui.svg" />
        </div>
      </div>
    </div>
  );
};

export default ImageSetup;
