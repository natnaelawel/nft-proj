import React from "react";

type Props = {};

const RulesSection = (props: Props) => {
  return (
    <div className="w-full flex justify-center bg-slate-900 ">
      <div className="p-10 w-5/6 flex flex-col justify-center">
        <p className="my-3 tracking-widest py-5 font-extrabold text-transparent text-4xl bg-clip-text text-white toolbar_gradient_white sm:text_background_gradient">
          COMPOUNDING RULES
        </p>
        <ul className="list-disc text-white text-lg">
          <li className="">You can only compound in the same tier.</li>
          <li className="">You can only compound across tiers in god mode.</li>
          <li className="">
            To unlock god mode, you need at least 1 node from all the available
            tiers.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RulesSection;
