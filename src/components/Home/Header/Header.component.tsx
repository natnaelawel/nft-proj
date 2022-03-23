import HomeAppbar from "../Appbar/Appbar.component";
import RotatingAnimation from "components/common/RotatingAnimation/RotatingAnimation";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="">
      <HomeAppbar />
      <div className="relative w-full flex flex-row justify-center">
        <div className="w-5/6 md:min-h-[42em] flex flex-col-reverse items-center sm:flex-row justify-between">
          <div className="sm:hidden my-5">
            <button
              type="button"
              className="toolbar_gradient px-6 py-3 rounded-full text-white font-bold uppercase"
            >
              Open App
            </button>
          </div>
          <div className="relative my-5 w-full sm:w-1/2 flex justify-center items-center">
            <p className="text-center sm:text-left text-white sm:text-2xl tracking-wider font-Popins">
              A node protocol offering an unbeatable yield potential with it’s
              returns from DeFi protocols across many chains.
            </p>

            
          </div>
          <div className="relative h-full min-h-[30em] w-full sm:w-1/2 flex justify-center items-center">
            <RotatingAnimation />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
