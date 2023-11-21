import { useState } from "react";
export const FunctionalTrafficLight = () => {
  const [activeLight, setActiveLight] = useState(0);
  const lights = [{ colour: "red" }, { colour: "yellow" }, { colour: "green" }];

  const nextLight = () => {
    if (activeLight === lights.length - 1) {
      setActiveLight(0);
    } else {
      setActiveLight(activeLight + 1);
    }
  };

  return (
    <div className="traffic-light-box">
      <h2>Functional Traffic Light</h2>
      <div className="traffic-light">
        {lights.map((light, index) => {
          return (
            <div
              key={index}
              className={`circle ${
                activeLight === index ? light.colour : "black"
              }`}
            ></div>
          );
        })}

        <button className="next-state-button" onClick={nextLight}>
          Next State
        </button>
      </div>
    </div>
  );
};
