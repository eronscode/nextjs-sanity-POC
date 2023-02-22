import { resolveHref } from "@/lib/sanity.link";

export default function preview(req: any, res: any) {
  const href = resolveHref(
    req.query.documentType as string,
    req.query.slug as string,
  );
  if (!href) {
    return res
      .status(400)
      .send(
        "Unable to resolve preview URL based on the current document type and slug",
      );
  }

  res.setPreviewData({});
  res.writeHead(307, { Location: href });
  res.end();
}
