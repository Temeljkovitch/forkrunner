import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-emerald-500 py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-white tracking-tight">
        <span className="font-semibold mb-1 md:mb-0">
          © ForkRunner {new Date().getFullYear()}
        </span>
        <div className="flex gap-4 font-semibold ">
          <Link className="hover:text-emerald-800 duration-200" to="/">
            Privacy Policy
          </Link>
          <Link className="hover:text-emerald-800 duration-200" to="/">
            Terms of Service
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
