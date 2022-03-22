import React from "react";

type Props = {};

const FAQSection = (props: Props) => {
  return (
    <div className="w-full flex justify-center">
      <div className="p-5 sm:p-10 w-7/8 sm:w-4/6 flex flex-col justify-center">
        <p className="my-3 text-center tracking-widest py-5 font-extrabold text-transparent text-4xl bg-clip-text text-white toolbar_gradient_white sm:text_background_gradient">
          FAQ
        </p>
        <div className="faqs">
          <div className="w-full my-3 rounded-3xl">
            <div className="relative w-full py-3  px-10 inline-flex items-center rounded-2xl text-white node_background_box_gradient">
              <span className="absolute font-extrabold text-4xl w-10 sm:w-16 border left-0"></span>
              <p className="px-10 w-full font-bold text-xl">
                How can I create a node ?
              </p>
              <span className="font-extrabold text-4xl">+</span>
            </div>
          </div>
          <div className="w-full my-3 rounded-3xl">
            <div className="relative w-full py-3  px-10 inline-flex items-center rounded-2xl text-white node_background_box_gradient">
              <span className="absolute font-extrabold text-4xl w-10 sm:w-16 border left-0"></span>
              <p className="px-10 w-full font-bold text-xl">
                When can I claim my rewards ?{" "}
              </p>
              <span className="font-extrabold text-4xl">+</span>
            </div>
          </div>
          <div className="w-full my-3 h-[15em] bg-white rounded-3xl">
            <div className="relative w-full py-3  px-10 inline-flex items-center rounded-2xl text-white node_background_box_gradient">
              <span className="absolute font-extrabold text-4xl w-10 sm:w-16 border left-0"></span>
              <p className="px-10 w-full font-bold text-xl">
                Where do the tokens go when I buy a Node ?
              </p>
              <span className="font-extrabold text-4xl">-</span>
            </div>
            <div className="faq_content p-10">
              <p className="text-lg">
                Here is the distribution, once a node is created : 80% are moved
                to the reward pool, 10% tokens to the liquidity pool (5% tokens
                are converted in BNB) and 10% are moved to research &
                development/growth wallet.
              </p>
            </div>
          </div>
          <div className="w-full my-3 rounded-3xl">
            <div className="relative w-full py-3  px-10 inline-flex items-center rounded-2xl text-white node_background_box_gradient">
            <span className="absolute font-extrabold text-4xl w-10 sm:w-16 border left-0"></span>
              <p className="px-10 w-full font-bold text-xl">
                Why did you choose Avalanche & not another Blockchain like
                Ethereum ?
              </p>
              <span className="font-extrabold text-4xl">+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
