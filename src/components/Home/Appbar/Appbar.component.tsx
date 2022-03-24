import logo from "assets/img/Frame.svg";
import twitterLogo from "assets/img/twitter-logo.svg";
import discordLogo from "assets/img/discord-logo.svg";
import telegramLogo from "assets/img/telegram-logo.svg";
import newLogo from "assets/img/NewLogo.svg";
import CustomLink from "components/common/NavLink.component";
import { motion } from "framer-motion";

type Props = {};

const HomeAppbar = (props: Props) => {
  const HomeLogo = () => {
    return (
      <div className="w-full">
        <CustomLink to="#">
          <motion.div
            initial={{
              x: 0,
            }}
            animate={{
              x: 30,
            }}
            transition={{
              duration: 0.7,
              repeat: Infinity,
              ease: "linear",
              repeatType: "reverse"
            }}
          >
            <CustomLink to="#">
              <img
                className="hidden md:block w-full h-full"
                src={newLogo}
                alt="logo"
              />
            </CustomLink>
            <img src={logo} className="md:hidden  w-full h-full" alt="logo" />
          </motion.div>
        </CustomLink>
      </div>
    );
  };

  return (
    <div className="w-full flex flex-row justify-center">
      <div className="w-full px-3 py-8 sm:py-10 flex flex-row justify-between items-center sm:w-5/6 ">
        <div className="w-1/2 md:w-1/3 lg:w-1/4">
          <HomeLogo />
        </div>
        <div className="sm:px-16 py w-1/2 flex flex-row justify-end gap-6 items-center">
          <div className="hidden md:flex gap-1 lg:gap-5 items-center">
            <button className="toolbar_gradient p-3 flex justify-center items-center h-12 w-12 rounded-full">
              <img
                className=" ring-white"
                src={twitterLogo}
                alt="twitter-logo"
              />
            </button>
            <button className="toolbar_gradient p-3 flex justify-center items-center h-12 w-12 rounded-full">
              <img
                className=" ring-white"
                src={telegramLogo}
                alt="telegram-logo"
              />
            </button>
            <button className="toolbar_gradient p-3 flex justify-center items-center h-12 w-12 rounded-full">
              <img
                className=" ring-white"
                src={discordLogo}
                alt="discord-logo"
              />
            </button>
            <div className="flex justify-center min-w-[10em]">
              <button
                type="button"
                className="hidden sm:block toolbar_gradient px-6 py-3 rounded-full text-white font-bold uppercase"
              >
                Open App
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAppbar;
