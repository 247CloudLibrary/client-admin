import HTMLReactParser from "html-react-parser";
import { useNavigate } from "react-router-dom";

const BoardInfo = ({ id, title, contents }) => {
  const navigate = useNavigate();

  const toInfoDetail = () => {
    navigate(`/boards/edit/${id}`, { state: { id: id } });
  };
  return (
    <div id="board-info">
      <div className="info-form">
        <div className="text-form">
          <div className="title-form">{title}</div>
          <div className="contents-form">{HTMLReactParser(`${contents}`)}</div>
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
