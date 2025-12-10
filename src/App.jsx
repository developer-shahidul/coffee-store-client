//
import bannerImg from "./assets/more/3.png";
import Follow from "./Components/FollowOnInstragram/Follow";
import OurProduct from "./Components/OurProduct/OurProduct";
import Review from "./Components/Reviews/Review";
import { useLoaderData } from "react-router";

function App() {
  const useCoffeeData = useLoaderData();
  // console.log(useCoffeeData);

  return (
    <>
      <div
        className="w-full min-h-screen "
        style={{
          backgroundImage: ` URL(${bannerImg})`,
          backgroundSize: "cover",
        }}
      >
        <div className="lg:max-w-3xl md:max-w-[500px] absolute lg:top-2/4 md:top-46 md:right-10 lg:right-64 px-2 lg:px-0">
          <h2 className="rancho text-white text-[55px] mb-4">
            Would you like a Cup of Delicious Coffee?
          </h2>
          <p className="raleway text-4 text-white mb-8">
            It's coffee time - Sip & Savor - Relaxation in every sip! Get the
            nostalgia back!! Your companion of every moment!!! Enjoy the
            beautiful moments and make them memorable.
          </p>
          <button className="py-[9px] px-5.5 text-2xl rancho text-white border hover:bg-[#E3B577]">
            <a href="https://en.wikipedia.org/wiki/Coffee" target="_blank">
              Learn More
            </a>
          </button>
        </div>
      </div>

      {/* COFFEE REVIEW */}
      <Review></Review>

      {/* coffee list */}
      <OurProduct coffeeData={useCoffeeData}></OurProduct>

      {/* follow on instragram */}
      <Follow></Follow>
    </>
  );
}

export default App;
