import Link from "next/link";
import React, { FunctionComponent } from "react";

export const Footer: FunctionComponent = () => {
  return (
    <footer className="footer bg-dark-footer relative text-gray-200 dark:text-gray-200">
      <div className="container">
        <div className="grid grid-cols-12">
          <div className="col-span-12">
            <div className="py-[60px] px-0">
              <div className="grid grid-cols-1">
                <div className="text-center">
                  <p className="max-w-xl mx-auto text-slate-400 mt-8">
                    Launch your campaign and benefit from our expertise on
                    designing and managing conversion centered Tailwind CSS html
                    page.
                  </p>
                </div>

                <ul className="list-none footer-list text-center mt-8">
                  <li className="inline px-2 mt-[10px]">
                    <Link
                      className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out ml-2"
                      href="/"
                    >
                      About Us
                    </Link>
                  </li>
                  <li className="inline px-2 mt-[10px]">
                    <Link
                      className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out ml-2"
                      href="/"
                    >
                      Blog
                    </Link>
                  </li>
                  <li className="inline px-2 mt-[10px]">
                    <Link
                      className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out ml-2"
                      href="/"
                    >
                      Team
                    </Link>
                  </li>
                  <li className="inline px-2 mt-[10px]">
                    <Link
                      className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out ml-2"
                      href="/"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-[30px] px-0 border-t border-slate-800">
        <div className="container text-center">
          <div className="grid md:grid-cols-12 items-center">
            <div className="md:col-span-6">
              <div className="md:text-left text-center">
                <p className="text-gray-400">© All rights reserved</p>
              </div>
            </div>

            <div className="md:col-span-6 md:mt-0 mt-8">
              <ul className="list-none md:text-right text-center">
                <li className="inline">
                  <a
                    href="#"
                    className="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-violet-600 dark:hover:border-violet-600 hover:bg-violet-600 dark:hover:bg-violet-600"
                  >
                    facebook
                  </a>
                </li>
                <li className="inline">
                  <a
                    href="#"
                    className="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-violet-600 dark:hover:border-violet-600 hover:bg-violet-600 dark:hover:bg-violet-600"
                  >
                   instagram
                  </a>
                </li>
                <li className="inline">
                  <a
                    href="#"
                    className="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-violet-600 dark:hover:border-violet-600 hover:bg-violet-600 dark:hover:bg-violet-600"
                  >
                   linkedin
                  </a>
                </li>
                <li className="inline">
                  <a
                    href="#"
                    className="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-violet-600 dark:hover:border-violet-600 hover:bg-violet-600 dark:hover:bg-violet-600"
                  >
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
