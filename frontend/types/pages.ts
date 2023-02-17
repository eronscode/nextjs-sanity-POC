import { HeroProps } from "./../components/Hero/Hero";
import { Image } from "sanity";



export interface PagePayload {
  title?: string;
  seo?: {
    metaTitle: string;
    metaDescription: string;
    ogImage: Image;
  };
  pageSections: Array<HeroProps>;
}
