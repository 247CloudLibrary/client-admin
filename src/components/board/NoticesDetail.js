import axios from "axios";
import HTMLReactParser from "html-react-parser";
import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Header from "../common/Header";

const NoticesDetail = () => {
  const [noticeDetail, setNoticeDetail] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  const id = location.state.id;

  const json = JSON.parse(localStorage.getItem("user"));
  const token = json.headers.token;

  const headers = { Authorization: `Bearer ${token}` };

  useEffect(() => {
    axios
      .get(`/v1/boards/${id}`, {
        headers: headers,
      })
      .then(function (detail) {
        setNoticeDetail(detail.data.data);
      });
  }, []);

  const toNoticesEdit = () => {
    navigate(`/boards/edit/${id}`, {
      state: {
        id: id,
        defaultTitle: noticeDetail.title,
        defaultType: noticeDetail.type,
        defaultContents: noticeDetail.contents,
      },
    });
  };

  return (
    <div id="notices-detail">
      <Header />
      <div className="detail-area">
        <div className="detail-form">
          <div className="title-area">
            <div className="board-title">{noticeDetail.title}</div>
          </div>
          <div className="info-area">
            <div className="board-writer">{noticeDetail.adminName}</div>
            <div className="board-created">{noticeDetail.createdAt}</div>
            <div className="board-readcounts">
              조회수 {noticeDetail.readCounts}
            </div>
            <div className="board-library">{noticeDetail.libraryName}</div>
          </div>
          <div className="contents-area">
            <div className="board-contents">
              {HTMLReactParser(`${noticeDetail.contents}`)}
            </div>
          </div>
          <div className="return">
            <Link to="/notices">
              <button className="return-btn">목록으로</button>
            </Link>
            <button className="edit-btn" onClick={toNoticesEdit}>
              수정하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticesDetail;
