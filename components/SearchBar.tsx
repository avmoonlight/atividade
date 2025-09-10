"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";


export default function SearchBar() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  return (
    <div className="relative flex items-center">
      {/* Botão da lupa */}
      <button
        onClick={() => setOpen(!open)}
        className="p-2 text-white-600 hover:text-gray-400"
      >
        <Search size={22} />
      </button>

      {/* Barra de pesquisa */}
      {open && (
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Procura por um ulian?"
          className="ml-2 px-3 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition w-48"
        />
      )}
    </div>
  );
}
