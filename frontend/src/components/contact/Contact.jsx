import React, { useState } from "react";
import contactUs from "../../hooks/contactUs";
import { useLoginContext } from "../../context/useContext";

import "../contact/contact.style.css";

function Contact() {
  const { showContact, setShowContact } = useLoginContext();
  const [input, setInput] = useState({
    fullName: "",
    email: "",
    message: "",
    company: "",
    phoneNumber: "",
  });
  const { loading, contactRegister } = contactUs();

  const handleInputChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) {
      return;
    }

    await contactRegister({
      fullName: input.fullName,
      email: input.email,
      message: input.message,
      company: input.company,
      phoneNumber: input.phoneNumber,
    });

    setInput({
      fullName: "",
      email: "",
      message: "",
      company: "",
      phoneNumber: "",
    });
  };
  return (
    showContact && (
      <div className="relative z-50">
        {showContact && (
          <div className=" fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-400 bg-opacity-75">
            <div
              // style={{
              //   backgroundColor: "white",
              //   padding: "30px 50px",
              //   borderRadius: "5px",
              //   // boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              // }}
            >
              <form onSubmit={handleSubmit} className="animate-slideDown bg-white p-8 rounded-lg shadow-lg w-full max-w-xl">
                <div className="flex flex-col gap-4">
                  <div className="flex justify-end gap-5 font-semibold">
                    <button
                      className="btn float-right"
                      onClick={() => {
                        setShowContact(false);
                      }}
                    >
                      ✖
                    </button>
                  </div>
                  <label className="flex font-bold text-4xl">
                    <span>Get In Touch</span>
                  </label>
                  <label className="flex pb-5 font-semibold text-xl">
                    <span>We are here for you! How can I help you?</span>
                  </label>
                  <label className="input input-bordered flex items-center gap-2">
                    <input
                      type="text"
                      className="grow"
                      placeholder="Full Name"
                      name="fullName"
                      value={input.fullName}
                      onChange={handleInputChange}
                    />
                  </label>
                  <label className="input input-bordered flex items-center gap-2">
                    <input
                      type="text"
                      className="grow"
                      placeholder="Company"
                      name="company"
                      value={input.company}
                      onChange={handleInputChange}
                    />
                  </label>
                  <label className="input input-bordered flex items-center gap-2">
                    <input
                      type="email"
                      className="grow"
                      placeholder="Email"
                      name="email"
                      value={input.email}
                      onChange={handleInputChange}
                    />
                  </label>
                  <label className="input input-bordered flex items-center gap-2">
                    <input
                      type="text"
                      className="grow"
                      placeholder="Phone Number"
                      name="phoneNumber"
                      value={input.phoneNumber}
                      onChange={handleInputChange}
                    />
                  </label>
                  <label className="flex items-center gap-2">
                    <textarea
                      placeholder="Your thoughts..."
                      name="message"
                      id="message"
                      rows={4}
                      className="block input-boarder input w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-100"
                      value={input.message}
                      onChange={handleInputChange}
                    />
                  </label>
                  <button className="btn text-lg">Submit</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    )
  );
}

export default Contact;
