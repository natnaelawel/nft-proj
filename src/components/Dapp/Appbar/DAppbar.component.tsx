import logo from "assets/img/Frame.svg";
import twitterLogo from "assets/img/twitter-logo.svg";
import discordLogo from "assets/img/discord-logo.svg";
import telegramLogo from "assets/img/telegram-logo.svg";
import CustomLink from "components/common/NavLink.component";

type Props = {};

const DappAppbar = (props: Props) => {
  return (
    <div className="w-full flex flex-row justify-center">
      <div className="py-10 flex flex-row justify-between w-5/6">
        <div className="w-1/2">
          <CustomLink to="/">
            <img src={logo} alt="logo" />
          </CustomLink>
        </div>
        <div className="px-5 sm:px-16 w-1/2 flex flex-row justify-end gap-5 items-center">
          <div className="flex gap-5">
            <div className="hidden md:flex gap-5">
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

            <div className="">
              <button
                type="button"
                className="toolbar_gradient px-6 py-3 rounded-full text-white font-bold uppercase"
              >
                Connect
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DappAppbar;
