import React, { useState, useContext, useEffect } from "react";
import { navigationLinks, navigationdown } from "../../data/data";
import { Imgs } from "../../utils/images";
import { SidebarContext } from "../../context/sidebarContext";
import { ToggleButton } from "../ui";

const Sidebar = () => {
  const [activeLinkIdx] = useState(1);
  const [sidebarClass, setSidebarClass] = useState("");
  const { isSidebarOpen } = useContext(SidebarContext);

  useEffect(() => {
    if (isSidebarOpen) {
      setSidebarClass("sidebar-change");
    } else {
      setSidebarClass("");
    }
  }, [isSidebarOpen]);

  return (
    <div className="sidebar">
      <div className="logo">
        <img src={Imgs.logo} alt="logo.png" className="logo-img" />
      </div>
      <div className="menu custom-scrollbar">
        <nav className="navigation">
          <ul className="nav-list">
            {navigationLinks.map((navigationLink) => (
              <li className="nav-item" key={navigationLink.id}>
                <a
                  href={navigationLink.link}
                  className={`nav-link ${
                    navigationLink.id === activeLinkIdx ? "active" : null
                  }`}
                >
                  <img
                    src={navigationLink.image}
                    className="nav-link-icon"
                    alt={navigationLink.title}
                  />
                  <span className="nav-link-text">{navigationLink.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="navigation-2">
          <ul className="nav-list">
            {navigationdown.map((navigationLink) => (
              <li className="nav-item" key={navigationLink.id}>
                <a href="#" className="nav-link">
                  <img
                    src={navigationLink.image}
                    className="nav-link-icon"
                    alt={navigationLink.title}
                  />
                  <span className="nav-link-text">{navigationLink.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="navigation-3">
          <ToggleButton />
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
