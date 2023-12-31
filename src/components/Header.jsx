import React, { useState } from "react";
import DashboardBG from "../assets/header-bg.svg";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    console.log("Menu Clicked");
    setMenuOpen(!menuOpen);
    console.log(menuOpen);
  };
  return (
    <div className="container mx-auto">
      <div className="header flex items-center justify-center lg:justify-between border-transparent pt-[20px] mb-20 sticky w-100 bg-transparent">
        <div className="header-left flex items-center justify-between gap-[80px]">
          <div className="logo">
            <img
              src="https://kortanafx.com/images/logos/logo2.png"
              alt="logo"
              className="w-[200px]"
            />
          </div>
          <div className="navbar hidden lg:block">
            <nav className="main-nav flex gap-[40px] items-center justify-between">
              <Link to="/" className="nav-btn">
                Home
              </Link>
              <a href="#challenge" className="nav-btn">
                Challenge
              </a>
              <Link to="/faq" className="nav-btn">
                FAQ
              </Link>
              <Link to="/support" className="nav-btn">
                Support
              </Link>
            </nav>
          </div>
          <div className="mobile-nav relative cursor-pointer block text-right lg:hidden">
            <div onClick={toggleMenu}>
              {menuOpen ? (
                <>
                  <AiOutlineClose color="white" size={25} />
                </>
              ) : (
                <>
                  <FiMenu color="white" size={25} />
                </>
              )}
            </div>
          </div>
        </div>
        <div className="header-right items-center gap-[100px] hidden lg:flex">
          <div className="header-cta relative">
            <div className="header-cta-bg">
              <img
                src={DashboardBG}
                alt="bg-cta"
                className="absolute max-h-[100px] right-0 min-w-max top-0 z-[-1]"
              />
            </div>
            <div className="header-cta-btn">
              <a
                href=""
                className="bg-[#141417] px-[24px] py-[12px] border-r-0 leading-[50px] font-bold text-lg h-[52px] text-white hover:bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700"
              >
                Dashboard
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="block lg:hidden m-5">
        {menuOpen ? (
          <>
            <div className="bg-black border border-gray-700 p-5 flex flex-col items-center justify-center">
              <Link to="/" className="font-bold text-white p-3 rounded">
                Home
              </Link>
              <a href="#challenge" className="font-bold text-white p-3 rounded">
                Challenge
              </a>
              <Link to="/faq" className="font-bold text-white p-3 rounded">
                FAQ
              </Link>
              <Link to="/support" className="font-bold text-white p-3 rounded">
                Support
              </Link>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Header;
