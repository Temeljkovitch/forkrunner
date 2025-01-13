import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";
import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <div>
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img  src={logo} alt="ForkRunner logo" />
        </Link>
        <div className="md:hidden">
          <MobileNav />
        </div>
        <div className="hidden md:block">
          <MainNav />
        </div>
      </div>
    </div>
  );
};

export default Header;
