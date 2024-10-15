import Label from "@/components/Common/Label";
import SubTitle from "@/components/Common/SubTitle";
import LocationPing from "@/assets/images/Section6_MapLocation.svg";
import Download from "@/assets/images/Section6_Download.svg";
import Profile from "@/assets/images/Section6_Profile.jpg";
import Bullet from "@/assets/images/Section6_ListItem.svg";
import Button from "@/components/Common/Button";
import "./Schedule.css";
import { act, useState } from "react";

export default function Schedule() {
  const days = ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'];
  const [activeDay, setActiveDay] = useState('Day 1');
  function handleDateChange (day) {
    setActiveDay(day)
  }
  return (
    <article className="schedule">
        <Label text={'JOIN US FOR A THRILLING EXPERIENCE'}/>
        <SubTitle textColor={'#0E0E0E'} text={'Five days of music, skiing & Après Ski entertainment'} centerText={true}/>
      <div className="schedule__component">
        <div className="schedule__navigation-bar">
          <ul className="schedule__navigation-list">
            {
              days.map((day) => {
                return <li key={day} onClick={() => handleDateChange(day)} className={`schedule__navigation-item ${activeDay == day ? 'schedule__navigation-item-active' : ''}`}>
                {day}
              </li>
              })
            }
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
                {activeDay}: Kickoff to Adventure
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
          <div className="schedule-brochure__button-wrapper">
          <Button title={"Download Brochure"} buttonHeight={'55px'} buttonWidth={'255px'}>
            <img
              className="schedule-brochure__image"
              src={Download}
              alt="Download Brochure"
            />
          </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
