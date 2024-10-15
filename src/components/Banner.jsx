import Button from "@/components/Common/Button";
import BannerImage from "@/assets/images/Section1_Banner.svg";
import './Banner.css'
import { useIsMobile } from "@/utils/screenSize";

export default function Banner() {
  const isMobile = useIsMobile();
  return (
    <article className="banner">
      <div className="banner_wrapper">
        <div className="banner__title-location font-w-light font-s-xxlarge">Sölden, Austria</div>
        <div className="banner__title text-center font-s-xxxlarge font-w-bold">
          Immerse Yourself in the Alpine Beats
        </div>
        <div className="banner__button">
            <Button title={isMobile ? "Pre-Register Now" : "Book Now"}  buttonHeight={'55px'}/>
        </div>
        <div className="banner__image-container">
          <img src={BannerImage} alt="Banner" className="banner__image" />
        </div>
      </div>
      <div className="banner__subtitle text-center font-size-regular font-w-regular">
        Celebrate with us at above
        <span className="font-w-bold">3,000 meters</span>
      </div>
    </article>
  );
}
