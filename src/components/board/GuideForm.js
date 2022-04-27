import axios from "axios";
import HTMLReactParser from "html-react-parser";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const GuideForm = () => {
  const [guideData, setGuideData] = useState([{}]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("https://www.cloudlibrary.shop/v1/boards").then((guide) => {
      const boardArr = guide.data.data;

      const filtedByLibraryName =
        boardArr.libraryName !== ""
          ? boardArr.filter((i) => i.libraryName === "")
          : boardArr;
      const filtedByGuideData =
        filtedByLibraryName.type !== "안내사항"
          ? filtedByLibraryName.filter((i) => i.type === "안내사항")
          : filtedByLibraryName;
      setGuideData(filtedByGuideData);
    });
  }, []);
  const id = guideData[0].id;

  const toGuideEdit = () => {
    navigate(`/boards/edit/${id}`);
  };

  return (
    <div id="guide-form">
      <div className="board-guide">이용안내</div>
      <div className="text-form">
        <div className="title-form">{guideData[0].title}</div>
        <div className="contents-form">
          {HTMLReactParser(`${guideData[0].contents}`)}
        </div>
      </div>
      <div className="edit-btn">
        <button className="edit" onClick={toGuideEdit}>
          수정
        </button>
      </div>
    </div>
  );
};
export default GuideForm;
