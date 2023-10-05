import React, { useState, useContext, useEffect } from "react";
import { navigationLinks, navigationdown } from "../../data/data";
import { Imgs } from "../../utils/images";
import { SidebarContext } from "../../context/sidebarContext";
import { ToggleButton } from "../ui";
import { NavLink, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [activeLinkIdx, setActiveLinkIdx] = useState<number>(0); // Initialize to 0
  const [sidebarClass, setSidebarClass] = useState<string>("");
  const { isSidebarOpen } = useContext(SidebarContext);

  useEffect(() => {
    if (isSidebarOpen) {
      setSidebarClass("sidebar-change");
    } else {
      setSidebarClass("");
    }
  }, [isSidebarOpen]);

  const location = useLocation();

  return (
    <div className={`sidebar ${sidebarClass}`}>
      <div className="logo">
        <img src={Imgs.logo} alt="logo.png" className="logo-img" />
      </div>
      <div className="menu custom-scrollbar">
        <nav className="navigation">
          <ul className="nav-list">
            {navigationLinks.map((navigationLink) => (
              <li className="nav-item" key={navigationLink.id}>
                <NavLink
                  to={navigationLink.link}
                  className={({ isActive }) =>
                    isActive ? "nav-link nav-link-active" : "nav-link"
                  }
                >
                  {navigationLink.icon && (
                    <div
                      className={`text-red-600 ${
                        location.pathname === navigationLink.link
                          ? "text-red-300 border-red-200 border "
                          : "fill-black stroke-black"
                      }`}
                    >
                      {navigationLink.icon}
                    </div>
                  )}

                  <span className="nav-link-text">{navigationLink.title}</span>
                </NavLink>
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
