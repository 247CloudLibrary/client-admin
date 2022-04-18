const Home = () => {
  return (
    <div>
      <h1>OOO 도서관</h1>
      <Link to={"/boards"}>
        <button>공지사항 관리</button>
      </Link>
      <Link to={"/books"}>
        <button>도서 관리</button>
      </Link>
      <Link to={"/lending"}>
        <button>대출 관리</button>
      </Link>
      <Link to={"/admin"}>
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
    </div>
  );
};

export default Home;
