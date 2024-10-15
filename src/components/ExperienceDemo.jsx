import VideoThumbnail from "@/assets/images/Section4_ART.jpg";
import PlayPause from "@/assets/images/Section4_PlayPause.svg";
import './ExperienceDemo.css'

export default function ExperienceDemo() {
    return (
      <article className="experience-demo">
        <p className="experience-demo__label font-w-regular font-s-medium">WHERE MUSIC AND MOUNTAIN SPIRIT COLLIDE</p>
        <p className="experience-demo__title font-w-medium text-center">Experience the Electric Mountain Festival</p>
        <div className="experience-demo__video">
          <img src={VideoThumbnail} alt="Video Thumbnail for Experience" className="experience-demo__video-image" />
          <img src={PlayPause} alt="Play Icon" className="experience-demo__video-icon" />
        </div>
      </article>
    );
  }
  