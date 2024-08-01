import React from "react";
import { Link } from "react-router-dom";

const Bag = ({ toggle, bagdata, setbagdata }) => {
  return (
    <div
      id="container"
      className={`bg-slate-700 w-[20.75rem] h-auto border fixed top-[5.25rem] right-[2.25rem] ${
        toggle === true ? "hidden" : "block"
      }`}
    >
      {bagdata.length === 0 ? (
        <p className="text-white p-4 ">Bag is empty</p>
      ) : (
        <div className="p-4 ">
          {bagdata.map((item, index) => (
            <div
              key={index}
              className="text-white mb-2 flex items-center gap-2 justify-between "
            >
              <p className="flex items-center">
                <img className=" w-8" src={item.image} alt="" />
                <a href={`${window.location.origin}/${item.id}`}>
                  <p>
                    {item.title} ৳{item.price}
                  </p>
                </a>
              </p>
              <button
                onClick={() => {
                  setbagdata(bagdata.filter((_, i) => i !== index));
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#e8eaed"
                >
                  <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Bag;
