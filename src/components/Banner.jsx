import Button from "@/components/Common/button";
import BannerImage from "@/assets/images/Section1_Banner.svg";
import './Banner.css'

export default function Banner() {
  return (
    <article className="banner">
      <div className="banner_wrapper">
        <div className="banner__title text-center font-s-xxxlarge font-w-bold">
          Immerse Yourself in the Alpine Beats
        </div>
        <div>
            <Button title={"Book Now"} className="banner__button" />
        </div>
        <div className="banner__image-container">
          <img src={BannerImage} alt="Banner" className="banner__image" />
        </div>
      </div>
      <div className="banner__subtitle text-center font-size-regular font-w-regular">
        Celebrate with us at above{" "}
        <span className="font-w-bold">3,000 meters</span>
      </div>
    </article>
  );
}
