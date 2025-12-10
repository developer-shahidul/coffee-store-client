//
import navimg from "../../assets/more/15.jpg";
import logo1 from "../../assets/more/logo1.png";

const Navbar = () => {
  return (
    <div
      className="py-6 "
      style={{ backgroundImage: `url(${navimg})`, backgroundSize: "cover" }}
    >
      <div className="flex gap-4 justify-center items-center">
        <img className="w-[75px] h-[90px]" src={logo1} alt="tea logo" />
        <h2 className="rancho text-white text-6xl ">Espresso Emporium</h2>
      </div>
    </div>
  );
};

export default Navbar;
