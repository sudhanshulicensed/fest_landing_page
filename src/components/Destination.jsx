import Label from "@/components/Common/Label";
import SubTitle from "@/components/Common/SubTitle";
import DestinationItem1 from "@/assets/images/Section8_ListItem1.jpg";
import DestinationItem2 from "@/assets/images/Section8_ListItem2.jpg";
import "./Destination.css";

export default function Destination() {
  return (
    <article className="destination text-center">
    <Label text={'OUR DESTINATIONS'}/>
    <SubTitle textColor={'#0E0E0E'} text={'Your Gateway to Alpine Wonders!'}/>
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
