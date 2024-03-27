import { useState } from "react";
import "./nav.css";
import { NavLink } from "react-router-dom";
// import styled from 'styled-components';
function Navbar() {
  const [hamburgerClicked, setHamburgerClicked] = useState(false);
  return (
    <>
      <nav className="nav">
        <NavLink to="/">
          <svg
            id="logo-72"
            width="52"
            height="44"
            viewBox="0 0 53 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {" "}
            <path
              d="M23.2997 0L52.0461 28.6301V44H38.6311V34.1553L17.7522 13.3607L13.415 13.3607L13.415 44H0L0 0L23.2997 0ZM38.6311 15.2694V0L52.0461 0V15.2694L38.6311 15.2694Z"
              className="ccustom"
              fill="#212326"
            ></path>{" "}
          </svg>
        </NavLink>
        <div className={hamburgerClicked ? "links" : "links active1"}>
          <NavLink
            to="/"
            style={{ padding: "10px", color: "white" }}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            style={{ padding: "10px", color: "white" }}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            About
          </NavLink>
          <NavLink
            to="/blog"
            style={{ padding: "10px", color: "white" }}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Blog
          </NavLink>
        </div>
        <div
          onClick={() => setHamburgerClicked(!hamburgerClicked)}
          className="hamburger"
        >
          <i
            className={
              hamburgerClicked ? "fa-solid fa-xmark" : "fa-solid fa-bars"
            }
          ></i>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
