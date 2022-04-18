import axios from "axios";
import { useEffect, useState } from "react";
import LendingListItem from "./LendingListItem";

const mergeArrayObjects = (arr1, arr2) => {
  let start = 0;
  let merge = [];
  while (start < arr1.length) {
    if (arr1[start].id === arr2[start].bookId) {
      merge.push({ ...arr1[start], ...arr2[start] });
    }
    start = start + 1;
  }
  return merge;
};

const LendingListForm = () => {
  const [listItem, setListItem] = useState([]);

  useEffect(() => {
    axios.all([axios.get("/books"), axios.get("/lending")]).then((result) => {
      const resultArray = mergeArrayObjects(
        result[0].data.data,
        result[1].data.data
      );
      console.log(resultArray);
      setListItem(resultArray);
    });
  }, []);

  return (
    <div className="lending-list">
      <div className="lendingListItem">검 색</div>
      {listItem &&
        listItem.map((data) => (
          <LendingListItem
            key={data.bookId}
            uid={data.uid}
            thumnailImage={data.thumnailImage}
            bookid={data.bookId}
            title={data.title}
            libraryName={data.libraryName}
            barcode={data.barcode}
            lendingStatus={data.lendingStatus}
            lendingDateTime={data.lendingDateTime}
            returnDateTime={data.returnDateTime}
          />
        ))}
    </div>
  );
};

export default LendingListForm;
