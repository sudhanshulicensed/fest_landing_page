import React from "react";
import Main from "@/components/MainComponent";
import Footer from "@/components/FooterComponent";
import './App.css'

export default function App() {
  return (
    <div className="app">
      <section id="section1" className="section">
        Section 2
      </section>
      <section id="section2" className="section">
        Section 2
      </section>
      <Main />
      <Footer />
    </div>
  );
}
