import React, { PropsWithChildren } from "react";
import Section from "@/components/layout/section/Section";

const PersonSection: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Section>
      <div className="person-content">{children}</div>
    </Section>
  );
};

export default PersonSection;
