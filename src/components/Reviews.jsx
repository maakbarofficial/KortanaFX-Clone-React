import React from "react";

function Reviews() {
  return (
    <div className="container mx-auto p-5 my-[100px]">
      <div className="text-center">
        <h2 className="text-white bg-transparent font-semibold text-5xl mb-[80px]">
          Reputation is Everything
        </h2>
      </div>
      <div className="text-center">
        <a className="flex items-center justify-center gap-5" href="#">
          <h2 className="text-white bg-transparent font-semibold text-3xl">
            See us on
          </h2>
          <div className="w-[200px]">
            <img
              src="https://companieslogo.com/img/orig/TRST.L_BIG.D-f939d4a8.png?t=1663382464"
              alt="trustpiolot"
            />
          </div>
        </a>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-[100px]">
        <div className="py-[40px] px-[80px] border-r border-gray-500">
          <h2 className="text-white bg-transparent font-bold text-[40px] mb-[50px]">
            We are the best plain and simple
          </h2>
          <div className="flex flex-col items-start justify-center">
            <p className="text-[#8B8B8D] mb-3 bg-transparent text-xl flex gap-5 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-dollar-sign"
              >
                <line x1="12" x2="12" y1="2" y2="22" />
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
              7 Day Payouts
            </p>
            <p className="text-[#8B8B8D] mb-3 bg-transparent text-xl flex gap-5 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-dollar-sign"
              >
                <line x1="12" x2="12" y1="2" y2="22" />
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
              100% Profit Split
            </p>
            <p className="text-[#8B8B8D] mb-3 bg-transparent text-xl flex gap-5 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-dollar-sign"
              >
                <line x1="12" x2="12" y1="2" y2="22" />
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
              Low Commissions
            </p>
            <p className="text-[#8B8B8D] mb-3 bg-transparent text-xl flex gap-5 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-dollar-sign"
              >
                <line x1="12" x2="12" y1="2" y2="22" />
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
              No Time Limit
            </p>
          </div>
        </div>
        <div className="py-[40px] px-[80px]">
          <h2 className="text-white bg-transparent font-bold text-[40px] mb-[50px] max-w-[60%]">
            Have More Questions?
          </h2>
          <div className="flex flex-col items-start justify-center">
            <p className="text-[#8B8B8D] bg-transparent text-xl mb-10">
              Be sure to checkout our rules and FAQ page to Learn the exact
              details about how our program works and if you have any further
              questions we are always available via LIVE CHAT on the bottom
              right of this page or via Email from our support page.
            </p>
            <button className="primary-btn cursor-pointer transform transition duration-300 hover:translate-x-2 inline-block text-[#00000] w-100 px-[40px] font-bold text-lg border-0 leading-[56px]">
              View FAQ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
