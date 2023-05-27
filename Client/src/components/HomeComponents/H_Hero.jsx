import React from "react";
import SeaBG1 from "../../assets/SeaBG1.jpg";

const Home = () => {
  return (
    <div
      className="flex justify-center h-screen bg-center"
      style={{
        backgroundImage: `url(${SeaBG1})`,
        marginTop: "80px",
        backgroundColor: "black",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* Container */}
      <div className="px-8 items-center flex flex-col justify-center">
        <h1 className="text-12xl sm:text-9xl font-bold text-[#fff] item-center">
          Preserve the Sea
        </h1>
        <h1 className="text-12xl sm:text-9xl font-bold text-[#fff] item-center">
          Stop the Overfishing Spree!
        </h1>
      </div>
    </div>
  );
};

export default Home;
