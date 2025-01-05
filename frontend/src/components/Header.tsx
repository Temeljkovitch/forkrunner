import { Link } from "react-router-dom";
import { BiFork } from "react-icons/bi";

const Header = () => {
  return (
    <div className="border-b-2 border-b-emerald-500 py-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-3xl flex items-center gap-2 font-bold tracking-tight text-emerald-500"
        >
          <BiFork />
          ForkRunner
        </Link>
      </div>
    </div>
  );
};

export default Header;
