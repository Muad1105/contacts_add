import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";

import {
  storeContact,
  editStoredContact,
} from "../../redux/saveContact/action";
import {
  displayCreateContactCaller,
  displayEditContentCaller,
} from "../../redux/nav/action";
import { Link } from "react-router-dom";

type Props = { num: number | null };

type Contact = {
  fName: string;
  lName: string;
  status: string;
};

const CreateContact = (props: Props) => {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [status, setStatus] = useState("");

  const [contact, setContact] = useState<Contact>({
    fName: "",
    lName: "",
    status: "",
  });

  const [editContact, setEditContact] = useState<Contact>({
    fName: "",
    lName: "",
    status: "",
  });

  const contactToEdit = useSelector(
    (data: RootState) => data.savedContact.storedContact
  );

  useEffect(() => {
    if (props.num != null) {
      const editData = contactToEdit.filter((e, i) => {
        if (i === props.num) {
          console.log("filter", e);

          return e;
        }
      });
      setEditContact({
        ...editContact,
        fName: editData[0].fName,
        lName: editData[0].lName,
        status: editData[0].status,
      });
    }
  }, [contactToEdit]);

  const dispatch = useDispatch();

  const handleContact = () => {
    console.log("contact", contact.fName, contact.lName, contact.status);
    console.log(
      "edit contact",
      editContact.fName,
      editContact.lName,
      editContact.status
    );
    // setContact({ fName, lName, status });
    if (contact.fName && contact.lName && contact.status) {
      console.log("Dispatch", contact);
      dispatch(storeContact(contact));
      dispatch(displayCreateContactCaller(false));
    } else if (
      editContact.fName &&
      editContact.lName &&
      editContact.status &&
      props.num != null
    ) {
      const payload = { contact: editContact, num: props.num };
      dispatch(editStoredContact(payload));
      dispatch(displayEditContentCaller(false));
    } else {
      <Link to="/" />;
      dispatch(displayCreateContactCaller(false));
    }
  };

  const handleStatusChange = (e: string) => {
    props.num != null
      ? setEditContact({ ...editContact, status: e })
      : setContact({ ...contact, status: e });
  };

  useEffect(() => {}, [fName, lName, status]);

  return (
    <div className="mx-auto">
      <div className="font-bold text-xl mb-4">Create Contact</div>
      <form className="flex flex-col gap-6  border-black border-4 p-5">
        <div>
          <label htmlFor="">FirstName : </label>
          <input
            type="text"
            value={
              props.num != null && props.num > -1
                ? editContact.fName
                : contact.fName
            }
            onChange={(e) =>
              props.num != null && props.num > -1
                ? setEditContact({ ...editContact, fName: e.target.value })
                : setContact({ ...contact, fName: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="">LastName : </label>
          <input
            type="text"
            value={
              props.num != null && props.num > -1
                ? editContact.lName
                : contact.lName
            }
            onChange={(e) =>
              props.num != null && props.num > -1
                ? setEditContact({ ...editContact, lName: e.target.value })
                : setContact({ ...contact, lName: e.target.value })
            }
          />
        </div>
        <div className="flex gap-10">
          <label htmlFor="">Status</label>
          <div className="flex flex-col text-left gap-4">
            <div className="flex gap-2 flex-row items-center">
              <input
                type="radio"
                value="active"
                checked={
                  props.num != null && props.num > -1
                    ? editContact.status === "active"
                    : contact.status === "active"
                }
                onChange={(e) => handleStatusChange(e.target.value)}
              />
              <label htmlFor="">Active</label>
            </div>
            <div className="flex gap-2 flex-row items-center">
              <input
                type="radio"
                value="inactive"
                checked={
                  props.num != null && props.num > -1
                    ? editContact.status === "inactive"
                    : contact.status === "inactive"
                }
                onChange={(e) => handleStatusChange(e.target.value)}
              />
              <label htmlFor="">Inactive</label>
            </div>
          </div>
        </div>
      </form>
      <button
        onClick={() => handleContact()}
        className="border-black border-2 pr-4 pl-4 pt-1 pb-1 bg-gray-400 mt-10"
      >
        Save Contact
      </button>
    </div>
  );
};

export default CreateContact;
