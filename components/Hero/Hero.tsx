import Link from "next/link";
import React, { FunctionComponent } from "react";

export const Hero: FunctionComponent = () => {
  return (
    <section
      className="py-36 lg:py-56 w-full table relative  bg-top bg-no-repeat"
      id="home"
    >
      <div className="absolute inset-0 bg-gradient-to-t to-black/50 via-black/75 from-black"></div>

      <div className="container">
        <div className="grid grid-cols-1 pb-8 text-center mt-10">
          <h3 className="font-medium leading-normal text-4xl mb-5 mt-10 text-white">
            We&apos;re Helping to Achieve your Success.
          </h3>

          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            This is just a simple text made for this unique and awesome
            template, you can replace it with any text.
          </p>

          <div className="mt-8">
            <a
              href="#"
              className="btn bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-md"
            >
              <i className="uil uil-envelope"></i> Contact Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
