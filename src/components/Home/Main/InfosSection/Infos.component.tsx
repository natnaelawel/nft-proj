type Props = {};

const InfosSection = (props: Props) => {
  const nodes = [
    {
      title: "Stable passive income",
      subtitle1:
        "Our nodes offer from 0.1% to 1% daily ROI depending on initial investment. It efficiently aggregates return from protocol-owned liquidity with returns from DeFi protocols across many chains to allocate rewards and yield holders.",
      subtitle2: "EARN 1.40 CON$ per node",
    },
    {
      title: "A community based project",
      subtitle1:
        "Our nodes offer from 0.1% to 1% daily ROI depending on initial investment. It efficiently aggregates return from protocol-owned liquidity with returns from DeFi protocols across many chains to allocate rewards and yield holders.",
    },
    {
      title: "LIFETIME PASSIVE INCOME ",
      subtitle1:
        "Many node projects are unsustainable and fail over time. In addition to our investments, we are creating our casino that generates high revenues to be sustainable over the long term and continue to offer high rewards to our convexers.",
    },
  ];

  return (
    <div>
      <div
        className=" bg-white min-w-full flex flex-col justify-center items-center min-h-[42em] "
        style={{ border: "1px solid red" }}
      >
        <div className="w-4/5 my-5 flex flex-col sm:flex-row justify-center gap-16 min-h-[28em] ">
          {nodes &&
            nodes.map((node) => {
              return (
                <div className="rounded-full p-1.5 w-full sm:w-1/3 text_background_box_reversed sm:text_background_box_reversed">
                  <div
                    className="p-10  rounded-full  border h-full flex flex-row gap-3 sm:flex-col items-center sm:justify-center
                    text_background_box sm:text_background_box
                  "
                  >
                    <div className="flex flex-col items-center gap-2">
                      <p className="my-5 text-white text-center text-xl sm:text-4xl font-bold">
                        {node.title}
                      </p>
                      <p className="my-2 text-white text-sm sm:text-base text-center">
                        {node.subtitle1}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default InfosSection;
