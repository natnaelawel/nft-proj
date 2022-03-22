import vipImage from "assets/img/Vip.svg";
import ethImage from "assets/img/eth1.svg";
import pigImage from "assets/img/blue_piggy.svg";
type Props = {};

const CreateNodeSection = (props: Props) => {
  const nodes = [
    {
      img: ethImage,
      title: "Ashton",
      subtitle1: "10 CON$ per node",
      subtitle2: "EARN 0.40 CON$ per node",
    },
    {
      img: pigImage,
      title: "CLEYEN",
      subtitle1: "30 CON$ per node",
      subtitle2: "EARN 1.40 CON$ per node",
    },
    {
      img: vipImage,
      title: "SATINE",
      subtitle1: "50 CON$ per node",
      subtitle2: "EARN 2.5 CON$ per node",
    },
  ];

  return (
    <div>
      <div className="toolbar_gradient p-0.5 rounded-2xl my-10">
        <div className=" bg-slate-900 rounded-2xl min-w-full flex flex-col items-center min-h-[42em]">
          <p className="my-3 tracking-widest py-5 font-extrabold text-transparent text-center text-4xl bg-clip-text text_background_gradient">
            CREATE A NODE
          </p>

          <div className="w-4/5 my-5 flex flex-col sm:flex-row justify-center gap-16 ">
            {nodes &&
              nodes.map((node) => {
                return (
                  <div className="rounded-3xl p-1.5 w-full sm:w-1/3 node_background_box_white sm:node_background_box_gradient">
                    <div className="flex flex-row gap-3 sm:flex-col items-center sm:justify-end bg:white ">
                      <div className="sm:mt-16 flex justify-center items-center h-[5em] sm:h-[10em]">
                        <img
                          className="w-full h-full"
                          src={node.img}
                          alt="cpu image"
                        />
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <p className="my-2 sm:text-white text-center text-xl sm:text-4xl font-bold">
                          {node.title}
                        </p>
                        <p className="my-1 sm:text-white text-sm sm:text-base text-center">
                          {node.subtitle1}
                        </p>
                        <p className="my-1 sm:text-white text-sm sm:text-base  text-center">
                          {node.subtitle2}
                        </p>
                        <button className="px-3 sm:mt-5 sm:py-2 sm:px-5 node_background_box_gradient sm:node_background_box_none sm:rounded-2xl sm:border-2 text-white sm:text-lg sm:font-bold">
                          CREATE NODE
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <div className="p-5 sm:p-16 flex flex-col sm:flex-row sm:items-start gap-16">
        <div className="w-full sm:w-1/2">
          <p className="my-2 text-white font-bold">
            Create a $CON Node with CON$ tokens to earn CON$ rewards.
          </p>
          <p className="my-2 text-white text-lg sm:tracking-wider">
            Rewards calculations are based on many factors, including the number
            of nodes, node revenue, token price, and protocol revenue, and they
            are variable.
          </p>
          <div className="">
            <p className="my-5 text-white font-bold text-xl">
              BUY $CON TOKEN IF YOU HAVEN’T
            </p>
            <button
              type="button"
              className="my-2 toolbar_gradient px-6 py-3 rounded-full text-white font-bold uppercase"
            >
              BUY $CON
            </button>
          </div>
        </div>
        <div className="w-full sm:w-1/2 sm:px-10">
          <input
            type="text"
            placeholder="Name your code"
            className="my-5 sm:py-3 sm:px-3 block w-full text-sm text-slate-500 rounded-lg border bg-transparent"
          />

          <p className="my-3  py-3 text-transparent text-center sm:text-left text-lg bg-clip-text text_background_gradient">
            Please approve the contract before creating a node if this is your
            first interaction.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreateNodeSection;
