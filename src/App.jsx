import React, { useState } from "react";

function App() {
  const [picture, setPicture] = useState(null);
  const [name, setName] = useState("Your Name");
  const [phone, setPhone] = useState("018299834923");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("Your Title");

  const handleForm = (e) => {
    e.preventDefault();
  };
  return (
    <React.Fragment>
      <div className="flex min-h-screen justify-center items-center">
        <div className="mx-auto max-w-[92%] shadow-2xl py-4 px-8 ">
          <div className="grid grid-cols-7 gap-3">
            <div className="col-span-3 shadow-lg rounded-lg m-4">
              <div className="bg-[#273762] p-6 rounded-t-lg">
                <h2 className="font-semibold text-xl text-center text-white">
                  Create Your Own Signature!
                </h2>
              </div>
              <form
                onSubmit={handleForm}
                className="flex flex-col px-8 py-5 space-y-3 w-full"
              >
                <div className="text-center text-gray-500 font-light text-md -mt-2">
                  <label
                    htmlFor="file"
                    className="border bg-gray-200 active:outline-none focus:outline-none py-2 px-4 rounded-md w-full block"
                  >
                    Add HeadShot*
                  </label>
                  <input
                    type="file"
                    id="file"
                    className="hidden "
                    placeholder="Name"
                  />
                </div>
                <input
                  type="text"
                  className="border bg-gray-200 active:outline-none focus:outline-none py-2 px-4 rounded-md"
                  placeholder="Name Here*"
                  // value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="text"
                  className="border bg-gray-200 active:outline-none focus:outline-none py-2 px-4 rounded-md"
                  placeholder="Title Here*"
                  // value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <input
                  type="text"
                  className="border bg-gray-200 active:outline-none focus:outline-none py-2 px-4 rounded-md"
                  placeholder="Phone*"
                  // value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <input
                  type="text"
                  className="border bg-gray-200 active:outline-none focus:outline-none py-2 px-4 rounded-md"
                  placeholder="Email*"
                  // value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  type="submit"
                  className="w-full block text-center bg-[#273762] text-white font-medium py-2 rounded-md"
                >
                  Create Signature!
                </button>
              </form>
            </div>
            <div className="flex flex-col col-span-4 shadow-lg px-6 py-2  ">
              <div className="">
                <div className=" flex gap-6 items-center">
                  <div className="">
                    <div className="bg-gray-500 w-32 h-32 rounded-full"></div>
                    <div className="flex gap-2 justify-center">
                      <p>...</p>
                      <p>...</p>
                      <p>...</p>
                    </div>
                  </div>
                  <div className="text-gray-700">
                    <h2 className="text-blue-700 font-medium">
                      {name} | Better Tax Releif
                    </h2>
                    <h3 className="py-2">{title}</h3>
                    <div className="flex gap-2 ">
                      <p>{phone}</p>
                      <p>0493498394</p>
                    </div>
                    <p>{email}@bettertaxreleif.com</p>
                    <p>www.bettertaxreleif.com</p>
                    <p>232, avinew , NewYork City , USA</p>
                  </div>
                </div>
                <img src="./ba-6.png" className="w-[80%] mt-6" alt="" />
              </div>
              {/* picture */}
              <div className="flex mt-2 text-gray-700 font-medium  py-6 ">
                <ol>
                  <li>
                    1. Use this{" "}
                    <span className="text-red-500 underline">
                      online tool to crop, resize, round
                    </span>{" "}
                    your image.
                  </li>
                  <li>
                    2. Image size 500 x 500 pixel or any size of 1:1 ratio.
                  </li>
                  <li>3. only allow jpg,png format.</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
