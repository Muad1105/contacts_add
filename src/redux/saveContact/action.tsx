import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { log } from "console";

type PersonContact = {
  fName: string;
  lName: string;
  status: string;
};
export interface state {
  storedContact: PersonContact[];
}

const initialState: state = {
  storedContact: [],
};

export const createContactList = createSlice({
  name: "saveContact",
  initialState,
  reducers: {
    storeContact: (state, payload) => {
      console.log("IN-s", payload);
      state.storedContact.push(payload.payload);
      // localStorage.setItem("contacts", state.storedContact);
    },
    editStoredContact: (state, payload) => {
      console.log(payload);

      const editedArr = state.storedContact.map((e, i) => {
        console.log("edit reducer", e, i);

        if (i == payload.payload.num) return payload.payload.contact;
        else return e;
      });
      state.storedContact = editedArr;
    },
    removeContact: (state, payload) => {
      const contactRemovedList = state.storedContact.filter((e, i) => {
        if (i !== payload.payload.num) return e;
      });
      state.storedContact = contactRemovedList;
    },
  },
});

// Action creators are generated for each case reducer function
export const { storeContact, editStoredContact, removeContact } =
  createContactList.actions;

export default createContactList.reducer;
