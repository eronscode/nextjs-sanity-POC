import { resolveHref } from "@/lib/sanity.link";
import { SettingsPayload } from "@/types/global";
import Link from "next/link";
import React, { FunctionComponent } from "react";
import { CustomPortableText } from "../CustomPortableText/CustomPortableText";

type FooterProps = {
  config: SettingsPayload["footer"];
};

export const Footer: FunctionComponent<FooterProps> = ({ config }) => {
  return (
    <footer className="footer bg-dark-footer relative text-gray-200 dark:text-gray-200">
      <div className="container">
        <div className="grid grid-cols-12">
          <div className="col-span-12">
            <div className="py-[60px] px-0">
              <div className="grid grid-cols-1">
                <div className="text-center">
                  {config?.description && (
                    <CustomPortableText
                      paragraphClasses="max-w-xl mx-auto text-slate-400 mt-8"
                      value={config?.description}
                    />
                  )}
                </div>

                <ul className="list-none footer-list text-center mt-8">
                  {config?.footerNav?.navItems &&
                    config?.footerNav.navItems.map((navItem, key) => {
                      const href = resolveHref(
                        navItem?.url?.internalLink?._type,
                        navItem?.url?.internalLink?.slug,
                      );
                      if (!href) {
                        return null;
                      }
                      return (
                        <li key={key} className="inline px-2 mt-[10px]">
                          <Link
                            className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out ml-2"
                            href={href}
                          >
                            {navItem?.text}
                          </Link>
                        </li>
                      );
                    })}
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
                {config?.copyright && (
                  <p className="text-gray-400">{config?.copyright}</p>
                )}
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
