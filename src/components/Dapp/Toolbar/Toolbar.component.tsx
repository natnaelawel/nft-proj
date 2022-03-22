import React from "react";

type Props = {};

const Toolbar = (props: Props) => {
  return (
    <div className="m-3 p-2 sm:rounded-none rounded-2xl sm:m-0 toolbar_gradient flex flex-row justify-center">
      <div className="py-2 sm:py-4 w-full sm:w-5/6 items-center flex flex-col md:flex md:flex-row gap-2 divide-y-2 sm:divide-none">
        <div className="w-5/6 sm:w-1/2  flex flex-row gap-10 items-center divide-x-2 sm:divide-none">
          <p className="w-12 font-bold sm:text-xl text-white text-center">
            APP
          </p>
          <p className="font-bold sm:text-xl text-white text-center">
            CREATE NODE
          </p>
          <p className="font-bold sm:text-xl text-white text-center">
            COMMUNITY
          </p>
        </div>
        <div className="w-5/6 sm:w-1/2 flex flex-row justify-end gap-10 items-center divide-x-2 sm:divide-none">
          <p className="font-bold sm:text-xl text-white text-center">
            PRICE CHART
          </p>
          <p className="font-bold sm:text-xl text-white text-center">
            CONTACT ADDRESS
          </p>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
