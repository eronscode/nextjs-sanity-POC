import React, { FunctionComponent } from "react";

export type PricingProps = SanityDocument & {
  title?: string;
  subTitle?: string;
  pricing?: {
    features?: Array<String>;
    name?: string;
    price?: string;
    shortDesc?: string;
    isFeatured?: string;
  }[];
};

export const Pricing: FunctionComponent<PricingProps> = ({
  title,
  subTitle,
  pricing,
}) => {
  return (
    <section className="relative md:py-24 py-16" id="pricing">
      <div className="container">
        <div className="grid grid-cols-1 pb-8 text-center">
          {title && (
            <h3 className="mb-4 md:text-2xl text-xl font-medium">{title}</h3>
          )}

          {subTitle && (
            <p className="text-slate-400 dark:text-slate-300 max-w-xl mx-auto">
              {subTitle}
            </p>
          )}
        </div>

        <div className="grid md:grid-cols-3 grid-cols-1 mt-8 gap-[30px] items-center">
          {pricing?.map((price, index) => {
            const featuredClass = price?.isFeatured
              ? "shadow rounded-md p-6 bg-gradient-to-t bg-violet-600"
              : "";
            const featuredbtnClass = price?.isFeatured
              ? "bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white"
              : "bg-violet-600/5 hover:bg-violet-600 border-violet-600/10 hover:border-violet-600 text-violet-600 hover:text-white";
            return (
              <div key={index} className={` p-6 ${featuredClass}`}>
                <div className="pb-8">
                  <h3
                    className={`mb-6 text-xl font-medium ${
                      price?.isFeatured ? "text-white" : ""
                    }`}
                  >
                    {price?.name}
                  </h3>
                  <div
                    className={`mb-6 ${price?.isFeatured ? "text-white" : ""}`}
                  >
                    <span className="relative h6 -top-5 text-xl">$</span>
                    <span className="text-5xl h6 font-bold ">
                      {price?.price}
                    </span>
                    <span className="inline-block h6 ml-1">/ month</span>
                  </div>
                  <p
                    className={`mb-6  ${
                      price?.isFeatured ? "text-white" : "text-slate-400"
                    }`}
                  >
                    {price?.shortDesc}
                  </p>
                  <a
                    href="#"
                    className={`btn rounded-md w-full ${featuredbtnClass}`}
                  >
                    Get Started
                  </a>
                </div>
                <div className="border-b border-slate-200/10"></div>
                <ul className="self-start pt-8">
                  {price?.features?.map((feature, key) => {
                    return (
                      <li
                        key={key}
                        className={`flex items-center mb-1 ${
                          price?.isFeatured ? "text-white/80" : ""
                        }`}
                      >
                        <i className="uil uil-check-circle text-xl text-orange-600 mr-2"></i>
                        <span>{feature}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
