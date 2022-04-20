import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const BooksDetail = () => {
  const [bookData, setBookData] = useState([]);
  const location = useLocation();
  const id = location.state.id;
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(
        `http://ecs-alb-167470959.us-east-1.elb.amazonaws.com/v1/books/${id}`
      )
      .then(function (response) {
        setBookData(response.data.data);
        console.log(response);
      });
  }, []);

  const BookDetailArray = [
    { value: bookData.author, key: "author", tag: "저자" },
    { value: bookData.translator, key: "translator", tag: "역자" },
    { value: bookData.genre, key: "genre", tag: "장르" },
    { value: bookData.category, key: "category", tag: "카테고리" },
    { value: bookData.isbn, key: "isbn", tag: "ISBN" },
    { value: bookData.publisher, key: "publisher", tag: "출판사" },
    { value: bookData.publishDate, key: "publishDate", tag: "출판일" },
    { value: bookData.libraryName, key: "libraryName", tag: "도서관" },
  ];

  const handleBtn = (e) => {
    navigate(`/books/edit/${id}`, {
      state: {
        id: id,
        thumbNailImage: bookData.thumbNailImage,
        coverImage: bookData.coverImage,
        libraryName: bookData.libraryName,
        title: bookData.title,
        author: bookData.author,
        translator: bookData.translator,
        publisher: bookData.publisher,
        barcode: bookData.barcode,
        isbn: bookData.isbn,
        publishDate: bookData.publishDate,
        type: bookData.type,
        genre: bookData.genre,
        bookStatus: bookData.bookStatus,
        category: bookData.category,
        contents: bookData.contents,
      },
    });
  };

  return (
    <div id="book-detail">
      <div className="head">도서 상세페이지</div>
      <div className="detail-box">
        <div className="title-area">
          <div className="title-box">
            <span className="type">{bookData.type}</span>
            <span className="title">{bookData.title}</span>
          </div>
        </div>
        <div className="info-area">
          <div className="info-box">
            <div className="image-box">
              <img className="coverImage" src={bookData.coverImage} alt="" />
            </div>
            <table className="text-box">
              {BookDetailArray.map((bda) => (
                <thead className="label" key={bda.key}>
                  <tr>
                    <td className="label-tag">{bda.tag}</td>
                    <td className={bda.key}>{bda.value}</td>
                  </tr>
                </thead>
              ))}
            </table>
          </div>
        </div>
        <div className="minititle-box">
          <div className="minititle">상세정보</div>
        </div>
        <div className="contents-area">
          <div className="contents-box">
            <p>{bookData.contents}</p>
          </div>
        </div>
        <div className="btn-box">
          <button type="button" className="btn" onClick={handleBtn}>
            도서 수정
          </button>
        </div>
      </div>
    </div>
  );
};
export default BooksDetail;
