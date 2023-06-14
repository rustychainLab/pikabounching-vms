import React, { useState } from "react";
import "../assets/styles.css";
import menu from "../assets/img/menu.png";
import close from "../assets/img/cancel.png";
import Connect from "./Connect";

function NavBar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <header class="bg-[#25314d] flex flex-nowrap">
      <div class="font-extrabold font-900 m-3">
        <a href="/" className="brand-logo">
          <i class="text-white">PikaBounching</i>
        </a>
      </div>
      <div class="nav-burger justify-end" id="nav-burger">
        <button
          class="navbar-burger flex items-center text-white p-2"
          alt="Menu"
          onClick={() => {
            setIsNavExpanded(true);
          }}
        >
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 24.00 24.00"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#ffffff"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke="#CCCCCC"
              stroke-width="0.384"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g clip-path="url(#clip0_429_11066)">
                {" "}
                <path
                  d="M3 6.00092H21M3 12.0009H21M3 18.0009H21"
                  stroke="#fff"
                  stroke-width="2.4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>{" "}
              <defs>
                {" "}
                <clipPath id="clip0_429_11066">
                  {" "}
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(0 0.000915527)"
                  ></rect>{" "}
                </clipPath>{" "}
              </defs>{" "}
            </g>
          </svg>
        </button>
        {/* <img
          src={menu}
          alt="Menu"
          onClick={() => {
            setIsNavExpanded(true);
          }}
        /> */}
      </div>
      <div class=" mx-auto"></div>
      <div>
        <nav
          class={
            isNavExpanded ? "nav-custom open-menu" : "nav-custom is-active"
          }
        >
          <div class={isNavExpanded ? "nav-cancel" : "nav-cancel is-active"}>
            <img
              src={close}
              onClick={() => {
                setIsNavExpanded(false);
              }}
              alt="Cancel"
            />
          </div>
          <div class="nav-links_div justify-end">
            <a href="/" class="text-white nav-link_ref">
              Home
            </a>
            <a href="/mint-page" class="text-white nav-link_ref">
              Mint
            </a>
            <a href="/#about" class="text-white nav-link_ref">
              About
            </a>
            <a href="/#roadmap" class="text-white nav-link_ref">
              Roadmap
            </a>
            <Connect />
          </div>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
