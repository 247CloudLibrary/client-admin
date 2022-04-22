import BoardSidebar from "./BoardSideBar";
import BoardDetailForm from "./BoardDetailForm";
import { useState } from "react";

const BoardDetail = () => {
  const [mode, setMode] = useState("");

  const getMode = (mode) => {
    setMode(mode);
  };
  console.log(mode);
  return (
    <div id="BoardDetail">
      <div className="form-box">
        <div className="sidebar-area">
          <BoardSidebar getMode={getMode} />
        </div>
        <div className="contents-box">
          <BoardDetailForm />
        </div>
      </div>
    </div>
  );
};

export default BoardDetail;
