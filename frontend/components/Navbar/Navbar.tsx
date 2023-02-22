import { resolveHref } from "@/lib/sanity.link";
import Link from "next/link";
import React, { FunctionComponent } from "react";

type NavbarProps = {
  menu?: NavigationMenu;
  preview?: boolean;
};

export const Navbar: FunctionComponent<NavbarProps> = ({ menu, preview }) => {
  return (
    <nav style={{ top: preview ? "35px" : "" }} className="navbar" id="navbar">
      <div className="container flex flex-wrap items-center justify-between">
        <Link className="navbar-brand md:mr-16" href="/">
          <p className="text-white dark:text-white font-bold">CodeHero</p>
        </Link>

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
            {menu?.navItems &&
              menu?.navItems?.map((navItem, key) => {
                const href = resolveHref(
                  navItem?.url?.internalLink?._type,
                  navItem?.url?.internalLink?.slug,
                );
                if (!href) {
                  return null;
                }
                return (
                  <li key={key} className="nav-item">
                    <Link className="nav-link" href={href}>
                      {navItem?.text}
                    </Link>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </nav>
  );
};
