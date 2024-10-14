import Button from "@/components/Common/Button";
import ExperienceBG from "@/assets/images/Section3_BG.jpg"
import ExperienceART from "@/assets/images/Section3_BG-ART.svg"
import './Experience.css'

export default function Experience() {
  return (
    <article className="experience">
      <div className="experience__content">
        <p className="experience__label font-w-regular font-s-medium">JOIN US FOR A THRILLING EXPERIENCE</p>
        <p className="experience__title font-w-medium">
          Five days of music, skiing & Après Ski entertainment
        </p>
        <p className="experience__description font-w-light">
          The ultimate destination where music and mountain spirit collide.
          Celebrate with us at over 3,000 meters above sea level in the
          breathtaking scenery of Sölden. From world-class DJs to electrifying
          live acts, each day promises to be a blast of fresh alpine air and
          exuberant sounds.
        </p>
        <div className="experience__button">
          <Button title={"Book Now"} />
        </div>
        <div className="experience__art">
            <img src={ExperienceART} alt="" />
        </div>
      </div>
      <div className="experience__image">
        <img src={ExperienceBG} alt="" />
      </div>
    </article>
  );
}
