import landingImage from "../assets/landing.png";
import { FaGooglePlay, FaAppStore } from "react-icons/fa";

import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="bg-white rounded-lg shadow-lg py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-5xl font-bold tracking-tight text-lime-600">
          Your cravings, delivered fresh and fast to your door.
        </h1>
        <span className="text-xl">Food is just a click away!</span>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <img src={landingImage} />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-3xl tracking-tighter">
            Order takeaway from your phone!
          </span>
          <span>
            Download the ForkRunner App for faster ordering and personalized
            recommendations
          </span>
          <div className="flex items-center gap-4">
            <Link to="https://www.apple.com/br/store">
              <FaAppStore className="w-8 h-8 hover:text-lime-600 duration-200" />
            </Link>
            <Link to="https://play.google.com/">
              <FaGooglePlay className="w-8 h-8 hover:text-lime-600 duration-200" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
