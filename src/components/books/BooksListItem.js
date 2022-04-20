import { Link, useNavigate } from "react-router-dom";

const BooksListItem = ({
  id,
  type,
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
  const BookListItemArray = [
    { value: type, className: "type", label: "" },
    { value: title, className: "title", label: "" },
    { value: author, className: "author", label: "저자: " },
    { value: translator, className: "translator", label: "역자: " },
    { value: publisher, className: "publisher", label: "발행처: " },
    { value: publishDate, className: "publish-date", label: "발행일: " },
    { value: isbn, className: "isbn", label: "ISBN: " },
    { value: genre, className: "genre", label: "장르: " },
    { value: category, className: "category", label: "카테고리: " },
    { value: libraryName, className: "library-name", label: "도서관: " },
    { value: bookStatus, className: "book-status", label: "" },
  ];

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
