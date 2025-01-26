"use client";
import Image from "next/image";
import { PrimaryBtn, SecondaryBtn } from "./Buttons";
import htmlLogo from "@/assets/svg/html5-original-wordmark.svg";
import { ChangeEvent, useState } from "react";
import { useSkillTestStore } from "@/store/SkillTest";
import { FaArrowRight } from "react-icons/fa6";

export default function Modal({
  open,
  toggleOpen,
}: {
  toggleOpen: () => void;
  open: boolean;
}) {
  const { rank, percentile, score } = useSkillTestStore((state) => state);
  const { updateRank, updatePercentile, updateScore } = useSkillTestStore(
    (state) => state
  );

  // Values to be used locally in Input, before Globally updating the state.
  const [localRank, setLocalRank] = useState(rank || "");
  const [localPercentile, setLocalPecentile] = useState(percentile || "");
  const [localScore, setLocalScore] = useState(score || "");

  // Values to be used to manage input validateion
  const [rankErr, setRankErr] = useState("");
  const [percentileErr, setPercentileErr] = useState("");
  const [scoreErr, setScoreErr] = useState("");

  return (
    <div
      className={
        (open ? "flex " : "hidden ") +
        " w-screen h-screen absolute top-0 left-0 juatify-center bg-black/70"
      }
    >
      <div className="flex mx-auto my-auto bg-white rounded-lg flex-col gap-4 p-5 ">
        <div className="flex w-full justify-between">
          <h2 className="font-bold text-[1.5rem] my-auto">Update Scores</h2>
          <div>
            <Image src={htmlLogo} className="w-10 object-fit" alt="HTML" />
          </div>
        </div>

        <div className="flex flex-col gap-6 my-4">
          <ModalInput
            text="Rank"
            number={1}
            value={localRank}
            error={rankErr}
            onChange={(event) => {
              const newValue = event.target.value;
              setRankErr("");
              if (!Number(newValue) || Number(newValue) < 1)
                setRankErr("Required | Must be a number greater than 0");
              setLocalRank(newValue);
            }}
          />
          <ModalInput
            text="Percentile"
            number={2}
            value={localPercentile}
            error={percentileErr}
            onChange={(event) => {
              const newValue = event.target.value;
              setPercentileErr("");
              if (
                !Number(newValue) ||
                Number(newValue) < 0 ||
                Number(newValue) > 100
              )
                setPercentileErr("Required | Percentile 0 - 100");
              setLocalPecentile(newValue);
            }}
          />
          <ModalInput
            text="Current Score (out of 15)"
            number={3}
            error={scoreErr}
            value={localScore}
            onChange={(event) => {
              const newValue = event.target.value;
              setScoreErr("");
              if (
                !Number(newValue) ||
                Number(newValue) < 0 ||
                Number(newValue) > 15
              )
                setScoreErr("Required | Score 0 - 15");
              setLocalScore(newValue);
            }}
          />
        </div>

        <div className="flex flex-row-reverse gap-4">
          <PrimaryBtn
            onclick={() => {
              updateRank(Number(localRank));
              updatePercentile(Number(localPercentile));
              updateScore(Number(localScore));
              toggleOpen();
            }}
            text="Save"
            disabled={rankErr || percentileErr || scoreErr ? true : false}
            icon={<FaArrowRight color="white" />}
          />
          <SecondaryBtn onclick={() => toggleOpen()} text="Cancel" />
        </div>
      </div>
    </div>
  );
}

const ModalInput = ({
  number,
  text,
  onChange,
  value,
  error,
}: {
  number: number;
  value: number | string;
  text: string;
  error: string;
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

      <div className="flex-col gap-1 flex max-md:w-full">
        <div
          className={
            (error ? "border-red relative -left-4 " : "border-blue ") +
            "flex border p-2 rounded-md max-md:w-full"
          }
        >
          <input
            name={text}
            type="text"
            className="text-[0.875rem] max-md:w-full outline-none border-none font-bold"
            value={value}
            onChange={onChange}
          />
        </div>
        {error && (
          <span className="flex text-[0.65rem] text-red relative -left-4">
            {error}
          </span>
        )}
      </div>
    </div>
  );
};
