import { useState } from "react";
import axios from "axios";
import { API_BASE } from "../config.js";

function App() {
  const [message, setMessage] = useState("");

  const handleClick = async () => {
    try {
      const response = await axios.post(`${API_BASE}/api/users/login`);
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
