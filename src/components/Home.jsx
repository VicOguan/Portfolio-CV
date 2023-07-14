import React from "react";
import "../index.css";
import Author from "../assets/author.jpg";
import Minus from "../assets/minus.png";

const home = () => {
  return (
      <section id="hero" className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-8 flex flex-wrap justify-between md:mb-16">
          <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pt-48 lg:pb-24">
            {/* Author  */}
            <h1
              id="text"
              className="pt-5 text-white max-w-md sm:text-6xl select-none"
            >
              Ludivico Oguan
            </h1>
            {/* Title of the author  */}
            <div id="title" className="flex items-center select-none">
              <img src={Minus} width="30" />
              <div
                 
              >
                <span className="text-white font-bold sm:text-2xl pl-1">
                  Junior Software Engineer
                </span>
              </div>
            </div>
            {/* Quotes  */}
            <div
              className="max-w-md md:mt-10 md:mb-10 pt-2 pl font-sans text-white border-2 md:p-10 md:m-5 md:mx-5 sm:text-2xl select-none"
              
            >
              Enhance User Experience, Build Customer Loyalty: Invest in Web
              Development
            </div>
          </div>
          {/* author image  */}
          <div className="overflow-hidden rounded-lg shadow-lg sm:w-7/12 ">
            <img
              src={Author}
              alt="Ludivico"
              className="object-cover object-center w-full h-full"
            />
          </div>
        </div>

        <div className="flex flex-col items-center pb-10 justify-between gap-8 md:flex-row">
          {/* social - start  */}

          <div className="flex items-center justify-center gap-4 lg:justify-start">
            <span className="text-sm font-semibold uppercase tracking-widest text-gray-400 sm:text-base">
              Social
            </span>
            <span>
              <img src="assets/minus.png" width="30" alt="" />
            </span>
            <div className="flex gap-4">
              {/* instagram  */}
              <a
                href="https://www.instagram.com/vicolulu17/?utm_source=qr"
                target="_blank"
                className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
              >
                <svg
                  className="h-5 w-5"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              {/* Github  */}
              <a
                href="https://github.com/VicOguan"
                target="_blank"
                className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
              >
                <svg
                  className="h-5 w-5"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/ludivico-oguan-62725b27a/"
                target="_blank"
                className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
              >
                <svg
                  className="h-5 w-5"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>
          {/* social - end  */}
        </div>
      </section>
  );
};

export default home;
