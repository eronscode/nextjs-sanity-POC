import React, { FunctionComponent } from "react";

export type ServicesGridProps = SanityDocument & {
  title?: string;
  subTitle?: string;
  services?: {
    title?: string;
    shortDesc?: string;
  }[];
};

export const ServicesGrid: FunctionComponent<ServicesGridProps> = ({
  title,
  subTitle,
  services,
}) => {
  return (
    <section
      className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800"
      id="features"
    >
      <div className="container lg mx-auto">
        <div className="grid grid-cols-1 pb-8 text-center">
          {title && (
            <h3 className="mb-4 md:text-2xl text-xl font-medium">{title}</h3>
          )}

          {subTitle && (
            <p className="text-slate-400 max-w-xl mx-auto">{subTitle}</p>
          )}
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-4 gap-[30px]">
          {services?.map((service, index) => {
            return (
              <div
                key={index}
                className="group relative lg:px-6 mt-4 transition duration-500 ease-in-out rounded-xl overflow-hidden text-center"
              >
                <div className="relative overflow-hidden text-transparent -m-3">
                  {/* <i
                data-feather="hexagon"
                className="h-28 w-28 fill-violet-600/5 mx-auto rotate-[30deg]"
              ></i>
              <div className="absolute top-2/4 -translate-y-2/4 left-0 right-0 mx-auto text-violet-600 rounded-xl transition duration-500 ease-in-out text-3xl flex align-middle justify-center items-center">
                <i className="uil uil-adjust-circle"></i>
              </div> */}
                </div>

                <div className="mt-6">
                  {service.title && (
                    <h5 className="text-lg h5 transition duration-500 ease-in-out hover:text-violet-600">
                      {service.title}
                    </h5>
                  )}
                  {service?.shortDesc && (
                    <p className="text-slate-400 transition duration-500 ease-in-out mt-3">
                      {service?.shortDesc}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
