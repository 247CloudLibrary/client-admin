import { Link } from "react-router-dom";

const ThumbnailImage = "썸네일 이미지 ";

const BooksTitle = "도서 제목 ";
export { ThumbnailImage, BooksTitle };

const BooksList = () => {
  return (
    <div id="BooksManagement">
      <div className="BooksList">
        <Link to="/books/write">
          <button type="button">도서 등록</button>
        </Link>
        <Link to="/books/detail">
          <button type="button">도서 상세</button>
        </Link>
      </div>
      <div className="BooksList-body">TODO 도서 리스트..</div>
    </div>
  );
};

export default BooksList;
