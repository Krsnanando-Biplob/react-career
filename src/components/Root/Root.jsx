import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Hadder from "../Hadder/Hadder";

const Root = () => {
  return (
    <div>
      <div className="max-w-6xl mx-auto">
      <Hadder></Hadder>
      <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;