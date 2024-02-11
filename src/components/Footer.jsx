import React from "react";

function Footer() {
  return (
    <div className="container mx-auto pt-[150px]">
      <div className="my-[30px] grid grid-cols-1 lg:grid-cols-2 p-5">
        <div className="flex flex-col gap-5">
          <div>
            <img
              src="https://kortanafx.com/images/logos/logo.png"
              alt="footer-logo"
              className="w-[200px]"
            />
          </div>
          <div>
            <p className="text-[#FFFFFF80] my-2">
              Funding for professional traders.
            </p>
          </div>
          <div className="flex items-center justify-start gap-5">
            <img
              src="https://kortanafx.com/images/icons/insta.png"
              alt="insta"
            />
            <img
              src="https://kortanafx.com/images/icons/telegram.png"
              alt="insta"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 p-5">
          <div>
            <h5 className="uppercase mb-[10px] text-[#FFFFFFB2] tracking-wider font-bold">
              Support
            </h5>
            <ul>
              <li className="text-[#8B8B8D] text-sm my-2">Contact Us</li>
            </ul>
          </div>
          <div>
            <h5 className="uppercase mb-[10px] text-[#FFFFFFB2] tracking-wider font-bold">
              Partners
            </h5>
            <ul>
              <li className="text-[#8B8B8D] text-sm my-2">Partner Program</li>
            </ul>
          </div>
          <div>
            <h5 className="uppercase mb-[10px] text-[#FFFFFFB2] tracking-wider font-bold">
              Legal
            </h5>
            <ul>
              <li className="text-[#8B8B8D] text-sm my-2">Terms</li>
              <li className="text-[#8B8B8D] text-sm my-2">Privacy Policy</li>
              <li className="text-[#8B8B8D] text-sm my-2">Refund Policy</li>
            </ul>
          </div>
          <div>
            <img
              src="https://www.tonysbeach.com/wp-content/uploads/2017/12/visa-mastercard.png"
              alt="payment"
              className="w-[100px]"
            />
          </div>
        </div>
      </div>
      <div className="my-[30px] border-t border-t-gray-800">
        <p className="text-center text-[#FFFFFF80] my-10">
          It's crucial to differentiate between purchasing a program from
          Kortana and making a deposit in a financial institution. The fees you
          pay for our programs are not deposits. Kortana does not offer
          financial advice and does not issue or deal in financial products. All
          trading will occur on demo accounts only / simulated live trading
          conditions.
        </p>
        <p className="text-center text-[#FFFFFF80]">
          © Kortana Inc. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
