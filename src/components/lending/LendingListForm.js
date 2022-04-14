import axios from "axios";
import { useEffect, useState } from "react";
import LendingListItem from "./LendingListItem";

const mergeArrayObjects = (arr1, arr2) => {
  let start = 0;
  let merge = [];
  while (start < arr1.length) {
    if (arr1[start].barcode === arr2[start].barcode) {
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
      // TODO 데이터 정리 후 삭제
      result[0] = {
        data: {
          data: [
            {
              id: 1,
              rid: "도서관명-작가-책이름1",
              isbn: "isbnTEST1234",
              title: "책이름",
              thumbNailImage: "썸네일 이미지",
              coverImage: "커버이미지",
              author: "저자",
              translator: "번역가",
              publisher: "출판사",
              publishDate: "2022-05-02",
              type: "비도서",
              genre: "장르",
              barcode: "fhs23a234d",
              rfid: "rfid1234",
              bookStatus: "LENDING_AVAILABLE",
              category: 100,
              libraryId: 1,
              libraryName: "도서관이름",
            },
            {
              id: 2,
              rid: "도서관명-작가-책이름1",
              isbn: "isbnTEST1234",
              title: "책이름2",
              thumbNailImage: "썸네일 이미지2",
              coverImage: "커버이미지2",
              author: "저자2",
              translator: "번역가2",
              publisher: "출판사2",
              publishDate: "2022-05-02",
              type: "비도서",
              genre: "장르",
              barcode: "34235kfjs3",
              rfid: "rfid1234",
              bookStatus: "LENDING_AVAILABLE",
              category: 100,
              libraryId: 1,
              libraryName: "도서관이름",
            },
          ],
        },
      };

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
