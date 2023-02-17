import Link from "next/link";
import type { Image } from "sanity";
import React, { FunctionComponent } from "react";
import { urlForImage } from "@/lib/sanity.image";

export type HeroProps = SanityDocument & {
  heading?: string;
  tagline?: string;
  image?: Image;
};

export const Hero: FunctionComponent<HeroProps> = ({
  heading,
  tagline,
  image,
}) => {
  const imageUrl = image && urlForImage(image)?.url();
  return (
    <section
      className="py-40 w-full table relative  bg-top bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-t to-black/50 via-black/75 from-black"></div>

      <div className="container">
        <div className="grid grid-cols-1 pb-8 text-center mt-10">
          {heading && (
            <h3 className="font-medium leading-normal text-4xl mb-5 mt-10 text-white">
              {heading}
            </h3>
          )}

          {tagline && (
            <p className="text-slate-400 text-lg max-w-xl mx-auto">{tagline}</p>
          )}

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
