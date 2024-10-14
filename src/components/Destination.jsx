import DestinationItem1 from "@/assets/images/Section8_ListItem1.jpg";
import DestinationItem2 from "@/assets/images/Section8_ListItem2.jpg";
import "./Destination.css";

export default function Destination() {
  return (
    <article className="destination text-center">
      <p className="destination__label font-w-regular font-s-medium">
        OUR DESTINATIONS
      </p>
      <p className="destination__title font-w-medium">
        Your Gateway to Alpine Wonders!
      </p>
      <div className="destination__item">
        <div className="destination__item-image">
          <img src={DestinationItem1} alt="" className="destination__image" />
          <p className="destination__item-text font-s-xxlarge font-w-medium">Munich</p>
        </div>
        <div className="destination__item-image">
          <img src={DestinationItem2} alt="" className="destination__image" />
          <p className="destination__item-text font-s-xxlarge font-w-medium">Sölden</p>
        </div>
      </div>
    </article>
  );
}
