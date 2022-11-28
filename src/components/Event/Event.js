import React from "react";
import CareCardTileGroupEvent from "./CareCardTileGroupEvent/CareCardTileGroupEvent";
import CustomEventProperties from "./CustomEventProperties/CustomEventProperties";
import FileEvent from "./FileEvent/FileEvent";
import CareCardTileSingleEvent from "./CareCardTileSingleEvent/CareCardTileSingleEvent";
import CareCardEvent from "./CareCardEvent/CareCardEvent";
const Event = ({ draggableTaskEvent }) => {
  const TaskEvent = draggableTaskEvent[draggableTaskEvent.length - 1];
  switch (TaskEvent.subtype) {
    // case "SubmitButtonField":
    // case "BackButtonField":
    // case "progressBarField":
    // return <CareCardTileSingleEvent item={TaskEvent} />;
    // case "EmoticonField":
    // case "checkboxField":
    // case "radioButtonField":
    //   return <CareCardTileGroupEvent item={TaskEvent} />;
    case "InputFieldType":
    case "datePickerField":
      return <FileEvent item={TaskEvent} />;
    // case "CustomImagelabelField":
    //   return <CustomEventProperties item={TaskEvent} />;
    case "EmoticonField":
    case "checkboxField":
    case "radioButtonField":
    case "CustomImagelabelField":
    case "labelField":
    case "inputActionField":
    case "progressBarField":
    case "SubmitButtonField":
    case "BackButtonField":
    case "circularBarField":
      return <CareCardEvent item={TaskEvent} />;

    default:
      return null;
  }
};
export default Event;
