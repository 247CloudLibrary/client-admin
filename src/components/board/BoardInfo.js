import axios from "axios";
import HTMLReactParser from "html-react-parser";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const BoardInfo = (infoDatas) => {
  const navigate = useNavigate();

  const infoData = infoDatas.infoData[0] ? infoDatas.infoData[0] : undefined;

  const toInfoDetail = () => {
    navigate(`/boards/edit/${infoData.id}`, {
      state: {
        id: infoData.id,
        defaultTitle: infoData.title,
        defaultType: infoData.type,
        defaultContents: infoData.contents,
      },
    });
  };

  if (infoData !== undefined) {
    return (
      <div id="board-info">
        <div className="info-form">
          <div className="text-form">
            <div className="title-form">{infoData.title}</div>
            <div className="contents-form">
              {HTMLReactParser(`${infoData.contents}`)}
            </div>
          </div>
          <div className="edit-btn">
            <button className="edit" onClick={toInfoDetail}>
              수정
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div id="board-info">
        <div style={{ fontSize: "1.5rem", marginTop: "3rem" }}>
          등록된 내용이 없습니다.
        </div>
      </div>
    );
  }
};

export default BoardInfo;
