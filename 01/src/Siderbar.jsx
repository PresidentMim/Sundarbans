import React, { useState } from "react";
const Siderbar = ({
  stoggle,
  rangeValue,
  setrangeValue,
  datas,
  setbuttonfind,
  buttonfind,
  btncolorchange,
  setbtncolorchange,
  hidesidebar,
}) => {
  const uniqueCategories = [...new Set(datas.map((e) => e.category))];
  return (
    <div
      id="conatiner"
      className={` ${hidesidebar}  text-white space-y-3 place-content-center text-center bg-orange-300 w-[20.75rem] z-40  h-screen border fixed top-[4.25rem] left-[-1px] ${
        stoggle === true ? "hidden" : "block"
      }`}
    >
      <h1 className="text-4xl text-black">Category</h1>
      <ul>
        <li>
          <button
            className={`${
              btncolorchange === null ? "bg-black" : ""
            } rounded-lg p-1 w-[10.75rem]`}
            onClick={() => {
              setbuttonfind("");
              setbtncolorchange(null);
            }}
          >
            All
          </button>
        </li>
        {uniqueCategories.map((category, index) => (
          <li key={index}>
            <button
              className={`${
                btncolorchange === index ? "bg-black" : ""
              } rounded-lg p-1 w-[10.75rem]`}
              value={buttonfind}
              onClick={() => {
                setbuttonfind(category);
                setbtncolorchange(index);
              }}
            >
              {category.toUpperCase()}
            </button>
          </li>
        ))}
      </ul>
      <hr />
      <p className=" text-black">Filter By Price</p>
      <input
        type="range"
        min="10"
        max="1000"
        value={rangeValue}
        onChange={(e) => setrangeValue(e.target.value)}
        className="w-[16rem] "
      />
      <p>Price:10৳ — ৳{rangeValue}</p>
    </div>
  );
};

export default Siderbar;
