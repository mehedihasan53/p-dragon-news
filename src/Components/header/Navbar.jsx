import React from "react";
import logo from "../../assets/logo.png";
import { format } from "date-fns";

const Navbar = () => {
  return (
    <div className="flex flex-col justify-center items-center container mx-auto">
      <img src={logo} alt="" />
      <p className="text-accent my-1">Journalism Without Fear or Favour</p>

      <p className="text-accent">
        {format(new Date(), "EEEE, MMMM MM, yyyy")}{" "}
      </p>
    </div>
  );
};

export default Navbar;
