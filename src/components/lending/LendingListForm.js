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
  const [searchTerm, setSearchTerm] = useState("");

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

  const uidSearch = listItem.filter((searchList) => {
    return searchList.uid.includes(searchTerm);
  });

  const onSubmit = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="lending-list">
      <form className="searchBox">
        <input type="text" placeholder="검색창" onSubmit={onSubmit} />
        <button> 🔍</button>
      </form>
      <div className="lendingListItem">검 색</div>
      console.log(uidSearch) console.log(uidSearch.data)
      {uidSearch &&
        uidSearch.map((data) => (
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
