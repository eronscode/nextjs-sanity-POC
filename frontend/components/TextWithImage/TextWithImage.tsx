import React, { FunctionComponent } from "react";
import type { Image, PortableTextBlock } from "sanity";
import ImageBox from "../ImageBox/ImageBox";
import { CustomPortableText } from "../CustomPortableText/CustomPortableText";
import { LinkComponent } from "../Link/Link";

export type TextWithImageProps = SanityDocument & {
  heading?: string;
  description?: PortableTextBlock[];
  image?: Image;
  button?: LinkProps;
};

export const TextWithImage: FunctionComponent<TextWithImageProps> = ({
  heading,
  description,
  image,
  button,
}) => {
  return (
    <section className="relative md:py-24 py-16" id="about">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-2 gap-10 items-center">
          <div className="lg:col-span-5">
            <ImageBox image={image} width={600} height={700} />
          </div>

          <div className="lg:col-span-7">
            <div className="lg:ml-7">
              {heading && (
                <h3 className="mb-4 md:text-2xl text-xl font-medium">
                  {heading}
                </h3>
              )}

              {description && (
                <CustomPortableText
                  paragraphClasses="text-slate-400 dark:text-slate-300 max-w-2xl mx-auto"
                  value={description}
                />
              )}

              <div className="relative mt-8">
                {button?.linkText && (
                  <LinkComponent
                    url={button?.url}
                    linkText={button?.linkText}
                    className="btn bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-md"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
