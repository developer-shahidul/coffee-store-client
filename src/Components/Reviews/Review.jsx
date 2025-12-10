//
import icon1 from "../../assets/icons/1.png";
import icon2 from "../../assets/icons/2.png";
import icon3 from "../../assets/icons/3.png";
import icon4 from "../../assets/icons/4.png";

const Review = () => {
  return (
    <div>
      <div className="lg:max-h-[300px] bg-[#ECEAE3] grid  grid-cols-2 lg:grid-cols-4 gap-10 px-2  lg:px-[300px] py-14">
        <div>
          <img className="h-[70px] w-[70px] mb-4" src={icon1} alt="" />
          <h3 className="rancho text-[35px] text-[#331A15] mb-2">
            Awesome Aroma
          </h3>
          <p className="text-[16px] text-[#1B1A1A] raleway">
            You will definitely be a fan of the design & aroma of your coffee
          </p>
        </div>
        <div>
          <img className="h-[70px] w-[70px] mb-4" src={icon2} alt="" />
          <h3 className="rancho text-[35px] text-[#331A15] mb-2">
            High Quality
          </h3>
          <p className="text-[16px] text-[#1B1A1A] raleway">
            We served the coffee to you maintaining the best quality
          </p>
        </div>
        <div>
          <img className="h-[70px] w-[70px] mb-4" src={icon3} alt="" />
          <h3 className="rancho text-[35px] text-[#331A15] mb-2">
            Pure Grades
          </h3>
          <p className="text-[16px] text-[#1B1A1A] raleway">
            The coffee is made of the green coffee beans which you will love
          </p>
        </div>
        <div>
          <img className="h-[70px] w-[70px] mb-4" src={icon4} alt="" />
          <h3 className="rancho text-[35px] text-[#331A15] mb-2">
            Proper Roasting
          </h3>
          <p className="text-[16px] text-[#1B1A1A] raleway">
            Your coffee is brewed by first roasting the green coffee beans
          </p>
        </div>
      </div>
    </div>
  );
};

export default Review;
