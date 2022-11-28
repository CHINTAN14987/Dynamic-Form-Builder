import React from "react";
import "./ProgressBar.css";
import { Progress } from "antd";
import { Popover, Steps } from "antd";
const { Step } = Steps;
const date = new Date().toLocaleDateString("en-in", {
  day: "numeric",
  year: "numeric",
  month: "long",
});
const newdate = date.replaceAll("/", ".");
const customDot = (dot, { status, index }) => (
  <Popover
    content={
      <span>
        step {index} status: {status}
      </span>
    }
  >
    {dot}
  </Popover>
);
const ProgressBar = ({ options, category, steps, percent }) => {
  if (category === "progressBarEvent") {
    return (
      <>
        <Steps current={steps} progressDot={customDot}>
          {options.map((item, index) => {
            return <Step key={item.label} title={item.text} />;
          })}
        </Steps>
      </>
    );
  }

  if (category === "circularBarEvent") {
    return (
      <div className="circularBar-Wrapper">
        <Progress type="circle" percent={percent} strokeColor="#2f0a6b" />
        <span>{newdate}</span>
      </div>
    );
  }
};

export default ProgressBar;
