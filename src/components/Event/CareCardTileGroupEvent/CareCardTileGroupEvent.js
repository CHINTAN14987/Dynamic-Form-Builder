import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { action } from "../../../redux/ReducerSlice";
import "./CareCardTileGroupEvent.css";
const CareCardTileGroupEvent = ({ item }) => {
  const disptach = useDispatch();
  const [focus, setFocus] = useState(true);

  return (
    <div className="groupEvent_Wrapper">
      {Object.keys(item.options).map((checkboxItem, index) => {
        return (
          <input
            className="eventInput"
            key={index}
            value={item.options[checkboxItem]}
            name={checkboxItem}
            onChange={(e) => {
              disptach(action.checkBoxComponentValUpdate({ e, id: item.id }));
            }}
            readOnly={focus}
            onFocus={() => {
              setFocus(false);
            }}
            onBlur={() => {
              setFocus(true);
            }}
          />
        );
      })}
    </div>
  );
};

export default CareCardTileGroupEvent;
