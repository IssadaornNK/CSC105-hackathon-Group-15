import H_About from "../components/HomeComponents/H_About";
import H_Home from "../components/HomeComponents/H_Hero";
import Navbar from "../components/Navbar";
import H_Skill from "../components/HomeComponents/H_Subscription";
import H_Project from "../components/HomeComponents/H_Project";
import Footer from "../components/Footer";



function HomePage() {
  return (
    <div>
      <Navbar />
      <H_Home />
      <H_About />
      <H_Skill />
      {/* <H_Project /> */}
      <Footer />
    </div>
  );
}

export default HomePage;