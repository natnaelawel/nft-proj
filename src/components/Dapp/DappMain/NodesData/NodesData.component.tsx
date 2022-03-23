import React from "react";
import rpcIcon from "assets/img/rpc.svg";
import trayFillIcon from "assets/img/trayfill.svg";

type Props = {};

const NodesSection = (props: Props) => {
  return (
    <div className="w-5/6">
      <div className="toolbar_gradient p-0.5 rounded-2xl my-10">
        <div className=" bg-slate-900 rounded-2xl min-w-full min-h-full flex flex-row sm:flex-col items-start lg:items-center justify-start sm:divide-y divide-slate-600">
          <div className=" md:w-full max-w-full overflow-x-auto flex flex-col justify-start items-start md:items-center py-5">
            <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-x-4">
              <div className="sm:w-1/6 p-4 text-white">
                <p className="font-bold text-xl">MyNodes</p>
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
              <div className="sm:w-1/6 flex flex-col gap-3 items-start justify-center md:justify-center md:items-center">
                <button className="min-w-[6em] lg:min-w-[8em] xl:min-w-[10em] md:border-2 border-slate-500 bg-transparent text-white px-2 sm:px-8 sm:py-3 rounded-lg">
                  Claim All
                </button>
              </div>
            </div>
          </div>

          <div className="w-full h-full sm:my-5 flex flex-row justify-between items-end sm:items-center min-h-[23em] overflow-auto">
            {1 !== 1 ? (
              <div className="w-full  flex items-center justify-center ">
                <div className="w-full sm:w-5/6 flex flex-col sm:flex-row sm:items-center justify-center">
                  <div className="w-24 flex flex-col justify-center ">
                    <img src={trayFillIcon} alt="no data icon" />
                    <p className="py-5 uppercase text-center text-slate-500 text-xl font-bold">
                      No Data
                    </p>
                  </div>
                </div>
                <div className="sm:w-1/6 flex flex-col gap-3 justify-center items-center">
                  <div className="">
                    <button className="min-w-[8em] md:min-w-[10em] border-2 border-slate-500 bg-transparent text-white px-2 sm:px-8 sm:py-3 rounded-lg">
                      Claim
                    </button>
                  </div>
                  <div className="">
                    <button className="min-w-[8em] md:min-w-[10em] border-2 border-slate-500 bg-transparent text-white px-2 sm:px-8 sm:py-3 rounded-lg">
                      Claim
                    </button>
                  </div>
                  <div className="">
                    <button className="min-w-[8em] md:min-w-[10em] border-2 border-slate-500 bg-transparent text-white px-2 sm:px-8 sm:py-3 rounded-lg">
                      Claim
                    </button>
                  </div>
                  <div className="">
                    <button className="min-w-[8em] md:min-w-[10em] border-2 border-slate-500 bg-transparent text-white px-2 sm:px-8 sm:py-3 rounded-lg">
                      Claim
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="min-w-[50em] min-h-[20em] md:min-h-auto h-full w-full flex md:flex-col items-end justify-end sm:items-center md:justify-center gap-0 md:gap-3 ">
                {[1, 2, 3, 4].map((index) => {
                  return (
                    <div className="w-full py-2 border-l-2 md:border-none text-gray-300 border-slate-600  min-h-[22em] md:min-h-[4em]  justify-end h-full flex flex-col md:flex-row">
                      <div className="sm:w-1/6 p-4 ">
                        <p className=" text-xl">MyNodes</p>
                      </div>
                      <div className="sm:w-1/6 p-4 ">
                        <p className=" text-xl">Type</p>
                      </div>
                      <div className="sm:w-1/6 p-4 flex items-center ">
                        <p className="mx-3  text-xl">RPC</p>
                      </div>
                      <div className="sm:w-1/6 p-4 ">
                        <p className=" text-xl">Due Date</p>
                      </div>{" "}
                      <div className="sm:w-1/6 p-4 ">
                        <p className=" text-xl">Rewards</p>
                      </div>
                      <div className="sm:w-1/6 flex flex-col gap-3 items-start justify-center md:justify-center md:items-center">
                        <button className="min-w-[8em] md:min-w-[10em] md:border-2 border-slate-500 bg-transparent text-gray-500 px-2 sm:px-8 sm:py-3 rounded-lg">
                          Claim
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NodesSection;
