import React from "react";

import { Hero } from "@/components/Hero/Hero";
import { PagePayload } from "@/types/pages";
import { TextWithImage } from "@/components/TextWithImage/TextWithImage";
import { ServicesGrid } from "@/components/ServicesGrid/ServicesGrid";
import { Pricing } from "@/components/Pricing/Pricing";
import { Reviews } from "@/components/Reviews/Reviews";
import { GenericText } from "@/components/GenericText/GenericText";

interface Props {
  sections: PagePayload["pageSections"];
}


export const PageComponentMap: React.FunctionComponent<Props> = ({
  sections,
}) => {
  return (
    <>
      {sections?.map((section, key) => {
        switch (section._type) {
          case "section_hero":
            return <Hero key={key} {...section} />;
          case "section_textWithImage":
            return <TextWithImage key={key} {...section} />;
          case "section_services":
            return <ServicesGrid key={key} {...section} />;
          case "section_pricings":
            return <Pricing key={key} {...section} />;
          case "section_customerReviews":
            return <Reviews key={key} {...section} />;
          case "section_genericText":
            return <GenericText key={key} {...section} />;
          default:
            return <ComponentNotFound key={key} component={section._type} />;
        }
      })}
    </>
  );
};


const ComponentNotFound = ({ component }: { component: string }) => (
  <h3>
    The component <strong style={{ color: "red" }}>{component}</strong> has not
    been created yet.
  </h3>
);
