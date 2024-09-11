import { useState, useEffect } from "react";
import "./ToggleSwitch.css";

export const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  // Apply background color change when switch state changes
  useEffect(() => {
    document.body.className = isOn ? "dark-mode" : "light-mode";
  }, [isOn]); // This will run whenever `isOn` changes

  return (
    <div
      className={`toggle-switch ${isOn ? "toggle-on" : "toggle-off"}`}
      onClick={handleToggle}
      role="button"
      aria-pressed={isOn}
    >
      <div className={`switch ${isOn ? "on" : "off"}`}>
        <span className="switch-state">{isOn ? "on" : "off"}</span>
      </div>
    </div>
  );
};
