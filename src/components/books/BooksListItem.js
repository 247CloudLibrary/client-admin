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
  isbn,
  genre,
  libraryName,
  category,
  bookStatus,
  thumbNailImage,
}) => {
  const [num, setNum] = useState("(0)");
  const BookListItemArray = [
    { value: bookType, className: "type", label: "" },
    { value: title, className: "title", label: "" },
    { value: author, className: "author", label: "저자: " },
    { value: translator, className: "translator", label: "역자: " },
    { value: publisher, className: "publisher", label: "발행처: " },
    { value: publishDate, className: "publish-date", label: "발행일: " },
    { value: isbn, className: "isbn", label: "ISBN: " },
    { value: genre, className: "genre", label: "장르: " },
    { value: `${category}${num}`, className: "category", label: "카테고리: " },
    { value: libraryName, className: "library-name", label: "도서관: " },
    { value: bookStatus, className: "book-status", label: "" },
  ];
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
          {BookListItemArray.map((blia) => (
            <div key={blia.className} className="items">
              <label>
                {blia.label}
                <span className={blia.className}>{blia.value}</span>
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BooksListItem;
