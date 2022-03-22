import rotatingLogo from "assets/img/Group56.svg";
import { motion } from "framer-motion";
import HomeAppbar from "../Appbar/Appbar.component";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="">
      <HomeAppbar/>
      <div className=" w-full flex flex-row justify-center">
        <div className="w-5/6 flex flex-col-reverse items-center sm:flex-row justify-between">
          <div className="sm:hidden my-5">
            <button
              type="button"
              className="toolbar_gradient px-6 py-3 rounded-full text-white font-bold uppercase"
            >
              Open App
            </button>
          </div>
          <div className="my-5 w-full sm:w-2/3 flex justify-center items-center">
            <p className="text-center sm:text-left text-white sm:text-2xl tracking-wider font-Popins">
              A node protocol offering an unbeatable yield potential with it’s
              returns from DeFi protocols across many chains.
            </p>
          </div>
          <div className="w-full sm:w-1/3 h-[20em] sm:h-[30em] flex justify-center items-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 100000,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <img src={rotatingLogo} alt="rotating logo" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
