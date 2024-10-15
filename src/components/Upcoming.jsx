import Button from "@/components/Common/Button";
import "./Upcoming.css";
import { useIsMobile } from "@/utils/screenSize";

export default function Upcoming() {
  const isMobile = useIsMobile();
  return (
    <article className="upcoming">
      <div className="upcoming__content">
        <h1 className="upcoming__title font-s-xxlarge font-w-bold">Electric Mountain Festival 2025</h1>
        <p className="font-s-large font-w-regular"> Sölden, Austria, April 2025</p>
        <p className="upcoming__event-time font-w-medium">1st Apr - 6th Apr 2025</p>
        <Button title={ isMobile ? "Pre-Register Now" : "Book Now"} buttonHeight={'55px'} buttonWidth={'202px'}/>
      </div>
    </article>
  );
}
