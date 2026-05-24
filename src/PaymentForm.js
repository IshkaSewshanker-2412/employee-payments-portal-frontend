import React, { useState } from "react";

function PaymentForm({ onLogout }) {
  const [amount, setAmount] = useState("");
  const [iban, setIban] = useState("");

  const handlePayment = async () => {
    try {
      const res = await fetch("https://employee-payments-portal-backend.onrender.com/payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount, iban })
      });

      const text = await res.text();
      alert(text); // Shows "Payment processed securely" or error
    } catch (err) {
      alert("Error connecting to backend");
    }
  };

  return (
    <div>
      <h3>International Payment</h3>
      <input
        type="text"
        placeholder="Amount"
        value={amount}
        onChange={e => setAmount(e.target.value)}
      />
      <input
        type="text"
        placeholder="IBAN"
        value={iban}
        onChange={e => setIban(e.target.value)}
      />
      <button onClick={handlePayment}>Submit Payment</button>
      <hr />
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

export default PaymentForm;
