import React from "react";
import File from "./File/File";
import Button from "./Button/Button";
import CheckBox from "./CheckBox/CheckBox";
import Label from "./Label/Label";
import { useSelector } from "react-redux";
import ProgressBar from "./ProgressBar/Progressbar";
import InputAction from "./InputAction/InputAction";
import DatePicker from "./DatePicker/DatePicker";
import CustomImageLabel from "./CustomImageLabel/CustomImageLabel";

const Tile = ({ item }) => {
  const {
    subtype,
    type,
    text,
    options,
    itemDragged,
    editable,
    url,
    id,
    fileName,
    percent,
    content,
    subText,
    icon,
    gender,
    image,
    steps,
    category,
  } = item;
  const tileCustomColor = useSelector((state) => state.tileProperties);

  switch (subtype) {
    case "labelField":
      return (
        <Label
          type={type}
          text={text}
          subtype={subtype}
          editable={editable}
          itemDragged={itemDragged}
          tileCustomColor={tileCustomColor}
          content={content}
          subText={subText}
          icon={icon}
          item={item}
          toggle={true}
        />
      );

    case "CustomImagelabelField":
      return (
        <CustomImageLabel
          type={type}
          text={text}
          subtype={subtype}
          editable={editable}
          image={image}
          subText={subText}
          item={item}
          gender={gender}
        />
      );
    case "inputActionField":
      return (
        <InputAction
          type={type}
          text={text}
          subtype={subtype}
          editable={editable}
          itemDragged={itemDragged}
          tileCustomColor={tileCustomColor}
          id={id}
        />
      );
    case "SubmitButtonField":
    case "BackButtonField":
      return (
        <Button
          type={type}
          text={text}
          editable={editable}
          subtype={subtype}
          itemDragged={itemDragged}
          tileCustomColor={tileCustomColor}
        />
      );

    case "checkboxField":
    case "radioButtonField":
    case "EmoticonField":
      return (
        <CheckBox
          type={type}
          text={text}
          options={options}
          itemDragged={itemDragged}
          subtype={subtype}
          tileCustomColor={tileCustomColor}
        />
      );
    case "InputFieldType":
      return (
        <File
          type={type}
          text={text}
          options={options}
          itemDragged={itemDragged}
          subtype={subtype}
          url={url}
          fileName={fileName}
          id={id}
          tileCustomColor={tileCustomColor}
        />
      );

    case "progressBarField":
    case "circularBarField":
      return (
        <ProgressBar
          options={options}
          steps={steps}
          percent={percent}
          category={category}
        />
      );
    case "datePickerField":
      return (
        <DatePicker
          type={type}
          editable={editable}
          subtype={subtype}
          itemDragged={itemDragged}
          tileCustomColor={tileCustomColor}
          text={text}
        />
      );
    default:
      return null;
  }
};

export default Tile;
