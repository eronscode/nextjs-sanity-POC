import {
  getPostBySlug,
  getPostPaths,
  getSettings,
} from "@/lib/sanity.client";
import { BlogPostPayload, SettingsPayload } from "@/types/global";
import { Layout } from "@/components/Layout/Layout";
import { resolveHref } from "@/lib/sanity.link";
import { Hero } from "@/components/Hero/Hero";
import { CustomPortableText } from "@/components/CustomPortableText/CustomPortableText";

export interface PageProps {
  post: BlogPostPayload[];
  settings: SettingsPayload;
  preview: boolean;
  token: string | null;
  posts: BlogPostPayload[];
}

export default function BlogPost({
  settings,
  post,
  preview,
  token,
  posts,
}: PageProps) {
  const blogPost = post[0] ?? {};
  return (
    <>
      <Layout settings={settings} page={blogPost}>
        <Hero
          heading={blogPost?.title}
          tagline={blogPost?.shortDesc}
          id={blogPost._id}
          _type={blogPost._type}
          image={blogPost?.image}
        />
        <div className="container my-10">
          {blogPost?.description && (
            <CustomPortableText
              paragraphClasses=""
              value={blogPost?.description}
            />
          )}
        </div>
      </Layout>
    </>
  );
}

export const getStaticProps = async (ctx: any) => {
  const { params = {}, preview = false, previewData = {} } = ctx;

  const [settings, post = {}, posts = []] = await Promise.all([
    getSettings({}),
    getPostBySlug({ slug: params.slug }),
  ]);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      settings,
      post,
      preview,
      token: previewData?.token ?? null,
      posts,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = await getPostPaths();

  return {
    paths: paths?.map((slug) => resolveHref("blogPosts", slug)) || [],
    fallback: false,
  };
};
