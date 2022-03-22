import React from "react";

type Props = {};

const InfoContent = (props: Props) => {
  return (
    <div className="py-16">
      <p className="py-5 text-transparent bg-clip-text text_background_gradient uppercase font-Popins font-extrabold text-4xl text-center">
        WELCOME CONVEXER
      </p>
      <p className="text-center text-white text-lg">
        You can use this app to create your node(s), view and compound rewards.
      </p>
    </div>
  );
};

export default InfoContent;
