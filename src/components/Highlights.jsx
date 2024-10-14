import GeneralTicket from "@/assets/images/Section5_Button.svg";
import GeneralTicketIcon from "@/assets/images/Section5_Button2_Prefix.svg";
import Scroll from "@/assets/images/Section5_Scroll.svg";
import GeneralImage1 from "@/assets/images/Section5_G1.jpg";
import GeneralImage2 from "@/assets/images/Section5_G2.jpg";
import GeneralImage3 from "@/assets/images/Section5_G3.jpg";
// import GeneralImage4 from "@/assets/images/Section5_G4.jpg";
// import GeneralImage5 from "@/assets/images/Section5_G5.jpg";
// import VIPImage1 from "@/assets/images/Section5_VIP1.jpg";
// import VIPImage2 from "@/assets/images/Section5_VIP2.jpg";
// import VIPImage3 from "@/assets/images/Section5_VIP3.jpg";
// import VIPImage4 from "@/assets/images/Section5_VIP4.jpg";
// import VIPImage5 from "@/assets/images/Section5_VIP5.jpg";
import "./Highlights.css";

export default function Highlights() {
  return (
    <section className="highlights">
      <p className="highlights__label">FESTIVAL MAGIC</p>
      <p className="highlights__title font-w-medium">
        Dive into the Highlights
      </p>
      <div className="highlights__button">
        <div className="general-tour">
          <img
            src={GeneralTicket}
            alt="General Tour Ticket"
            className="general-tour__button-image"
          />
          <p className="general-tour__button-text font-s-regular">
            General Tour Ticket
          </p>
        </div>
        <div className="vip-tour">
          <img className="vip-tour__button-prefix" src={GeneralTicketIcon} alt="" />
          <p className="vip-tour__button-text font-w-medium">VIP Tour Ticket</p>
        </div>
      </div>
      <hr className="highlights__divider" />
      <div className="highlights__carousel">
        <div className="highlights__carousel-images">
          <img src={GeneralImage1} alt="" className="highlights__image" />
          <img src={GeneralImage2} alt="" className="highlights__image" />
          <img src={GeneralImage3} alt="" className="highlights__image" />
          {/* <img src={GeneralImage4} alt="" className="highlights__image" />
          <img src={GeneralImage5} alt="" className="highlights__image" /> */}
        </div>
        {/* <div className="highlights__carousel-images">
          <img src={VIPImage1} alt="" className="highlights__image" />
          <img src={VIPImage2} alt="" className="highlights__image" />
          <img src={VIPImage3} alt="" className="highlights__image" />
          <img src={VIPImage4} alt="" className="highlights__image" />
          <img src={VIPImage5} alt="" className="highlights__image" />
        </div> */}
        <img
          className="highlights__carousel-action-left"
          src={Scroll}
          alt="Scroll Left"
        />
        <img
          className="highlights__carousel-action-right"
          src={Scroll}
          alt="Scroll Right"
        />
      </div>
    </section>
  );
}
