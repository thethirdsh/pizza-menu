import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";
import Header from "./Header";
import Footer from "./Footer";
import MenuLine from "./MenuLine";
import Menu from "./Menu";

function App() {
  return (
    <div className="flex flex-col gap-40">
      <Header />
      <MenuLine />
      <Menu />
      <Footer />
    </div>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
