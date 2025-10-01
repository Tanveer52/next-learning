"use client";

import { useState } from "react";

export default function PostsList({ posts }: { posts: any[] }) {
  const [user, setUser]: any = useState({});

  async function fetchUser(id: number) {
    const rawData = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const user = await rawData.json();

    console.log(user);
    setUser(user);
  }

  return (
    <div>
      <aside>
        <h1>Email: {user["email"]}</h1>
        <p>Phone: {user["phone"]}</p>
      </aside>
      {posts.map((post) => {
        return (
          <div
            className="flex items-start flex-col justify-center m-3 border-1 p-3"
            key={post["id"]}
          >
            <h1>User Id: {post["userId"]}</h1>
            <p>Id: {post["id"]}</p>
            <p>Title: {post["title"]}</p>
            <p>Body: {post["body"]}</p>
            <button
              onClick={() => fetchUser(post["userId"])}
              className="bg-cyan-600 p-4 rounded-2xl text-white"
            >
              Fetch User for UserId: {post["userId"]}
            </button>
          </div>
        );
      })}
    </div>
  );
}
