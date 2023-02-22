import type { SanityDocument } from "@sanity/client";
import { getHomePage, getSettings } from "../lib/sanity.client";
import { PagePayload } from "@/types/pages";
import { SettingsPayload } from "@/types/global";
import { Layout } from "@/components/Layout/Layout";
import { PageComponentMap } from "@/utils/connectSanityComponents";
import { usePreview } from "@/lib/sanity.preview";
import { homePageQuery } from "@/lib/sanity.queries";
import { PreviewSuspense } from "next-sanity/preview";
import HomePagePreview from "@/components/Preview/HomePagePreview";

export interface PageProps {
  page: PagePayload;
  settings: SettingsPayload;
  preview: boolean;
  token: string | null;
}

export default function Home({ settings, page, preview, token }: PageProps) {

  if (preview) {
    return (
      <PreviewSuspense
        fallback={<p className="mt-7 text-xl text-center">Loading...</p>}
      >
        <HomePagePreview settings={settings} preview={preview} token={token} />
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

const fallbackPage: { frontPage: PagePayload } = {
  frontPage: {
    title: "",
    pageSections: [],
  },
};

export const getStaticProps = async (ctx: any) => {
  const { preview = false, previewData = {} } = ctx;

  const [settings, page = fallbackPage] = await Promise.all([
    getSettings({}),
    getHomePage({}),
  ]);

  return {
    props: {
      settings,
      page: page?.frontPage,
      preview,
      token: previewData?.token ?? null,
    },
  };
};
