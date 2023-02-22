import { PortableText, PortableTextComponents } from "@portabletext/react";

import Link from "next/link";
import { Image, PortableTextBlock } from "sanity";
import ImageBox from "../ImageBox/ImageBox";

export function CustomPortableText({
  paragraphClasses,
  value,
}: {
  paragraphClasses?: string;
  value: PortableTextBlock[];
}) {
  const components: PortableTextComponents = {
    block: {
      normal: ({ children }) => {
        return <p className={`mb-3 ${paragraphClasses}`}>{children}</p>;
      },
    },
    marks: {
      internalLink: ({ mark, children }: any) => {
        const { slug = {} } = mark;
        const href = `/${slug.current}`;
        return <Link href={href}>{children}</Link>;
      },
      externalLink: ({ mark, children }: any) => {
        const { blank, href } = mark;
        return blank ? (
          <a href={href} target="_blank" rel="noopener noreferrer">
            {children}
          </a>
        ) : (
          <a href={href}>{children}</a>
        );
      },
    },
    types: {
      image: ({
        value,
      }: {
        value: Image & { alt?: string; caption?: string };
      }) => {
        return (
          <div className="my-6 space-y-2">
            <ImageBox
              image={value}
              alt={value.alt}
              classesWrapper="relative aspect-[16/9]"
            />
            {value?.caption && (
              <div className="font-sans text-sm text-gray-600">
                {value.caption}
              </div>
            )}
          </div>
        );
      },
    },
  };

  return <PortableText components={components} value={value} />;
}
