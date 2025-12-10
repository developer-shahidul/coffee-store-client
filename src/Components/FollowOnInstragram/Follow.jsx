//
import cup1 from "../../assets/cups/Rectangle 9.png";
import cup2 from "../../assets/cups/Rectangle 10.png";
import cup3 from "../../assets/cups/Rectangle 11.png";
import cup4 from "../../assets/cups/Rectangle 12.png";
import cup5 from "../../assets/cups/Rectangle 13.png";
import cup6 from "../../assets/cups/Rectangle 14.png";
import cup7 from "../../assets/cups/Rectangle 15.png";
import cup8 from "../../assets/cups/Rectangle 16.png";

const Follow = () => {
  return (
    <div className="mb-[120px] lg:w-[1320px] mx-auto text-center px-2 lg:px-0">
      <h5 className="raleway text-xl text-[#1B1A1A]">Follow Us Now</h5>
      <h2 className="text-[55px] rancho text-[#331A15] mb-12">
        Follow on Instagram
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <img className="rounded-[10px]" src={cup1} alt="" />
        <img src={cup2} alt="" />
        <img src={cup3} alt="" />
        <img src={cup4} alt="" />
        <img src={cup5} alt="" />
        <img src={cup6} alt="" />
        <img src={cup7} alt="" />
        <img src={cup8} alt="" />
      </div>
    </div>
  );
};

export default Follow;
