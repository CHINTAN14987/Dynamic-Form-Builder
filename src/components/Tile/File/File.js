import React from "react";
import { CameraOutlined } from "@ant-design/icons";

import "../File/File.css";
const File = ({ type, text, itemDragged, url, tileCustomColor }) => {
  {
    return (
      <div>
        {url ? (
          <div>
            <img src={url} alt="" className="inputImageFilePreview" />
          </div>
        ) : (
          <div className="noURLContainer">
            <CameraOutlined
              className="icon"
              style={{
                color: tileCustomColor,
                fontSize: "3rem",
                color: "#2f0a6b",
              }}
            />
          </div>
        )}
      </div>
    );
  }
};

export default File;
