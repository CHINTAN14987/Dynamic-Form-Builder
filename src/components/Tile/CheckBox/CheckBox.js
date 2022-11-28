import React from "react";
import "../CheckBox/CheckBox.css";

const CheckBox = ({ type, options, itemDragged, tileCustomColor, subtype }) => {
  if (subtype === "checkboxField" || subtype === "radioButtonField") {
    return (
      <div className="checkboxContainer">
        {options.map((item, index) => {
          return (
            <div className={subtype} key={index}>
              <input
                type={subtype === "checkboxField" ? "checkbox" : "radio"}
              />
              <span
                className="checkboxOptions"
                style={{ color: tileCustomColor }}
              >
                {item.text}
              </span>
            </div>
          );
        })}
      </div>
    );
  }

  const Emoticon = ["😀", "😑", "😔"];
  if (subtype === "EmoticonField") {
    return (
      <div className="EmoticonContainer">
        {options.map((item, index) => {
          return (
            <div className={subtype} key={index}>
              <span>{Emoticon[index]}</span>
              <span
                className="EmiticonOptions"
                style={{ color: tileCustomColor }}
              >
                {item.text}
              </span>
            </div>
          );
        })}
      </div>
    );
  }
};

export default CheckBox;
