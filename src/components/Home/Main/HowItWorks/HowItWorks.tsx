import React from "react";
import vipImage from "assets/img/vip_one.svg";
import ethImage from "assets/img/eth1.svg";
import pigImage from "assets/img/blue_piggy.svg";
type Props = {};

const HowItWorksSection = (props: Props) => {
  const nodes = [
    {
      img: ethImage,
      title: "Ashton",
      subtitle1: "10 CON$ per node",
      subtitle2: "EARN 0.40 CON$ per node",
    },
    {
      img: pigImage,
      title: "CLEYEN",
      subtitle1: "30 CON$ per node",
      subtitle2: "EARN 1.40 CON$ per node",
    },
    {
      img: vipImage,
      title: "SATINE",
      subtitle1: "50 CON$ per node",
      subtitle2: "EARN 2.5 CON$ per node",
    },
  ];
  return (
    <div className="toolbar_gradient w-full flex justify-center bg-slate-900 ">
      <div className="p-10 w-7/8 sm:w-5/6 flex flex-col justify-center">
        <div className="step1 my-5 text-center text-white">
          <p className="my-3 tracking-widest py-5 font-extrabold text-transparent text-4xl bg-clip-text text-white">
            HOW IT WORKS?
          </p>
          <div className="step1 my-2">
            <p className="text-2xl font-bold">STEP:1</p>
            <p className="text-xl py-5">
              Buy at least <span className="font-bold">5 $CON</span>
            </p>
            <button
              type="button"
              className="my-2 bg-white px-6 py-3 rounded-full text-white font-bold uppercase"
            >
              <p className="tracking-widest font-extrabold text-transparent bg-clip-text text-white text_background_gradient">
                BUY $CON
              </p>
            </button>
          </div>
        </div>
        <div className="step2 text-center text-white ">
          <p className="text-2xl font-bold">STEP:2</p>
          <p className="text-xl py-5">
            Create your Node in exchange of your tokens
          </p>
          <div className=" sm:px-40 my-5 flex flex-col sm:flex-row justify-center gap-5 sm:gap-16 ">
            {nodes &&
              nodes.map((node) => {
                return (
                  <div className="rounded-3xl p-1.5 w-full sm:w-1/3 node_background_box_white">
                    <div className="flex flex-row gap-3 sm:flex-col items-center sm:justify-end bg:white ">
                      <div className="sm:mt-16 flex justify-center items-center h-[5em] sm:h-[10em]">
                        <img
                          className="w-full h-full"
                          src={node.img}
                          alt="cpu image"
                        />
                      </div>
                      <div className="flex flex-col items-center gap-2 text-black py-5">
                        <p className="  my-2 text-center text-xl sm:text-4xl font-bold">
                          {node.title}
                        </p>
                        <p className="my-1 text-sm sm:text-base text-center">
                          {node.subtitle1}
                        </p>
                        <p className="my-1 text-sm sm:text-base  text-center">
                          {node.subtitle2}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>

          <button
            type="button"
            className="my-3 bg-white px-6 py-3 rounded-full text-white font-bold uppercase"
          >
            <p className="tracking-widest font-extrabold text-transparent bg-clip-text text-white text_background_gradient">
              BUY $CON
            </p>
          </button>
        </div>
        <div className="step3 my-3 text-center text-white">
          <p className="text-2xl font-bold">STEP:3</p>
          <p className="text-2xl py-5">
            Earn daily rewards from your node & claim your money whenever you
            want Buy at least
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSection;
