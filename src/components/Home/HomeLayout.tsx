import HomeFooterSection from "components/Footer/HomeFooter/HomeFooter";
import Header from "components/Home/Header/Header.component";
import HomeMainSection from "components/Home/Main/Main.component";

type Props = {};

const HomeLayout = (props: Props) => {
  return (
    <div>
      <Header />
      <HomeMainSection />
      <HomeFooterSection />
    </div>
  );
};

export default HomeLayout;
