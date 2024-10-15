import VideoThumbnail from "@/assets/images/Section4_ART.jpg";
import PlayPause from "@/assets/images/Section4_PlayPause.svg";
import Label from "@/components/Common/Label";
import SubTitle from "@/components/Common/SubTitle";
import './ExperienceDemo.css'

export default function ExperienceDemo() {
    return (
      <article className="experience-demo">
        <Label text={'WHERE MUSIC AND MOUNTAIN SPIRIT COLLIDE'}/>
        <SubTitle textColor={'#0E0E0E'} text={'Experience the Electric Mountain Festival'}/>
        <div className="experience-demo__video">
          <img src={VideoThumbnail} alt="Video Thumbnail for Experience" className="experience-demo__video-image" />
          <img src={PlayPause} alt="Play Icon" className="experience-demo__video-icon" />
        </div>
      </article>
    );
  }
  