import React, { PropsWithChildren } from "react";
import Section from "@/components/layout/section/Section";
import { PersonSectionProps } from "./types";

const PersonSection: React.FC<PropsWithChildren<PersonSectionProps>> = ({
  children,
  title,
  withoutPadding,
}) => {
  return (
    <Section>
      <div className={`person-content ${withoutPadding ? "" : "px-3"}`}>
        <h2 className="pl-[10px] text-white text-[24px] font-semibold mb-[10px]">
          {title}
        </h2>
        {children}
      </div>
    </Section>
  );
};

export default PersonSection;
