
import { useEffect, useState } from "react";
import api from "./services/api";

function App() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBackend = async () => {
      try {
        const response = await api.get("/test");

        setMessage(response.data.message);
      } catch (err) {
        console.error("API Error:", err);

        setError("Could not connect to PennyWise backend.");
      } finally {
        setLoading(false);
      }
    };

    fetchBackend();
  }, []);

  return (
    <div style={{
      padding: "40px",
      fontFamily: "Arial, sans-serif"
    }}>
      <h1>PennyWise</h1>

      <h2>Backend Connection Test</h2>

      {loading && <p>Connecting to backend...</p>}

      {error && <p style={{ color: "red" }}>{error}</p>}

      {message && (
        <p style={{ color: "green" }}>
          {message}
        </p>
      )}
    </div>
  );
}

export default App;
