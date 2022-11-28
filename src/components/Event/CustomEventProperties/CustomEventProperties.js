import React from "react";
import { useDispatch } from "react-redux";
import { action } from "../../../redux/ReducerSlice";

const CustomEventProperties = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="checkboxEvent_wrapper">
      <div>
        <div>
          {Object.keys(item.text).map((textfielditem, index) => {
            return (
              <input
                key={index}
                value={item.text[textfielditem]}
                name={textfielditem}
                className="eventInput"
                onChange={(e) => {
                  dispatch(
                    action.CustomFullBodyComponentValUpdate({
                      e,
                      id: item.id,
                      text: item.text,
                    })
                  );
                }}
              />
            );
          })}
        </div>
        <div>
          {Object.keys(item.subText).map((subTextItem, index) => {
            return (
              <input
                key={index}
                className="eventInput"
                value={item.subText[subTextItem]}
                name={subTextItem}
                onChange={(e) => {
                  dispatch(
                    action.CustomFullBodyComponentValUpdate({
                      e,
                      id: item.id,
                      subText: item.subText,
                    })
                  );
                }}
              />
            );
          })}
        </div>
      </div>
      {console.log(item)}
    </div>
  );
};

export default CustomEventProperties;
