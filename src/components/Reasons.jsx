import React from "react";

function Reasons() {
  return (
    <div className="container mx-auto p-5">
      <div className="reasons-container pt-[130px]">
        <div className="text-center">
          <h2 className="mb-[90px] font-bold text-5xl text-[#ffffff]">
            There is a <span className="text-reason">reason</span> why we are #1
          </h2>
        </div>
        {/* 100% Profit Share is here */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[100px] mb-[60px]">
          <div className="flex flex-col items-start justify-center gap-5">
            <h3 className="pt-[3rem] text-white font-bold text-4xl">
              100% Profit
              <br />
              Share is here
            </h3>
            <p className="my-[24px] text-[#FFFFFF80] font-normal text-xl">
              Lets scale together. Your first payout is a 50% profit split.
              Every 2 weeks we increase it, untill you reach 100% and Kortana
              Prime status within 60 days.
            </p>
            <p className="my-[24px] text-[#FFFFFF80] font-normal text-xl">
              We handle the logistics, you handle the profits
            </p>
            <button className="primary-btn cursor-pointer transform transition duration-300 hover:translate-x-2 inline-block text-[#00000] w-100 px-[30px] font-bold text-lg border-0 leading-[56px]">
              Get Started
            </button>
          </div>
          <div className="border-[45px] border-[#141417] rounded-[20px] border-b-0">
            <img
              src="https://kortanafx.com/images/banner/profit.png"
              alt="profit-share"
            />
          </div>
        </div>
        {/* 7 Day Payouts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[100px] mb-[60px] order-1">
          <div className="border-[45px] border-[#141417] rounded-[20px] border-b-0">
            <img
              src="https://kortanafx.com/images/banner/payout.png"
              alt="payout"
            />
          </div>
          <div className="flex flex-col items-start justify-center gap-5">
            <h3 className="pt-[3rem] text-white font-bold text-4xl">
              7 Day Payouts
            </h3>
            <p className="my-[24px] text-[#FFFFFF80] font-normal text-xl">
              Your first payout is eligible after only 21 days. After 4
              successful withdrawals you become a Kortana prime member, and can
              now request a payout every 7 days.
            </p>
          </div>
        </div>
        {/* No Time Limits */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[100px] mb-[60px]">
          <div className="flex flex-col items-start justify-center gap-5">
            <h3 className="pt-[3rem] text-white font-bold text-4xl">
              No Time Limits
            </h3>
            <p className="my-[24px] text-[#FFFFFF80] font-normal text-xl">
              No restrictions, only success. Trade freely with unlimited
              challenge days. Pass in 1 day or 1 year, it makes no difference to
              us.
            </p>
            <button className="primary-btn cursor-pointer transform transition duration-300 hover:translate-x-2 inline-block text-[#00000] w-100 px-[30px] font-bold text-lg border-0 leading-[56px]">
              Lets Roll
            </button>
          </div>
          <div className="border-[45px] border-[#141417] rounded-[20px] border-b-0">
            <img
              src="https://kortanafx.com/images/banner/limits.png"
              alt="limits"
            />
          </div>
        </div>
        {/* Low Commissions & Raw Spreads */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[100px] mb-[60px]">
          <div className="border-[45px] border-[#141417] rounded-[20px] border-b-0">
            <img
              src="https://kortanafx.com/images/banner/swap.png"
              alt="swap"
            />
          </div>
          <div className="flex flex-col items-start justify-center gap-5">
            <h3 className="pt-[3rem] text-white font-bold text-4xl">
              Low Commissions & Raw Spreads
            </h3>
            <p className="my-[24px] text-[#FFFFFF80] font-normal text-xl">
              We aim to provide the best trading conditions in the industry, as
              a result enjoy raw spreads and low commisiones of $6 per lot.
            </p>
          </div>
        </div>
        {/* Trade Tracker */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[100px] mb-[60px]">
          <div className="flex flex-col items-start justify-center gap-5">
            <h3 className="pt-[3rem] text-white font-bold text-4xl">
              Trade Tracker
            </h3>
            <p className="my-[24px] text-[#FFFFFF80] font-normal text-xl">
              We have integrated with the #1 trade journaling software in the
              world Swiset. It's like having your own trading coach, with none
              of the headaches.
            </p>
          </div>
          <div className="border-[45px] border-[#141417] rounded-[20px] border-b-0">
            <img
              src="https://kortanafx.com/images/banner/tracker.png"
              alt="tracker"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reasons;
