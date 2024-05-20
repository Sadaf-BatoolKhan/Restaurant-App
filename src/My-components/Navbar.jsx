import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Home from "./home"

function Navbar({ search, onSearch }) {
  return (
    <>
      <div className="navbar">
        <h1>Recipe Finder</h1>
        <>
          <div>
            <nav className="router-items">
              <ul>
                <li>
                  <Link to="/" className="link-black">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="favourite" className="link-black">
                    Favourite Recipies
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </>
        <input
          type="search"
          value={search}
          onChange={(e) => onSearch(e.target.value)}
          placeholder="Search here"
        />
      </div>
    </>
  );
}

export default Navbar;
