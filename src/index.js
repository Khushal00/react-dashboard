import React from "react";
import ReactDOM from "react-dom";

import App from "./App"; 
import { ContextProvider } from "./contexts/ContextProvider";

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root')); // Replace 'root' with your target element's ID

// Render the App component
root.render(
  <React.StrictMode>
    <ContextProvider>
    <App />
    </ContextProvider>
  </React.StrictMode>
);