import { PagePayload } from "./../types/pages";
import { createClient } from "next-sanity";
import { homePageQuery, pagePathsQuery, pagesBySlugQuery, settingsQuery } from "./sanity.queries";
import { SettingsPayload } from "@/types/global";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET; // "production"
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION; // "2023-01-01"

export const sanityClient = (token?: string) =>
  createClient({ projectId, dataset, apiVersion, useCdn: true, token });

export async function getHomePage({
  token,
}: {
  token?: string;
}): Promise<{ frontPage: PagePayload } | undefined> {
  return await sanityClient(token)?.fetch(homePageQuery);
}

export async function getSettings({
  token,
}: {
  token?: string;
}): Promise<SettingsPayload | undefined> {
  return await sanityClient(token)?.fetch(settingsQuery);
}

export async function getPageBySlug({
  slug,
  token,
}: {
  slug: string
  token?: string
}): Promise<PagePayload | undefined> {
  return await sanityClient(token)?.fetch(pagesBySlugQuery, { slug })
}

export async function getPagePaths(): Promise<string[]> {
  return await sanityClient()?.fetch(pagePathsQuery)
}
