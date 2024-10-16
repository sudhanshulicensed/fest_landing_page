import { useState } from "react";
import Label from "@/components/Common/Label";
import SubTitle from "@/components/Common/SubTitle";
import GeneralTicket from "@/assets/images/Section5_Button.svg";
import GeneralTicketIcon from "@/assets/images/Section5_Button2_Prefix.svg";
import Scroll from "@/assets/images/Section5_Scroll.svg";
import GeneralImage1 from "@/assets/images/Section5_G1.jpg";
import GeneralImage2 from "@/assets/images/Section5_G2.jpg";
import GeneralImage3 from "@/assets/images/Section5_G3.jpg";
import GeneralImage4 from "@/assets/images/Section5_G4.jpg";
import GeneralImage5 from "@/assets/images/Section5_G5.jpg";
import VIPImage1 from "@/assets/images/Section5_VIP1.jpg";
import VIPImage2 from "@/assets/images/Section5_VIP2.jpg";
import VIPImage3 from "@/assets/images/Section5_VIP3.jpg";
import VIPImage4 from "@/assets/images/Section5_VIP4.jpg";
import VIPImage5 from "@/assets/images/Section5_VIP5.jpg";
import "./Highlights.css";
import { useIsMobile } from "@/utils/screenSize";

export default function Highlights() {
  const isMobile = useIsMobile();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVIP, setIsVIP] = useState(false);
  const imagesToShow = isMobile ? 1 : 2;

  const images = [
    GeneralImage1,
    GeneralImage2,
    GeneralImage3,
    GeneralImage4,
    GeneralImage5,
  ];
  const vipImages = [VIPImage1, VIPImage2, VIPImage3, VIPImage4, VIPImage5];

  const handleLeftClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex <= 0
        ? isVIP
          ? vipImages.length - imagesToShow
          : images.length - imagesToShow
        : prevIndex - imagesToShow
    );
  };
  const handleRightClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >=
      (isVIP ? vipImages.length - imagesToShow : images.length - imagesToShow)
        ? 0
        : prevIndex + imagesToShow
    );
  };

  const getVisibleImages = () => {
    const currentImages = isVIP ? vipImages : images;
    return currentImages.slice(currentIndex, currentIndex + imagesToShow);
  };

  const showLeftArrow = currentIndex > 0;
  const showRightArrow =
    currentIndex <
    (isVIP ? vipImages.length - imagesToShow : images.length - imagesToShow);

  const handleVIPClick = () => {
    setIsVIP(true);
    setCurrentIndex(0);
  };
  const handleGeneralClick = () => {
    setIsVIP(false);
    setCurrentIndex(0);
  };
  return (
    <article className="highlights">
      <Label text={'FESTIVAL MAGIC'}/>
      <SubTitle textColor={'#FFFFFF'} text={'Dive into the Highlights'}/>
      <div className="highlights__button">
        <div
          onClick={() => handleGeneralClick()}
          className="general-tour pointer"
        >
          {!isMobile && !isVIP && (
            <img
              src={GeneralTicket}
              alt="General Tour Ticket"
              className="general-tour__button-image"
            />
          )}
          <p className={`general-tour__button-text font-s-regular ${!isVIP ? 'general-tour__button-abs' : ''}`}>
            {isMobile ? "All" : "General Tour Ticket"}
          </p>
        </div>
        <div onClick={() => handleVIPClick()} className="vip-tour pointer">
          {!isMobile && (
            <>
              {
                (!isMobile && isVIP) && <img
                src={GeneralTicket}
                alt="General Tour Ticket"
                className="general-tour__button-image"
              />
              }
              <div className={ isVIP ? 'vip-tour__button-abs' : 'vip-tour-stable'}>
                <img
                  className="vip-tour__button-prefix"
                  src={GeneralTicketIcon}
                  alt=""
                />
                <p className="vip-tour__button-text font-w-medium">
                  {isMobile ? "VIP" : "VIP Tour Ticket"}
                </p>
              </div>
            </>
          )}
          {isMobile && (
            <>
              <img
                className="vip-tour__button-prefix"
                src={GeneralTicketIcon}
                alt=""
              />
              <p className="vip-tour__button-text font-w-medium">
                {isMobile ? "VIP" : "VIP Tour Ticket"}
              </p>
            </>
          )}
        </div>
      </div>
      <div className="highlights__carousel">
      <hr className="highlights__divider" />
        <div className="highlights__carousel-images">
          {getVisibleImages().map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Highlight ${index}`}
              className="highlights__image"
            />
          ))}
        </div>
        {showLeftArrow && (
          <img
            className="highlights__carousel-action-left pointer"
            src={Scroll}
            alt="Scroll Left"
            onClick={handleLeftClick}
          />
        )}
        {showRightArrow && (
          <img
            className="highlights__carousel-action-right pointer"
            src={Scroll}
            alt="Scroll Right"
            onClick={handleRightClick}
          />
        )}
      </div>
    </article>
  );
}
