import axios from "axios";
import { useEffect, useState } from "react";
import BlacklistItem from "./BlacklistItem";
import Header from "../../components/common/Header";
import Footer from "../../components/Footer";

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
        <Header />
        <div className="blacklist-title">Blacklist</div>
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
