import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar";

const MainPage = () => {
  return (
    <div className=" container mx-auto">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainPage;
