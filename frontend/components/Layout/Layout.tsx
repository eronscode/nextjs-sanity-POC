import { SettingsPayload } from "@/types/global";
import { PagePayload } from "@/types/pages";
import { ReactNode } from "react";
import { Footer } from "../Footer/Footer";
import { Navbar } from "../Navbar/Navbar";
import { Seo } from "../Seo/Seo";

type LayoutProps = {
  settings: SettingsPayload;
  page: PagePayload;
  children: ReactNode;
};

export const Layout: React.FunctionComponent<LayoutProps> = ({
  settings,
  page,
  children,
}) => {
  return (
    <>
      <Seo data={page.seo} />
      <Navbar menu={settings?.mainNav} />
      {children}
      <Footer config={settings?.footer} />
    </>
  );
};
