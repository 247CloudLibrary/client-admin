import LibrariesListItem from "./LibrariesListItem";
import axios from "axios";
import LibrariesSearchFilter from "./LibrariesSearchFilter";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const LibrariesList = () => {
  const [listData, setListData] = useState([]);
  const [text, setText] = useState("");

  const json = JSON.parse(localStorage.getItem("user"));
  const token = json.headers.token;

  const headers = { Authorization: `Bearer ${token}` };

  useEffect(() => {
    axios
      .get("https://www.cloudlibrary.shop/v1/libraries", { headers: headers })
      .then((response) => {
        const responseArr = response.data.data;

        const filtedBySearch = text
          ? responseArr.filter((i) => i.name.includes(text))
          : responseArr;

        setListData(filtedBySearch);
      });
  }, [text]);

  const onSubmit = (e) => {
    setText(e.target.value);
  };

  return (
    <div id="libraries-list">
      <div className="page-title">도서관 목록</div>
      <LibrariesSearchFilter onSubmit={onSubmit} text={text} />
      <div className="btn">
        <Link to="/libraries/write">
          <button className="create-btn">도서관 등록</button>
        </Link>
      </div>
      {listData &&
        listData.map((data) => (
          <div className="list-box" key={data.id}>
            <LibrariesListItem
              id={data.id}
              name={data.name}
              address={data.address}
              email={data.email}
              tel={data.tel}
              operatingTime={data.operatingTime}
              holiday={data.holiday}
            />
          </div>
        ))}
    </div>
  );
};

export default LibrariesList;
