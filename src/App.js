// import React from "react";
// import LoginForm from "./LoginForm";
// import PaymentForm from "./PaymentForm";
// import "./theme.css";

// function App() {
//   return (
//     <div className="app-container">
//       <h2>Employee Payments Portal</h2>
//       <LoginForm />
//       <hr />
//       <PaymentForm />
//     </div>
//   );
// }

// export default App;


// import React, { useState } from "react";
// import LoginForm from "./LoginForm";
// import PaymentForm from "./PaymentForm";
// import "./theme.css";

// function App() {
//   // Track login state
//   const [loggedIn, setLoggedIn] = useState(false);

//   return (
//     <div className="app-container">
//       <h2>Employee Payments Portal</h2>
//       {!loggedIn ? (
//         // Show login form until user logs in
//         <LoginForm onLoginSuccess={() => setLoggedIn(true)} />
//       ) : (
//         // Show payment form after successful login
//         <PaymentForm />
//       )}
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import LoginForm from "./LoginForm";
import PaymentForm from "./PaymentForm";
import "./theme.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="app-container">
      <h2>Employee Payments Portal</h2>
      {!loggedIn ? (
        <LoginForm onLoginSuccess={() => setLoggedIn(true)} />
      ) : (
        <PaymentForm onLogout={() => setLoggedIn(false)} />
      )}
    </div>
  );
}

export default App;
