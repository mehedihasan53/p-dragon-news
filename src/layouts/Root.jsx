import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/header/Navbar";
import LatestNews from "../Components/header/LatestNews";
import Nav from "../Components/header/Nav";

const Root = () => {
  return (
    <div>
      <header>
        <Navbar></Navbar>
        <section className="container mx-auto">
          <LatestNews></LatestNews>
        </section>
        <nav className="container mx-auto">
          <Nav></Nav>
        </nav>
      </header>
      <main>
        <section className="left_side"></section>
        <section className="main">
          <Outlet></Outlet>
        </section>
        <section className="right_side"></section>
      </main>
    </div>
  );
};

export default Root;
