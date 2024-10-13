import React from "react";
import Button from "@/components/Common/Button";
import "./Header.scss";

export default function HeaderComponent() {
  const navigationItem = [
    "Gallery",
    "About Us",
    "How It Works",
    "Contact",
  ];
  return (
    <header className="header">
      <div className="header__logo">
        <img src="/jolFest.svg" alt="Logo" className="header__logo-img" />
      </div>
      <nav className="navigation">
        <ul className="navigation__list">
          {navigationItem.map((item) => {
            return (
             <li key={item} className="navigation__item">
               <a
                href={item}
                className="navigation__link font-w-light font-s-medium"
              >
                {item}
              </a>
             </li>
            );
          })}
        </ul>
        <ul className="navigation__list">
        <li className="navigation__item">
          <a href="#login" className="navigation__link font-w-light font-s-medium">Login
          </a>
        </li>
        <li className="navigation__item">
          <Button title={'Destination'}/>
        </li>
        </ul>
      </nav>
    </header>
  );
}
