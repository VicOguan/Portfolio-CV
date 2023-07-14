import React from "react";
import Logo from '../assets/Logo No BG.png'

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="container relative mx-auto p-6">

        {/* Flex Container For Nav Items  */}
        <div className="flex items-center justify-between space-x-20 my-6">

          {/* Logo  */}
          <div className="z-30">
            <img src={Logo} width="100" alt="logo" />
          </div>

          {/* Desktop9 Menu Items  */}
          <div className="hidden items-center space-x-8 uppercase text-grayishBlue md:flex select-none">
            <a href="#" className="hover:text-softRed">
              Home
            </a>
            <a href="#timeline" className="tracking-widest hover:text-softRed">
              Works
            </a>
            <a href="#skills" className="tracking-widest hover:text-softRed">
              Skills
            </a>
            <a href="#profile" className="tracking-widest hover:text-softRed">
              About
            </a>

            <button className="px-3 py-2 text-xs text-center bg-slate-700 hover:bg-gray-800 text-white rounded-lg font-bold">
              <div className="flex justify-center items-center relative">
                <div className="svg-container">
                  {/* Download Icon  */}
                  <a
                    href="https://github.com/VicOguan/database/blob/main/playground_assets/CV-LUDIVICO_OGUAN.pdf"
                    target="_blank"
                    download
                  >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 22"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="download-icon"
                    width="20"
                    height="15"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>  
                  </a>
                </div>
                <div className="button-copy pl-2 leading-none uppercase">
                  <a
                    href="https://github.com/VicOguan/database/blob/main/playground_assets/CV-LUDIVICO_OGUAN.pdf"
                    download
                    target="_blank"
                  >
                    RESUME
                  </a>
                </div>
              </div>
            </button>
          </div>
          {/* Hamburger Button  */}
          <button
            id="menu-btn"
            className="z-30 block md:hidden focus:outline-none hamburger"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>

        {/* Mobile Menu  */}
        <div
            className={
              (navbarOpen ? "flex" : " hidden")
            }
          >
        <div
          id="menu"
          className="fixed inset-0 z-20 flex-col items-center 
          self-end w-full h-full m-h-screen px-6 py-1 pt-24 pb-4 tracking-widest
         text-white uppercase divide-y divide-gray-500 opacity-90 bg-veryDarkBlue select-none"
        >
          <div className="w-full py-3 text-center">
            <a href="#" className="block hover:text-softRed">
              Home
            </a>
          </div>
          <div className="w-full py-3 text-center">
            <a href="#timeline" className="block hover:text-softRed">
              Works
            </a>
          </div>
          <div className="w-full py-3 text-center">
            <a href="#skills" className="block hover:text-softRed">
              Skills
            </a>
          </div>
          <div className="w-full py-3 text-center">
            <a href="#profile" className="block hover:text-softRed">
              About
            </a>
          </div>
          <div className="w-full py-3 text-center">
            <a
              href="https://github.com/VicOguan/database/blob/main/playground_assets/CV-LUDIVICO_OGUAN.pdf"
              target="_blank"
              download={true}
              className="block hover:text-softRed"
            >
              Resume
            </a>
          </div>
        </div>
        </div>
      </nav>
    </>
  );
}
