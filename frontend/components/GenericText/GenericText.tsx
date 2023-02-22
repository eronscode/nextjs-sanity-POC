import React, { FunctionComponent } from "react";
import type { PortableTextBlock } from "sanity";
import { CustomPortableText } from "../CustomPortableText/CustomPortableText";

export type GenericTextProps = SanityDocument & {
  title?: string;
  subTitle?: string;
  text?: PortableTextBlock[];
};

export const GenericText: FunctionComponent<GenericTextProps> = ({
  title,
  subTitle,
  text,
}) => {
  return (
    <section className="relative md:py-24 py-16 dark:bg-slate-800">
      <div className="container">
        <div className="grid grid-cols-1 pb-8 text-center">
          {title && (
            <h3 className="mb-3 md:text-2xl text-xl font-medium">{title}</h3>
          )}

          {subTitle && (
            <p className="text-slate-400 max-w-xl mx-auto">{subTitle}</p>
          )}
        </div>

        {text && (
          <CustomPortableText
            paragraphClasses="text-justify dark:text-slate-300  mx-auto"
            value={text}
          />
        )}
      </div>
    </section>
  );
};
