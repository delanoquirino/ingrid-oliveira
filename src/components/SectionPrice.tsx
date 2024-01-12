import Image from "next/image";
import React from "react";

export const SectionPrice = () => {
  return (
    <section id="price"
      style={{
        background: "linear-gradient(to left, #F9F9F9 70%, #DCC7DA 30%)",
      }}
    >
      <div className="max-w-5xl py-12 md:py-28 mx-auto p-4">
        <div className="flex flex-col md:flex-row justify-center gap-8">
          <div className="hidden flex-1 md:block pr-14 relative">
            <Image
              src="/img/price-img.jpg"
              alt="extensão de cilios"
              quality={100}
              fill
              sizes="100vw"
              style={{
                objectFit: "cover",
              }}
            />
          </div>
          <div className="md:hidden block relative h-[500px] w-full ">
            <Image
              src="/img/price-img.jpg"
              alt="extensão de cilios"
              quality={100}
              fill
              style={{
                objectFit: "cover",
              }}
            />
          </div>

          <div className="flex flex-col gap-10">
            <div>
              <span className="text-primary uppercase font-semibold text-[10px] -tracking-tighter">
                nosso preço
              </span>
              <h2 className="text-xl sm:text-4xl font-semibold">
                Serviços Mais Populares
              </h2>
            </div>
            <div className="flex flex-col gap-8">
              <div className="flex items-center justify-between w-full gap-4">
                <div>
                  <p className="text-primary">Extensão Clássica</p>
                  <hr className="text-black" />
                  <p className="text-primary">1h duração</p>
                </div>
                <p className=" flex-1 border-dotted border-b-4 border-black"></p>
                <p>$37</p>
              </div>
              <div className="flex items-center justify-between w-full gap-4">
              <div>
                  <p className="text-primary">Extensão Clássica</p>
                  <hr className="text-black" />
                  <p className="text-primary">1h duração</p>
                </div>
                <p className=" flex-1 border-dotted border-b-4 border-black"></p>
                <p>$37</p>
              </div>
              <div className="flex items-center justify-between w-full gap-4">
              <div>
                  <p className="text-primary">Extensão Clássica</p>
                  <hr className="text-black" />
                  <p className="text-primary">1h duração</p>
                </div>
                <p className=" flex-1 border-dotted border-b-4 border-black"></p>
                <p>$37</p>
              </div>
              <div className="flex items-center justify-between w-full gap-4">
              <div>
                  <p className="text-primary">Extensão Clássica</p>
                  <hr className="text-black" />
                  <p className="text-primary">1h duração</p>
                </div>
                <p className=" flex-1 border-dotted border-b-4 border-black"></p>
                <p>$37</p>
              </div>
              <div className="flex items-center justify-between w-full gap-4">
              <div>
                  <p className="text-primary">Extensão Clássica</p>
                  <hr className="text-black" />
                  <p className="text-primary">1h duração</p>
                </div>
                <p className=" flex-1 border-dotted border-b-4 border-black"></p>
                <p>$37</p>
              </div>
              <div className="flex items-center justify-between w-full gap-4">
              <div>
                  <p className="text-primary">Extensão Clássica</p>
                  <hr className="text-black" />
                  <p className="text-primary">1h duração</p>
                </div>
                <p className=" flex-1 border-dotted border-b-4 border-black"></p>
                <p>$37</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
