"use client";
import { useState } from "react";
export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <main className="p-4 flex items-center justify-center h-screen flex-col">
      {" "}
      <h1 className=" mb-5 text-5xl font-mono">Count: {count}</h1>{" "}
      <div className="flex items-center justify-center gap-2">
        {" "}
        <button
          onClick={() => setCount((prev) => prev + 1)}
          className="p-2 bg-teal-700 text-white rounded-2xl text-xl"
        >
          Increment
        </button>{" "}
        <button
          onClick={() => setCount((prev) => prev - 1)}
          className="p-2 bg-red-700 text-white rounded-2xl text-xl"
        >
          Descrement
        </button>{" "}
        <button
          onClick={() => setCount(0)}
          className="p-2 bg-red-900 text-white rounded-2xl text-xl"
        >
          Reset
        </button>{" "}
      </div>{" "}
    </main>
  );
}
