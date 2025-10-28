import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/header/Navbar";
import LatestNews from "../Components/header/LatestNews";
import Nav from "../Components/header/Nav";
import LeftAside from "../Components/HomeLayout/LeftAside";
import RightAside from "../Components/HomeLayout/RightAside";

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
      <main className="w-11/12 mx-auto  grid grid-cols-12 ">
        <aside className="col-span-3">
          <LeftAside></LeftAside>
        </aside>
        <section className="main col-span-6 ">
          <Outlet></Outlet>
        </section>
        <aside className="col-span-3">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default Root;
