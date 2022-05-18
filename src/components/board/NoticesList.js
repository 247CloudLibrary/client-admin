import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import NoticesListItem from "./NoticesListItem";
import Header from "../common/Header";

const NoticesList = () => {
  const [noticesData, setNoticesData] = useState([]);

  const json = JSON.parse(localStorage.getItem("user"));
  const token = json.headers.token;

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  useEffect(() => {
    axios
      .get("/v1/boards", {
        headers: headers,
      })
      .then((response) => {
        const boardArr = response.data.data;

        const filtedByLibraryName =
          boardArr.libraryName !== ""
            ? boardArr.filter((i) => i.libraryName === "")
            : boardArr;
        const filtedByNoticesData =
          filtedByLibraryName.type !== "공지사항"
            ? filtedByLibraryName.filter((i) => i.type === "공지사항")
            : filtedByLibraryName;
        setNoticesData(filtedByNoticesData);
      });
  }, []);

  const BoardListArray = [
    { listName: "번호", className: "id" },
    { listName: "제목", className: "title" },
    { listName: "작성자", className: "name" },
    { listName: "작성일", className: "writedate" },
    // { listName: "수정일", className: "editdate" },
    { listName: "조회수", className: "readcount" },
  ];
  return (
    <div id="board-superadmin">
      <Header />
      <h1 className="content">통합 공지사항</h1>
      <div className="write">
        <Link to="/boards/write" style={{ textDecoration: "none", width: "0" }}>
          <button className="write-btn">게시글 등록</button>
        </Link>
      </div>
      <table className="list">
        <thead>
          <tr className="list-title">
            {BoardListArray.map((la) => (
              <th className={la.className} key={la.listName}>
                {la.listName}
              </th>
            ))}
          </tr>
        </thead>
      </table>
      <div className="item-area">
        <div className="item-box">
          {noticesData &&
            noticesData.map((data) => (
              <div className="listitem-box" key={data.id}>
                <NoticesListItem
                  id={data.id}
                  title={data.title}
                  adminName={data.adminName}
                  createdAt={data.createdAt}
                  readCounts={data.readCounts}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default NoticesList;
