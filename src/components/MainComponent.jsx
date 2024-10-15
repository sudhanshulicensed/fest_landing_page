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
  const sections = [
    { id: "section1", component: <Banner /> },
    { id: "section2", component: <Event /> },
    { id: "about_us", component: <EventExperience /> },
    { id: "how_it_works", component: <ExperienceDemo /> },
    { id: "gallery", component: <Highlights /> },
    { id: "section6", component: <Schedule /> },
    { id: "section7", component: <Upcoming /> },
    { id: "destination", component: <Destination /> },
    { id: "section9", component: <NewsLetter /> },
  ];

  return (
    <main>
      {sections.map(({ id, component }) => (
        <section key={id} id={id} className="section">
          {component}
        </section>
      ))}
    </main>
  );
}
