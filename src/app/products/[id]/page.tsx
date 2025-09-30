"use client";
import { useParams } from "next/navigation";

export default function Product() {
  const { id } = useParams();

  return (
    <main className="p-6 flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold">Product Detail Page</h1>
      <p>Showing details for product ID: {id}</p>
    </main>
  );
}
