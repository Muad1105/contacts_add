import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface state {
  displayCreateContact: boolean;
  displayEditContact: boolean;
  editContactIndex: number | null;
  showContactSection: boolean;
  showMapAndChartSection: boolean;
}

const initialState: state = {
  displayCreateContact: false,
  displayEditContact: false,
  editContactIndex: null,
  showContactSection: true,
  showMapAndChartSection: false,
};

export const navigate = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    displayCreateContactCaller: (state, payload) => {
      console.log("IN");

      state.displayCreateContact = payload.payload;
    },
    displayEditContentCaller: (state, payload) => {
      state.displayEditContact = payload.payload;
    },
    displayEditContactIndex: (state, payload) => {
      state.editContactIndex = payload.payload;
    },
    displayContactSection: (state, payload) => {
      state.showContactSection = payload.payload;
    },
    displayMapAndChartsSection: (state, payload) => {
      state.showMapAndChartSection = payload.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  displayCreateContactCaller,
  displayEditContentCaller,
  displayEditContactIndex,
  displayContactSection,
  displayMapAndChartsSection,
} = navigate.actions;

export default navigate.reducer;
