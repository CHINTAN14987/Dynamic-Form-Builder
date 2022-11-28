import { createSlice, current } from "@reduxjs/toolkit";
import cardData from "../card.json";

const initialState = { CareCardData: cardData };

const JsonTransFormationSlice = createSlice({
  name: "JSON",
  initialState,
  reducers: {
    JSONValUpdate: (state, action) => {
      // state.CareCardData.cardLayout.body[0].tileComponent.push(
      //   ...action.payload.data
      // );

      // const updatedData =
      //   state.CareCardData.cardLayout.body[0].tileComponent.map((item) => {
      //     if (item.id === "EN01OptionType4") {
      //       return {
      //         ...item,
      //         subView: [
      //           {
      //             ...item.subView[0],
      //             options: action.payload,
      //           },
      //         ],
      //       };
      //     } else {
      //       return item;
      //     }
      //   });
      // console.log(updatedData, "hello");
      return {
        ...state,
        CareCardData: {
          ...state.CareCardData,
          cardLayout: {
            ...state.CareCardData.cardLayout,
            body: [
              {
                ...state.CareCardData.cardLayout.body[0],
                tileComponent: [...action.payload],
              },
            ],
          },
        },
      };
    },
  },
});
export const { JSONValUpdate } = JsonTransFormationSlice.actions;
export default JsonTransFormationSlice.reducer;
