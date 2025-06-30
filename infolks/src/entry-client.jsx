import React from "react"
import "./index.css"
import { StrictMode } from "react"
import { hydrateRoot } from "react-dom/client"
import App from "./App"
import { BrowserRouter } from "react-router-dom"

hydrateRoot(
  document.getElementById("root"),
  <StrictMode>
    <BrowserRouter>
      <App someProps={"Hello Client-Side"} /> {/* pass some CSR props */}
    </BrowserRouter>
  </StrictMode>
)
