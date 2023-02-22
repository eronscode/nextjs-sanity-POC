import { SettingsPayload } from "@/types/global";
import { Layout } from "@/components/Layout/Layout";
import { PageComponentMap } from "@/utils/connectSanityComponents";
import { usePreview } from "@/lib/sanity.preview";
import { homePageQuery } from "@/lib/sanity.queries";

interface PageProps {
  settings: SettingsPayload;
  preview: boolean;
  token: string | null;
}

export default function HomePagePreview({ settings }: PageProps) {
  const data = usePreview(null, homePageQuery);
  if (!data) {
    return <div className="text-center">Unable to load preview mode.</div>;
  }
  return (
    <>
      <Layout settings={settings} page={data?.frontPage} preview={true}>
        <PageComponentMap sections={data?.frontPage?.pageSections} />
      </Layout>
    </>
  );
}
