import React from "react";
import Header from "@/components/HeaderComponent";
import Main from "@/components/MainComponent";
import Footer from "@/components/FooterComponent";
import Banner from "@/components/Banner";
import Event from "@/components/Events";
import EventExperience from "@/components/Experience";
import ExperienceDemo from "@/components/ExperienceDemo";
import Highlights from "@/components/Highlights";
import Schedule from "@/components/Schedule";
import Upcoming from "@/components/Upcoming";
import Destination from "@/components/Destination";
import NewsLetter from "@/components/NewsLetter";

import "./App.css";

export default function App() {
  return (
    <div className="app">
      <Header />
      <section id="section1" className="section">
        <Banner />
      </section>
      <section id="section2" className="section">
        <Event />
      </section>
      <section id="section3" className="section">
        <EventExperience />
      </section>
      <section id="section4" className="section">
        <ExperienceDemo />
      </section>
      <section id="section5" className="section">
        <Highlights />
      </section>
      <section id="section6" className="section">
        <Schedule />
      </section>
      <section id="section7" className="section">
        <Upcoming />
      </section>
      <section id="section8" className="section">
        <Destination />
      </section>
      <section id="section9">
        <NewsLetter />
      </section>
      <Main />
      <Footer />
    </div>
  );
}