import React from "react";
import { FaCoins } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <Link to="/">
      <div className="navbar">
        <FaCoins className="icon" />
        <h1>
          {" "}
          Krypto <span className="purple">Search</span>
        </h1>
        {/* <nav className="navbar-nav"></nav> */}
      </div>
    </Link>
  );
};

export default Navbar;
