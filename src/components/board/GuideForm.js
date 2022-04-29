import axios from "axios";
import HTMLReactParser from "html-react-parser";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const GuideForm = () => {
  const [guideData, setGuideData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("https://www.cloudlibrary.shop/v1/boards").then((guide) => {
      const boardArr = guide.data.data;

      const filtedByLibraryName =
        boardArr.libraryName !== ""
          ? boardArr.filter((i) => i.libraryName === "")
          : boardArr;

      const filtedByGuideData =
        boardArr.type !== "안내사항"
          ? filtedByLibraryName.filter((i) => i.type === "안내사항")
          : filtedByLibraryName;
      setGuideData(filtedByGuideData[0]);
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
  if (guideData !== undefined) {
    return (
      <div id="guide-form">
        <div className="board-guide">이용안내</div>
        <div className="text-form">
          <div className="title-form">{guideData.title}</div>
          <div className="contents-form">
            {HTMLReactParser(`${guideData.contents}`)}
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
        <div className="board-guide">이용안내</div>
        <div className="text-form">등록된 내용이 없습니다.</div>
      </div>
    );
  }
};
export default GuideForm;
