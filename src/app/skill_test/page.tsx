"use client";
import Modal from "@/components/Modal";
import ComparisonGraph from "@/components/skill_test/ComparisonGraph";
import QuestionAnalysis from "@/components/skill_test/QuestionAnalysis";
import QuickStat from "@/components/skill_test/QuickStat";
import SyllabusAnalysis from "@/components/skill_test/SyllabusAnalysis";
import TestBox from "@/components/skill_test/Testbox";
import { useAppStore } from "@/store/app";

export default function SkillTest() {
  const { openModal, toggleModal } = useAppStore((state) => state);
  return (
    <section className="flex w-full flex-col gap-4 pt-6 px-10 ">
      <div className="flex w-full ">
        <h2 className="flex text-text">Skill Test</h2>
      </div>

      <div className="flex gap-6 max-md:flex-col max-md:gap-4">
        <div className="flex flex-col gap-4 w-full">
          <TestBox />
          <QuickStat />
          <ComparisonGraph />
        </div>
        <div className="flex flex-col gap-4 w-full">
          <SyllabusAnalysis />
          <QuestionAnalysis />
        </div>
      </div>
      <Modal open={openModal} toggleOpen={toggleModal} />
    </section>
  );
}
