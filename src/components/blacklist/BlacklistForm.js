import axios from "axios";
import { useEffect, useState } from "react";
import BlacklistItem from "./BlacklistItem";

const BlacklistForm = ({}) => {
  const [listItem, setListItem] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://ecs-alb-167470959.us-east-1.elb.amazonaws.com/v1/lending/blacklist"
      )
      .then((result) => {
        console.log(result.data.data);
        setListItem(result.data.data);
      });
  }, []);

  return (
    <div className="lending-list">
      <div className="lendingListItem">블랙리스트 목록</div>
      {listItem &&
        listItem.map((data) => (
          <BlacklistItem
            key={data.uid}
            uid={data.uid}
            libraryName={data.libraryName}
          />
        ))}
    </div>
  );
};

export default BlacklistForm;
