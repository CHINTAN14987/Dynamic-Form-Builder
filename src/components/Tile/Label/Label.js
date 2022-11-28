import React from "react";
import "../Label/Label.css";
import { Switch } from "antd";
import { PhoneOutlined } from "@ant-design/icons";
const Label = ({
  text,
  tileCustomColor,
  content,
  subText,

  item,
}) => {
  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };
  if (typeof item.subText === "undefined") {
    return (
      <>
        <div className="labelContainer" style={{ color: tileCustomColor }}>
          <span>{text}</span>
          <span className={`content ${content}`}>{content}</span>
        </div>
      </>
    );
  }

  if (item.category === "titleBodyLabel") {
    return (
      <>
        <div
          className="labelContainer  bodyTitleTile"
          style={{ color: tileCustomColor }}
        >
          <span>{text}</span>
          <span>{subText}</span>
        </div>
      </>
    );
  }

  if (
    item.category === "groupTitleBodyLabel" ||
    item.category === "groupBodyLabel"
  ) {
    return (
      <>
        <div
          className="labelContainer BodyInner-Wrapper"
          style={{ color: tileCustomColor }}
        >
          {text && <div>{text}</div>}
          <div className="bodyitemWrapper">
            {Object.keys(subText).map((groupItem, index) => {
              return (
                <div key={index} className={`${subText[groupItem]}`}>
                  {subText[groupItem]}
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }

  if (item.category === "phoneIconLabel") {
    return (
      <>
        <div
          className="labelContainer iconlabelWrapper"
          style={{ color: tileCustomColor }}
        >
          <span>{text}</span>
          <div>
            <span>{subText}</span>
            <div className="bodyicon">
              <PhoneOutlined
                style={{ fontSize: "20px" }}
                className="phoneicon"
              />
            </div>
          </div>
        </div>
      </>
    );
  }
  if (item.hasOwnProperty("toggle")) {
    return (
      <div
        className="labelContainer labelToggleContainer"
        style={{ color: tileCustomColor }}
      >
        <div className="labeltoggleInnerContainer">
          <span>{text}</span>
          <span>{subText}</span>
        </div>
        <div>
          <div className="switch-button">
            <Switch defaultChecked onChange={onChange} />
          </div>
        </div>
      </div>
    );
  }
};

export default Label;
