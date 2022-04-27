import HTMLReactParser from "html-react-parser";
import { useNavigate } from "react-router-dom";

const BoardInfo = ({ infoData }) => {
  const navigate = useNavigate();

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
  console.log(infoData);
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
};

export default BoardInfo;
