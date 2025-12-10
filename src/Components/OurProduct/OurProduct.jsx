//
import { Link } from "react-router";
import bgimg1 from "../../assets/more/1.png";
import { Coffee } from "lucide-react";
import CoffeeCard from "../CoffeeCard/CoffeeCard";
import { useState } from "react";

const OurProduct = ({ coffeeData }) => {
  // console.log(coffees);
  const [coffee, setCoffee] = useState(coffeeData);

  return (
    <div
      className="mt-28 pb-28 md:w-full backdrop-opacity-100"
      style={{ backgroundImage: `URL(${bgimg1})`, backgroundSize: "cover" }}
    >
      <div className="md:w-[1320px] mx-auto text-center">
        <div className="mb-12">
          <h6 className="text-xl raleway text-[#1B1A1A] mb-2">
            --- Sip & Savor ---
          </h6>
          <h2 className="rancho text-[55px]  text-[#331A15] mb-4">
            Our Popular Products
          </h2>
          <Link to="/coffee">
            <button className="px-5.5 py-[9px] bg-[#F5F4F1] border-2 hover:bg-[#E3B577] inline-flex items-center gap-2.5 flex-row rounded-[5px]">
              <span className="rancho text-2xl text-white ">Add Coffee</span>
              <Coffee color="#000000" />
            </button>
          </Link>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2  gap-6 px-2 lg:px-0">
          {coffee.map((items) => (
            <CoffeeCard
              coffee={items}
              coffees={coffee}
              setCoffees={setCoffee}
              key={items._id}
            ></CoffeeCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurProduct;
