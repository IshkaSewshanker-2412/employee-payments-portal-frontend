import React, { useState } from "react";

function LoginForm({ onLoginSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await fetch("https://employee-payments-portal-backend.onrender.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      const text = await res.text();

      if (text === "Login successful") {
        alert(text);
        onLoginSuccess(); // Switch to PaymentForm
      } else {
        alert(text); // Show error message
      }
    } catch (err) {
      alert("Error connecting to backend");
    }
  };

  return (
    <div>
      <h3>Employee Login</h3>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginForm;
