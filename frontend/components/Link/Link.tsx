import React from "react";
import Link from "next/link";
import { resolveHref } from "@/lib/sanity.link";

interface Props extends LinkProps {
  className?: string;
}

export function LinkComponent({ url, linkText, className }: Props) {
  if (url?.internalLink) {
    const href = resolveHref(url?.internalLink?._type, url?.internalLink?.slug);
    if (!href) {
      return null;
    }
    return (
      <Link href={url?.internalLink.slug} className={className}>
        {linkText}
      </Link>
    );
  }
  return (
    <a
      className={className}
      href={url?.externalLink?.url}
      rel="noreferrer"
      target="_blank"
    >
      {linkText}
    </a>
  );
}
