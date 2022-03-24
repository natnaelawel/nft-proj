import ashton1Image from "assets/img/ashton/ashton_coin.svg";
import crypto1Image from "assets/img/piggy/crypto1.svg";
import crypto2Image from "assets/img/piggy/crypto2.svg";
import piggyImage from "assets/img/piggy/piggy.svg";
import ashton2Image from "assets/img/ashton/shadow.svg";
import vipImage from "assets/img/vip/vip.svg";
import vip1Image from "assets/img/vip/vip-1.svg";
import { motion } from "framer-motion";
type Props = {};

const HowItWorksSection = (props: Props) => {
  const AshtonAnimation = () => {
    return (
      <div className="w-full min-h-[12em]">
        <motion.div
          initial={{
            y: -100,
          }}
          animate={{
            y: 10,
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
            bounce: 1,
          }}
        >
          <div className="absolute w-full sm:mt-10 flex justify-center items-center ">
            <img className="w-full h-full" src={ashton1Image} alt="cpu image" />
          </div>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
            bounce: 1,
          }}
        >
          <div className="absolute w-full bottom-0 sm:mt-10 flex justify-center items-center">
            <img className="w-full h-full" src={ashton2Image} alt="cpu image" />
          </div>
        </motion.div>
      </div>
    );
  };

  const AshtonComponent = () => {
    return (
      <div className="rounded-3xl p-1.5 sm:text_background_box">
        <div className="w-full flex flex-row gap-3 sm:flex-col items-center justify-center sm:justify-end bg:white node_background_box_white">
          <div className="flex flex-col items-center gap-2 py-3">
            <div className="relative w-full min-h-[15em] ">
              <AshtonAnimation />
            </div>
            <p className="  my-2 text-center text-xl sm:text-4xl font-bold">
              Ashton
            </p>
            <p className="my-1 text-sm sm:text-base text-center">
              10 CON$ per node
            </p>
            <p className="my-1 text-sm sm:text-base  text-center">
              EARN 0.40 CON$ per node
            </p>
          </div>
        </div>
      </div>
    );
  };

  const VipAnimation = () => {
    return (
      <div className="w-full min-h-[12em]">
        <div className="w-full h-full text-white absolute z-10 flex justify-center items-center">
          <div className="absolute flex items-center">
            <img className="h-full" src={vipImage} alt="rotating logo" />
          </div>
        </div>

        <div className="w-full h-full text-blue-900 absolute z-0 flex items-center justify-center">
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div className="">
              <img className="h-full" src={vip1Image} alt="rotating logo" />
            </div>
          </motion.div>
        </div>
      </div>
    );
  };

  const VipComponent = () => {
    return (
      <div className="rounded-3xl p-1.5 w-full sm:text_background_box">
        <div className="w-full flex flex-row gap-3 sm:flex-col items-center justify-center sm:justify-end bg:white node_background_box_white">
          <div className=" flex flex-col items-center gap-2  py-3">
            <div className="relative w-full min-h-[15em]">
              <VipAnimation />
            </div>
            <p className="  my-2 text-center text-xl sm:text-4xl font-bold">
              SATINE
            </p>
            <p className="my-1 text-sm sm:text-base text-center">
              50 CON$ per node
            </p>
            <p className="my-1 text-sm sm:text-base  text-center">
              EARN 2.5 CON$ per node
            </p>
          </div>
        </div>
      </div>
    );
  };

  const PiggyAnimation = () => {
    return (
      <div className="min-h-[12em]">
        <div className="absolute w-full bottom-0 sm:mt-10 flex justify-center items-center z-0">
          <img className="w-full h-full" src={piggyImage} alt="cpu image" />
        </div>
        <div className="w-full h-full z-20">
          <motion.div
            initial={{
              y: -100,
            }}
            animate={{
              y: -80,
            }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
              bounce: 1,
            }}
          >
            <div className="w-8 left-14 -bottom-32 sm:bottom-auto absolute sm:mt-10 flex justify-center items-start h-[5em] sm:h-[10em] z-10">
              <img
                className="w-full h-full"
                src={crypto2Image}
                alt="cpu image"
              />
            </div>
          </motion.div>
        </div>
        <div className="w-full h-full z-10">
          <motion.div
            initial={{
              y: -100,
              rotate: 2,
            }}
            animate={{
              y: -35,
            }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
              bounce: 1,
            }}
          >
            <div className="absolute left-16 -bottom-36 sm:bottom-auto w-8 sm:mt-10 flex justify-center items-start h-[5em] sm:h-[10em] z-10">
              <img
                className="w-full h-full"
                src={crypto1Image}
                alt="cpu image"
              />
            </div>
          </motion.div>
        </div>
      </div>
    );
  };
  const PigComponent = () => {
    return (
      <div className="rounded-3xl p-1.5 w-full sm:text_background_box">
        <div className="w-full flex flex-row gap-3 sm:flex-col items-center justify-center sm:justify-end bg:white node_background_box_white">
          <div className=" flex flex-col items-center gap-2 py-3">
            <div className="relative w-full min-h-[15em]">
              <PiggyAnimation />
            </div>
            <p className="  my-2 text-center text-xl sm:text-4xl font-bold">
              CLEYEN
            </p>
            <p className="my-1 text-sm sm:text-base text-center">
              30 CON$ per node
            </p>
            <p className="my-1 text-sm sm:text-base  text-center">
              EARN 1.40 CON$ per node
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="toolbar_gradient w-full flex justify-center bg-slate-900 ">
      <div className="p-10 sm:p-5 lg:p-10 w-7/8 sm:w-5/6 flex flex-col justify-center">
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
          <div className="relative h-full px-8 sm:px-0 text-gray-600 lg:px-8 xl:px-16 2xl:px-24  my-5 flex flex-col sm:flex-row justify-center items-center gap-2 md:gap-5 xl:gap-10 2xl:gap-20">
            <div className="w-full lg:w-1/3 h-full">
              <AshtonComponent />
            </div>
            <div className="w-full lg:w-1/3 h-full">
              <PigComponent />
            </div>
            <div className="w-full lg:w-1/3 h-full">
              <VipComponent />
            </div>
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
