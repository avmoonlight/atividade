"use client";
import { useState } from "react";

type Props = { pergunta: string; resposta: string };

export default function Accordion({ pergunta, resposta }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b py-2">
      <button
        className="w-full text-left font-semibold flex justify-between"
        onClick={() => setOpen(!open)}
      >
        {pergunta} <span>{open ? "-" : "+"}</span>
      </button>
      {open && <p className="mt-2 text-gray-600">{resposta}</p>}
    </div>
  );
}
