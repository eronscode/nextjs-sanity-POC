import { groq } from "next-sanity";

const navLinks = `
navItems[]{
    text,
    url{
    internalLink->{
    _type,
    "slug": slug.current
      }
    }
}`;

export const pagePathsQuery = groq` *[_type == "page" && slug.current != null].slug.current `


export const pagesBySlugQuery = groq`
*[_type == "page" && slug.current == $slug][0] {
  _id,
  title,
 "slug": slug.current,
  seo,
  pageSections
}
`


export const homePageQuery = groq`
*[_type == "settings"][0]{
    frontPage->{
      title,
      "slug": slug.current,
      pageSections,
      seo
    }
  }
`;

export const settingsQuery = groq`
*[_type == "settings"][0]{
    footer{
      copyright,
        description,
        footerNav->{
          ${navLinks}
        }
    },
    mainNav->{
        ${navLinks}
    }
  }
`;
