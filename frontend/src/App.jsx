import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [msg, setMsg] = useState("Loading connection...");

  useEffect(() => {
    // axios.get("http://localhost:5000/api/message")
    axios.get("/api/message")
      .then(res => setMsg(res.data.message))
      .catch(err => {
        console.log(err);
        setMsg("Failed to connect to backend.");
      });
  }, []);

  // Modern UI Styles with Full-Screen Centering
  const containerStyle = {
    position: "fixed", // Ensures it ignores parent padding
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0f172a", // Dark mode looks great for DevOps
    fontFamily: "'Inter', system-ui, sans-serif",
    margin: 0,
    padding: 0,
    overflow: "hidden"
  };

  const cardStyle = {
    padding: "3rem",
    borderRadius: "24px",
    backgroundColor: "#1e293b",
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
    textAlign: "center",
    border: "1px solid #334155",
    maxWidth: "90%",
    width: "400px"
  };

  const badgeStyle = {
    display: "inline-block",
    padding: "0.4rem 1rem",
    borderRadius: "9999px",
    fontSize: "0.75rem",
    letterSpacing: "0.05em",
    fontWeight: "700",
    textTransform: "uppercase",
    backgroundColor: "#064e3b",
    color: "#34d399",
    marginBottom: "1.5rem",
    border: "1px solid #059669"
  };

  const messageStyle = {
    fontSize: "2rem",
    fontWeight: "800",
    // background: "linear-gradient(to right, #1b1c1d, #a78bfa)",
    WebkitBackgroundClip: "text",
    // WebkitTextFillColor: "transparent",
    marginTop: "1rem",
    lineHeight: "1.2"
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <div style={badgeStyle}>System Online</div>
        <h2 style={{ fontSize: "0.9rem", color: "#94a3b8", margin: 0, fontWeight: "500" }}>
          REACT + NODE DEVOPS PIPELINE
        </h2>
        <h1 style={messageStyle}>{msg}</h1>
      </div>
    </div>
  );
}

export default App;