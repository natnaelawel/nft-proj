import rotatingPointer from "assets/img/rotate/pp.svg";
import b1Image from "assets/img/rotate/b-1.svg";
import b2Image from "assets/img/rotate/b-2.svg";
import b3Image from "assets/img/rotate/b-3.svg";
import { motion } from "framer-motion";

type Props = {};

const RotatingAnimation = (props: Props) => {
  return (
    <div className="h-full w-full  flex flex-col justify-center">
      <div className="w-full h-full relative flex flex-col items-center justify-center">
        <div className="w-full h-full text-white absolute z-0 flex justify-center items-center">
          <div className="absolute flex items-center">
            <img className="h-full" src={b1Image} alt="rotating logo" />
          </div>
        </div>

        <div className="w-full h-full text-blue-900 absolute z-10 flex items-center justify-center">
          <motion.div
            initial={{
              rotate: -60,
            }}
            animate={{
              rotate: 0,
            }}
            transition={{
              duration: 0.4,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          >
            <div className="p-28">
              <img className="h-full" src={b2Image} alt="rotating logo" />
            </div>
          </motion.div>
        </div>

        <div className="min-w-full min-h-full text-blue-900 absolute flex items-center justify-center z-30">
          <motion.div
            initial={{
              rotate: 60,
            }}
            animate={{
              rotate: 0,
            }}
            transition={{
              duration: 0.4,

              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          >
            <div className="p-10">
              <img className="h-full" src={b3Image} alt="rotating logo" />
            </div>
          </motion.div>
        </div>
        <div className="w-full h-full text-white absolute z-50 flex justify-center items-center">
          <div className="absolute flex items-center">
            <img className="h-full" src={rotatingPointer} alt="rotating logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RotatingAnimation;
