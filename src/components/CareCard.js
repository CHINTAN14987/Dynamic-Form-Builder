import "./CareCard.css";
import React, { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { action } from "../redux/ReducerSlice";
import Tile from "./Tile/Tile";
import Properties from "./properties/Properties";
import { store } from "../redux/Store";
import Event from "./Event/Event";
import JsonTransFormationSlice, {
  JSONValUpdate,
} from "../redux/JsonTransFormationSlice";

function CareCard() {
  const formvalue = useSelector((state) => state.UserReducer.taskList[1].tasks);
  const DragValue = useSelector((state) => state.UserReducer.taskList[0].tasks);
  const [isDragging, setIsDragging] = useState(false);
  const JSONData = useSelector((state) => state.JsonTransFormationReducer);
  const dropref = useRef();
  const [itemDisplay, setItemDisplay] = useState(false);
  const disptach = useDispatch();
  const [EventsProperties, setEventProperties] = useState(false);
  const ref = useRef();
  const [dragItem, setDragItem] = useState({});
  const [one, setOne] = useState([]);
  const [JSOnvalue, setJSonValue] = useState(false);
  const dragStartHandler = (e, item) => {
    disptach(action.dragRawTile({ e, item }));
    setItemDisplay(true);

    setIsDragging(false);

    const data = JSON.parse(JSON.stringify(item));

    setDragItem(data);
    setOne(dragItem);
  };
  console.log(DragValue, "jkhkkhkhk");

  const dropHandler = (e) => {
    e.preventDefault();
    // const Element = document
    //   .querySelector(".Drop_InnerWrapper")
    //   .getBoundingClientRect().width;
    // console.log(e.currentTarget.getBoundingClientRect());

    if (itemDisplay) {
      disptach(action.customComponent({ e }));
      setIsDragging(true);
    }
  };
  // useEffect(() => {
  //   if (DragValue.length) {
  //     disptach(JSONValUpdate(DragValue));
  //     // setJSonValue(DragValue);
  //   }
  // }, [DragValue]);

  const dragOverHandler = (e) => {
    e.preventDefault();

    if (e.currentTarget.getBoundingClientRect().width <= 438) {
      e.dataTransfer.dropEffect = "move";
    }
  };
  console.log(JSOnvalue);
  const dragHandler = (e, item) => {
    disptach(action.dragCustomComp({ e, item }));

    // setTimeout(() => (e.target.className += " invisible"), 0);
    setItemDisplay(false);
    setIsDragging(false);
  };

  const DropBackHandler = (e) => {
    disptach(action.deleteCustomComp({ e }));
    // setTimeout(() => (e.target.className += " visible"), 0);
  };
  const RowDraghandler = (e, item) => {
    // console.log(item.id);

    // const dataIndex = e.target.parentNode.getAttribute("data-index");

    // const Ele = document.querySelectorAll(".customcomp");
    // console.log(Ele);
    // console.log(Ele.contains(e.target));
    disptach(action.dragDropCustomComponent({ e, item }));
  };
  return (
    <div>
      <div className="App">
        <div className="rawDragTiles">
          <h3 className="heading">Tiles</h3>
          <div
            className="rawDragtiles_inner"
            onDrop={(e) => DropBackHandler(e)}
            onDragOver={(e) => dragOverHandler(e)}
            ref={ref}
          >
            {formvalue.map((item, index) => {
              return (
                <div
                  key={index}
                  id={item.subtype}
                  draggable="true"
                  onDragStart={(e) => {
                    dragStartHandler(e, item);
                  }}
                >
                  <Tile item={item} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="drop_wrapper">
          <h3 className="heading">Care.Card</h3>

          <div
            className="Drop_InnerWrapper"
            onDrop={(e) => {
              dropHandler(e);
            }}
            ref={dropref}
            onDragOver={(e) => dragOverHandler(e)}
          >
            {DragValue.map((item) => {
              return (
                <div
                  className="customcomp"
                  draggable="true"
                  onDragStart={(e) => {
                    dragHandler(e, item);
                  }}
                  key={item.id}
                  style={{ minWidth: "10rem" }}
                  onDragOver={(e) => dragOverHandler(e)}
                  onDrop={(e) => {
                    RowDraghandler(e, item);
                  }}
                >
                  <Tile item={item} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="RightCom">
          <div className="PropertiesEventsContainer">
            <div
              className="inner"
              onClick={(e) => {
                setEventProperties(false);
              }}
            >
              Properties
            </div>

            <div
              onClick={(e) => {
                setEventProperties(true);
              }}
            >
              Events
            </div>
          </div>

          <div className="eventhandle_Wrapper">
            {DragValue.length ? (
              <React.Fragment>
                {!EventsProperties ? (
                  <Event draggableTaskEvent={DragValue} />
                ) : (
                  <Properties />
                )}
              </React.Fragment>
            ) : (
              <p className="eventDefaultContainer">
                Edit the Card Values from here, Drag the Tile...!
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="Json">
        <button
          className="jsonDisplayButton"
          onClick={() => {
            disptach(JSONValUpdate(DragValue));
            setJSonValue(!JSOnvalue);
          }}
        >
          Show JSON Data
        </button>
        {console.log(JSONData, "hello")}
        {JSOnvalue && <pre>{JSON.stringify(JSONData, undefined, 2)}</pre>}
      </div>
    </div>
  );
}

export default CareCard;
