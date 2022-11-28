import React, { useState } from "react";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import "./InputAction.css";
import { useDispatch, useSelector } from "react-redux";
import { action } from "../../../redux/ReducerSlice";
const InputAction = ({
  type,
  text,
  itemDragged,
  tileCustomColor,
  subtype,
  id,
}) => {
  const disptach = useDispatch();
  const inputActionvalue = useSelector(
    (state) => state.UserReducer.taskList[0].tasks
  );

  {
    const incrementHandler = (e, id) => {
      const textValue = inputActionvalue.find((item) => item.id === id);

      disptach(
        action.incrementDecrement({
          data: { text: parseInt(textValue.text) + 1 },
          id: id,
        })
      );
    };

    const decrementHandler = () => {
      const textValue = inputActionvalue.find((item) => item.id === id);

      disptach(
        action.incrementDecrement({
          data: { text: parseInt(textValue.text) - 1 },
          id: id,
        })
      );
    };
    return (
      <>
        <div className={subtype} style={{ color: tileCustomColor }}>
          <div
            className="icon1"
            onClick={(e) => {
              incrementHandler(e, id);
            }}
          >
            <PlusOutlined />
          </div>
          <span className="text">{text}</span>
          <div className="icon2">
            <MinusOutlined onClick={decrementHandler} />
          </div>
        </div>
      </>
    );
  }
};
export default InputAction;
