import DappHeader from "components/Dapp/DappHeader/Header.component";
import FooterSection from "components/Footer/Footer.component";
import DappMainSection from "./DappMain/Main.component";

type Props = {};

const DappLayout = (props: Props) => {
  return (
    <div>
      <DappHeader />
      <DappMainSection />
      <FooterSection />
    </div>
  );
};

export default DappLayout;
