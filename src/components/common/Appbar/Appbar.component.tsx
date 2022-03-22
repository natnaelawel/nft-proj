import logo from "assets/img/Frame.svg";
import twitterLogo from "assets/img/twitter-logo.svg";
import discordLogo from "assets/img/discord-logo.svg";
import telegramLogo from "assets/img/telegram-logo.svg";
import newLogo from "assets/img/NewLogo.svg";

type Props = {
  from_page?: string;
};

const Appbar = (props: Props) => {
  return (
    <div className="border w-full flex flex-row justify-center">
      <div className="py-10 flex flex-row justify-between w-5/6">
        <div className="border basis-1/2">
          <img src={props.from_page === "home" ? newLogo : logo} alt="logo" />
        </div>
        <div className=" px-16 py basis-1/2 flex flex-row justify-end gap-5 items-center">
          {props.from_page ? (
            <div className="flex gap-5">
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
          ) : (
            <div className="invisible sm:visible flex gap-5">
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
              <div>
                <button
                  type="button"
                  className="toolbar_gradient px-6 py-3 rounded-full text-white font-bold uppercase"
                >
                  {props.from_page ? "Open App" : "Connect"}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Appbar;
