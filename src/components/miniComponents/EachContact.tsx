import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { Link } from "react-router-dom";
import CreateContact from "./CreateContact";
import {
  displayEditContentCaller,
  displayEditContactIndex,
} from "../../redux/nav/action";
import { log } from "console";

import { removeContact } from "../../redux/saveContact/action";

type Props = { num: number };

type PersonContact = {
  fName: string;
  lName: string;
  status: string;
};

const Contact = (props: Props) => {
  const [oneContact, setOneContact] = useState<PersonContact>({
    fName: "",
    lName: "",
    status: "",
  });
  const [editUserData, setEditUserData] = useState<boolean>(false);

  const contact = useSelector(
    (data: RootState) => data.savedContact.storedContact
  );

  const editContact = useSelector(
    (data: RootState) => data.navigate.displayEditContact
  );

  const editItemIndex = useSelector(
    (data: RootState) => data.navigate.editContactIndex
  );

  useEffect(() => {
    console.log(editItemIndex);
  }, [editItemIndex]);

  useEffect(() => {
    setEditUserData(false);
  }, [editContact]);

  useEffect(() => {
    const currentContact = contact.filter((e, i) => {
      console.log(e);
      if (i == props.num) return e;
    });
    console.log(currentContact);

    setOneContact({ ...oneContact, ...currentContact[0] });
  }, [contact]);

  const dispatch = useDispatch();

  const displayEditContent = () => {
    console.log("call");

    dispatch(displayEditContentCaller(true));
    dispatch(displayEditContactIndex(props.num));
  };

  const callRemoveContact = () => {
    console.log("delete");

    // const value = {num: props.num}
    dispatch(removeContact({ num: props.num }));
  };

  return (
    <div className="mb-6">
      <div className="border-black border-2 mb-2 flex flex-col text-left pl-4 justify-start">
        <h3>{props.num + 1}.</h3>
        <p>First Name: {oneContact.fName}</p>
        <p>Last Name: {oneContact.lName}</p>
        <p>Status: {oneContact.status}</p>
      </div>
      <div className="flex gap-4 justify-center">
        <button
          className="border-black border-2 px-4 bg-green-500"
          onClick={() => displayEditContent()}
        >
          Edit
        </button>
        <button
          className="border-black border-2 px-4 bg-red-600"
          onClick={() => callRemoveContact()}
        >
          Delete
        </button>
      </div>
      {editItemIndex === props.num && editContact && (
        <div className="">
          <CreateContact num={props.num} />
        </div>
      )}
    </div>
  );
};

export default Contact;
