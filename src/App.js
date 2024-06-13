import { BrowserRouter, Route, Link } from "react-router-dom/cjs/react-router-dom";

import { RouterComp } from "./router/Router";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <br />
        <Link to="/page1">Page1</Link>
        <br />
        <Link to="/page2">Page2</Link>
      </div>
      <RouterComp />
    </BrowserRouter>
  );
}
