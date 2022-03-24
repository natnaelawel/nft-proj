import React, { ReactChildren, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { motion } from "framer-motion";

type Props = {};

export const ComponentAnimator = ({
  children,
}: {
  children: ReactChildren;
}) => {
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };
  return (
    <motion.div
      animate={{ scale: 2 }}
      transition={{ duration: 0.5 }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

type FAQType = {
  id: number;
  title: string;
  detail: string;
};

const FAQSection = (props: Props) => {
  const faqs: FAQType[] = [
    {
      id: 1,
      title: "How can I create a node ?",
      detail:
        "Here is the distribution, once a node is created : 80% are moved are converted in BNB) and 10% are moved to research & development/growth wallet. ",
    },
    {
      id: 2,
      title: "Where do the tokens go when I buy a Node ?",
      detail:
        "Here is the distribution, once a node is created : 80% are moved are converted in BNB) and 10% are moved to research & development/growth wallet. ",
    },
    {
      id: 3,
      title:
        "Why did you choose Avalanche & not another Blockchain like Ethereum ?",
      detail:
        "Here is the distribution, once a node is created : 80% are moved are converted in BNB) and 10% are moved to research & development/growth wallet. ",
    },
    {
      id: 4,
      title:
        "Why did you choose Avalanche & not another Blockchain like Ethereum ?",
      detail:
        "Here is the distribution, once a node is created : 80% are moved are converted in BNB) and 10% are moved to research & development/growth wallet. ",
    },
  ];

  const SingleFaq = ({ faq }: { faq: FAQType }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => {
      setIsExpanded(!isExpanded);
    };

    return (
      <div className="w-full my-3 bg-slate-900 sm:bg-white rounded-3xl">
        <div className="relative w-full py-5  px-5 lg:px-10 inline-flex items-center rounded-2xl text-white node_background_box_gradient">
          <span className="absolute md:font-extrabold text:lg  md:text-4xl w-10 md:w-16 border left-0"></span>
          <p className="px-8 mx-2 md:px-10 w-full font-bold md:text-xl">{faq.title}</p>
          <button className="text-xl md:text-xl" onClick={handleToggle}>
            {!isExpanded ? <FaPlus /> : <FaMinus />}
          </button>
        </div>
        {isExpanded && (
          <motion.div
            variants={{
              open: {
                opacity: 1,
              },
              closed: {
                opacity: 0,
              },
            }}
            transition={{
              duration: 3,
            }}
          >
            <div className="faq_content p-10 text-white sm:text-black">
              <p className="sm:text-lg">{faq.detail}</p>
            </div>
          </motion.div>
        )}
      </div>
    );
  };

  return (
    <div className="w-full flex justify-center">
      <div className="p-5 lg:p-10 w-7/8 sm:w-5/6 lg:w-2/3  flex flex-col justify-center">
        <p className="my-3 text-center tracking-widest py-5 font-extrabold text-transparent text-4xl bg-clip-text text-white toolbar_gradient_white sm:text_background_gradient">
          FAQ
        </p>
        <div className="faqs">
          {faqs &&
            faqs.map((faq) => {
              return <SingleFaq faq={faq} key={faq.id} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
