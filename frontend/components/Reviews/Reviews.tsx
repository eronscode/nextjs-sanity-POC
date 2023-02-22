import React, { FunctionComponent } from "react";
import type { Image } from "sanity";
import ImageBox from "../ImageBox/ImageBox";

export type ReviewsProps = SanityDocument & {
  title?: string;
  subTitle?: string;
  reviews?: {
    customerName?: string;
    position?: string;
    review?: string;
    image?: Image;
  }[];
};

export const Reviews: FunctionComponent<ReviewsProps> = ({
  title,
  subTitle,
  reviews,
}) => {
  return (
    <section
      className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800"
      id="testi"
    >
      <div className="container">
        <div className="grid grid-cols-1 pb-8 text-center">
          {title && (
            <h3 className="mb-6 md:text-2xl text-xl font-medium">{title}</h3>
          )}

          {subTitle && (
            <p className="text-slate-400 max-w-xl mx-auto">{subTitle}</p>
          )}
        </div>

        <div className="flex flex-wrap mt-8 gap-[0px]">
          {reviews?.map((review, index) => {
            return (
              <div key={index} className="lg:w-1/3 p-3 w-full">
                <div className="rounded-lg h-full w-full shadow-lg list-style-none dark:shadow-gray-800 p-6 bg-white dark:bg-slate-900">
                  <div className="flex items-center pb-6 border-b border-gray-100 dark:border-gray-800">
                    <div className="h-[70px] w-[70px] rounded-full shadow overflow-hidden">
                      <ImageBox image={review?.image} width={64} height={64} />
                    </div>

                    <div className="pl-4">
                      <a
                        href="#"
                        className="text-lg h5 hover:text-violet-600 duration-500 ease-in-out"
                      >
                        {review.customerName}
                      </a>
                      <p className="text-slate-400">{review?.position}</p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <p className="text-slate-400">{review?.review}</p>
                    {/* <ul className="list-none mb-0 text-amber-400 mt-2">
                      <li className="inline">
                        <i className="mdi mdi-star"></i>
                      </li>
                      <li className="inline">
                        <i className="mdi mdi-star"></i>
                      </li>
                      <li className="inline">
                        <i className="mdi mdi-star"></i>
                      </li>
                      <li className="inline">
                        <i className="mdi mdi-star"></i>
                      </li>
                      <li className="inline">
                        <i className="mdi mdi-star"></i>
                      </li>
                    </ul> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
