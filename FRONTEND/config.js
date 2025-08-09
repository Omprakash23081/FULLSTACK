export const API_BASE =
  import.meta.env.MODE === "development"
    ? "/api"
    : "https://api-server-3q24.onrender.com";
