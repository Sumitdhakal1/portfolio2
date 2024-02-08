
import { NavLink } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import "../../../styles/header/navigation.scss";
// import { IoMdMenu } from "react-icons/io";
import { useState } from "react";

const Navigation = () => {
  const [menuOpen, setMenuOpen]= useState(false);
  return (
    <div className="container">
      <div className="navbar">
        <div className="l-m">
          <div className="logo-left">
            <span className="logo">Sumit</span>
          </div>
          <div className="menu" onClick={()=>{setMenuOpen(!menuOpen)}}>
          {menuOpen ? <>&#10005;</> : <>&#9776;</>}
            {/* <IoMdMenu  /> */}
          </div>
        </div>
        <nav className={menuOpen ? "block" :"none"}>
          <ul className="nav-middle">
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/works">Works</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
          <div className="nav-right">
            <span className="first">Let's Talk</span>
            <span className="second">
              <MdArrowOutward className="MdArrowOutward" />
            </span>
          </div>
        </nav>
      </div>
      {/* <div className="menu">
        <IoMdMenu />
      </div> */}
    </div>
  );
};

export default Navigation;
