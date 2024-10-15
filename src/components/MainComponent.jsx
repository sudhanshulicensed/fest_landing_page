import React from "react";
import Banner from "@/components/Banner";
import Event from "@/components/Events";
import EventExperience from "@/components/Experience";
import ExperienceDemo from "@/components/ExperienceDemo";
import Highlights from "@/components/Highlights";
import Schedule from "@/components/Schedule";
import Upcoming from "@/components/Upcoming";
import Destination from "@/components/Destination";
import NewsLetter from "@/components/NewsLetter";

export default function MainComponent() {
  return (
    <main>
      <section id="section1" className="section">
        <Banner />
      </section>
      <section id="section2" className="section">
        <Event />
      </section>
      <section id="about_us" className="section">
        <EventExperience />
      </section>
      <section id="how_it_works" className="section">
        <ExperienceDemo />
      </section>
      <section id="gallery" className="section">
        <Highlights />
      </section>
      <section id="section6" className="section">
        <Schedule />
      </section>
      <section id="section7" className="section">
        <Upcoming />
      </section>
      <section id="destination" className="section">
        <Destination />
      </section>
      <section id="section9">
        <NewsLetter />
      </section>
    </main>
  );
}
