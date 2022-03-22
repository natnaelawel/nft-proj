import Appbar from "components/common/Appbar/Appbar.component";
import Toolbar from "components/Dapp/Toolbar/Toolbar.component";

type Props = {};

const DappHeader = (props: Props) => {
  return (
    <div className="">
      <Appbar />
      <Toolbar />
    </div>
  );
};

export default DappHeader;
