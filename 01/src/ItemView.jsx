import React from "react";
import { Link } from "react-router-dom";

const ItemView = ({ data, setoderitem, oderitem }) => {
  return (
    <>
      <div
        id="container "
        className=" h-screen place-content-center  flex justify-around  items-center   m-2 p-2 w-[30rem] hover:shadow-md transition duration-300  mx-auto"
      >
        <div id="box1">
          <img
            className="w-[12.5rem] max-w-[12.5rem]"
            src={data.image}
            alt=""
          />
        </div>
        <div id="box2" className=" h-[20rem] relative w-full">
          <div className=" pt-[2.75rem]">
            <img
              className="w-[4.25rem] max-w-[4.25rem] mx-auto"
              src={data.image}
              alt=""
            />

            <p className=" text-center">{data.title}</p>
          </div>
          <div className="absolute bottom-[2.5rem] left-1/2 transform -translate-x-1/2">
            <p className=" text-center">Rate: {data.rating.rate}</p>
            <p className=" text-center  ">৳{data.price}</p>
            <Link to="/Oderpage">
              <button
                onClick={() => setoderitem(data)}
                className=" border border-orange-600  px-3 py-1 "
              >
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#e8eaed"
                  >
                    <path d="m422-232 207-248H469l29-227-185 267h139l-30 208ZM320-80l40-280H160l360-520h80l-40 320h240L400-80h-80Zm151-390Z" />
                  </svg>
                  Buy Now
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemView;
