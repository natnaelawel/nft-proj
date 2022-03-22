import CreateNodeSection from "./CreateNode/CreateNode.component";
import InfoContent from "./InfoContent/InfoContent.component";
import NodesSection from "./NodesData/NodesData.component";
import RulesSection from "./Rules/Rules.component";
import StatsSection from "./Stats/Stats.component";

type Props = {};

const DappMainSection = (props: Props) => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-5/6">
        <InfoContent />
        <StatsSection />
        <CreateNodeSection />
      </div>
      <RulesSection />
      <NodesSection />
    </div>
  );
};

export default DappMainSection;
