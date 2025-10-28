import React from "react";
import { NavLink } from "react-router";
import user from "../../assets/user.png";

const Nav = () => {
  return (
    <div className="flex justify-between items-center mt-8">
      <div className="left_nav"></div>
      <div className="main_nav flex gap-6 text-accent">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/career"}>Career</NavLink>
      </div>
      <div className="login flex gap-1">
        <img src={user} alt="user" />
        <button className="btn btn-primary px-10 ">Login</button>
      </div>
    </div>
  );
};

export default Nav;
