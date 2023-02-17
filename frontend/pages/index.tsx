import type { SanityDocument } from "@sanity/client";
import { getHomePage, getSettings } from "../lib/sanity.client";
import { PagePayload } from "@/types/pages";
import { SettingsPayload } from "@/types/global";
import { Layout } from "@/components/Layout/Layout";
import { PageComponentMap } from "@/utils/connectSanityComponents";

interface PageProps {
  page: PagePayload;
  settings: SettingsPayload;
  preview: boolean;
  token: string | null;
}

export default function Home({ settings, page }: PageProps) {
  console.log({page})
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

export const getStaticProps = async () => {
  const [settings, page = fallbackPage] = await Promise.all([
    getSettings({}),
    getHomePage({}),
  ]);

  return { props: { settings, page: page?.frontPage } };
};
