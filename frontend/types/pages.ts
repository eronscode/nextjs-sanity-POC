import { HeroProps } from "./../components/Hero/Hero";
import { Image } from "sanity";

export interface PagePayload {
  slug?: string;
  title?: string;
  seo?: {
    metaTitle: string;
    metaDescription: string;
    ogImage: Image;
  };
  pageSections: Array<any>;
}

export interface BlogPagePayload extends PagePayload {
  postSection: {
    title: string;
    subTitle: string;
  };
  pageSectionsBefore: Array<any>;
  pageSectionsAfter: Array<any>;
}
