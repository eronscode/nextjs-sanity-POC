import { getPageBySlug, getPagePaths, getSettings } from "../lib/sanity.client";
import { PagePayload } from "@/types/pages";
import { SettingsPayload } from "@/types/global";
import { Layout } from "@/components/Layout/Layout";
import { PageComponentMap } from "@/utils/connectSanityComponents";
import { resolveHref } from "@/lib/sanity.link";
import { PreviewSuspense } from "next-sanity/preview";
import PagePreview from "@/components/Preview/PagePreview";

interface PageProps {
  page: PagePayload;
  settings: SettingsPayload;
  preview: boolean;
  token: string | null;
}

export default function PageSlug({
  settings,
  page,
  preview,
  token,
}: PageProps) {
  if (preview) {
    return (
      <PreviewSuspense
        fallback={<p className="mt-7 text-xl text-center">Loading...</p>}
      >
        <PagePreview page={page} settings={settings} preview={preview} token={token} />
      </PreviewSuspense>
    );
  }

  return (
    <>
      <Layout settings={settings} page={page}>
        <PageComponentMap sections={page.pageSections} />
      </Layout>
    </>
  );
}

export const getStaticProps = async (ctx: any) => {
  const { params = {}, preview = false, previewData = {} } = ctx;
  const [settings, page] = await Promise.all([
    getSettings({}),
    getPageBySlug({ slug: params.slug }),
  ]);

  if (!page) {
    return {
      notFound: true,
    };
  }

  return {
    props: { settings, page, preview, token: previewData.token ?? null },
  };
};

export const getStaticPaths = async () => {
  const paths = await getPagePaths();

  return {
    paths: paths?.map((slug) => resolveHref("page", slug)) || [],
    fallback: false,
  };
};
