import DappAppbar from "components/Dapp/Appbar/DAppbar.component";
import Toolbar from "components/Dapp/Toolbar/Toolbar.component";

type Props = {};

const DappHeader = (props: Props) => {
  return (
    <div className="">
      <DappAppbar />
      <Toolbar />
    </div>
  );
};

export default DappHeader;
