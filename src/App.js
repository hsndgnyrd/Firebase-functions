import "./App.css";
import React, { useState } from "react";
import { createUser, signInUser } from "./firebase";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await createUser(email, password);
    console.log(user);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const user = await signInUser(email, password);
    console.log(user);
  };

  return (
    <div>
      <h1>Hi Firebase</h1>
      {/* CREATE USER */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Kayıt</button>
      </form>

      {/* LOGIN USER */}
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default App;
