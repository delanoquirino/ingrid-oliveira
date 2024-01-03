import React from "react";

export const SectionAbout = () => {
  return (
    <section className=" bg-secondary">
      <div className="flex flex-col sm:flex-row items-start gap-8  sm:items-center justify-center max-w-5xl py-12 md:py-28 mx-auto p-4">
        <div className="flex-1 ">
          <span className="text-primary uppercase font-semibold text-[10px] -tracking-tighter">
            teresina - pi
          </span>
          <h2 className="text-xl sm:text-4xl font-semibold">
            Sobre Estúdio Ingrid Oliveira
          </h2>
        </div>
        <div className="flex-1">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe
            iusto pariatur aut magnam dignissimos laborum quae fuga nesciunt
            nisi, earum ullam laboriosam, odit, reprehenderit perferendis
            consequatur dolores qui quasi quis!
          </p>
        </div>
      </div>
    </section>
  );
};
