import axios from "axios";
import HTMLReactParser from "html-react-parser";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../common/Header";

const GuideForm = () => {
  const [guideData, setGuideData] = useState([]);
  const navigate = useNavigate();

  const guide = guideData[0] ? guideData[0] : undefined;

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
      .then((guide) => {
        const boardArr = guide.data.data;

        const filtedByLibraryName =
          boardArr.libraryName !== ""
            ? boardArr.filter((i) => i.libraryName === "")
            : boardArr;

        const filtedByGuideData =
          boardArr.type !== "안내사항"
            ? filtedByLibraryName.filter((i) => i.type === "안내사항")
            : filtedByLibraryName;
        setGuideData(filtedByGuideData);
      });
  }, []);

  const toGuideEdit = () => {
    navigate(`/boards/edit/${guideData.id}`, {
      state: {
        id: guideData.id,
        defaultTitle: guideData.title,
        defaultType: guideData.type,
        defaultContents: guideData.contents,
      },
    });
  };
  if (guide !== undefined) {
    return (
      <div id="guide-form">
        <Header />
        <div className="board-guide">이용안내</div>
        <div className="text-form">
          <div className="title-form">{guide.title}</div>
          <div className="contents-form">
            {HTMLReactParser(`${guide.contents}`)}
          </div>
        </div>
        <div className="edit-btn">
          <button className="edit" onClick={toGuideEdit}>
            수정
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div id="guide-form">
        <Header />
        <div className="board-guide">이용안내</div>
        <div style={{ fontSize: "1.5rem", marginTop: "3rem" }}>
          등록된 내용이 없습니다.
        </div>
      </div>
    );
  }
};
export default GuideForm;
