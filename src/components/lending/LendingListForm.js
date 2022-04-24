import axios from "axios";
import { useEffect, useState } from "react";
import LendingListItem from "./LendingListItem";

const mergeArrayObjects = (arr1, arr2) => {
  let start = 0;
  let merge = [];
  while (start < arr1.length) {
    if (arr1[start].bookId === arr2[start].id) {
      merge.push({ ...arr1[start], ...arr2[start] });
    }
    start = start + 1;
  }
  return merge;
};

const LendingListForm = ({ dropValue, text, libraryValue }) => {
  const [listItem, setListItem] = useState([]);

  useEffect(() => {
    axios
      .all([
        axios.get(
          "http://ecs-alb-167470959.us-east-1.elb.amazonaws.com/v1/lending"
        ),
        axios.get(
          "http://ecs-alb-167470959.us-east-1.elb.amazonaws.com/v1/books"
        ),
      ])
      .then((result) => {
        const resultArray = mergeArrayObjects(
          result[0].data.data,
          result[1].data.data,
          console.log(result[0].data.data),
          console.log(result[1].data.data)
        );

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
      ;
    </div>
  );
};

export default LendingListForm;
