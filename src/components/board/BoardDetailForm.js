import axios from "axios";
import HTMLReactParser from "html-react-parser";
import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

// const contents =
//   "<p>조회한 게시글의 내용</p><strong>조회한 게시글의 내용</strong>";
// const title = "게시글 제목";
// const adminName = "작성자";
// const LibrariesName = "도서관 이름";
// const createdAt = "2022.22.22";
// const readCounts = "222";

const BoardDetailForm = () => {
  const [noData, setNoData] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  const id = location.state.id;

  useEffect(() => {
    axios
      .get(
        `http://ecs-alb-167470959.us-east-1.elb.amazonaws.com/v1/boards/${id}`
      )
      .then(function (notice) {
        setNoData(notice.data.data);
      });
  }, []);
  console.log(noData);

  const toBoardEdit = () => {
    navigate(`/boards/edit/${id}`, {
      state: {
        id: id,
        defaultTitle: noData.title,
        defaultType: noData.type,
        defaultContents: noData.contents,
      },
    });
  };
  return (
    <div id="BoardDetailForm">
      <div className="detail-form">
        <div className="title-area">
          <div className="board-title">{noData.title}</div>
        </div>
        <div className="info-area">
          <div className="board-writer">{noData.adminName}</div>
          <div className="board-created">{noData.createdAt}</div>
          <div className="board-readcounts">조회수 {noData.readCounts}</div>
          <div className="board-library">{noData.libraryName}</div>
        </div>
        <div className="contents-area">
          <div className="board-contents">
            {HTMLReactParser(`${noData.contents}`)}
          </div>
        </div>

        <div className="return">
          <Link to="/boards/list">
            <button className="return-btn">목록으로</button>
          </Link>
          <button className="edit-btn" onClick={toBoardEdit}>
            수정하기
          </button>
        </div>
      </div>
    </div>
  );
};
export default BoardDetailForm;
