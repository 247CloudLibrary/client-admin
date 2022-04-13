import axios from "axios";
import { useEffect, useState } from "react";
import LendingListItem from "./LendingListItem";


const LendingListForm = () => {
  const [listItem, setListItem] = useState([]);

  useEffect(() => {
    axios
      .get("http://ecs-alb-167470959.us-east-1.elb.amazonaws.com/v1/lending")
      .then((response) => setListItem(response.data)
      );
  });

  return (
    <div className="lending-list">
      <div className="lendingListItem">검색</div>
      
      {listItem.data && listItem.data.map(
        (data) => (
          <div className="list-box" key={data.uid}>
            <LendingListItem
              uid={data.uid}
              thumnailImage={data.thumnailImage}
              bookid={data.bookId}
              libraryName={data.libraryName}
              barcode={data.barcode}
              lendingStatus={data.lendingStatus}
              lendingDateTime={data.lendingDateTime}
              returnDateTime={data.returnDateTime}
            />
          </div>
        )
      )}
    </div>
  );
};

export default LendingListForm;
