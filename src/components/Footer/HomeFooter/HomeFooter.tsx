import React from "react";
import logo from "assets/img/Frame.svg";
import twitterLogo from "assets/img/twitter-logo.svg";
import discordLogo from "assets/img/discord-logo.svg";
import telegramLogo from "assets/img/telegram-logo.svg";

type Props = {};

const HomeFooterSection = (props: Props) => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-5/6 flex flex-col-reverse md:flex-row items-center justify-between py-10">
        <p className="md:hidden my-5 text-white text-center text-xl">
          © Copyright 2022 Convex Financial
        </p>
        <div className="my-3 flex justify-between gap-3 items-center divide-x-2">
          <p className="px-3 text-white text-center text-xl">Disclaimer </p>
          <p className="px-3 text-white text-center text-xl">Dapp </p>
          <p className="px-3 text-white text-center text-xl">Contact</p>
        </div>

        <div className="w-full my-5 flex flex-row md:flex-col items-center justify-center ">
          <div className="my-5 h-20">
            <img className="w-full h-full" src={logo} alt="logo" />
          </div>
          <p className="hidden md:block my-5 text-white text-center text-xl">
            © Copyright 2022 Convex Financial{" "}
          </p>

          <div className="md:hidden w-full flex items-center justify-center my-16 gap-1 md:gap-10">
            <button className="toolbar_gradient p-2 md:p-3 flex justify-center items-center h-10 w-10 md:h-12 md:w-12 rounded-full">
              <img
                className=" ring-white"
                src={twitterLogo}
                alt="twitter-logo"
              />
            </button>
            <button className="toolbar_gradient p-3 flex justify-center items-center h-10 w-10 md:h-12 md:w-12  rounded-full">
              <img
                className=" ring-white"
                src={telegramLogo}
                alt="telegram-logo"
              />
            </button>
            <button className="toolbar_gradient p-3 flex justify-center items-center h-10 w-10 md:h-12 md:w-12  rounded-full">
              <img
                className=" ring-white"
                src={discordLogo}
                alt="discord-logo"
              />
            </button>
          </div>
        </div>
        <div className="hidden md:flex w-full items-center justify-center my-16 gap-10">
          <button className="toolbar_gradient p-3 flex justify-center items-center h-10 w-10 md:h-12 md:w-12 rounded-full">
            <img className=" ring-white" src={twitterLogo} alt="twitter-logo" />
          </button>
          <button className="toolbar_gradient p-3 flex justify-center items-center h-10 w-10 md:h-12 md:w-12  rounded-full">
            <img
              className=" ring-white"
              src={telegramLogo}
              alt="telegram-logo"
            />
          </button>
          <button className="toolbar_gradient p-3 flex justify-center items-center h-10 w-10 md:h-12 md:w-12  rounded-full">
            <img className=" ring-white" src={discordLogo} alt="discord-logo" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeFooterSection;
