import { Link } from "react-router-dom";

const BoardsPage = () => {
  return (
    <div>
      <Link to={"/boards/list"}>
        <button>개별 도서관 공지사항 관리</button>
      </Link>
      <Link to={"/notices"}>
        <button>통합 공지사항</button>
      </Link>
      <Link to={"/guide"}>
        <button>통합 이용안내</button>
      </Link>
    </div>
  );
};

export default BoardsPage;
