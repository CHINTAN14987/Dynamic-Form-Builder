import React from "react";
import { PlusOutlined } from "@ant-design/icons";
import "./DatePicker.css";

const DatePicker = ({ text }) => {
  return (
    <div className="datePicker_wrapper">
      <PlusOutlined />
      <span>{text}</span>
    </div>
  );
};

export default DatePicker;
