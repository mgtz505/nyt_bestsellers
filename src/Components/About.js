import React, { useState, useEffect, useRef } from "react";
import "./About.css";
import DropDown from "./DropDown";

const About = (type) => {
  const [isActive, setIsActive] = useState("");
  const onClick = () => setIsActive(!isActive);
  // Use useRef to help track when a click has occurred

  const dropDownRef = useRef(null);
  //Set up the event listener to listen for a click on the window

  useEffect(() => {
    const pageClickEvent = (event) => {
      console.log(event);
      if (
        dropDownRef.current !== null &&
        !dropDownRef.current.contains(event.target)
      ) {
        setIsActive(!isActive);
      }
    };
    if (isActive) {
      window.addEventListener("click", pageClickEvent);
    }
    return () => {
      window.removeEventListener("click", pageClickEvent);
    };
  }, [isActive]);

  return (
    <div>
      <button onClick={onClick} className="AboutButton">
        <span>About this App</span>
      </button>
      <nav
        ref={dropDownRef}
        className={`abmenu ${isActive ? "active" : "inactive"}`}
      >
        <h2>Welcome to NYT Books!</h2>
        <p>
          {" "}
          Looking for a new read? Select a category using the drop-down menu,
          click on a title, then scroll down for more details! This app displays
          the latest best-sellers from the New York Times and is updated
          periodically, so check back!
        </p>
      </nav>
    </div>
  );
};

export default About;
