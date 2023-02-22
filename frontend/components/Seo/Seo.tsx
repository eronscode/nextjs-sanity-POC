import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { BlogPagePayload, PagePayload } from "@/types/pages";
import { urlForImage } from "@/lib/sanity.image";

interface Props {
  data?: PagePayload["seo"] | BlogPagePayload["seo"];
  type?: string;
  lang?: string;
  author?: string;
}

const defaultValues = {
  lang: "en-US",
  siteName: "CodeHero Academy",
  author: "CodeHero",
  description: "Some default description",
};

export const Seo: React.FunctionComponent<Props> = ({
  data,
  type,
  lang,
  author,
}) => {
  const { asPath } = useRouter();

  const { metaTitle, metaDescription, ogImage } = data || {};
  const description = metaDescription || defaultValues.description;
  const fullTitle = metaTitle
    ? `${defaultValues.siteName} | ${metaTitle}`
    : defaultValues.siteName;
  const ogCover =
    ogImage && urlForImage(ogImage)?.width(1200).height(627).fit("crop").url();

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <meta
        key="description"
        name="description"
        content={
          description ? description.slice(0, 160) : defaultValues.description
        }
      />

      {/* <link rel="manifest" href="/favicon/site.webmanifest" />
      <link rel="shortcut icon" href="/favicon/favicon.ico" /> */}
      <meta name="msapplication-TileColor" content="#000000" />
      {/* <meta name="msapplication-config" content="/favicon/browserconfig.xml" /> */}
      <meta name="theme-color" content="#000" />

      <meta
        key="og:locale"
        property="og:locale"
        content={lang || defaultValues.lang}
      />
      <meta key="og:type" property="og:type" content={type} />
      <meta
        key="og:title"
        property="og:title"
        content={metaTitle || fullTitle}
      />
      <meta
        key="og:description"
        property="og:description"
        content={metaDescription}
      />
      {/* <meta key="og:url" property="og:url" content={`${host}${asPath}`} /> */}
      <meta
        key="og:site_name"
        property="og:site_name"
        content={defaultValues.siteName}
      />
      {ogCover && <meta key="og:image" property="og:image" content={ogCover} />}

      {type === "article" && (
        <meta
          key="article:publisher"
          property="article:publisher"
          content="https://twitter.com/"
        />
      )}
      {type === "article" && author && (
        <meta key="article:author" property="article:author" content={author} />
      )}

      <meta name="twitter:title" content={metaTitle || fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta
        key="twitter:card"
        name="twitter:card"
        content="summary_large_image"
      />
      <meta key="twitter:site" name="twitter:site" content="@" />
    </Head>
  );
};
