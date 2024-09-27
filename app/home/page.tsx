// ./app/home/page.tsx
import "../globals.css";
import Navbar from "../components/navbar";
import CardContainer from "../components/card";
import { Twobutton } from "../components/button";
import Multycards from "../components/multycards";

const Home = () => {
  return (
    <div>
      <Navbar />
      <CardContainer />
      <Twobutton />
      <Multycards />
    </div>
  );
};

export default Home;
