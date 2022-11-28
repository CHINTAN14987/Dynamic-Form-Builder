// import { createSlice } from "@reduxjs/toolkit";
// import uuid from "react-uuid";

// const TilesEventSlice = createSlice({
//   name: "tilevent",
//   initialState: null,
//   reducers: {
//     incrementbyAmount: (state, action) => {
//       const updatedData = state.taskList[0].tasks.map((item) => {
//         if (item.id === action.payload.id) {
//           return {
//             ...item,
//             ...action.payload.data,
//           };
//         } else {
//           return item;
//         }
//       });

//       return {
//         ...state,
//         taskList: [
//           {
//             ...state.taskList[0],

//             tasks: updatedData,
//           },
//           state.taskList[1],
//         ],
//       };
//     },
//     increment: (state, action) => {
//       const updatedData = state.taskList[0].tasks.map((item) => {
//         if (item.id === action.payload.id) {
//           return {
//             ...item,
//             ...action.payload.text,
//           };
//         } else {
//           return item;
//         }
//       });
//       console.log(updatedData);
//       return {
//         ...state,
//         taskList: [
//           {
//             ...state.taskList[0],

//             tasks: updatedData,
//           },
//           state.taskList[1],
//         ],
//       };
//     },
//   },
// });

// export const action = TilesEventSlice.actions;
// export default TilesEventSlice.reducer;
