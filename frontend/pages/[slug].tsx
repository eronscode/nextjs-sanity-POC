import type { SanityDocument } from "@sanity/client";
import {
  getHomePage,
  getPageBySlug,
  getPagePaths,
  getSettings,
} from "../lib/sanity.client";
import { PagePayload } from "@/types/pages";
import { SettingsPayload } from "@/types/global";
import { Layout } from "@/components/Layout/Layout";
import { PageComponentMap } from "@/utils/connectSanityComponents";
import { resolveHref } from "@/lib/sanity.link";

interface PageProps {
  page: PagePayload;
  settings: SettingsPayload;
  preview: boolean;
  token: string | null;
}

export default function PageSlug({ settings, page }: PageProps) {
  return (
    <>
      <Layout settings={settings} page={page}>
        <PageComponentMap sections={page.pageSections} />
      </Layout>
    </>
  );
}


export const getStaticProps = async (ctx: any) => {
  const { params = {} } = ctx;
  const [settings, page] = await Promise.all([
    getSettings({}),
    getPageBySlug({ slug: params.slug }),
  ]);

  if (!page) {
    return {
      notFound: true,
    };
  }

  return { props: { settings, page } };
};

export const getStaticPaths = async () => {
  const paths = await getPagePaths();

  return {
    paths: paths?.map((slug) => resolveHref("page", slug)) || [],
    fallback: false,
  };
};
