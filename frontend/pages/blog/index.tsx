import { getBlogPage, getPosts, getSettings } from "@/lib/sanity.client";
import { BlogPagePayload } from "@/types/pages";
import { BlogPostPayload, SettingsPayload } from "@/types/global";
import { Layout } from "@/components/Layout/Layout";
import { PageComponentMap } from "@/utils/connectSanityComponents";
import { BlogSection } from "@/components/BlogSection/BlogSection";

export interface PageProps {
  page: BlogPagePayload;
  settings: SettingsPayload;
  preview: boolean;
  token: string | null;
  posts: BlogPostPayload[];
}

export default function BlogHome({
  settings,
  page,
  preview,
  token,
  posts,
}: PageProps) {
  return (
    <>
      <Layout settings={settings} page={page}>
        <PageComponentMap sections={page.pageSectionsBefore} />
        <BlogSection
          title={page.postSection?.title}
          subTitle={page.postSection?.subTitle}
          posts={posts}
        />
        <PageComponentMap sections={page.pageSectionsAfter} />
      </Layout>
    </>
  );
}

export const getStaticProps = async (ctx: any) => {
  const { preview = false, previewData = {} } = ctx;

  const [settings, page = {}, posts = []] = await Promise.all([
    getSettings({}),
    getBlogPage({}),
    getPosts({}),
  ]);

  return {
    props: {
      settings,
      page: page,
      preview,
      token: previewData?.token ?? null,
      posts,
    },
  };
};
