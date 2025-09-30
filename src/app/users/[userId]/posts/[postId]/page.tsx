"use client";

import { useParams } from "next/navigation";

export default function PostId() {
  const { userId, postId } = useParams();

  return (
    <main className="p-6 flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">Post Detail</h1>
      <p>User ID: {userId}</p>
      <p>Post ID: {postId}</p>
    </main>
  );
}
