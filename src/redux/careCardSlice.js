import { createSlice } from "@reduxjs/toolkit";
import { store } from "./Store";
import cardData from "../card.json";

const initialState = { CareCardData: cardData };
const careCardSlice = createSlice({
  name: "careCardData",
  initialState,
  reducer: {
    careCardUpdatedData: (state, action) => {
      return state;
    },
  },
});
export default careCardSlice.reducer;
export const { careCardUpdatedData } = careCardSlice.actions;
