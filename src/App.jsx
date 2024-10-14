import React from "react";
import Header from "@/components/HeaderComponent";
import Main from "@/components/MainComponent";
import Footer from "@/components/FooterComponent";

import "./App.css";

export default function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}