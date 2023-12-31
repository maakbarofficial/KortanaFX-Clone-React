import React, { useState } from "react";

const Tab = ({ label, isActive, onClick }) => {
  return (
    <div className="flex flex-wrap items-center p-1 justify-between rounded-none border border-[#FFFFFF0F] bg-[#1D1D26]">
      <button
        className={`px-20 py-2 text-center text-2xl font-medium focus:outline-none ${
          isActive ? "primary-btn text-white" : "bg-transparent text-white"
        }`}
        onClick={onClick}
      >
        {label}
      </button>
    </div>
  );
};

const Challenges = () => {
  const tabs = ["10k", "25k", "50k", "100k", "200k"];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="container mx-auto p-5 my-[100px]">
      <div className="text-center">
        <h2 className="text-white bg-transparent font-bold text-4xl mb-[16px]">
          Let’s Get Started
        </h2>
      </div>
      <div className="text-center">
        <p className="max-w-[40%] text-[#8B8B8D] mx-auto bg-transparent font-normal text-2xl">
          Choose an account size, don't break any rules and get funded up to
          200K in simulated funding instantly.
        </p>
      </div>
      <div className="mx-auto">
        <div className="flex flex-wrap items-center justify-center my-[50px]">
          {tabs.map((tab) => (
            <Tab
              key={tab}
              label={tab}
              isActive={activeTab === tab}
              onClick={() => handleTabClick(tab)}
            />
          ))}
        </div>
        <div className="p-10 border-2 border-[#FFFFFF0F] rounded">
          <div className={activeTab === "10k" ? "block" : "hidden"}>
            <div className="">
              <div className="text-white bg-transparent font-bold text-3xl text-center">
                Phase 1
              </div>
              <table className="table-auto my-10 w-full bg-transparent p-5 text-white">
                <thead>
                  <tr>
                    <th className="px-4 py-2"></th>
                    <th className="px-4 py-2 text-start text-2xl font-medium">
                      Targets
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t-0 border-b-2 border-gray-600">
                    <td className="px-4 py-10 text-start text-2xl font-medium">
                      Profit target
                    </td>
                    <td className="px-4 py-10 text-start text-2xl font-medium">
                      8%
                    </td>
                  </tr>
                  <tr className="border-b-2 border-gray-600">
                    <td className="px-4 py-10 text-start text-2xl font-medium">
                      Max daily loss
                    </td>
                    <td className="px-4 py-10 text-start text-2xl font-medium">
                      5%
                    </td>
                  </tr>
                  <tr className="border-b-2 border-gray-600">
                    <td className="px-4 py-10 text-start text-2xl font-medium">
                      Max loss
                    </td>
                    <td className="px-4 py-10 text-start text-2xl font-medium">
                      10%
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="w-fit mx-auto flex flex-wrap items-center p-1 gap-5 justify-center rounded-none border border-[#FFFFFF0F] bg-[#1D1D26]">
                <p className="px-2 py-2 text-4xl font-bold text-transparent primary-btn inline-block bg-no-repeat bg-cover bg-center bg-clip-text">
                  $139
                </p>
                <button className="px-10 py-5 text-center text-2xl font-bold primary-btn bg-transparent text-black">
                  Let's Go
                </button>
              </div>
              <div className="flex flex-wrap items-center justify-center bg-transparent gap-5 mt-10">
                <p className="text-white text-lg">EA Trading: YES</p>
                <p className="text-white text-lg">Overnight Trading : YES</p>
              </div>
            </div>
          </div>
          <div className={activeTab === "25k" ? "block" : "hidden"}>
            <div className="">
              <div className="text-white bg-transparent font-bold text-3xl text-center">
                Phase 1
              </div>
              <table className="table-auto my-10 w-full bg-transparent p-5 text-white">
                <thead>
                  <tr>
                    <th className="px-4 py-2"></th>
                    <th className="px-4 py-2 text-start text-2xl font-medium">
                      Targets
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t-0 border-b-2 border-gray-600">
                    <td className="px-4 py-10 text-start text-2xl font-medium">
                      Profit target
                    </td>
                    <td className="px-4 py-10 text-start text-2xl font-medium">
                      8%
                    </td>
                  </tr>
                  <tr className="border-b-2 border-gray-600">
                    <td className="px-4 py-10 text-start text-2xl font-medium">
                      Max daily loss
                    </td>
                    <td className="px-4 py-10 text-start text-2xl font-medium">
                      5%
                    </td>
                  </tr>
                  <tr className="border-b-2 border-gray-600">
                    <td className="px-4 py-10 text-start text-2xl font-medium">
                      Max loss
                    </td>
                    <td className="px-4 py-10 text-start text-2xl font-medium">
                      10%
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="w-fit mx-auto flex flex-wrap items-center p-1 gap-5 justify-center rounded-none border border-[#FFFFFF0F] bg-[#1D1D26]">
                <p className="px-2 py-2 text-4xl font-bold text-transparent primary-btn inline-block bg-no-repeat bg-cover bg-center bg-clip-text">
                  $339
                </p>
                <button className="px-10 py-5 text-center text-2xl font-bold primary-btn bg-transparent text-black">
                  Let's Go
                </button>
              </div>
            </div>
          </div>
          <div className={activeTab === "50k" ? "block" : "hidden"}>
            <div className="">
              <div className="text-white bg-transparent font-bold text-3xl text-center">
                Phase 1
              </div>
              <table className="table-auto my-10 w-full bg-transparent p-5 text-white">
                <thead>
                  <tr>
                    <th className="px-4 py-2"></th>
                    <th className="px-4 py-2 text-start text-2xl font-medium">
                      Targets
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t-0 border-b-2 border-gray-600">
                    <td className="px-4 py-10 text-start text-2xl font-medium">
                      Profit target
                    </td>
                    <td className="px-4 py-10 text-start text-2xl font-medium">
                      8%
                    </td>
                  </tr>
                  <tr className="border-b-2 border-gray-600">
                    <td className="px-4 py-10 text-start text-2xl font-medium">
                      Max daily loss
                    </td>
                    <td className="px-4 py-10 text-start text-2xl font-medium">
                      5%
                    </td>
                  </tr>
                  <tr className="border-b-2 border-gray-600">
                    <td className="px-4 py-10 text-start text-2xl font-medium">
                      Max loss
                    </td>
                    <td className="px-4 py-10 text-start text-2xl font-medium">
                      10%
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="w-fit mx-auto flex flex-wrap items-center p-1 gap-5 justify-center rounded-none border border-[#FFFFFF0F] bg-[#1D1D26]">
                <p className="px-2 py-2 text-4xl font-bold text-transparent primary-btn inline-block bg-no-repeat bg-cover bg-center bg-clip-text">
                  $239
                </p>
                <button className="px-10 py-5 text-center text-2xl font-bold primary-btn bg-transparent text-black">
                  Let's Go
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Challenges;
