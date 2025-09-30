"use client";

import { useParams } from "next/navigation";
export default function Docs() {
  const { slug } = useParams();

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">Docs Page</h1>
      <p>Path: {slug.join(" / ")}</p>
    </main>
  );
}
