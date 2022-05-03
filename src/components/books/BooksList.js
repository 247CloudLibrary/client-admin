import { Link } from "react-router-dom";
import BooksListItem from "./BooksListItem";
import { useEffect, useState } from "react";
import axios from "axios";
import BookSearchFilter from "./BookSearchFilter";

const BooksList = () => {
  const [bookList, setBookList] = useState([]);
  const [text, setText] = useState("");

  const json = JSON.parse(localStorage.getItem("user"));
  const storage = json.data;
  const token = json.headers.token;

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const libraryName = storage.libraryName;

  useEffect(() => {
    axios.get("/v1/books", { headers: headers }).then((response) => {
      const responseArr = response.data.data;

      const filtedByLibraryName =
        responseArr.libraryName !== libraryName
          ? responseArr.filter((i) => i.libraryName === libraryName)
          : responseArr;

      const filtedByText = text
        ? filtedByLibraryName.filter((i) => i.title.includes(text))
        : filtedByLibraryName;

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
      <div className="bookList">
        {bookList &&
          bookList.map((data) => (
            <div className="booksList-body" key={data.id}>
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
    </div>
  );
};

export default BooksList;
