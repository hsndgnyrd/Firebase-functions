import "./App.css";
import React, { useState } from "react";
import { createUser } from "./firebase";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await createUser(email, password);
    console.log(user);
  };

  return (
    <div>
      <h1>Hi Firebase</h1>
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
    </div>
  );
}

export default App;
