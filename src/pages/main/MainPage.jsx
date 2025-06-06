import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar";

const MainPage = () => {
  return (
    <div>
      <Navbar />
      <h1 className="text-2xl font-bold p-4">Main Page</h1>
      <Outlet />
    </div>
  );
};

export default MainPage;
