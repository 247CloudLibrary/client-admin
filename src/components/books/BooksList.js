import { Link } from "react-router-dom";
import BooksListItem from "./BooksListItem";
import { useEffect, useState } from "react";
import axios from "axios";

const BooksList = () => {
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.cloudlibrary.shop/v1/books")
      .then((response) => setBookList(response.data));
  }, [setBookList]);
  return (
    <div id="BookList">
      <div className="book-list">
        <Link to="/books/write">
          <button type="button" className="create-btn">
            도서 등록
          </button>
        </Link>
      </div>
      {bookList.data &&
        bookList.data.map((data) => (
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
