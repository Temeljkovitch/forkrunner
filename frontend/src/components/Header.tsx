import { Link } from "react-router-dom";
import { BiFork } from "react-icons/bi";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";

const Header = () => {
  return (
    <div className=" py-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-3xl flex items-center gap-2 font-bold tracking-tight text-lime-600"
        >
          <BiFork />
          ForkRunner
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
