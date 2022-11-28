import React from "react";

import "../Button/Button.css";
// import { RollbackOutlined } from "@ant-design/icons";

const Button = ({ text, type, subtype, itemDragged, tileCustomColor }) => {
  {
    return (
      <>
        <button
          className={subtype}
          style={{ backgroundColor: tileCustomColor }}
        >
          {text}
        </button>
      </>
    );
  }
};

export default Button;
