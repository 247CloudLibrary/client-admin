import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>도서관 관리자</h1>
      <Link to={"/boards"}>
        <button>공지사항 관리</button>
      </Link>
      <Link to={"/books"}>
        <button>도서 관리</button>
      </Link>
      <Link to={"/lending"}>
        <button>대출 관리</button>
      </Link>
      <Link to={"/profile"}>
        <button>마이 페이지</button>
      </Link>
      <Link to={"/lending/blacklist"}>
        <button>블랙리스트</button>
      </Link>
      <Link to={"/lending/libraries/rules"}>
        <button>이용 규정 관리</button>
      </Link>
      <Link to={"/auth"}>
        <button>회원 조회</button>
      </Link>
      <Link to={"/libraries/list"}>
        <button>도서관 목록</button>
      </Link>
    </div>
  );
};

export default Home;
