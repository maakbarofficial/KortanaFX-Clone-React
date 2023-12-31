import React from "react";

function Stats() {
  return (
    <div className="w-full mx-auto">
      <div className="states-container bg-[#141417] border border-[#2F2F34] flex-col md:flex-col lg:flex-row flex items-center justify-around">
        <div className="profit-share stats">
          <h2 className="stats-h">100%</h2>
          <p className="stats-p">Profit Share</p>
        </div>
        <div className="withdrawal-days bg-[#0B0B0C] border-0 border-[#0B0B0C] px-[32px] py-[64px] flex flex-col items-center">
          <h2 className="stats-h">7</h2>
          <p className="stats-p">Day Withdrawals</p>
        </div>
        <div className="withdrawal-time stats">
          <h2 className="stats-h">12HR</h2>
          <p className="stats-p">Withdraw Time</p>
        </div>
        <div className="time-limits stats">
          <h2 className="stats-h">0</h2>
          <p className="stats-p">Time Limits</p>
        </div>
      </div>
    </div>
  );
}

export default Stats;
