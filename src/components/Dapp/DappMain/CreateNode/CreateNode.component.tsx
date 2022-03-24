// import vipImage from "assets/img/Vip.svg";
import ethImage from "assets/img/eth1.svg";
import pigImage from "assets/img/blue_piggy.svg";
import ashton1Image from "assets/img/ashton/ashton_coin.svg";
import crypto1Image from "assets/img/piggy/crypto1.svg";
import crypto2Image from "assets/img/piggy/crypto2.svg";
import piggyImage from "assets/img/piggy/piggy.svg";
import ashton2Image from "assets/img/ashton/shadow.svg";
import vipImage from "assets/img/vip/vip.svg";
import vip1Image from "assets/img/vip/vip-1.svg";
import { motion } from "framer-motion";
type Props = {};

const CreateNodeSection = (props: Props) => {
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

  const AshtonAnimation = () => {
    return (
      <div className="w-full min-h-[12em]">
        <motion.div
          initial={{
            y: -100,
          }}
          animate={{
            y: -30,
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
            bounce: 1,
          }}
        >
          <div className="absolute p-10 lg:p-5  w-full sm:mt-10 flex justify-center items-center ">
            <img
              className=" md:w-full md:h-full"
              src={ashton1Image}
              alt="cpu image"
            />
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
      <div className="rounded-3xl p-1.5 w-full node_background_box_white sm:node_background_box_gradient h-full">
        <div className="flex w-full h-full flex-row gap-3 sm:flex-col items-center justify-center sm:justify-end bg:white md:text-white">
          <div className=" flex flex-col justify-center items-center gap-2 py-3">
            <div className="relative w-full min-h-[10em] sm:min-h-[15em]">
              <AshtonAnimation />
            </div>
            <p className="my-2 text-center text-4xl font-bold">Ashton</p>
            <p className="my-1 text-lg sm:text-xl text-center">
              10 CON$ per node
            </p>
            <p className="my-1 text-lg sm:text-xl  text-center">
              EARN 0.40 CON$ per node
            </p>
            <button className="align-bottom px-5 py-2 sm:mt-5 sm:py-2 sm:px-5 node_background_box_gradient sm:node_background_box_none sm:rounded-2xl sm:border-2 text-white sm:text-lg sm:font-bold">
              CREATE NODE
            </button>
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
      <div className="rounded-3xl p-1.5 w-full node_background_box_white sm:node_background_box_gradient h-full">
        <div className="flex w-full h-full flex-row gap-3 sm:flex-col items-center justify-center sm:justify-end bg:white md:text-white">
          <div className=" h-full flex flex-col justify-center items-center gap-2  py-3">
            <div className="relative w-full min-h-[10em] sm:min-h-[15em]">
              <VipAnimation />
            </div>
            <p className="my-2 text-center text-4xl font-bold">SATINE</p>
            <p className="my-1 text-lg sm:text-xl  text-center">
              50 CON$ per node
            </p>
            <p className="my-1 text-lg sm:text-xl  text-center">
              EARN 2.5 CON$ per node
            </p>
            <button className="align-bottom px-5 py-2 sm:mt-5 sm:py-2 sm:px-5 node_background_box_gradient sm:node_background_box_none sm:rounded-2xl sm:border-2 text-white sm:text-lg sm:font-bold">
              CREATE NODE
            </button>
          </div>
        </div>
      </div>
    );
  };

  const PiggyAnimation = () => {
    return (
      <div className="h-full w-full flex items-center justify-center  relative">
        <div className="absolute w-full bottom-0 sm:mt-10 p-5 flex justify-center items-center z-0">
          <img className="w-full h-full" src={piggyImage} alt="cpu image" />
        </div>
        <div className=" absolute -bottom-8 sm:bottom-10 w-full h-full z-20">
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
            <div className="w-8 left-16  absolute sm:mt-10 flex justify-center items-start h-[5em] sm:h-[10em] z-10">
              <img
                className="w-full h-full"
                src={crypto2Image}
                alt="cpu image"
              />
            </div>
          </motion.div>
        </div>
        <div className="absolute -bottom-0 sm:bottom-10 w-full h-full z-10">
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
            <div className="absolute left-20  w-8 sm:mt-10 flex justify-center items-start h-[5em] sm:h-[10em] z-10">
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
      <div className="rounded-3xl p-1.5 w-full node_background_box_white sm:node_background_box_gradient h-full">
        <div className="flex w-full h-full flex-row gap-3 sm:flex-col items-center justify-center sm:justify-end bg:white md:text-white">
          <div className=" flex flex-col items-center gap-2 py-3">
            <div className="relative w-full min-h-[10em] md:min-h-[15em]">
              <div className="absolute -bottom-10 lg:bottom-auto w-full h-full flex items-center justify-center">
                <PiggyAnimation />
              </div>
            </div>
            <p className="my-2 text-center text-4xl font-bold">CLEYEN</p>
            <p className="my-1 text-lg sm:text-xl text-center">
              30 CON$ per node
            </p>
            <p className="my-1 text-lg sm:text-xl text-center">
              EARN 1.40 CON$ per node
            </p>
            <button className="px-5 py-2 sm:mt-5 sm:py-2 sm:px-5 node_background_box_gradient sm:node_background_box_none sm:rounded-2xl sm:border-2 text-white sm:text-lg sm:font-bold">
              CREATE NODE
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="toolbar_gradient p-0.5 rounded-2xl my-10">
        <div className=" bg-slate-900 rounded-2xl min-w-full flex flex-col items-center justify-center min-h-[42em]">
          <p className="my-3 tracking-widest py-5 font-extrabold text-transparent text-center text-4xl bg-clip-text text_background_gradient">
            CREATE A NODE
          </p>

          <div className="w-full  my-5 flex flex-col sm:flex-row items-center justify-center">
            <div className="w-full md:w-11/12 xl:w-5/6 text-gray-600 sm:text-white px-1 md:px-2 xl:px-5 2xl:px-24  my-5 gap-y-10 flex flex-col sm:flex-row justify-center gap-2 sm:gap-2 xl:gap-5 2xl:gap-10 ">
              <div className="w-full">
                <AshtonComponent />
              </div>
              <div className="w-full">
                <PigComponent />
              </div>
              <div className="w-full">
                <VipComponent />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-2  md:p-10 xl:p-16 flex flex-col md:flex-row md:items-start gap-5 xl:gap-16">
        <div className="w-full md:w-1/2">
          <p className="my-2 text-white font-bold">
            Create a $CON Node with CON$ tokens to earn CON$ rewards.
          </p>
          <p className="my-2 text-white text-lg md:tracking-wider">
            Rewards calculations are based on many factors, including the number
            of nodes, node revenue, token price, and protocol revenue, and they
            are variable.
          </p>
          <div className="">
            <p className="my-5 text-white font-bold text-xl">
              BUY $CON TOKEN IF YOU HAVEN’T
            </p>
            <button
              type="button"
              className="my-2 toolbar_gradient px-6 py-3 rounded-full text-white font-bold uppercase"
            >
              BUY $CON
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 md:px-10">
          <input
            type="text"
            placeholder="Name your code"
            className="my-5 md:py-3 md:px-3 block w-full text-sm text-slate-500 rounded-lg  bg-transparent"
          />

          <p className="my-3  py-3 text-transparent text-center md:text-left text-lg bg-clip-text text_background_gradient">
            Please approve the contract before creating a node if this is your
            first interaction.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreateNodeSection;
