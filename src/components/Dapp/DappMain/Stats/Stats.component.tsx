import repeatIcon from "assets/img/repeat.svg";
import cpuIcon from "assets/img/cpu.svg";
type Props = {};

const StatsSection = (props: Props) => {
  return (
    <div className="w-full flex flex-col sm:flex-row justify-between sm:gap-10 items-center">
      <div className="toolbar_gradient p-0.5 w-full sm:w-1/3 rounded-2xl sm:h-[19rem] flex flex-col items-center min-h-full">
        <div className="px-5 bg-slate-900 rounded-2xl w-full  min-h-full flex flex-col justify-center">
          <div className="py-5 flex flex-row gap-5">
            <img src={cpuIcon} alt="cpu image" />
            <p className="text-white">My Nodes: /100</p>
          </div>
        </div>
      </div>
      <div className="toolbar_gradient p-0.5 my-5 w-full sm:w-1/3 rounded-2xl h-[19rem]">
        <div className="px-5 py-5 bg-slate-900 rounded-2xl w-full h-full">
          <div className="py-5 flex flex-row gap-5">
            <img src={cpuIcon} alt="cpu image" />
            <p className="text-white">Total nodes: 0</p>
          </div>
          <div className="py-5 flex flex-row gap-5">
            <img src={cpuIcon} alt="cpu image" />
            <p className="text-white">Ashton: 0</p>
          </div>
          <div className="py-5 flex flex-row gap-5">
            <img src={cpuIcon} alt="cpu image" />
            <p className="text-white">Cleyeb: 0</p>
          </div>
          <div className="py-5 flex flex-row gap-5">
            <img src={cpuIcon} alt="cpu image" />
            <p className="text-white">Catine: 0</p>
          </div>
        </div>
      </div>
      <div className="toolbar_gradient p-0.5 w-full sm:w-1/3 rounded-2xl sm:h-[19rem]">
        <div className="sm:h-full px-5 py-5 bg-slate-900 rounded-2xl w-full">
          <div className="py-5 flex flex-row gap-5">
            <img src={repeatIcon} alt="cpu image" />
            <p className="text-white">Rewards</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
