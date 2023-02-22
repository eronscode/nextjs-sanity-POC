import { BlogPostPayload, SettingsPayload } from "@/types/global";
import { PagePayload } from "@/types/pages";
import { ReactNode } from "react";
import { Footer } from "../Footer/Footer";
import { Navbar } from "../Navbar/Navbar";
import { Seo } from "../Seo/Seo";

type LayoutProps = {
  settings: SettingsPayload;
  page: PagePayload | BlogPostPayload;
  children: ReactNode;
  preview?: boolean;
};

export function PreviewBanner() {
  return (
    <div className="bg-orange-700 fixed z-50 h-[35px] w-full p-3 text-center text-white">
      <p className="mt-[-9px]">
        You&apos;re currently in preview mode.
        
        <a
          className="underline transition hover:opacity-50 ml-3 inline-block"
          href="/api/exit-preview"
        >
           Click to exit preview mode
        </a>
      </p>
    </div>
  );
}

export const Layout: React.FunctionComponent<LayoutProps> = ({
  settings,
  page,
  children,
  preview,
}) => {
  return (
    <>
      <Seo data={page.seo} />
      {preview && <PreviewBanner />}
      <Navbar menu={settings?.mainNav} preview={preview} />
      {children}
      <Footer config={settings?.footer} />
    </>
  );
};
