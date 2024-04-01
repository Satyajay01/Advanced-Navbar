import React, { useState } from "react";
import { RiMenu2Line } from "react-icons/ri";
import { TfiClose } from "react-icons/tfi";
import "./Nevbar.css";

function NavBar() {
  const [NewBar_anima, setNewBar_anima] = useState("");
  function NewBar_open() {
    setNewBar_anima("transform translate-x-full");
  }
  function NewBar_close() {
    setNewBar_anima("");
  }

  return (
    <>
      {/* ---------------------Small Devices---------------------- */}
      <div className="fixed md:hidden w-full flex justify-between px-4 py-2 shadow-2xl items-center bg-transparent backdrop-blur-[3px] ">
        <h1 className="text-5xl font-bold text-[#20bb2f]">Logo</h1>
        <div className=" flex gap-4">
          <button className="bn2 rounded-2xl text-[#ffffff] bg-[#20bb2f]">
            Sign in !
          </button>
          <button
            onClick={NewBar_open}
            className=" text-2xl text-[#20bb2f] p-2 border-2 border-[#20bb2f] rounded-2xl"
          >
            <RiMenu2Line />
          </button>
        </div>
      </div>

      <div
        className={` fixed flex bg-[#2f2f3048] w-full h-screen top-0 left-[-100%] ${NewBar_anima} transition-all duration-700 ease-in-out`}
      >
        <div className="w-4/5 bg-white h-screen">
          {/* --------------- */}

          <div className=" border-2 h-28">
            <h1 className="font-bold text-5xl p-2 text-[#20bb2f]">Logo</h1>

            <div className="relative left-40">
              <button className="text-xl">
                Sign in <i className="fa-regular fa-user"></i>
              </button>
            </div>
          </div>

          <div>
            <ul>
              <li>
                <a
                  href="#"
                  data-link-alt="Home"
                  className="text_hover relative block p-4 text-xl overflow-hidden"
                >
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  data-link-alt="Courses"
                  className="text_hover relative block p-4 text-xl overflow-hidden"
                >
                  <span>Courses</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  data-link-alt="Why us"
                  className="text_hover relative block p-4 text-xl overflow-hidden"
                >
                  <span>Why us</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  data-link-alt="About"
                  className="text_hover relative block p-4 text-xl overflow-hidden"
                >
                  <span>About</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  data-link-alt="Contact"
                  className="text_hover relative block p-4 text-xl overflow-hidden"
                >
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </div>
          {/* -------------------*/}
        </div>
        <div
          onClick={NewBar_close}
          className=" bg-[rgba(0,0,0,0.61)] w-1/4 h-screen "
        >
          <h1 className="text-white text-xl p-8">
            <TfiClose />
          </h1>
        </div>
      </div>
      {/* ---------------------Small Devices---------------------- */}

      {/* ----------------------Medium devices--------------------------- */}

      <div
        className={`hidden md:flex fixed w-full border-solid h-16 bg-transparent backdrop-blur-[3px]`}
      >
        <div className=" shadow-2xl bg-[#ffffff] w-full bg-transparent flex justify-center ">
          <div className="Nav_open_container flex items-center justify-between h-full w-11/12">
            <div className="Logo h-full">
              <h1 className="font-bold text-5xl text-[#20bb2f]">Logo</h1>
            </div>
            <div className="options flex items-center h-full">
              <ul className="flex">
                <li className="">
                  <a
                    href="#"
                    data-link-alt="Home"
                    className="text_hover relative block p-4 text-xl overflow-hidden"
                  >
                    <span>Home</span>
                  </a>
                </li>
                <li className="sm:bg-transparent">
                  <a
                    href="#"
                    data-link-alt="Courses"
                    className="text_hover relative block p-4 text-xl overflow-hidden"
                  >
                    <span>Courses</span>
                  </a>
                </li>
                <li className="sm:bg-transparent">
                  <a
                    href="#"
                    data-link-alt="Why us"
                    className=" text_hover relative block overflow-hidden p-4 text-xl "
                  >
                    <span>Why us</span>
                  </a>
                </li>
                <li className="">
                  <a
                    href="#"
                    data-link-alt="About"
                    className=" text_hover relative block overflow-hidden p-4 text-xl "
                  >
                    <span>About</span>
                  </a>
                </li>
                <li className="">
                  <a
                    href="#"
                    data-link-alt="Contact"
                    className="text_hover relative block overflow-hidden p-4 text-xl "
                  >
                    <span>Contact</span>
                  </a>
                </li>
              </ul>

              <div className="Register ml-10">
                <a href="#">
                  <button className="bn1 rounded-md text-[#7dc116]">
                    Register !
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ----------------------Medium devices--------------------------- */}
    </>
  );
}

export default NavBar;
