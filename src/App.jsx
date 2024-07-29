import { useState } from "react";
import "./App.css";
import { Header, Footer } from "./components";

function App({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default App;
