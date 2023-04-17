import React, { PropsWithChildren } from "react";

const Section: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <section className="px-[12px] my-[50px] w-auto mx-[24px] xl:w-[1216px] xl:mx-auto">
      {children}
    </section>
  );
};

export default Section;
