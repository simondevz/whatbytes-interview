"use client";
import Image from "next/image";
import { PrimaryBtn, SecondaryBtn } from "./Buttons";
import htmlLogo from "@/assets/svg/html5-original-wordmark.svg";
import { ChangeEvent } from "react";
import { useSkillTestStore } from "@/store/SkillTest";

export default function Modal() {
  const { rank, percentile, score } = useSkillTestStore((state) => state);

  const ModalInput = ({
    number,
    text,
    onChange,
    value,
  }: {
    number: number;
    value: number;
    text: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  }) => {
    return (
      <div className="flex max-md:flex-col max-md:gap-2 w-full justify-between gap-8">
        <div className="flex gap-4 my-auto max-md:w-full">
          <div className="flex w-6 h-6 rounded-full bg-primary text-white my-auto">
            <span className="text-[0.875rem] mx-auto my-auto">{number}</span>
          </div>
          <div className="flex gap-1 text-[0.875rem]">
            <span>Update Your </span> <span className="font-bold">{text}</span>
          </div>
        </div>

        <div className="flex border p-2 border-blue rounded-md max-md:w-full">
          <input
            type="number"
            className="text-[0.875rem] max-md:w-full outline-none border-none font-bold"
            value={value}
            onChange={onChange}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="flex w-screen h-screen absolute juatify-center bg-black/70">
      <div className="flex mx-auto my-auto bg-white rounded-lg flex-col gap-4 p-5 ">
        <div className="flex w-full justify-between">
          <h2 className="font-bold text-[1.5rem] my-auto">Update Scores</h2>
          <div>
            <Image src={htmlLogo} className="w-10 object-fit" alt="HTML" />
          </div>
        </div>

        <div className="flex flex-col gap-6 my-4">
          {[
            { text: "Rank", number: 1, value: 1 },
            { text: "Percentile", number: 2, value: 30 },
            { text: "Current Score (out of 15)", number: 3, value: 10 },
          ].map((inputData) => (
            <ModalInput
              key={inputData.number}
              {...inputData}
              onChange={() => {}}
            />
          ))}
        </div>

        <div className="flex flex-row-reverse gap-4">
          <PrimaryBtn text="Save" />
          <SecondaryBtn text="Cancel" />
        </div>
      </div>
    </div>
  );
}
