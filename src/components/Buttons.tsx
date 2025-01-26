import React from "react";

export function PrimaryBtn({
  text,
  icon,
  onclick,
  disabled,
}: {
  text: string;
  icon?: React.ReactNode;
  onclick: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      disabled={disabled}
      onClick={onclick}
      style={{ borderStyle: "outset" }}
      className="flex px-6 py-2 border-2 border-black rounded-lg bg-primary hover:bg-primary/70"
    >
      <div className="flex gap-2 my-auto">
        <span className="text-[0.875rem] my-auto font-semibold text-white">
          {text}
        </span>
        {icon && <div className="my-auto">{icon}</div>}
      </div>
    </button>
  );
}

export function SecondaryBtn({
  text,
  onclick,
}: {
  text: string;
  onclick: () => void;
}) {
  return (
    <button
      onClick={onclick}
      className="flex px-6 py-2 border border-primary text-primary text-[0.875rem] font-bold rounded-md"
    >
      <span>{text}</span>
    </button>
  );
}
