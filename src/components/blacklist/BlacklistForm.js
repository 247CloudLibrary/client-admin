import axios from "axios";
import { useEffect, useState } from "react";
import BlacklistItem from "./BlacklistItem";

const BlacklistForm = () => {
  const [listItem, setListItem] = useState([]);

  useEffect(() => {
    axios.get("/lendingBlacklist").then((result) => {
      console.log(result.data);
      setListItem(result.data);
    });
  }, []);

  const handleRegister = () => {};

  return (
    <div className="lending-list">
      <div className="lendingListItem">블랙리스트 목록</div>
      {listItem &&
        listItem.map((data) => (
          <BlacklistItem
            key={data.uid}
            libraryId={data.libraryId}
            libraryName={data.libraryName}
          />
        ))}
      <span>
        이것은 아무 내용도 없어서 써보는 글. 블랙리스트 불러오면 리스트로 나올
        예정
      </span>
      <input type="button" value="등록 해제" onClick={handleRegister} />
    </div>
  );
};

export default BlacklistForm;
