import { Link } from "react-router-dom";
import BooksListItem from "./BooksListItem";
import { useEffect, useState } from "react";
import axios from "axios";
import BookSearchFilter from "./BookSearchFilter";
import Header from "../common/Header";

const BooksList = () => {
  const [bookList, setBookList] = useState([]);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState("");

  const json = JSON.parse(localStorage.getItem("user"));
  const storage = json.data;
  const token = json.headers.token;

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const libraryName = storage.libraryName;

  const getBooks = async () => {
    const response = await axios
      .get("/v1/books", { headers: headers })
      .then((response) => {
        const responseArr = response.data.data;

        const filtedByLibraryName =
          responseArr.libraryName !== libraryName
            ? responseArr.filter((i) => i.libraryName === libraryName)
            : responseArr;

        const filtedByText = text
          ? filtedByLibraryName.filter((i) => i.title.includes(text))
          : filtedByLibraryName;

        setBookList(filtedByText);
        setLoading(false);
      });
    console.log(response);
  };

  const books = async (token) => {
    const json = await (
      await fetch("/v1/books", {
        headers: { Authorization: `Bearer ` + token },
      })
    ).json();
    const responseArr = json.data;
    filtedByLibraryName(responseArr);
    setLoading(false);
  };

  const filtedByLibraryName = (responseArr) => {
    if (responseArr.libraryName !== libraryName) {
      setBookList(responseArr.filter((i) => i.libraryName === libraryName));
      console.log(value);
    } else {
      return;
    }
  };

  useEffect(() => {}, [text]);

  useEffect(() => {
    books(token);
  }, []);

  const onchange = (e) => {
    setText(e.target.value);
  };
  return (
    <div id="BookList">
      <Header />
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
        {loading ? (
          <div>Loading</div>
        ) : (
          bookList &&
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
          ))
        )}
      </div>
    </div>
  );
};

export default BooksList;
