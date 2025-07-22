import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";
import "./App.css";

function App() {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  const fetchUser = async (username) => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) throw new Error("User not found");
      const data = await response.json();
      setUserData(data);
      setError(null);
    } catch (err) {
      setUserData(null);
      setError(err.message);
    }
  };

  return (
    <div className="app">
      <h1>GitHub DevFinder</h1>
      <SearchBar onSearch={fetchUser} />
      {error && <p className="error">{error}</p>}
      {userData && <UserCard user={userData} />}
    </div>
  );
}

export default App;