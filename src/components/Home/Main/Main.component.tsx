import FAQSection from "./FAQ/FAQ";
import HowItWorksSection from "./HowItWorks/HowItWorks";
import InfosSection from "./InfosSection/Infos.component";

type Props = {};

const HomeMainSection = (props: Props) => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <InfosSection />
      <HowItWorksSection />
    <FAQSection />
    </div>
  );
};

export default HomeMainSection;
