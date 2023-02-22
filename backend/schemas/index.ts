import pages from './documents/pages'
import siteSettings from './documents/settings'
import navigation from './documents/navigation'
import authors from './documents/blog/authors'
import posts from './documents/blog/posts'
import service from './documents/service'
import blogPage from './documents/blogPage'

import customerReviews from './modules/customerReviews'
import pricings from './modules/pricings'
import services from './modules/services'

// objects
import hero from './objects/hero'
import callToAction from './objects/callToAction'
import seo from './objects/seo'
import link from './objects/link'
import navItem from './objects/navItem'
import footer from './objects/footer'
import portableText from './objects/portableText'
import customerReview from './documents/customerReview'
import pricing from './documents/pricing'
import textWithImage from './objects/textWithImage'
import genericText from './objects/genericText'

export const schemaTypes = [
  // Document types
  pages,
  navigation,
  siteSettings,
  posts,
  authors,
  service,
  blogPage,

  //modules
  customerReviews,
  pricings,
  services,

  // Other types
  hero,
  callToAction,
  seo,
  link,
  navItem,
  footer,
  portableText,
  customerReview,
  pricing,
  textWithImage,
  genericText,
]
