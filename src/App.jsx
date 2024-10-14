import React from "react";
import Header from "@/components/HeaderComponent";
import Main from "@/components/MainComponent";
import Footer from "@/components/FooterComponent";
import Banner from "@/components/Banner";
import Event from "@/components/Events";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <Header />
      <section id="section1" className="section">
        <Banner />
      </section>
      <section id="section2" className="">
        <Event />
      </section>
      <section id="section2" className="section">
        Section 2
      </section>
      <Main />
      <Footer />
    </div>
  );
}