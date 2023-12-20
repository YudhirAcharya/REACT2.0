import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// here ! because it is null
ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
