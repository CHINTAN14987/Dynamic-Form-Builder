import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { action } from "../../../redux/ReducerSlice";
import { DatePicker, Space } from "antd";
import "./FileEvent.css";
import moment from "moment";

const File = ({ item }) => {
  const { id, url } = item;
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  const disptach = useDispatch();
  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    } else {
      setSelectedFile(e.target.files[0]);
    }
  };

  const onChange = (date) => {
    const ModifiedDate = new Date(date)
      .toLocaleDateString("en-in", {
        day: "numeric",
        year: "numeric",
        month: "numeric",
      })
      .replaceAll("/", ".");

    disptach(
      action.componentUpdateTileVal({
        data: { text: ModifiedDate },
        id: item.id,
      })
    );
  };
  useEffect(() => {
    if (preview) {
      disptach(
        action.componentUpdateTileVal({
          data: { url: preview, fileName: selectedFile.name },
          id: id,
        })
      );
    }
  }, [disptach, preview]);

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    } else {
      const image = URL.createObjectURL(selectedFile);

      setPreview(image);

      return () => URL.revokeObjectURL(image);
    }
  }, [selectedFile]);

  if (item.subtype === "InputFieldType") {
    return (
      <div>
        <div className="customInputfield">
          <input
            type="file"
            name="image-uploader"
            onChange={onSelectFile}
            id="image-uploader"
          />
        </div>
      </div>
    );
  }
  const dateFormat = "DD/MM/YYYY";

  if (item.subtype === "datePickerField") {
    return (
      <Space direction="vertical">
        <DatePicker onChange={onChange} format={dateFormat} />
      </Space>
    );
  }
};

export default File;
