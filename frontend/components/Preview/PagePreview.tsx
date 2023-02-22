import { Layout } from "@/components/Layout/Layout";
import { PageComponentMap } from "@/utils/connectSanityComponents";
import { usePreview } from "@/lib/sanity.preview";
import {  pagesBySlugQuery } from "@/lib/sanity.queries";
import { PageProps } from "@/pages";

export default function PagePreview({ settings, token, page }: PageProps) {
  const data = usePreview(null, pagesBySlugQuery, {
    slug: page.slug ?? "",
  });
  if (!data) {
    return <div className="text-center">Unable to load preview mode.</div>;
  }
  return (
    <>
      <Layout settings={settings} page={data} preview={true}>
        <PageComponentMap sections={data?.pageSections} />
      </Layout>
    </>
  );
}
