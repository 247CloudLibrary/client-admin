import axios from "axios";
import HTMLReactParser from "html-react-parser";
import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const BoardDetailForm = () => {
  const [noData, setNoData] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  const id = location.state.id;
  const json = JSON.parse(localStorage.getItem("user"));
  const token = json.headers.token;

  const headers = { Authorization: `Bearer ${token}` };

  useEffect(() => {
    axios
      .get(`https://www.cloudlibrary.shop/v1/boards/${id}`, {
        headers: headers,
      })
      .then(function (notice) {
        setNoData(notice.data.data);
      });
  }, []);

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
