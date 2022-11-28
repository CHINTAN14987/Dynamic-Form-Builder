import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { action } from "../../../redux/ReducerSlice";
import "./CareCardTileSingleEvent.css";
const CareCardTileSingleEvent = ({ item }) => {
  const [focus, setFocus] = useState(true);
  const disptach = useDispatch();

  const ChangeHandler = (e) => {
    setFocus(false);
    disptach(action.componentUpdateTileVal({ data: { text: e }, id: item.id }));
  };

  const subTextChangeHandler = (e) => {
    setFocus(false);

    disptach(
      action.componentUpdateTileVal({ data: { subText: e }, id: item.id })
    );
  };

  if (!item.hasOwnProperty("subText")) {
    return (
      <div className="event-wrapper">
        {console.log("hello")}
        <input
          className="eventInput"
          value={item.text}
          onChange={(e) => {
            ChangeHandler(e.target.value);
          }}
          readOnly={focus}
          onFocus={() => {
            setFocus(false);
          }}
          onBlur={() => {
            setFocus(true);
          }}
        />
      </div>
    );
  }

  if (item.hasOwnProperty("subText") && typeof item.subText === "string") {
    return (
      <div className="event-wrapper one">
        {console.log("hello")}
        <input
          className="eventInput"
          value={item.text}
          onChange={(e) => {
            ChangeHandler(e.target.value);
          }}
          readOnly={focus}
          onFocus={() => {
            setFocus(false);
          }}
          onBlur={() => {
            setFocus(true);
          }}
        />

        <input
          className="eventInput"
          value={item.subText}
          onChange={(e) => {
            subTextChangeHandler(e.target.value);
          }}
          readOnly={focus}
          onFocus={() => {
            setFocus(false);
          }}
          onBlur={() => {
            setFocus(true);
          }}
        />
      </div>
    );
  }

  if (typeof item.subText === "object") {
    return (
      <div className="body-group-wrapper">
        {console.log("hello")}
        <div className="event-wrapper">
          <input
            className="eventInput"
            value={item.text}
            onChange={(e) => {
              ChangeHandler(e.target.value);
            }}
            readOnly={focus}
            onFocus={() => {
              setFocus(false);
            }}
            onBlur={() => {
              setFocus(true);
            }}
          />
          {Object.keys(item.subText).map((bodyItem, index) => {
            return (
              <input
                className="eventInput"
                key={index}
                value={item.subText[bodyItem]}
                name={bodyItem}
                onChange={(e) => {
                  disptach(
                    action.checkBoxComponentValUpdate({
                      e,
                      id: item.id,
                    })
                  );
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
      </div>
    );
  }
  if (typeof item.options === "object" && item.hasOwnProperty("options")) {
    <div className="groupEvent_Wrapper">
      {console.log("hello")}
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
    </div>;
  }
  // if (!item.subType === "") {
  //   return (
  //     <div className="event-wrapper">
  //       <input
  //         className="eventInput"
  //         value={item.text}
  //         onChange={(e) => {
  //           ChangeHandler(e.target.value);
  //         }}
  //         readOnly={focus}
  //         onFocus={() => {
  //           setFocus(false);
  //         }}
  //         onBlur={() => {
  //           setFocus(true);
  //         }}
  //       />
  //     </div>
  //   );
  // }
};

export default CareCardTileSingleEvent;
