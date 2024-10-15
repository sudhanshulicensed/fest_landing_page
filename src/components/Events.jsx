import EventLogo from "@/assets/images/Section2_Logo.svg";
import Divider from "@/assets/images/Section2_Divider.svg";
import EventBG from "@/assets/images/Section2_BG.jpg";
import EventLocationButton from "@/assets/images/Section2_Button.svg";
import Button from "@/components/Common/Button";
import { useIsMobile } from "@/utils/screenSize";

import "./Events.css";

export default function Event() {
  const isMobile = useIsMobile();
  return (
    <article className="event">
      <div className="event__wrapper">
        <div className="event__main-image">
          <img src={EventLogo} alt="Event Logo" className="event__image" />
          <img src={Divider} alt="Divider" className="event__thumbnail" />
        </div>
        <div className="event__details">
          <div className="event__location">
            <img
              src={EventLocationButton}
              alt="Event Location Button"
              className="event__location-image"
            />
            <p className="email__location-text font-s-regular">
              Sölden, Austria
            </p>
          </div>
          <p className="event__title font-s-xxxlarge font-w-medium">
            1st Apr - 6th Apr 2025
          </p>
          <Button title={ isMobile ? "Pre-Register Now" : "Book Now"} buttonHeight={'55px'}/>
        </div>
      </div>
      <div className="event__background">
        <img src={EventBG} alt="" className="event__background-image" />
      </div>
    </article>
  );
}
