import React, { PropsWithChildren } from "react";

const Section: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <section className="my-[50px] w-auto mx-[24px] xl:w-[1240px] xl:mx-auto relative">
      {children}
    </section>
  );
};

export default Section;
