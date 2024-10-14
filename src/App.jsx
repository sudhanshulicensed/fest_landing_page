import React from "react";
import Header from "@/components/HeaderComponent";
import Main from "@/components/MainComponent";
import Footer from "@/components/FooterComponent";
import Banner from "@/components/Banner";
import Event from "@/components/Events";
import EventExperience from "@/components/Experience";
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
      <section id="section3" className="section">
        <EventExperience />
      </section>
      <Main />
      <Footer />
    </div>
  );
}