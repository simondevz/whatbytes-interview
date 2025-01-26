"use client";
import Image from "next/image";
import { PrimaryBtn } from "../Buttons";
import htmlLogo from "@/assets/svg/html5-original-wordmark.svg";
import { useAppStore } from "@/store/app";

export default function TestBox() {
  const { toggleModal } = useAppStore((state) => state);

  return (
    <div className="flex max-sm:flex-col w-full border border-text/15 justify-between rounded-md py-6 px-4 gap-4">
      <div className="flex justify-between w-full gap-4">
        <div className="flex my-auto min-w-14">
          <Image src={htmlLogo} className="w-20 object-fit" alt="HTML" />
        </div>

        <div className="flex w-full flex-col gap-1 my-auto">
          <div className="w-full">
            <span className="font-semibold text-[0.875rem]">
              Hyper Text Markup Language
            </span>
          </div>
          <div className="flex w-full max-md:flex-col max-lg:flex-wrap justify-between gap-1.5 text-text font-medium text-[0.875rem] text-nowrap">
            <span>Question: 08</span>
            <div className="flex h-[0.875rem] my-auto max-md:hidden border border-text/50 "></div>
            <span>Duration: 15 mins</span>
            <div className="flex h-[0.875rem] my-auto max-md:hidden border border-text/50 "></div>
            <span>Submitted on 5 June 2021</span>
          </div>
        </div>
      </div>

      <div className="flex my-auto max-sm:flex-row-reverse max-sm:w-full">
        <PrimaryBtn onclick={() => toggleModal()} text="Update" />
      </div>
    </div>
  );
}
