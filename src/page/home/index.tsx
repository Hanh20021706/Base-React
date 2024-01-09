import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <NavLink to={"/"}>home</NavLink>
      <NavLink to={"/products"}>products</NavLink>
    </>
  );
};

export default Home;
