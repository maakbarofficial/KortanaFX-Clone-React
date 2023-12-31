import React from "react";
import { Carousel } from "react-responsive-carousel";

function Platforms() {
  return (
    <div className="w-full mx-auto">
      <Carousel
        showStatus={false}
        showIndicators={false}
        className="py-10 px-5 rounded border border-gray-700 m-10"
      >
        <div className="bg-black flex flex-col items-center justify-center">
          <h1 className="max-w-max text-white mx-auto bg-transparent font-normal text-3xl opacity-80">
            BlueBerry Markets
          </h1>
          <p className="min-w-max flex items-center gap-5 font-medium text-2xl text-white">
            Enjoy reliable and near perfect market conditions for our all
            evaluation accounts with Blueberry Markets.
          </p>
          <div className="flex items-center justify-center gap-5 my-10">
            <img
              src="https://kortanafx.com/images/logos/taurex.png"
              alt="Taurex"
              className="w-10"
            />
            <img
              src="https://kortanafx.com/images/logos/bb.png"
              alt="Bluebarrey"
              className="w-10"
            />
            <img
              src="https://kortanafx.com/images/logos/metaTrader.png"
              alt="MetaTrader"
              className="w-10"
            />
          </div>
        </div>
        <div className="bg-black flex flex-col items-center justify-center">
          <h1 className="max-w-max text-white mx-auto bg-transparent font-normal text-3xl opacity-80">
            BlueBerry Markets
          </h1>
          <p className="min-w-max flex items-center gap-5 font-medium text-2xl text-white">
            Enjoy reliable and near perfect market conditions for our all
            evaluation accounts with Blueberry Markets.
          </p>
        </div>
        <div className="bg-black flex flex-col items-center justify-center">
          <h1 className="max-w-max text-white mx-auto bg-transparent font-normal text-3xl opacity-80">
            Metatrader 4
          </h1>
          <p className="min-w-max flex items-center gap-5 font-medium text-2xl text-white">
            We offer Metatrader 4, the worlds most used trading platform.
          </p>
        </div>
      </Carousel>
    </div>
  );
}

export default Platforms;
