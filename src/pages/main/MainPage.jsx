import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const MainPage = () => {
  return (
    <div className=" container mx-auto">
      <Navbar />
      <Outlet />
      <Footer></Footer>
    </div>
  );
};

export default MainPage;
