import React from "react";

function UserCard({ user }) {
  return (
    <div className="user-card">
      <img src={user.avatar_url} alt={`${user.login} avatar`} />
      <h2>{user.name || user.login}</h2>
      <p>{user.bio || "No bio available"}</p>
      <div className="stats">
        <p>Repos: {user.public_repos}</p>
        <p>Followers: {user.followers}</p>
        <p>Following: {user.following}</p>
      </div>
      <a href={user.html_url} target="_blank" rel="noreferrer">
        View Profile
      </a>
    </div>
  );
}

export default UserCard;