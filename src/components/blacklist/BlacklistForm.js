import axios from "axios";
import { useEffect, useState } from "react";
import BlacklistItem from "./BlacklistItem";
import Footer from "../Footer";

const BlacklistForm = ({}) => {
  const [listItem, setListItem] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.cloudlibrary.shop/v1/lending/blacklist")
      .then((result) => {
        console.log(result.data.data);
        setListItem(result.data.data);
      });
  }, []);

  return (
    <>
      <div className="blacklist-list">
        <div className="blacklistItem">
          {listItem &&
            listItem.map((data) => (
              <BlacklistItem
                key={data.uid}
                uid={data.uid}
                libraryName={data.libraryName}
              />
            ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlacklistForm;
