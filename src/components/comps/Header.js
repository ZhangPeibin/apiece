import React from "react";
import {Link} from "react-router-dom";

export default function Header(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <nav
      className={
        (props.transparent
          ? "top-0 absolute z-50 w-full"
          : "relative shadow-lg bg-white shadow-lg") +
        " flex flex-wrap items-center justify-between px-2 py-3 "
      }
    >
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <a
            className={
              (props.transparent ? "text-white" : "text-gray-800") +
              " text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
            }
          >
              An  IPFS   Space
          </a>
          <button
            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <h2
              className={
                (props.transparent ? "text-white" : "text-gray-800") +
                " fas fa-bars"
              }
            >≡</h2>
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" +
            (navbarOpen ? " block rounded shadow-lg" : " hidden")
          }
          id="example-navbar-warning"
        >
          <ul className="flex flex-col lg:flex-row list-none mr-auto">
            <li className="flex items-center">
              <a
                className={
                  (props.transparent
                    ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                    : "text-gray-800 hover:text-gray-600") +
                  " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                }
              >
                {/*Docs*/}
              </a>
            </li>
          </ul>
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                  <Link to={"/signup"}>
                      <button
                          className={
                              "text-black  text-xs font-bold uppercase  px-4 py-2 bg-transparent   outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
                          }
                          type="button"
                          style={{ transition: "all .15s ease" }}
                      >Sign Up
                      </button>
                  </Link>
              </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
