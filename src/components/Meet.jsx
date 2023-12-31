import React from "react";
import { Carousel } from "react-responsive-carousel";

function Meet() {
  return (
    <div className="w-full mx-auto">
      <div className="bg-[#18181B] py-[100px] text-center">
        <div className="bg-[#18181B]">
          <h2 className="text-white bg-transparent font-bold text-4xl">
            Meet Kortana Prime
          </h2>
        </div>
        <div className="bg-[#18181B]">
          <p className="max-w-[45%] text-[#8B8B8D] mt-[16px] mb-[40px] mx-auto bg-transparent font-normal text-xl">
            Want the industry's best trading conditions? 4 successful
            withdrawals and you graduate to Kortana Prime with the benefits
            below
          </p>
        </div>

        <div className="m-[100px]">
          <Carousel showStatus={false}>
            <div className="bg-black grid grid-cols-1 lg:grid-cols-[1fr,0.5fr] justify-items-center lg:justify-items-end gap-[12px] pt-[40px] pl-[40px] pb-[60px] pr-[50px] mx-[10px]">
              <p className="max-w-max text-white mx-auto bg-transparent font-normal text-2xl opacity-80">
                Want the industry's best trading conditions? 4 successful
                withdrawals and you graduate to Kortana Prime with the benefits
                below
              </p>
              <p className="min-w-max flex items-center gap-5 font-medium text-3xl text-white">
                Raw Spreads
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-dollar-sign"
                >
                  <line x1="12" x2="12" y1="2" y2="22" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </p>
            </div>
            <div className="bg-black grid grid-cols-1 lg:grid-cols-[1fr,0.5fr] justify-items-center lg:justify-items-end gap-[12px] pt-[40px] pl-[40px] pb-[60px] pr-[50px] mx-[10px]">
              <p className="max-w-max text-white mx-auto bg-transparent font-normal text-2xl opacity-80">
                Want the industry's best trading conditions? 4 successful
                withdrawals and you graduate to Kortana Prime with the benefits
                below
              </p>
              <p className="min-w-max flex items-center gap-5 font-medium text-3xl text-white">
                Raw Spreads
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-dollar-sign"
                >
                  <line x1="12" x2="12" y1="2" y2="22" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </p>
            </div>
            <div className="bg-black grid grid-cols-1 lg:grid-cols-[1fr,0.5fr] justify-items-center lg:justify-items-end gap-[12px] pt-[40px] pl-[40px] pb-[60px] pr-[50px] mx-[10px]">
              <p className="max-w-max text-white mx-auto bg-transparent font-normal text-2xl opacity-80">
                Want the industry's best trading conditions? 4 successful
                withdrawals and you graduate to Kortana Prime with the benefits
                below
              </p>
              <p className="min-w-max flex items-center gap-5 font-medium text-3xl text-white">
                Raw Spreads
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-dollar-sign"
                >
                  <line x1="12" x2="12" y1="2" y2="22" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </p>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Meet;
