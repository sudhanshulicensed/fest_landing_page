import Button from "@/components/Common/Button";
import Label from "@/components/Common/Label";
import SubTitle from "@/components/Common/SubTitle";
import ExperienceBG from "@/assets/images/Section3_BG.jpg"
import ExperienceBGMobile from "@/assets/images/Section3_BG_Mobile.jpg"
import ExperienceART from "@/assets/images/Section3_BG-ART.svg"
import './Experience.css'

export default function Experience() {
  return (
    <article className="experience">
      <div className="experience__content">
        <Label text={'JOIN US FOR A THRILLING EXPERIENCE'}/>
        <SubTitle textColor={'#0E0E0E'} text={'Five days of music, skiing & Après Ski entertainment'}/>
        <p className="experience__description font-w-light">
          The ultimate destination where music and mountain spirit collide.
          Celebrate with us at over 3,000 meters above sea level in the
          breathtaking scenery of Sölden. From world-class DJs to electrifying
          live acts, each day promises to be a blast of fresh alpine air and
          exuberant sounds.
        </p>
        <div className="experience__button">
          <Button title={"Book Now"} buttonHeight={'55px'} buttonWidth={'202px'}/>
        </div>
        <div className="experience__art">
            <img src={ExperienceART} alt="" />
        </div>
      </div>
      <div className="experience__image">
        <picture>
            <source media="(max-width: 768px)" srcSet={ExperienceBGMobile} />
            <img src={ExperienceBG} alt="Experience Art" />
          </picture>
      </div>
    </article>
  );
}
