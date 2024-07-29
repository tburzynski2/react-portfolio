import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App({ children }) {
  return (
    <>
      <Header />
      <h1>Portfolio Site</h1>
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default App;
