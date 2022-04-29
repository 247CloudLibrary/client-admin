import axios from "axios";
import { useEffect, useState } from "react";
import LendingListItem from "./LendingListItem";

const mergeArrayObjects = (arr1, arr2) => {
  let merge = [];
  for (let i = 0; i < arr1.length; i++) {
    merge.push({
      ...arr1[i],
      ...arr2.find((d) => d.id === arr1[i].bookId),
    });
  }
  return merge;
};

const LendingListForm = ({ dropValue, text, libraryValue }) => {
  const [listItem, setListItem] = useState([]);

  useEffect(() => {
    axios
      .all([
        axios.get("https://www.cloudlibrary.shop/v1/lending"),
        axios.get("https://www.cloudlibrary.shop/v1/books"),
      ])
      .then((result) => {
        const resultArray = mergeArrayObjects(
          result[0].data.data,
          result[1].data.data
        );

        console.log(result[0].data.data.length);
        console.log(result[1].data.data);

        const filtedByDropValue = dropValue
          ? resultArray.filter((i) => i.lendingStatus === dropValue)
          : resultArray;
        const filtedByText = text
          ? filtedByDropValue.filter((i) => i.uid === Number(text))
          : filtedByDropValue;
        const filtedByLibrary = libraryValue
          ? filtedByText.filter((i) => i.bookId === libraryValue)
          : filtedByText;
        setListItem(filtedByLibrary);
      });
  }, [dropValue, text, libraryValue]);

  return (
    <div className="lending-list">
      {listItem &&
        listItem.map((data, index) => (
          <LendingListItem
            key={index}
            uid={data.uid}
            thumbNailImage={data.thumbNailImage}
            bookId={data.bookId}
            title={data.title}
            libraryId={data.libraryId}
            libraryName={data.libraryName}
            lendingId={data.lendingId}
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
