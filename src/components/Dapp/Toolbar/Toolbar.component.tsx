type Props = {};

const Toolbar = (props: Props) => {
  return (
    <div className="m-3 p-2 sm:rounded-none rounded-2xl sm:m-0 toolbar_gradient flex flex-row justify-center">
      <div className="py-2  sm:py-2 w-full md:w-5/6 sm:gap-x-5 lg:gap-x-16 xl:gap-x-28 items-center flex justify-center flex-col md:flex md:flex-row gap-2 divide-y-2 sm:divide-none">
        <div className="text-center w-full  xl:w-1/2 flex justify-start flex-row md:justify-start gap-1 items-center divide-x-2 sm:divide-none">
          <div className="w-full xl:w-11/12  flex gap-2 md:gap-5 xl:gap-10  md:py-3 items-center divide-x-2 md:divide-none text-center flex-row">
            <p className="w-1/2 md:w-auto font-semibold lg:font-bold lg:text-lg xl:text-xl text-white">
              APP
            </p>
            <p className="w-1/2 md:w-auto font-semibold lg:font-bold xl:text-xl text-white">
              CREATE NODE
            </p>
            <p className="w-1/2 md:w-auto font-semibold lg:font-bold xl:text-xl text-white">
              COMMUNITY
            </p>
          </div>
        </div>

        <div className="w-full  xl:w-1/2 flex flex-row justify-start lg:justify-end items-center  divide-x-2 md:divide-none">
          <div className="w-full  xl:w-11/12 2xl:w-2/3 gap-2 md:gap-5 xl:gap-10 flex md:py-3 items-center divide-x-2 md:divide-none text-center flex-row">
            <p className="w-full md:w-auto font-semibold xl:font-bold lg:text-lg xl:text-xl text-white ">
              PRICE CHART
            </p>
            <p className="w-full md:w-auto font-semibold xl:font-bold lg:text-lg xl:text-xl text-white ">
              CONTACT ADDRESS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
