import React from "react";

export default function UserInfo ({user}) {
  return (
    <div>
      <h1>Welcome to Personalify {user.display_name}</h1>
      <p>You are signed in with {user.email}</p>
      <img src={user.images[0]?.url} alt="Profile" className="w-2 h-2 rounded-lg" />
    </div>
  );
};
