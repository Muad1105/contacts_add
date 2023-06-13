import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { displayCreateContactCaller } from "../redux/nav/action";

import { RootState } from "../redux/store";
import SavedContact from "./miniComponents/SavedContact";

type Props = {};

const ContactList = (props: Props) => {
  const dispatch = useDispatch();

  const contacts = useSelector(
    (state: RootState) => state.savedContact.storedContact
  );

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);
  return (
    <div>
      <button
        className="border-black border-2 pr-4 pl-4 pt-1 pb-1 bg-gray-400"
        onClick={() => dispatch(displayCreateContactCaller(true))}
      >
        Create Contact
      </button>
      <div className="mt-10">
        {contacts.length ? (
          <SavedContact />
        ) : (
          <div className="border-black border-2 flex flex-row h-28 w-full">
            <p className="bg-black text-white text-7xl border rounded-full h-full w-28 align-center pt-3">
              X
            </p>
            <div className="w-96 align-center text-3xl h-full text-left pl-7">
              <div> No contacts saved</div>
              <div>Please Add Contact from Create Contact Button</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactList;
