import React from "react";
import tropy from "@/assets/svg/trophy.svg";
import clipboard from "@/assets/svg/clipboard.svg";
import checkbox from "@/assets/svg/check-button-green.svg";
import Image from "next/image";

export default function QuickStat() {
  const StatBox = ({
    image,
    statFigure,
    text,
  }: {
    image: any;
    statFigure: string;
    text: string;
  }) => {
    return (
      <div className="flex gap-2 my-auto">
        <div className="p-3 rounded-full bg-text/5 flex justify-center my-auto">
          <Image
            src={image}
            className="w-6 my-auto object-fit h-6"
            alt={text}
          />
        </div>
        <div className="flex flex-col justify-between">
          <span className="font-bold">{statFigure}</span>
          <span className="text-text text-[0.875em] uppercase">{text}</span>
        </div>
      </div>
    );
  };

  return (
    <div className="flex w-full flex-col border border-text/15 rounded-md py-3 px-4 gap-1 max-md:gap-3">
      <div className="flex w-full">
        <h3 className="font-bold text-[0.875em]">Quick Statistics</h3>
      </div>

      <div className="flex justify-between mx-auto max-md:mx-0 gap-4 max-md:gap-6 max-md:flex-col">
        {[
          { image: tropy, statFigure: "1", text: "Your rank" },
          { image: clipboard, statFigure: "30%", text: "percentile" },
          { image: checkbox, statFigure: "10 / 15", text: "Correct answers" },
        ].map((stat, index) => (
          <React.Fragment key={index}>
            {index === 0 ? (
              <></>
            ) : (
              <div className="flex h-20 border-r border-text/15 max-md:hidden"></div>
            )}
            <StatBox {...stat} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
