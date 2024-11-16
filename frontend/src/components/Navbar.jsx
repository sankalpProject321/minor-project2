import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <nav>
        <div className="logo"><img src="/hotel2.png" alt="" /></div>
        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="links">
            {/* Update links to navigate between routes */}
            <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
              About Us
            </NavLink>
            {/* <NavLink to="/qualities" className={({ isActive }) => (isActive ? "active" : "")}>
              Qualities
            </NavLink> */}
            {/* <NavLink to="/menu" className={({ isActive }) => (isActive ? "active" : "")}>
              Menu
            </NavLink> */}
            {/* <NavLink to="/whoarewe" className={({ isActive }) => (isActive ? "active" : "")}>
              Who Are We
            </NavLink> */}
            <NavLink to="/team" className={({ isActive }) => (isActive ? "active" : "")}>
              Team
            </NavLink>
            <NavLink to="/reservation" className={({ isActive }) => (isActive ? "active" : "")}>
              Reservation
            </NavLink>
          </div>
          <button className="menuBtn"><a href="/menu">menu</a></button>
        </div>
        <div className="hamburger" onClick={() => setShow(!show)}>
          <GiHamburgerMenu />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
