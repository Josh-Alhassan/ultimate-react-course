import React from "react";
import ReactDOM from "react";

function App() {
  return <h1>Hello React!</h1>;
}

// React V18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// React Before 18
// React.render(<App />)
