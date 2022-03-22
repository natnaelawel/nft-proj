import React from "react";
import rpcIcon from "assets/img/rpc.svg";
import trayFillIcon from "assets/img/trayfill.svg";

type Props = {};

const NodesSection = (props: Props) => {
  return (
    <div className="w-5/6">
      <div className="toolbar_gradient p-0.5 rounded-2xl my-10">
        <div className="bg-slate-900 rounded-2xl min-w-full min-h-full flex flex-row sm:flex-col items-center sm:divide-y divide-slate-600">
          <div className="sm:w-full flex flex-col sm:flex-row sm:items-center justify-between">
            <div className="sm:w-1/6 p-4 text-white">
              <p className="font-bold text-xl">My Nodes</p>
            </div>
            <div className="sm:w-1/6 p-4 text-white">
              <p className="font-bold text-xl">Type</p>
            </div>
            <div className="sm:w-1/6 p-4 flex items-center text-white">
              <img src={rpcIcon} alt="rpc icon" />
              <p className="mx-3 font-bold text-xl">RPC</p>
            </div>
            <div className="sm:w-1/6 p-4 text-white">
              <p className="font-bold text-xl">Due Date</p>
            </div>{" "}
            <div className="sm:w-1/6 p-4 text-white">
              <p className="font-bold text-xl">Rewards</p>
            </div>
            <div className="sm:w-1/6 p-4 text-white">
              <button className="border-2 border-slate-500 bg-transparent text-white px-2 sm:px-8 sm:py-3 rounded-lg">
                Claim All
              </button>
            </div>
          </div>
          <div className=" w-full sm:my-5 flex flex-row justify-center gap-16 items-center h-[15em]">
            <div className="">
              <img src={trayFillIcon} alt="no data icon" />
              <p className="py-5 uppercase text-center text-white text-xl font-bold">
                No Data
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NodesSection;
