import Link from "next/link";
import React, { FunctionComponent } from "react";

export const Navbar: FunctionComponent = () => {
  return (
    <nav className="navbar " id="navbar">
      <div className="container flex flex-wrap items-center justify-between">
        <a className="navbar-brand md:mr-16" href="index.html">
          <p className="text-white dark:text-white font-bold">LOGO</p>
        </a>

        <div className="nav-icons flex items-center lg_992:order-2 ml-auto md:ml-8">
          <ul className="list-none menu-social mb-0 ps-lg-4"></ul>
          <button
            data-collapse="menu-collapse"
            type="button"
            className="collapse-btn inline-flex items-center ml-3 text-dark dark:text-white lg_992:hidden"
            aria-controls="menu-collapse"
            aria-expanded="false"
          >
            <span className="sr-only">Navigation Menu</span>
            <i className="mdi mdi-menu text-[24px]"></i>
          </button>
        </div>

        <div
          className="navigation lg_992:order-1 lg_992:flex hidden ml-auto"
          id="menu-collapse"
        >
          <ul className="navbar-nav nav-light" id="navbar-navlist">
            <li className="nav-item">
              <Link className="nav-link" href="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/">
                Team
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
