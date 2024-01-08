'use client';
import React from 'react';
import Footer from '@/components/Header/nav/Footer/index';
import { motion } from 'framer-motion';
import { Email, Instagram, Linkedin, Location } from '@/components/Icons';

const ContactPage = () => {
  return (
    <div className="mt-4 block px-10  py-10 w-[100vw]  ">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, type: 'spring' }}
        className="bg-white flex flex-row gap-20 mt-20  mx-20 justify-center  w-[100vw] px-10"
      >
        <div className="flex relative">
          <div className=" absolute top-0 right-60 [font-family:'Montserrat-Bold',Helvetica] font-bold  text-custom-blue text-[115px] tracking-wide leading-[138.0px]">
            Contact
            <br />
            Me
          </div>
          <motion.img
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-[446px] h-[595px] object-cover"
            alt="Photo"
            src="/assets/contact-1.png"
          />
        </div>
        <div className=" flex  flex-col gap-10">
          <p className=" w-[706px] [font-family:'Public_Sans-Medium',Helvetica] font-medium text-[#212b36]  text-lg tracking-widest leading-10">
            Let's connect and create something amazing together. Whether you
            have a project in mind, want to discuss design ideas, or simply want
            to say hello, I'm just a message away. Feel free to reach out, and
            I'll get back to you as soon as possible. Looking forward to hearing
            from you!
          </p>

          <div className=" flex mt-8 flex-col gap-8">
            <div className=" items-center flex gap-4">
              <Email />
              <p className=" text-[#212B36]">amananyasingh@gmail.com</p>
            </div>
            <div className=" items-center flex gap-4">
              <Location />
              <p className=" text-[#212B36]">New Delhi, India</p>
            </div>
            <div className=" items-center flex gap-4">
              <Linkedin />
              <a className=" text-[#212B36]">Linkedin</a>
            </div>
            <div className=" items-center flex gap-4">
              <Instagram />
              <a
                href="https://www.instagram.com/ananyajadaun/"
                target="_blank"
                className=" text-[#212B36]"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      <div className=" mt-20 mb-10  grid grid-cols-3">
        <div className=" text-sm text-[#212B36]">
          <p>&copy; 2023.Ananya Singh. All rights reserved.</p>
          <p>
            Designed by Ananya Singh |{' '}
            <a href="https://adityayads.vercel.app" target="_blank">
              {' '}
              Developed by Aditya Yaduvanshi
            </a>
          </p>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ContactPage;
