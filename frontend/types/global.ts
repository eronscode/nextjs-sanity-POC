import type { Image, PortableTextBlock } from "sanity";

export interface SettingsPayload {
  footer?: {
    footerNav?: NavigationMenu;
    description?: PortableTextBlock[];
    copyright?: string;
  };
  mainNav?: NavigationMenu;
}
 
export interface BlogPostPayload {
  _id: string;
  _type: string;
  image: Image;
  title: string;
  slug: string;
  shortDesc: string;
  description: PortableTextBlock[];
  author: {
    name: string;
    description: string;
  };
  seo?: {
    metaTitle: string;
    metaDescription: string;
    ogImage: Image;
  };
}
