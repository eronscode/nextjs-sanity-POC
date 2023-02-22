type PropType<TObj, TProp extends keyof TObj> = TObj[TProp];

type SanityDocument = {
  id: string;
  _type: string;
};

type LinkProps = {
  _type?: string;
  linkText?: string;
  url?: {
    internalLink?: {
      _type?: string;
      slug: string;
    };
    externalLink?: {
      url: string;
    };
  };
};

type NavigationMenu = {
  navItems: Array<{
    text: string;
    url: {
      internalLink?: {
        slug: string;
        _type: string;
      };
    };
  }>;
};
