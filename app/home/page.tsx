import "../globals.css";
import Navbar from "../components/navbar";
import CardContainer from "../components/card";
import { Twobutton } from "../components/button";
import Multycards from "../components/multycards";
import { CertificationSection } from "../components/twoimage";

const Home = () => {
  return (
    <div>
      <Navbar />
      <CardContainer />
      <Twobutton />
      <Multycards />
      <CertificationSection />
    </div>
  );
};

export default Home;
