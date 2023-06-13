import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Contact from "./EachContact";

type Props = {};

type Contact = {
  fName: string;
  lName: string;
  status: string;
};

const SavedContact = (props: Props) => {
  const [dataRecieved, setDataRecieved] = useState<Contact[]>([]);
  const data = useSelector(
    (data: RootState) => data.savedContact.storedContact
  );
  useEffect(() => {
    setDataRecieved(data);
    console.log(data);
  }, [data]);

  return (
    <div className="">
      {dataRecieved.map((e: Contact, i) => {
        console.log(e.fName);
        return (
          <div key={`key+${i}`} className="">
            <Contact num={i} />
          </div>
        );
      })}
    </div>
  );
};

export default SavedContact;
