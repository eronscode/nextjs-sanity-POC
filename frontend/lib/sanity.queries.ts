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

const callToAction = `
button{
  linkText,
  url {
   internalLink->{
    _type,
     "slug": slug.current
   }
  }
}
`;

const hero = `
_type == 'section_hero' => {
  ...,
  ${callToAction}
 },
`;

const textWithImage = `
_type == 'section_textWithImage' => {
  ...,
  ${callToAction}
 },
`;

const customerReviews = `
_type == 'section_customerReviews' => {
  ...,
  reviews[]->{
    customerName,
    image,
    review,
    position,
    image
  }
},
`;
const genericText = `
_type == 'section_genericText' => {
  ...,
},
`;

const pricings = `
_type == 'section_pricings' => {
  ...,
  pricing[]->{
    name,
    price,
    shortDesc,
    features,
    isFeatured
  }
},
`;

const services = `
_type == 'section_services' => {
  ...,
  services[]->{
    title,
    shortDesc
  }
},
`;

const pageSections = `

  ${hero}
  ${textWithImage}
  ${customerReviews}
  ${pricings}
  ${services}
  ${genericText}

`;

export const pagePathsQuery = groq` *[_type == "page" && slug.current != null].slug.current `;
export const postPathsQuery = groq` *[_type == "blogPosts" && slug.current != null].slug.current `;

export const postsQuery = groq`*[_type == "blogPosts" ]{
  ...,
  author->{
    name,
    description
  },
  "slug": slug.current
} | order(_createdAt desc)`;

export const postsBySlugQuery = groq`*[_type == "blogPosts" && slug.current == $slug]{
  ...,
  author->{
    name,
    description
  },
  "slug": slug.current
}`;

export const pagesBySlugQuery = groq`
*[_type == "page" && slug.current == $slug][0] {
  _id,
  title,
 "slug": slug.current,
  seo,
  pageSections[]{
    ${pageSections}
  }
}
`;

export const homePageQuery = groq`
*[_type == "settings"][0]{
  frontPage->{
    title,
    "slug": slug.current,
    seo,
    pageSections[]{
      ${pageSections}
    },
  }
}
`;

export const blogPageQuery = groq`
*[_type == "blogPage"][0]{
  _type,
  pageSectionsBefore[]{
    ${pageSections}
  },
  postSection,
  pageSectionsAfter[]{
    ${pageSections}
  },
  "slug": slug.current,
  seo,
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
