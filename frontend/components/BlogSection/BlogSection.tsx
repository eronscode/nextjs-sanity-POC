import React, { FunctionComponent } from "react";
import Link from "next/link";
import ImageBox from "../ImageBox/ImageBox";
import { BlogPostPayload } from "@/types/global";
import { resolveHref } from "@/lib/sanity.link";

export type BlogSectionProps = {
  title?: string;
  subTitle?: string;
  posts: BlogPostPayload[];
};

export const BlogSection: FunctionComponent<BlogSectionProps> = ({
  title,
  subTitle,
  posts,
}) => {
  return (
    <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800">
      <div className="container">
        <div className="grid grid-cols-1 pb-8 text-center">
          {title && (
            <h3 className="mb-6 md:text-2xl text-xl font-medium">{title}</h3>
          )}

          {subTitle && (
            <p className="text-slate-400 max-w-xl mx-auto">{subTitle}</p>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px] mt-8">
          {posts?.map((post, index) => {
            const href = resolveHref(post._type, post.slug);
            return (
              <div
                key={index}
                className="blog relative rounded-md shadow shadow-slate-200 dark:shadow-gray-800 overflow-hidden"
              >
                <ImageBox image={post.image} width={350} height={230} />

                <div className="content p-6">
                  <Link
                    href={href ?? ""}
                    className="text-lg hover:text-violet-600 dark:text-white dark:hover:text-violet-600 transition duration-500 ease-in-out font-medium h5"
                  >
                    {post?.title}
                  </Link>

                  <p className="text-slate-400 mt-3">{post?.shortDesc}</p>

                  <div className="mt-5">
                    {href && (
                      <Link
                        href={href}
                        className="hover:text-violet-600 dark:hover:text-violet-600 after:bg-violet-600 dark:text-white transition duration-500"
                      >
                        Read More
                      </Link>
                    )}
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
