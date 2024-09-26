// ./app/home/page.tsx
import "../globals.css";
import Navbar from "../components/navbar";
import CardContainer from "../components/card";

const Home = () => {
  return (
    <div>
      <Navbar />
      <CardContainer />
    </div>
  );
};

export default Home;
