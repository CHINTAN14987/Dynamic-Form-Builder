import { createSlice, current } from "@reduxjs/toolkit";
import data from "../data";
import uuid from "react-uuid";
const initialState = data;

const reducerSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    dragRawTile: (state, action) => {
      const { e, item } = action.payload;
      const dt = e.dataTransfer;
      console.log(item);
      dt.setData("text/plain", JSON.stringify(item));
      return state;
    },
    customComponent: (state, action) => {
      const { e } = action.payload;
      const dt = e.dataTransfer;
      const text = dt.getData("text/plain");
      const data = JSON.parse(text);
      const newData = { ...data, id: uuid() };
      console.log(newData);
      state.taskList[0].tasks.push(newData);
    },
    dragCustomComp: (state, action) => {
      const { e, item } = action.payload;
      const dt = e.dataTransfer;
      dt.setData("text/plain", JSON.stringify(item));
      return state;
    },
    deleteCustomComp: (state, action) => {
      const { e } = action.payload;
      const dt = e.dataTransfer;
      const text = dt.getData("text/plain");
      const data = JSON.parse(text);

      return {
        ...state,
        taskList: [
          {
            ...state.taskList[0],
            tasks: state.taskList[0].tasks.filter(
              (item) => item.id !== data.id
            ),
          },
          state.taskList[1],
        ],
      };
    },
    componentUpdateTileVal: (state, action) => {
      const updatedData = state.taskList[0].tasks.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            ...action.payload.data,
          };
        } else {
          return item;
        }
      });

      return {
        ...state,
        taskList: [
          {
            ...state.taskList[0],

            tasks: updatedData,
          },
          state.taskList[1],
        ],
      };
    },

    checkBoxComponentValUpdate: (state, action) => {
      const { e, id, optionItem } = action.payload;

      const updatedData = state.taskList[0].tasks.map((item) => {
        if (item.id === id) {
          if (item.hasOwnProperty("subText")) {
            return {
              ...item,
              subText: { ...item.subText, [e.target.name]: e.target.value },
            };
          } else {
            return {
              ...item,
              options: [
                ...item.options.map((optionI) => {
                  if (optionI.label === optionItem) {
                    return { ...optionI, text: e.target.value };
                  } else return optionI;
                }),
              ],
            };
          }
        } else {
          return item;
        }
      });

      return {
        ...state,
        taskList: [
          {
            ...state.taskList[0],

            tasks: [...updatedData],
          },
          state.taskList[1],
        ],
      };
    },
    CustomFullBodyComponentValUpdate: (state, action) => {
      const { e, id, text } = action.payload;
      const updatedData = state.taskList[0].tasks.map((item) => {
        if (item.id === id) {
          if (text) {
            return {
              ...item,
              text: { ...item.text, [e.target.name]: e.target.value },
            };
          } else {
            return {
              ...item,
              subText: { ...item.subText, [e.target.name]: e.target.value },
            };
          }
        } else {
          return item;
        }
      });

      return {
        ...state,
        taskList: [
          {
            ...state.taskList[0],

            tasks: updatedData,
          },
          state.taskList[1],
        ],
      };
    },

    dragDropCustomComponent: (state, action) => {
      const { e, item } = action.payload;

      const findItemIndex = state.taskList[0].tasks.findIndex((dragItem) => {
        return dragItem.id === item.id;
      });
      const dt = e.dataTransfer;
      const text = dt.getData("text/plain");
      const data = JSON.parse(text);
      const sourceItemIndex = state.taskList[0].tasks.findIndex((item) => {
        return item.id === data.id;
      });

      state.taskList[0].tasks.splice(sourceItemIndex, 1);
      const newDestinationGroupTasks = state.taskList[0].tasks.splice(
        findItemIndex,
        0,
        data
      );

      state = {
        ...state,
        taskList: [
          {
            ...state.taskList[0],

            tasks: newDestinationGroupTasks,
          },
          state.taskList[1],
        ],
      };
    },
    careCardProperties: (state, action) => {
      const { color } = action.payload;
      return { ...state, tileProperties: color };
    },
    incrementDecrement: (state, action) => {
      const updatedData = state.taskList[0].tasks.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            ...action.payload.data,
          };
        } else {
          return item;
        }
      });

      console.log(updatedData);
      return {
        ...state,
        taskList: [
          {
            ...state.taskList[0],

            tasks: updatedData,
          },
          state.taskList[1],
        ],
      };
    },
  },
});
export const action = reducerSlice.actions;
export default reducerSlice.reducer;
