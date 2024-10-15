import React from "react";
import SectionBG from "@/assets/images/Section10_BG.jpg";
import SectionBGMobile from "@/assets/images/Section10_BG_Mobile.jpg"
import SectionBGLogo from "@/assets/images/Section10_BG_Logo.svg";
import "./Footer.css";
import Facebook from "@/assets/images/Group69.svg"
import Twitter from "@/assets/images/Group70.svg"
import Instagram from "@/assets/images/Group71.svg"
import PartnerIce from "@/assets/images/PartnerIce.jpg"
import CourtYard from "@/assets/images/PartnerCourtYard.svg"
import ElectronicMountainFestival from "@/assets/images/PartnerElectronic.svg"
import Hilton from "@/assets/images/PartnerHilton.svg"
import Yaya from "@/assets/images/PartnerYaya.svg"
import OtzTal from "@/assets/images/OtzTal.jpg"
import Elements from "@/assets/images/Elements.jpg"
import MunichAirport from "@/assets/images/MunichAirport.jpg"

export default function FooterComponent() {
  return (
    <footer className="footer" id="contact">
      <div className="footer__background">
      <picture>
            <source media="(max-width: 768px)" srcSet={SectionBGMobile} />
            <img className="footer__background-image" src={SectionBG} alt="Experience Art" />
          </picture>
        <img
          className="footer__background-logo"
          src={SectionBGLogo}
          alt="Background Logo"
        />
      </div>
      <div className="footer__content">
        <p className="footer__description text-center font-s-small font-w-light">
          JOL - Partwagon To Music Fest & Spots brand and concept is owned by
          M/S Bholi Travelsome Services - a private limited company registered
          in India
        </p>

        <nav className="footer__nav">
          <ul className="footer__nav-list">
            <li className="footer__nav-item font-w-regular">
              Privacy & Cookies
            </li>
            <li className="footer__nav-item font-w-regular">
              Terms & Conditions
            </li>
            <li className="footer__nav-item font-w-regular">How It Works</li>
            <li className="footer__nav-item font-w-regular">Contact</li>
            <li className="footer__nav-item font-w-regular">
              Become A Partner
            </li>
          </ul>
        </nav>

        <hr className="footer__divider" />

        <article className="footer__wrapper">
          <address className="footer__address">
            <h2 className="footer__address-title font-w-regular">
              Corporate Address
            </h2>
            <p className="footer__address-content font-s-small font-w-light">
              M/S Bholi Travelsome Services,
            </p>
            <p className="footer__address-content font-s-small font-w-light">
              16th Floor - Tower 9A, Cyber City, DLF City, Phase II,
            </p>
            <p className="footer__address-content font-s-small font-w-light">
              Gurgaon - 122002, Haryana (India).
            </p>
            <p className="footer__address-content font-s-small font-w-light">
              Tax (GST/VAT) Number:
              <span className="footer__highlight font-w-regular">
                03AATFB1075B1ZV
              </span>
              .
            </p>
            <p className="font-s-small font-w-light">
              Register of Firms & Societies:
              <span className="footer__highlight font-w-regular">
                5665/2017-18/22-02-2018
              </span>
            </p>
          </address>

          <section className="footer__partners">
            <h2 className="footer__partners-title font-w-regular">Our Partners</h2>
            <div className="footer__partners-logos">
              <img src={CourtYard} alt="Partner CourtYard" className="footer__partner-logo" />
              <img src={ElectronicMountainFestival} alt="Partner ElectronicMountainFestival" className="footer__partner-logo" />
              <img src={Elements} alt="Partner Elements" className="footer__partner-logo" />
              <img src={Hilton} alt="Partner Hilton" className="footer__partner-logo" />
              <img src={MunichAirport} alt="Partner MunichAirport" className="footer__partner-logo" />
              <img src={PartnerIce} alt="Partner PartnerIce" className="footer__partner-logo" />
              <img src={OtzTal} alt="Partner OtzTal" className="footer__partner-logo" />
              <img src={Yaya} alt="Partner Yaya" className="footer__partner-logo" />
            </div>
          </section>

          <section className="footer__social">
            <h2 className="footer__social-title font-w-regular">Follow Us</h2>
            <div className="footer__social-icons">
              <img src={Facebook} alt="Facebook" className="footer__social-icon" />
              <img src={Twitter} alt="Twitter" className="footer__social-icon" />
              <img src={Instagram} alt="Instagram" className="footer__social-icon" />
            </div>
          </section>
        </article>
        <div className="footer__content-copyright font-w-light font-s-small">
          @2024 Jol - All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
