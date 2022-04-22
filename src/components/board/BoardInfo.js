import HTMLReactParser from "html-react-parser";

const title = "제목";
const contents = "<h1>이용안내 입력한 내용들...</h1>";

const BoardInfo = () => {
  return (
    <div id="board-info">
      <div className="info-form">
        <div className="text-form">
          <div className="title-form">{title}</div>
          <div className="contents-form">{HTMLReactParser(contents)}</div>
        </div>
      </div>
    </div>
  );
};

export default BoardInfo;
