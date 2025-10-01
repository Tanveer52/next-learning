import PostsList from "./PostsList";

export default async function PostsPage() {
  const rawData = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: [] = await rawData.json();

  return <PostsList posts={posts} />;
}

// "use client";

// import { useEffect, useState } from "react";

// export default function PostsPage() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((data) => {
//         setUsers(data);
//       });
//   }, []);

//   return (
//     <main className="p-6">
//       {users.map((user) => {
//         return (
//           <div
//             className="flex items-start flex-col justify-center m-3 border-1 p-3"
//             key={user["id"]}
//           >
//             <h1>Id: {user["id"]}</h1>
//             <p>Name: {user["name"]}</p>
//             <p>Email: {user["email"]}</p>
//             <p>Phone: {user["phone"]}</p>
//             <p>Username: {user["username"]}</p>
//           </div>
//         );
//       })}
//     </main>
//   );
// }
