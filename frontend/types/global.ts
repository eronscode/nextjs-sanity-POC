import type { Image, PortableTextBlock } from "sanity";

export interface SettingsPayload {
  footer?: {
    footerNav?: NavigationMenu;
    description?: PortableTextBlock[];
    copyright?: string;
  };
  mainNav?: NavigationMenu;
}

export type NavigationMenu = {
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
