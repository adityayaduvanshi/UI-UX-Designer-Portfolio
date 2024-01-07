'use client';
import React from 'react';
import Image from 'next/image';
import Texting from '@/components/Portfolio/Texting';
import ImageSetup from '@/components/Portfolio/ImageSetup';
import PortfolioFooter from '@/components/Portfolio/PortfolioFooter';
import {
  Customer1,
  Customer2,
  Customer3,
  Customer4,
} from '@/components/CustomerSvgs';
import { motion } from 'framer-motion';
import ImageSetup2 from '@/components/Portfolio/ImageSetup2';
// import PortfolioHeading from '../../../../components/Heading/PortfolioHeading';
const Hpage = () => {
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   (async () => {
  //     const LocomotiveScroll = (await import('locomotive-scroll')).default;
  //     const locomotiveScroll = new LocomotiveScroll();

  //     setTimeout(() => {
  //       setIsLoading(false);
  //       document.body.style.cursor = 'default';
  //       window.scrollTo(0, 0);
  //     }, 2000);
  //   })();
  // }, []);
  return (
    <div>
      <div className="mx-20      block   mt-20 mb-10 ">
        <div className="flex  gap-20 items-center">
          <div className=" flex   gap-8 flex-col w-[28rem]">
            <h2 className=" [font-family:'Montserrat-Bold',Helvetica]  text-[#212B36]   text-[60px] font-bold underline underline-offset-[20px] ">
              e Build Bazaar
            </h2>
            <p className="text-[#c85a74] font-normal text-[24px] ">
              Revolutionizing Construction Commerce
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, type: 'spring' }}
            className=" relative w-[900px] h-[440px]"
          >
            <Image
              src="/assets/ebazar-1.png"
              alt="ebazar"
              fill
              objectFit=" contain"
            />
          </motion.div>
        </div>

        <div className=" text-center mt-40 mx-40 flex justify-center">
          <div>
            <Texting title="Problem Statement" />
            <div className="mt-10 flex flex-col  gap-4">
              <p className="text-[#637381]   text-xl text-left [font-family:'Public Sans',Helvetica] ">
                eBB, our go-to hub for all things construction, found itself at
                a crossroads when we noticed a drop in customer retention and a
                spike in queries about orders and shipments. It was time for a
                rethink. The goal? A user-friendly redesign that not only caters
                to our loyal users but also extends a warm welcome to those
                joining the eBB family.
              </p>
              <p className="text-[#637381]   text-xl text-left [font-family:'Public Sans',Helvetica] ">
                An interesting twist? Many of the vendors are seasoned pros,
                more accustomed to traditional shopping. That realization
                underscored the need for a website that speaks to everyone the
                tech-savvy and those who prefer a stroll through the market.
              </p>
            </div>
          </div>
        </div>

        <div className="  mt-40 mx-40 ">
          <div className="flex justify-center">
            <Texting title="My Role" />
          </div>
          <div className="mt-10 flex flex-col gap-4">
            <p className="text-[#637381]   text-xl text-left [font-family:'Public Sans',Helvetica] ">
              I redesigned key pages like Home, Track Order, Product Info, and
              Cart. I also collaborated with Content Strategist and Product
              Manager, bringing diverse perspectives to the table.
            </p>
            <p className="text-[#637381]   text-xl text-left [font-family:'Public Sans',Helvetica] ">
              To ensure we're hitting the mark, I kicked off with some in-depth
              research and interviews with eBB customers, those who've been with
              eBB for over a year, digging into their experiences and pain
              points, to address real concerns and enhance the overall user
              experience.
            </p>
          </div>
        </div>
        <div className=" text-center mt-40 mx-40 flex justify-center">
          <div>
            <Texting title="Customer Insights" />
            <div className="my-20 grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, x: -400 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, type: 'spring' }}
                className=" flex flex-col  gap-4 items-center"
              >
                <Customer1 />
                <p className="text-[#637381]    text-left [font-family:'Public Sans',Helvetica] ">
                  Some find navigating through the extensive product range a bit
                  overwhelming. Simplifying categories or offering a quick
                  search feature could make their journey smoother.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 400 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, type: 'spring' }}
                className=" flex flex-col  gap-4 items-center"
              >
                <Customer2 />
                <p className="text-[#637381]     text-left [font-family:'Public Sans',Helvetica] ">
                  Customers expressed a common desire for more immediate and
                  accurate order tracking. Customers expressed a common desire
                  for more immediate and accurate order tracking.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -400 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 2, type: 'spring' }}
                className=" flex flex-col  gap-4 items-center"
              >
                <Customer3 />
                <p className="text-[#637381]   text-left [font-family:'Public Sans',Helvetica] ">
                  Long-time users pointed out that having richer and more
                  detailed product information would greatly assist in making
                  informed decisions. They appreciate knowing the nitty-gritty
                  details before hitting 'Add to Cart.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 400 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 2, type: 'spring' }}
                className=" flex flex-col  gap-4 items-center"
              >
                <Customer4 />
                <p className="text-[#637381]     text-left [font-family:'Public Sans',Helvetica] ">
                  Long-time eBB enthusiasts expressed a desire for a more
                  personalized touch. They suggested features like personalized
                  product recommendations based on their purchase history,
                  creating a more tailored shopping experience.
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        <div className=" text-center mt-40 mx-40 flex justify-center">
          <div>
            <Texting title="REDESIGN" />
            <div className="mt-10">
              <p className="text-[#637381]   text-xl text-left [font-family:'Public Sans',Helvetica] ">
                Through user interviews, a common theme emerged — the extensive
                range of products and services on eBB left many users feeling a
                bit lost in the clicks. This realization led us to a specific
                screen that demanded a redesign, aiming to present everything in
                a clear and organized manner, avoiding the previous hodgepodge
                layout. Let's dive into how we transformed this screen for a
                more seamless user experience.
              </p>
            </div>
          </div>
        </div>
      </div>
      <ImageSetup2 />
      <div className="bg-white mb-24">
        <div className="  mt-28 mx-40 ">
          <div className="text-center flex justify-center">
            <Texting title="The Impact" />
          </div>
          <div className="flex  justify-center  gap-10 mt-12">
            <div className=" ">
              <p className="text-[#637381]  leading-10  text-xl text-left [font-family:'Public Sans',Helvetica] ">
                Following the implementation of the redesigned website, an
                analysis of user behavioral patterns was conducted. The
                comparison with pre-redesign data aimed to understand the
                tangible impact the redesign has had on overall product
                engagement and user interactions.
              </p>
              <ul className=" mt-6">
                <li className="list-disc">
                  <p className="text-[#637381]  leading-10   text-left [font-family:'Public Sans',Helvetica] ">
                    <span className=" text-[#212B36] font-bold">
                      Improved Text Clarity -
                    </span>{' '}
                    85% of users reported improved text clarity, stating that
                    the reorganized layout made it easier to read and find
                    information.
                  </p>
                </li>
                <li className="list-disc">
                  <p className="text-[#637381]  leading-10   text-left [font-family:'Public Sans',Helvetica] ">
                    <span className=" text-[#212B36] font-bold">
                      Enhanced Button Visibility -
                    </span>{' '}
                    Click-through rates on buttons increased by 20%, indicating
                    enhanced visibility and intuitiveness.
                  </p>
                </li>
                <li className="list-disc">
                  <p className="text-[#637381]  leading-10   text-left [font-family:'Public Sans',Helvetica] ">
                    <span className=" text-[#212B36] font-bold">
                      Reduced Bounce Rates -
                    </span>{' '}
                    Bounce rates decreased by 15%, suggesting that users were
                    more engaged with the content and less likely to leave the
                    page immediately.
                  </p>
                </li>
                <li className="list-disc">
                  <p className="text-[#637381]  leading-10   text-left [font-family:'Public Sans',Helvetica] ">
                    <span className=" text-[#212B36] font-bold">
                      Positive Feedback on Information Organization -
                    </span>{' '}
                    92% of users expressed satisfaction with the categorized
                    information on the Services page, stating that the division
                    into four sections simplified their search for specific
                    details.
                  </p>
                </li>
                <li className="list-disc">
                  <p className="text-[#637381]  leading-10   text-left [font-family:'Public Sans',Helvetica] ">
                    <span className=" text-[#212B36] font-bold">
                      Increased Time-on-Page -
                    </span>{' '}
                    The average time users spent on both Product and Services
                    pages saw a 25% increase, indicating that the redesign not
                    only retained user interest but also encouraged prolonged
                    exploration.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <PortfolioFooter next="" />
    </div>
  );
};

export default Hpage;
