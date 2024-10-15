import LocationPing from "@/assets/images/Section6_MapLocation.svg";
import Download from "@/assets/images/Section6_Download.svg";
import Profile from "@/assets/images/Section6_Profile.jpg";
import Bullet from "@/assets/images/Section6_ListItem.svg";
import Button from "@/components/Common/Button";
import "./Schedule.css";

export default function Schedule() {
  return (
    <article className="schedule">
      <p className="schedule__label font-w-regular font-s-medium">
        ADVENTURE SCHEDULE
      </p>
      <p className="schedule__title text-center">
        Your Festival Journey: Day-by-Day Breakdown
      </p>
      <div className="schedule__component">
        <div className="schedule__navigation-bar">
          <ul className="schedule__navigation-list">
            <li className="schedule__navigation-item schedule__navigation-item-active">
              Day 1
            </li>
            <li className="schedule__navigation-item">Day 2</li>
            <li className="schedule__navigation-item">Day 3</li>
            <li className="schedule__navigation-item">Day 4</li>
            <li className="schedule__navigation-item">Day 5</li>
          </ul>
          <ul className="schedule__navigation-type">
            <li className="schedule__navigation-type-item schedule__navigation-type-item-active">
              Images
            </li>
            <li className="schedule__navigation-type-item">Map</li>
          </ul>
        </div>
        <div className="schedule__list-wrapper">
          <div className="schedule__list">
            <div className="schedule__list-holder">
              <p className="schedule__list-header font-w-bold font-s-large">
                <img src={LocationPing} alt="Schedule Title" />
                Day 1: Kickoff to Adventure
              </p>

              <ul className="schedule__list-items">
                <li className="schedule__list-item schedule__list-item-active">
                    <img src={Bullet} alt="List Item Icon" />
                  <div className="text-start">
                    <span className="font-w-bold">12:00 PM - </span>Arrival at
                    Munich Internation Airport.
                  </div>
                </li>
                <li className="schedule__list-item">
                    <img src={Bullet} alt="List Item Icon" />
                  <div className="text-start">
                    <span className="font-w-bold">03:00 PM - </span>Check In at
                    hotel (Hilton Munich City Hotel Germany, or Similar)
                  </div>
                </li>
                <li className="schedule__list-item">
                    <img src={Bullet} alt="List Item Icon" />
                  <div className="text-start">
                    <span className="font-w-bold">Rest of the day - </span>Free
                    to explore Munich, have lunch and dinner at you own
                    convenience.
                  </div>
                </li>
              </ul>
            </div>
            <div className="schedule__profile">
              <img src={Profile} alt="Schedule Image" className="schedule__profile-image" />
            </div>
          </div>
          <Button title={"Download Brochure"}>
            <img
              className="schedule-brochure__image"
              src={Download}
              alt="Download Brochure"
            />
          </Button>
        </div>
      </div>
    </article>
  );
}
