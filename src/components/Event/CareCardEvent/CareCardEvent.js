import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { JSONValUpdate } from "../../../redux/JsonTransFormationSlice";
import { action } from "../../../redux/ReducerSlice";
import { store } from "../../../redux/Store";
import "./CareCardEvent.css";
const CareCardEvent = ({ item }) => {
  const dispatch = useDispatch();
  const [focus, setFocus] = useState(true);
  const DragValue = useSelector((state) => state.UserReducer.taskList[0].tasks);

  const ChangeHandler = (e) => {
    setFocus(false);
    dispatch(action.componentUpdateTileVal({ data: { text: e }, id: item.id }));
  };

  const subTextChangeHandler = (e) => {
    setFocus(false);

    dispatch(
      action.componentUpdateTileVal({ data: { subText: e }, id: item.id })
    );
  };

  if (item.category === "groupInputEvent") {
    return (
      <div className="groupEvent_Wrapper">
        {item.options.map((groupOptionsItem) => {
          return (
            <input
              className="eventInput"
              key={groupOptionsItem.label}
              value={groupOptionsItem.text}
              name={groupOptionsItem.label}
              onChange={(e) => {
                dispatch(
                  action.checkBoxComponentValUpdate({
                    e,
                    id: item.id,
                    optionItem: groupOptionsItem.label,
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
              onKeyUp={() => {}}
            />
          );
        })}
      </div>
    );
  }

  if (item.category === "progressBarEvent") {
    return (
      <div className="groupEvent_Wrapper">
        <div>
          <span>Steps:</span>
          <input
            value={item.steps}
            min="1"
            max="2"
            onChange={(e) => {
              dispatch(
                action.componentUpdateTileVal({
                  data: { steps: e.target.value },
                  id: item.id,
                })
              );
            }}
            onBlur={() => {
              setFocus(true);
            }}
          />
        </div>
        {item.options.map((groupOptionsItem, index) => {
          return (
            <input
              className="eventInput"
              key={groupOptionsItem.label}
              value={groupOptionsItem.text}
              name={groupOptionsItem.label}
              onChange={(e) => {
                dispatch(
                  action.checkBoxComponentValUpdate({
                    e,
                    id: item.id,
                    optionItem: groupOptionsItem.label,
                  })
                );
              }}
              readOnly={focus}
              onFocus={() => {
                setFocus(false);
              }}
              onBlur={() => {
                setFocus(true);
                // dispatch(JSONValUpdate(item));
              }}
            />
          );
        })}
      </div>
    );
  }
  if (item.category === "candidateFullBodyCustomcard") {
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
                      })
                    );
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
  if (item.hasOwnProperty("percent")) {
    return (
      <div className="event-wrapper">
        <input
          className="eventInput"
          value={item.percent}
          onChange={(e) => {
            dispatch(
              action.componentUpdateTileVal({
                data: { percent: e.target.value },
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
      </div>
    );
  }
  if (item.category === "label") {
    return (
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
      </div>
    );
  }
  if (item.hasOwnProperty("subText") && typeof item.subText === "string") {
    return (
      <div className="event-wrapper one">
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

  if (
    item.category === "groupTitleBodyLabel" ||
    item.category === "groupBodyLabel"
  ) {
    return (
      <div className="body-group-wrapper">
        <div className="event-wrapper">
          {item.text && (
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
          )}
          {Object.keys(item.subText).map((bodyItem, index) => {
            return (
              <input
                className="eventInput"
                key={index}
                value={item.subText[bodyItem]}
                name={bodyItem}
                onChange={(e) => {
                  dispatch(
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
      {Object.keys(item.options).map((checkboxItem, index) => {
        return (
          <input
            className="eventInput"
            key={index}
            value={item.options[checkboxItem]}
            name={checkboxItem}
            onChange={(e) => {
              dispatch(action.checkBoxComponentValUpdate({ e, id: item.id }));
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
};

export default CareCardEvent;
