import React, { useState } from "react";

function Support() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
  };
  return (
    <div className="container mx-auto">
      <div className="text-center p-5">
        <h1 className="primary-btn max-w-[70%] text-5xl leading-[82px] font-semibold mx-[70px] my-10 bg-clip-text text-transparent">
          Contact Us
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-5 p-10 bg-[#080808] rounded-md">
          <div className="">
            <div className="my-5 border-t border-t-gray-800 border-b border-b-gray-800 py-5 bg-[#080808]">
              <h3 className="text-white font-bold text-2xl py-2">Live Chat</h3>
              <p className="text-white text-sm">
                Our live chat is open from 9 am to 6 pm EST daily, click the
                icon on the bottom right of of your screen for access. You can
                leave a message at any time and an agent will email you back.
              </p>
            </div>
            <div className="my-5 border-t border-t-gray-800 border-b border-b-gray-800 py-5 bg-[#080808]">
              <h3 className="text-white font-bold text-2xl py-2">Office</h3>
              <p className="text-white text-sm">
                Dubai Silicon Oasis, DDP Building A1, Dubai, United Arab
                Emirates.
              </p>
            </div>
          </div>
          <div>
            <h1>Get In Touch</h1>
            <div className="flex items-center justify-center w-full text-white p-5">
              <div className="p-6 rounded-md bg-transparent">
                <h1 className="text-2xl font-semibold mb-4">Contact Us</h1>
                <form onSubmit={handleSubmit}>
                  {/* Name Field */}
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block text-sm text-left font-medium"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-1 p-2 w-full rounded-md bg-black border border-gray-500 text-gray-200 focus:outline-none focus:border-gray-500 focus:ring focus:ring-blue-200"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-left  text-sm font-medium"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1 p-2 w-full rounded-md bg-black border border-gray-500 text-gray-200 focus:outline-none focus:border-gray-500 focus:ring focus:ring-blue-200"
                    />
                  </div>

                  {/* Message Field */}
                  <div className="mb-4">
                    <label
                      htmlFor="message"
                      className="block text-left  text-sm font-medium"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      className="mt-1 p-2 w-full rounded-md bg-black border border-gray-500 text-gray-200 focus:outline-none focus:border-gray-500 focus:ring focus:ring-blue-200"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="primary-btn text-black cursor-pointer transform transition duration-300 hover:translate-x-2 inline-block text-[#00000] w-100 px-[30px] font-bold text-lg border-0 leading-[56px]"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <h1 className="primary-btn max-w-[70%] text-[72px] leading-[82px] font-semibold mx-[70px] my-0 bg-clip-text text-transparent">
          Kortana is founded on trust and transparancy.
        </h1>
        <button className="primary-btn cursor-pointer transform transition duration-300 hover:translate-x-2 inline-block text-[#00000] w-100 px-[30px] font-bold text-lg border-0 leading-[56px]">
          Get Funded
        </button>
      </div>
    </div>
  );
}

export default Support;
