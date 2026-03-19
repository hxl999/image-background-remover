"use client";

import { useState } from "react";

export default function SimplePage() {
  const [message] = useState("Hello from Simple Page");
  
  return (
    <div style={{ margin: 0, padding: "20px", fontFamily: "Arial" }}>
      <h1>Background Remover - Simple Version</h1>
      <p>{message}</p>
      <p>This is a simplified version to test basic functionality.</p>
      <div style={{ marginTop: "20px", padding: "20px", border: "1px solid #ccc" }}>
        <h3>Test API</h3>
        <button onClick={async () => {
          try {
            const response = await fetch("/api/remove-bg", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ image: "test" })
            });
            const data = await response.json();
            alert(`API Response: ${JSON.stringify(data)}`);
          } catch (error) {
            alert(`Error: ${error}`);
          }
        }}>
          Test API
        </button>
      </div>
    </div>
  );
}
