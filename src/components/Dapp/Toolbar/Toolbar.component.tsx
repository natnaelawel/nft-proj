type Props = {};

const Toolbar = (props: Props) => {
  return (
    <div className="m-3 p-2 sm:rounded-none rounded-2xl sm:m-0 toolbar_gradient flex flex-row justify-center">
      <div className="py-2 sm:py-2 w-full sm:w-5/6 items-center flex justify-center flex-col md:flex md:flex-row gap-2 divide-y-2 sm:divide-none">
        <div className=" text-center w-full md:w-1/2 flex justify-start flex-row md:justify-start gap-1 items-center divide-x-2 sm:divide-none">
          <div className=" w-full md:w-2/3 flex gap-5 py-3 items-center divide-x-2 md:divide-none text-center flex-row">
            <p className="w-1/2 font-bold lg:text-xl text-white">APP</p>
            <p className="w-1/2 font-bold lg:text-xl text-white">CREATE NODE</p>
            <p className="w-1/2 font-bold lg:text-xl text-white ">COMMUNITY</p>
          </div>
        </div>

        <div className="w-full sm:w-1/2 flex flex-row justify-start md:justify-end gap-1 items-center   divide-x-2 md:divide-none">
          <div className="w-full md:w-2/3 flex gap-5 py-3 items-center divide-x-2 md:divide-none text-center flex-row">
            <p className="w-1/2 font-bold lg:text-xl text-white ">
              PRICE CHART
            </p>
            <p className="w-1/2 font-bold lg:text-xl text-white ">
              CONTACT ADDRESS
            </p>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
