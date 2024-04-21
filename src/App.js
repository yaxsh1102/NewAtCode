import { Navbar } from "./Components/Navbar";
import { Hero } from "./Components/Hero";
import CardSection from "./Components/CardSection";
import Footer from "./Components/Footer";
import "./index.css";
import MyPage from "./Components/MyPage";

function App() {
  let email="";
  return (
    <div className="relative sm:w-full w-fit overflow-x-hidden bg-black"> 
      <Navbar/>
      <Hero/>
      <CardSection/>
      <Footer/>
    </div>
  );
}

export default App;
