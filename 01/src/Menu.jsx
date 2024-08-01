import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = ({
  toggle,
  stoggle,
  bagdata,
  setToggle,
  setstoggle,
  inputvalue,
  setinputvalue,
  hidesidebar,
}) => {
  return (
    <>
      <header
        id="container"
        className="fixed z-50 top-0 w-full bg-orange-600 flex justify-center items-center gap-8 p-3 text-white "
      >
        <button
          className={` ${hidesidebar} absolute left-[38px]`}
          onClick={(e) => {
            e.preventDefault();
            setstoggle(!stoggle);
          }}
        >
          {stoggle === true ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#e8eaed"
            >
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#e8eaed"
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          )}
        </button>

        <button className=" ">
          <a href="/">
            <img
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiaSFBOfjFu1Ocl5LcpNY4LqI8ePt39YO_Wo5Fd1cu023xP1UeLpg-yhiXLPF3ixjzZx7BjgaGC1xtBFL68HzE7nXnuaHJ9nj2rZ1xo0FR_RnFJXc6BLqphqQqGJt-pjGcoQYT1qq786MIZPK7gClFP9cMeKorV9kXkgZsZwlUHgOTI0E0ClHMzvxzm7PY/s320/VIRUS%20(1).png"
              alt=""
              className="w-[15.75rem] rounded-lg"
            />
          </a>
        </button>
        <div className=" flex items-center gap-2 bg-white  rounded-lg">
          <input
            type="text"
            className=" w-[35rem] p-[0.75rem] ml-2 text-black focus:outline-none  "
            onChange={(e) => setinputvalue(e.target.value)}
            value={inputvalue}
            placeholder="Search..."
          />
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              className=" bg-orange-200 m-2 rounded-lg px-6 "
              fill="#e8eaed"
            >
              <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
            </svg>
          </a>
        </div>
        <div className="flex items-center">
          <Link to="/Login">
            <button className="flex items-center justify-end  gap-1 hover:bg-orange-300 p-3 hover:rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#e8eaed"
              >
                <path d="M480-120v-80h280v-560H480v-80h280q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H480Zm-80-160-55-58 102-102H120v-80h327L345-622l55-58 200 200-200 200Z" />
              </svg>
              Log In
            </button>
          </Link>
          |
          <Link to="/Signup">
            <button className="flex items-center justify-end  gap-1 hover:bg-orange-300 p-3 hover:rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#e8eaed"
              >
                <path d="M160-80q-33 0-56.5-23.5T80-160v-400q0-33 23.5-56.5T160-640h640q33 0 56.5 23.5T880-560v400q0 33-23.5 56.5T800-80H160Zm0-80h640v-400H160v400Zm240-40 240-160-240-160v320ZM160-680v-80h640v80H160Zm120-120v-80h400v80H280ZM160-160v-400 400Z" />
              </svg>
              Sign Up
            </button>
          </Link>
        </div>

        <button
          onClick={(e) => {
            e.preventDefault();
            setToggle(!toggle);
          }}
          className=" flex gap-1 items-center hover:bg-orange-300 p-3 hover:rounded-lg absolute right-[38px]"
        >
          <a href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#e8eaed"
            >
              <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" />
            </svg>
          </a>
          <p className="flex items-center">
            {bagdata.length}
            {toggle === true ? null : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#e8eaed"
              >
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
              </svg>
            )}
          </p>
        </button>
      </header>
    </>
  );
};

export default Menu;
