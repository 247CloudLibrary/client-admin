import { Link } from "react-router-dom";
import BooksListItem from "./BooksListItem";
import { useEffect, useState } from "react";
import axios from "axios";
import BookSearchFilter from "./BookSearchFilter";

const BooksList = () => {
  const [bookList, setBookList] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    axios.get("https://www.cloudlibrary.shop/v1/books").then((response) => {
      const responseArr = response.data.data;

      const filtedByText = text
        ? responseArr.filter((i) => i.title.includes(text))
        : responseArr;

      setBookList(filtedByText);
    });
  }, [text]);

  const onchange = (e) => {
    setText(e.target.value);
  };
  return (
    <div id="BookList">
      <div className="book-list">
        <div className="search">
          <BookSearchFilter text={text} onChange={onchange} />
        </div>
        <div className="btn">
          <Link to="/books/write">
            <button type="button" className="create-btn">
              도서 등록
            </button>
          </Link>
        </div>
      </div>
      {bookList &&
        bookList.map((data) => (
          <div className="BooksList-body" key={data.id}>
            <BooksListItem
              id={data.id}
              thumbNailImage={data.thumbNailImage}
              title={data.title}
              bookType={data.bookType}
              author={data.author}
              translator={data.translator}
              publisher={data.publisher}
              publishDate={data.publishDate}
              barcode={data.barcode}
              isbn={data.isbn}
              genre={data.genre}
              category={data.category}
              libraryName={data.libraryName}
              bookStatus={data.bookStatus}
            />
          </div>
        ))}
    </div>
  );
};

export default BooksList;
