import React from "react";

export default function UserInfo ({user}) {
  return (
    <div className="bg-black text-green-500">
      <h1 className="text-3xl">Welcome to Personalify {user.display_name}</h1>
      <p>You are signed in with {user.email}</p>
      <img src={user.images[0]?.url} alt="Profile" className="w-20 h-20 rounded-full" />
    </div>
  );
};
