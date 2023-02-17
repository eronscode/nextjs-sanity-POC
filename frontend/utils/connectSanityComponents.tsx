import React from "react";

import { Hero, HeroProps } from "@/components/Hero/Hero";
import { PagePayload } from "@/types/pages";

const ComponentNotFound = ({ component }: { component: string }) => (
  <h3>
    The component <strong style={{ color: "red" }}>{component}</strong> has not
    been created yet.
  </h3>
);

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
          default:
            return <ComponentNotFound component={section._type} />;
        }
      })}
    </>
  );
};
