import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const BooksListItem = ({
  id,
  bookType,
  title,
  author,
  translator,
  publishDate,
  publisher,
  barcode,
  isbn,
  genre,
  libraryName,
  category,
  bookStatus,
  thumbNailImage,
}) => {
  const [num, setNum] = useState("(0)");
  const BookListItemArray = [
    { value: title, className: "title", label: "" },
    { value: author, className: "author", label: "저자: " },
    { value: translator, className: "translator", label: "옮긴이: " },
    { value: publisher, className: "publisher", label: "발행처: " },
    { value: publishDate, className: "publish-date", label: "발행일: " },
    { value: barcode, className: "barcode", label: "청구기호: " },
    { value: isbn, className: "isbn", label: "ISBN: " },
    { value: libraryName, className: "library-name", label: "도서관: " },
  ];

  let color = "";

  switch (bookStatus) {
    case "대여가능":
      color = "slateblue";
      break;
    case "창고보관":
      color = "gray";
      break;
    default:
      color = "red";
  }

  useEffect(() => {
    if (category === "철학") {
      setNum("(100)");
    } else if (category === "종교") {
      setNum("(200)");
    } else if (category === "사회과학") {
      setNum("(300)");
    } else if (category === "순수과학") {
      setNum("(400)");
    } else if (category === "기술과학") {
      setNum("(500)");
    } else if (category === "예술") {
      setNum("(600)");
    } else if (category === "언어") {
      setNum("(700)");
    } else if (category === "문학") {
      setNum("(800)");
    } else if (category === "역사") {
      setNum("(900)");
    } else {
      setNum(num);
    }
  }, []);

  const navigate = useNavigate();

  const handlePath = (e) => {
    navigate(`/books/detail/${id}`, {
      state: { id: id },
    });
  };

  return (
    <div id="booksListItem">
      <div className="list-item" onClick={handlePath}>
        <div className="image-area">
          <img src={thumbNailImage} alt="" className="image" />
        </div>
        <div className="list">
          <div className="book-tag">
            <span className="type">{bookType}</span>
            <span className="genre">{genre}</span>
            <span className="category">{category}</span>
          </div>
          {BookListItemArray.map((blia) => (
            <div key={blia.className} className="items">
              <label className={blia.className}>
                {blia.label}
                <span>{blia.value}</span>
              </label>
            </div>
          ))}
          <div className="status">
            <label className="book-status" style={{ color: color }}>
              {bookStatus}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BooksListItem;
