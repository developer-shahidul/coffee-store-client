//
import { Link } from "react-router";
import navimg from "../../assets/more/15.jpg";
import logo1 from "../../assets/more/logo1.png";

const Navbar = () => {
  return (
    <div
      className="py-6 flex md:flex-row flex-col justify-between   items-center px-6 gap-4"
      style={{ backgroundImage: `url(${navimg})`, backgroundSize: "cover" }}
    >
      <div className="flex gap-4 justify-center items-center">
        <img className="w-[75px] h-[90px]" src={logo1} alt="tea logo" />
        <h2 className="rancho text-white text-6xl ">Espresso Emporium</h2>
      </div>
      <nav>
        <ul className="raleway text-white text-4xl flex flex-col md:flex-row items-center justify-center  gap-6">
          <li>
            <Link
              className="hover:underline  hover:decoration-gray-400 "
              to={"/"}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="hover:underline  hover:decoration-gray-400  "
              to={"/addCoffee"}
            >
              AddCoffee
            </Link>
          </li>
          <li>
            <Link
              className="hover:underline  hover:decoration-gray-400   "
              to={"/signIn"}
            >
              Sign In
            </Link>
          </li>
          <li>
            <Link
              className="hover:underline  hover:decoration-gray-400   "
              to={"/signUp"}
            >
              Sign Up
            </Link>
          </li>
          <li>
            <Link
              className="hover:underline  hover:decoration-gray-400   "
              to={"/users"}
            >
              Users
            </Link>
          </li>
        </ul>
      </nav>

      <div>
        <img src="halu" alt="img" />
      </div>
    </div>
  );
};

export default Navbar;
