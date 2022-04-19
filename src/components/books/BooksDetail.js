import { Link } from "react-router-dom";

const BooksDetail = () => {
  return (
    <>
      <div>도서 상세페이지</div>
      <Link to="/books/edit">
        <button type="button">도서 수정</button>
      </Link>
    </>
  );
};
export default BooksDetail;
