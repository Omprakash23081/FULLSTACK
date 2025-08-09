// App.jsx
import React, { useState } from "react";
import axios from "axios";

const API_BASE = "https://hellowduniya.netlify.app" || "/api";

function App() {
  const [message, setMessage] = useState("");

  const handleClick = async () => {
    try {
      const response = await axios.post(`${API_BASE}/users/login`, {
        email: "test@example.com", // replace with real data
        password: "123456",
      });
      setMessage(response.data.message);
    } catch (error) {
      console.error(error);
      setMessage("Error fetching message");
    }
  };

  return (
    <>
      {message ? <h1>{message}</h1> : <h1>Hello Duniya</h1>}
      <button onClick={handleClick}>Click Me to See Message</button>
    </>
  );
}

export default App;
