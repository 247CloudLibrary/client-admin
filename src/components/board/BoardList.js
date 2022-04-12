import { Link } from "react-router-dom";
import BoardSidebar from "./BoardSideBar";
import BoardNoticeListItem from "./BoardNoticeListItem";
import BoardInfoListItem from "./BoardInfoListItem";
import BoardMap from "./BoardMap";
import { useState } from "react";

const BoardList = () => {
  const [content, setContent] = useState("");
  const [showList, setShowList] = useState();
  const [mapList, setMapList] = useState();

  const getText = (content) => {
    setContent(content);
  };

  const getList = (showList) => {
    setShowList(showList);
  };

  const getMap = (mapList) => {
    setMapList(mapList);
  };

  const ListArray = [
    { listName: "번호", className: "id" },
    { listName: "제목", className: "title" },
    { listName: "작성자", className: "name" },
    { listName: "작성일", className: "writedate" },
    // { listName: "수정일", className: "editdate" },
    { listName: "조회수", className: "readcount" },
  ];

  return (
    <main id="board-list">
      <h1 className="content">{content}</h1>

      <div className="write">
        <Link to="/boards/write" style={{ textDecoration: "none", width: "0" }}>
          <button className="write-btn" style={mapList ? { opacity: 0 } : null}>
            게시글 등록
          </button>
        </Link>
      </div>
      <table className="list">
        <thead>
          <tr className="list-title" style={mapList ? { opacity: 0 } : null}>
            {ListArray.map((la) => (
              <th className={la.className} key={la.listName}>
                {la.listName}
              </th>
            ))}
          </tr>
        </thead>
      </table>

      <div className="form-box">
        <div className="sidebar-box">
          <BoardSidebar getText={getText} getList={getList} getMap={getMap} />
        </div>

        {mapList ? (
          <div className="map-box">
            <BoardMap />
          </div>
        ) : (
          <div>
            {showList ? (
              <div className="listitem-box">
                <BoardNoticeListItem />
              </div>
            ) : (
              <div className="listitem-box">
                <BoardInfoListItem />
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
};

export default BoardList;
