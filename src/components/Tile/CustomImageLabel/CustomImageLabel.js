import React from "react";
import "./CustomImageLabel.css";

const CustomImageLabel = ({
  editable,
  gender,
  subtype,
  text,
  image,
  subText,
}) => {
  return (
    <div className={subtype}>
      <div>
        <img src={image} alt="" />
      </div>
      <div
        className={` patientTile ${
          gender === "Male" ? "malePatientTile" : "femalePatientTile"
        }`}
      >
        <div>
          {Object.keys(text).map((item, index) => {
            return <span key={index}>{text[item]}</span>;
          })}
        </div>
        <div>
          {Object.keys(subText).map((item, index) => {
            return <span key={index}>{subText[item]}</span>;
          })}
        </div>
      </div>
    </div>
  );
};

export default CustomImageLabel;
