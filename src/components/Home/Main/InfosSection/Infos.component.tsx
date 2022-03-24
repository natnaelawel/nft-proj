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
    <div className="w-full sm:bg-white flex justify-center md:min-h-[40em] items-center">
      <div className="hide-scroll-bar px-5 h-[20em] w-full overflow-auto scroll-smooth snap-x xl:w-11/12 2xl:w-4/5 my-5 flex flex-row  gap-5 xl:gap-16 sm:h-[28em]">
        {nodes &&
          nodes.map((node) => {
            return (
              <div className="sm:p-1.5 snap-center min-w-[20em] sm:w-1/3 rounded-full h-full flex flex-row sm:flex-col items-center text_background_box_reversed sm:justify-center ">
                <div className="h-full flex flex-col justify-between items-between p-5 xl:p-10 sm:text_background_box">
                  <div className="flex flex-col justify-center items-center h-full gap-3 xl:gap-5">
                    <p className=" text-white text-center text-xl xl:text-2xl 2xl:text-3xl font-bold">
                      {node.title}
                    </p>
                    <p className="sm:line-clamp-7   xl:line-clamp-10 text-white text-base sm:text-lg text-center">
                      {node.subtitle1}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default InfosSection;
