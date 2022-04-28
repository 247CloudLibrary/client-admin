import axios from "axios";
import HTMLReactParser from "html-react-parser";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const BoardInfo = ({ id, title, contents, type }) => {
  const navigate = useNavigate();
  // const [info, setInfo] = useState([]);

  const infoArray = [{ key: id, title: title, contents: contents }];

  const toInfoDetail = () => {
    navigate(`/boards/edit/${id}`, {
      state: {
        id: id,
        defaultTitle: title,
        defaultType: type,
        defaultContents: contents,
      },
    });
  };

  return (
    <div id="board-info">
      {infoArray &&
        infoArray.map((ia) => (
          <div className="info-form" key={ia.key}>
            <div className="text-form">
              <div className="title-form">{ia.title}</div>
              <div className="contents-form">
                {HTMLReactParser(`${ia.contents}`)}
              </div>
            </div>
            <div className="edit-btn">
              <button className="edit" onClick={toInfoDetail}>
                수정
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default BoardInfo;
