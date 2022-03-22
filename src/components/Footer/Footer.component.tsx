import React from "react";
import logo from "assets/img/Frame.svg";
import twitterLogo from "assets/img/twitter-logo.svg";
import discordLogo from "assets/img/discord-logo.svg";
import telegramLogo from "assets/img/telegram-logo.svg";

type Props = {};

const FooterSection = (props: Props) => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-5/6 flex flex-col sm:p-10">
        <div className="my-3 flex justify-between">
          <p className=" tracking-widest py-5 font-extrabold text-transparent text-4xl bg-clip-text toolbar_gradient_white sm:text_background_gradient uppercase">
            Join our community{" "}
          </p>
          <div className="hidden sm:flex gap-5">
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
          </div>
        </div>
        <div className="w-full my-5">
          <p className="text-white my-2 text-xl">
            Created some nodes and wondering what to do next?
          </p>
          <p className="text-white my-2 text-xl">
            Join your fellow Convexer on Twitter and Discord to keep up with the
            latest news about Convex as well as meet other Convexer that have
            had the courage to step into DeFi 3.0!
          </p>
        </div>
        <div className="w-full flex items-center justify-center my-16 gap-10">
          <div className="h-20">
            <img className="w-full h-full" src={logo} alt="logo" />
          </div>
          <div className=" sm:hidden flex flex-row justify-between gap-3">
            <button className="toolbar_gradient p-3 flex justify-center items-center h-10 w-10 sm:h-12 sm:w-12 rounded-full">
              <img
                className=" ring-white"
                src={twitterLogo}
                alt="twitter-logo"
              />
            </button>
            <button className="toolbar_gradient p-3 flex justify-center items-center h-10 w-10 sm:h-12 sm:w-12  rounded-full">
              <img
                className=" ring-white"
                src={telegramLogo}
                alt="telegram-logo"
              />
            </button>
            <button className="toolbar_gradient p-3 flex justify-center items-center h-10 w-10 sm:h-12 sm:w-12  rounded-full">
              <img
                className=" ring-white"
                src={discordLogo}
                alt="discord-logo"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
