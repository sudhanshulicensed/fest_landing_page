import { useState, useEffect } from "react";
import ToggleNavigation from "@/assets/images/ToggleNavigation.svg";
import Button from "@/components/Common/Button";
import "./Header.scss";
import { useIsMobile } from "@/utils/screenSize";

export default function HeaderComponent() {
  const navigationItem = [
    { text: "Gallery", value: "gallery" },
    { text: "About Us", value: "about_us" },
    { text: "How It Works", value: "how_it_works" },
    { text: "Contact", value: "contact" },
  ];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (!isMobile && isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  }, [isMobile, isMobileMenuOpen]);

  return (
    <header className="header">
      <div className="header__logo">
        <img src="/jolFest.svg" alt="Logo" className="header__logo-img" />
      </div>
      <button
        className="mobile-menu-toggle"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <img src={ToggleNavigation} alt="Toggle Navigation" />
      </button>
      <nav className={`${isMobileMenuOpen && "navigation--open"} navigation`}>
        <ul className="navigation__list">
          {navigationItem.map((item) => {
            return (
              <li key={item.value} className="navigation__item">
                <a
                  href={`#${item.value}`}
                  className="navigation__link font-w-light font-s-medium"
                >
                  {item.text}
                </a>
              </li>
            );
          })}
        </ul>
        {isMobileMenuOpen && (
          <ul className="navigation__list">
            <li className="navigation__item">
              <a
                href="#login"
                className="navigation__link font-w-light font-s-medium"
              >
                Login
              </a>
            </li>
            <li className="navigation__item">
              <Button title={"Destination"} />
            </li>
          </ul>
        )}
      </nav>
      <ul className="extras navigation__list">
        <li className="navigation__item">
          <a
            href="#login"
            className="navigation__link font-w-light font-s-medium"
          >
            Login
          </a>
        </li>
        <li className="navigation__item">
          <Button title={"Destination"} />
        </li>
      </ul>
    </header>
  );
}
